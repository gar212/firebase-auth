import React from 'react'
import { Link, Router } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1>Homepage</h1>
            <Link to="/login">Login</Link>
        </div>
    )
}
