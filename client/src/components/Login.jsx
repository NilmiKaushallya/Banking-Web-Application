import './Login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { Link } from 'react-router-dom';
import Home from './Home';
import TopBar from './TopBar';
// import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
// import { set } from 'mongoose';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        // console.log('sendEmail'+sendEmail);
        axios.post('http://127.0.0.1:3000/login', { email, password})
        .then(result => {console.log(result)
            if(result.data.status === 'ok'){
                // sendEmail = email;
                const loggedInEmail = email; // Store the email in a variable
                setEmail(loggedInEmail); // Update the email state
                console.log('before'+email)
                // console.log('after set sendEmail'+sendEmail);
                alert('Login Successfull');
                // history.push("/home", { email: email });
                navigate('/', { state: { email: loggedInEmail } });
            } else {
                alert('Login Failed');
                console.log(result);
                console.log(password);
            }
        })
        .catch(err => console.log(err));
    };

    return(
        <div className='loginPage'>
            {/* <h1>Welcome to <br />XMI Bank</h1> */}
            <div className='d-flex justify-content-center align-items-center vh-100 login'>
                <div className='p-3 rounded w-50'>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor="email" className='email'>
                                <strong>Email</strong>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                autoComplete='off'
                                className='form-control rounded-0'
                                name='email'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        
                        <div className='mb-3'>
                            <label htmlFor="password" className='password'>
                                <strong>Password</strong>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                autoComplete='off'
                                className='form-control rounded-0'
                                name='password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button type='submit' className='btn btn-success w-100 rounded-10'>
                            <FontAwesomeIcon icon={faSignInAlt} />  Login
                        </button>
                    </form>

                    <p>Haven't an Account</p>
                    <Link to='/registration' type='submit' className='btn btn-secondary border w-100 bg-brown rounded-10 text-decoration-none'>
                        <FontAwesomeIcon icon={faUserPlus} />  Register
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Login;
