const API_URL = 'http://localhost:3001/';
// const API_URL = 'https://scrapbook-backend.herokuapp.com/';

export default {
    login: (loginData) => {
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        }
        return fetch(`${API_URL}api/v1/login`, reqObj)
        .then(res => res.json())
    },
    profile: () => {
        const reqObj = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("user")}`
            }
        }
        return fetch(`${API_URL}api/v1/profile`, reqObj)
        .then(res => res.json())
    },
    fetchNews: () => {
        let reqObj = {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`
            }
          }
        // return fetch(`${API_URL}news`, reqObj)
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
    },
    handleAddFavorite: (newsId, scrapbookContainerId) => {
        let reqObj = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("user")}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              scrapbooknews: {
                  news_id: newsId,
                  scrapbook_id: scrapbookContainerId
              }
            })
        }
        return fetch(`${API_URL}scrapbooknews`, reqObj)
        .then(resp => resp.json())
    },
    handleAllScrapbooknews: (scrapbookId) => {
        let reqObj = {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`
            }
          }
        return fetch(`${API_URL}scrapbooknews`, reqObj)
        .then(resp => resp.json())
    },
    handleRemoveTile: (tile) => {
        let reqObj = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("user")}`,
                'Content-Type': 'application/json'
            }
        }
        return fetch(`${API_URL}scrapbooknews/${tile.id}`, reqObj)
    },
    handlePostReqNote: (bodyObj) => {
        const reqObj = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("user")}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyObj)
        }
        return fetch(`${API_URL}notes`, reqObj)
        .then(res => res.json())
    },
    handleDeleteNote: (noteId) => {
        const reqObj = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("user")}`,
                'Content-Type': 'application/json'
            }
        }
        return fetch(`${API_URL}notes/${noteId}`, reqObj)
    },
    handlePostReqHighlight: (bodyObj) => {
        const reqObj = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("user")}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyObj)
        }
        return fetch(`${API_URL}highlights`, reqObj)
        .then(res => res.json())
    },
    handleDeleteHighlightReq: (id) => {
        const reqObj = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("user")}`,
                'Content-Type': 'application/json'
            }
        }
        return fetch(`${API_URL}highlights/${id}`, reqObj)
    },
    increaseView: (news) => {
        const reqObj = {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("user")}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                viewCount: news.viewCount + 1
            })
        }
        return fetch(`${API_URL}news/${news.id}`, reqObj)
    }
}
