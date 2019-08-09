export default {
    login: (loginData) => {
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        }
        return fetch('http://localhost:3001/api/v1/auth', reqObj)
        .then(res => res.json())
    },
    currentUser: (token) => {
        const reqObj = {
            headers: {
                'Authorization': token
            }
        }
        return fetch('http://localhost:3001/api/v1/current_user', reqObj)
        .then(res => res.json())
    }
}