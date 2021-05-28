import React from 'react'
import { render } from 'react-dom'
import './style.css'

const Greeting = () => {
    return (
        <div>
            <h1> Greatings Webpacker</h1>
            <div id="image"></div>
        </div>
    )
}

render(
    <Greating />,
    document.getElementById("target")
)
