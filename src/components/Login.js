import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
		const [status, setStatus] = useState('');
		const [loading, setLoading] = useState(false);
		const emailRef = useRef();
		const passwordRef = useRef();
		const { login } = useAuth();

    const handleSubmit = async (e) => {
			e.preventDefault();
			try {
				setStatus('');
				setLoading(true);
				await login(emailRef.current.value, passwordRef.current.value)
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
            <form action="">
                <label htmlFor="email">Email Address</label>
                <input type="email" ref={emailRef} />
                <label htmlFor="password">Password</label>
                <input type="password" ref={passwordRef} />
                <button>Sign In</button>
            </form>
            <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
    )
}
