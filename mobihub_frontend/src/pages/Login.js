import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaUserPlus,FaGoogle } from 'react-icons/fa'; // Import UserPlus icon from react-icons
import "../css/Login.css"; // Import external CSS file

const Login = () => {
    return (
        <>
        <div className='forgap'>
        <div className="container">
            <div className="image">
                <img src="https://images.unsplash.com/photo-1598327105740-820e04db502e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="abc" />
            </div>
            <div className="form">
                <h2>Login Form</h2>

                <div className="input-groupp">
                    <input type="email"  className='hi' id="email" placeholder="Email" required />
                </div>

                <div className="input-groupp">
                    <input type="password" className='hi' id="password" placeholder="Password" required />
                </div>

                <div className="checkbox">
                    <input type="checkbox" id="keepLoggedIn" />
                    <label htmlFor="keepLoggedIn">Keep me logged in</label>
                </div>
                <button type="button" className="button">Login Now</button>

                <div className="or-section">
                    <span className="line"></span>
                    <span className="or">Or</span>
                    <span className="line"></span>
                </div>

                <div className="google-login">
                    <button type="button" className="google-login-btn">
                        <FaGoogle className="google-icon" />
                        Login with Google
                    </button>
                </div>

                <div className="register-now">
                    <p>New to our mobile shop? <Link to="/registration">Please register now!! <FaUserPlus /></Link></p>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Login;
