import express from 'express'

let app = express()

app.get('/', (req, res) => {
    let html = '<h1>Hello Myles</h1>'

    res.send(html)
})

let PORT = 3000

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
