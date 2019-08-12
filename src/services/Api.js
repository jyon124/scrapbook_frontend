const API_URL = 'http://localhost:3001/'

export default {
    login: (loginData) => {
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        }
        return fetch('http://localhost:3001/api/v1/login', reqObj)
        .then(res => res.json())
    },
    currentUser: (token) => {
        const reqObj = {
            method: 'GET',
            headers: {
                'Authorization': token
            }
        }
        return fetch('http://localhost:3001/api/v1/current_user', reqObj)
        .then(res => res.json())
        .then(data => console.log(data))
    },
    fetchNews: () => {
        let reqObj = {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`
            }
          }
        return fetch(`${API_URL}news`, reqObj)
        .then(resp => resp.json())
    },
    fetchOneNews: (id) => {
        let reqObj = {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`
            }
          }
        return fetch(`${API_URL}news/${id}`, reqObj)
        .then(resp => resp.json())
    }
}