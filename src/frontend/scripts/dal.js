const axios = require('axios').default;

function AnalyzeArticle(articleLink) {

    return axios.post(`http://localhost:3002/analyse?articleLink=${articleLink}`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ articleLink })
    })
}

export { AnalyzeArticle }
