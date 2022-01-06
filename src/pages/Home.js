import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';
import Button from '@mui/material/Button';


export default function Home() {

    const { currentUser, logout } = useAuth();

    const handleLogout = async () => {
        await logout();
    }

    return (
        <div>
            <h1>Homepage</h1>
            {currentUser ? 
            <div>
                <p>{currentUser.email}</p> 
                <Button onClick={handleLogout}>Log Out</Button>
            </div> :
            <Link to="/login">Login</Link>
            }

        </div>
    )
}
