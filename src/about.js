import React from 'react'
import { render } from 'react-dom'

const About = () => {
    return (
        <div>
            <h1>About Webpacker</h1>
        </div>
    )
}

render(
    <About />,
    document.getElementById("target")
)
