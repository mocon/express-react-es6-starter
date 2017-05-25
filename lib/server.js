import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from './components/App'

let app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    let html = ReactDOMServer.renderToString(<App />)

    res.send(html)
})

let PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})
