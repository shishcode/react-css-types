import React from 'react'
import './MainContent.css'

export default function MainContent() {
    const myListStyle = {
        backgroundColor: "purple",
        fontFamily: "Arial",
        fontWeight:"700"
    }
    return (
        <div className='main'>
            <h1>Fun facts about React</h1>
            <ul>
                <li style={myListStyle}>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <ul className="">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}