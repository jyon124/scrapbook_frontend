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
    profile: () => {
        const reqObj = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("user")}`
            }
        }
        return fetch('http://localhost:3001/api/v1/profile', reqObj)
        .then(res => res.json())
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
    },
    findOrCreateScrapBook: (id) => {
        let reqObj = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("user")}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              scrapbook: {
                  user_id: id
              }
            })
        }
        return fetch(`${API_URL}scrapbooks`, reqObj)
        .then(resp => resp.json())
    }
}