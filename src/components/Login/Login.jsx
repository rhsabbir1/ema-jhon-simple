import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { AuthContex } from '../Provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')
    const { logIn } = useContext(AuthContex);

    const handleSingIn = (event) => {
        event.preventDefault();

        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        logIn(email, password)
            .then(result => {
                const loggUser = result.user;
                console.log(loggUser)
            })
            .catch(error => {
                    setError(error.message)
            })
            form.reset()
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSingIn}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-john? <Link to="/singUp">Create New Account</Link></small></p>
            <p className='error-text'>{error}</p>
        </div>
    );
};

export default Login;