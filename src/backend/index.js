const meaningCloud = require('./meaningCloud')
const express = require('express')
var cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

// app.options('*', cors())

app.use(express.static('dist'))

app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
})

app.post('/analyse', async function (req, res) {
    meaningCloud.AnalyzeArticle(req.query.articleLink)
        .then((MCResponse) => {
            let result = {
                text: MCResponse.data.sentence_list[0].text,
                score_tag: MCResponse.data.score_tag,
                agreement: MCResponse.data.agreement,
                subjectivity: MCResponse.data.subjectivity,
                confidence: MCResponse.data.confidence,
                irony: MCResponse.data.irony
            }
            res.send(result)
        },
            (error) => {
                res.send(error)
            })
})

app.get('/test', async (req, res) => {
    res.json({ message: 'pass!' })
})

module.exports = { app }
