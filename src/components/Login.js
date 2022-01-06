import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from '@mui/material/Button';

export default function Login() {
	const [status, setStatus] = useState('');
	const [loading, setLoading] = useState(false);
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login, currentUser } = useAuth();

    const handleSubmit = async (e) => {
			e.preventDefault();
			try {
				setStatus('');
				setLoading(true);
				await login(emailRef.current.value, passwordRef.current.value)
			} catch (e) {
				console.log(e.message);
					switch(e.message){
							case "Firebase: Error (auth/email-already-in-use).":
								setStatus('Email is already registered');
								break;
							default:
								setStatus('Failed to log in');
								break;
						}
					setLoading(false);
			}
	}

    return (
        <div>
            <h2>Log In</h2>
				{status && <div className='error-message'>{status}</div>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input type="email" ref={emailRef} />
                <label htmlFor="password">Password</label>
                <input type="password" ref={passwordRef} />
                <Button disabled={loading} type='submit'>Log In</Button>
            </form>
            <p>{currentUser ? currentUser.email : ""}</p>
						<p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
    )
}
