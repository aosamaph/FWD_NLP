const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

const API_URL = 'https://api.meaningcloud.com/sentiment-2.1'
// const API_Key = process.env.API_KEY
const API_Key = 'fe29625e15134d1d94eb61463a77dc9e'

function AnalyzeArticle(link, lang = 'en') {
    // link = 'https://www.meaningcloud.com/developer/documentation'
    let url = `${API_URL}?key=${API_Key}&url=${link}&lang=${lang}`

    return axios.post(url, {})
}

module.exports = {
    AnalyzeArticle
}
