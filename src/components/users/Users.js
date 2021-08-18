import './users.css'
import {useEffect, useState} from "react";
import {getPostsOfUser, getUsers} from "../../services/user.fetch.services";
import User from "../user/User";


export default function Users() {

    let [users, setUsers] = useState([])
    let [user, setUser] = useState(null)
    useEffect(() => {

        getUsers().then(value => setUsers([...value]))
    }, [])

    const choseUser = (u) => {
        setUser({...u})
        getPostsOfUser(u.id).then(value => console.log(value))
    }

    return (
        <div className={'wrap'}>
            <div className={'users-box'}>
                {
                    users.map(value => <User key={value.id}
                                             item={value}
                                             choseUser={choseUser}
                    />)
                }
            </div>
            {user &&
            <div className={'chosen-one'}>
                {JSON.stringify(user)}
            </div>
            }
        </div>
    );
}