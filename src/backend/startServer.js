const { app } = require('./index')

const port = process.env.PORT || 3002;

app.listen(port, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${port}!`)
})
