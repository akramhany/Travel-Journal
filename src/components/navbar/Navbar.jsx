import React from "react"
import earth_logo from "./Fill 213.png"

export default function Navbar() {
    return (
        <div  className="navbar">
            <img src={earth_logo} className="navbar--logo" />
            <h2  className="navbar--header">My Travel Journal</h2>
        </div>
    )
}