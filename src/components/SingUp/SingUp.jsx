import React from 'react';
import './SingUp.css'
import { Link } from 'react-router-dom';

const SingUp = () => {

    



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
    </div>
    );
};

export default SingUp;