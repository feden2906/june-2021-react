const getUsers = () => {
    return fetch( 'https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
}


const getPostsOfUser = (id) =>{
    return fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
        .then(value => value.json())
}

export {getUsers, getPostsOfUser}