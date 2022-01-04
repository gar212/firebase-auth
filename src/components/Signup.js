import React, {useState, useRef} from 'react'
import { useAuth } from '../contexts/AuthContext';
import Button from '@mui/material/Button';

export default function Signup() {
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
		const passwordConfRef = useRef();
    const { signup } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
				if (passwordConfRef.current.value !== passwordRef.current.value) {
					return setStatus('Your passwords do not match');
				}
        try {
					setStatus('');
					setLoading(true);
					await signup(emailRef.current.value, passwordRef.current.value)
        } catch (e) {
            switch(e.message){
                case "Firebase: Error (auth/email-already-in-use).":
									setStatus('Email is already registered');
									break;
                default:
                	setStatus('Failed to sign up');
                  break;
              }
						setLoading(false);
        }
    }
    
    return (
        <div>
            <h2>Sign up</h2>
						{status && <div className='error-message'>{status}</div>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input type="email" ref={emailRef} />
                <label htmlFor="password">Password</label>
                <input type="password" ref={passwordRef} />
                <label htmlFor="password">Password Confirmation</label>
                <input type="password" ref={passwordConfRef} />
                <Button disabled={loading} type='submit'>Sign up</Button>
            </form>
        </div>
    )
}
