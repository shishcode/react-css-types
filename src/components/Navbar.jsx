import React from 'react'
import reactLogo from '../assets/react.svg'
import './Navbar.css'

export default function NavBar() {
    return (
        <nav className="navigation">
            <div className="logo-items">
                <img style={{backgroundColor:"gray"}} src={reactLogo} alt="this is an alt message" />
                {/* inline css örneği  */}
                <h3 style={{fontSize:'60px', color:'white'}} >React Facts</h3>
            </div>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}