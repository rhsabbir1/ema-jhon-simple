import React, { useContext, useState } from 'react';
import './SingUp.css'
import { Link } from 'react-router-dom';
import { AuthContex } from '../Provider/AuthProvider';

const SingUp = () => {
    const [error , setError] = useState('')
    const {creatUser} = useContext(AuthContex)

    const handleSingUp = (event)=>{
        event.preventDefault();
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if(password !== confirm){
            setError('Password did not match')
            return;
        }
        else if(password.length < 6){
            setError('Password must be 6 characters or longer')
        }
        creatUser(email , password)
        .then(result =>{
            const logedUser = result.user;
            console.log(logedUser)
        })
        .catch(error =>{
            console.log(error)
            setError(error.message)
        })
        form.reset()
    }

    return (
        <div className='form-container'>
        <h2 className='form-title'>Sing up</h2>
        <form onSubmit={handleSingUp}>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" required />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type='password'  name="password" id="" required />
            </div>
            <div className="form-control">
                <label htmlFor="confirm">Confirm Password</label>
                <input  type='password' name="confirm" id="confirm" required />
            </div>
            <input className='btn-submit' type="submit" value="Sing Up" />
        </form>
        <p><small>Already have an account?? <Link to="/login">Login</Link></small></p>
        <p className='error-text'>{error}</p>
    </div>
    );
};

export default SingUp;