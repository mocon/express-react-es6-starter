import React, { Component } from 'react'

export default class App extends Component {
    toggle = () => {
        console.log('Toggle clicked')
    }

    render() {
        return (
            <html>
                <head>
                    <title>Server-side rendering with React</title>
                    <link rel='stylesheet' href='./style.css' />
                </head>
                <body>
                    <h1>Hello, World!</h1>
                    <p>Sample paragraph</p>
                    <button onClick={this.toggle}>Toggle</button>
                </body>
            </html>
        )
    }
}
