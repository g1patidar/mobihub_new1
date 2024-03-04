import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "../css/Registration.css";

const Registration = () => {
    return (
        <div className="container">
            <div className="image">
                <img src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="abc" />
            </div>
            <div className="form">
                <h2>Registration Form</h2>
                <div className="input-group">
                    <input type="text" id="name" placeholder="Name" required />
                    <input type="text" id="lastname" placeholder="Last Name" required />
                </div>
                <div className="input-group">
                    <input type="email" id="email" placeholder="Email" required />
                    <input type="password" id="password" placeholder="Password" required />
                </div>
                <div className="input-group">
                <input type="text" id="address" placeholder="Address" required />
                </div>
                
                <div className="checkbox">
                    <input type="checkbox" id="keepLoggedIn" />
                    <label htmlFor="keepLoggedIn">Keep me logged in</label>
                </div>
                <button className='btnn' type="button">Register Now</button>
                <div className="already-customer">
                    <p>Already a customer? <Link to="/loginpage">Please Login in</Link> <FaArrowRight /></p>
                </div>
            </div>
        </div>
    );
}

export default Registration;
