import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from '@mui/material/Button';

export default function Login() {
	const [status, setStatus] = useState('');
	const [loading, setLoading] = useState(false);
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login } = useAuth();
	const navigate = useNavigate();


	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setStatus('');
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value)
			navigate('/');
		} catch (e) {
			setStatus('Incorrect email or password');
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
				<Button variant="contained" disabled={loading} type='submit'>Log In</Button>
			</form>
			<p>Don't have an account? <Link to="/signup">Sign up</Link></p>
			<Link to="/">Go back</Link>
		</div>
	)
}
