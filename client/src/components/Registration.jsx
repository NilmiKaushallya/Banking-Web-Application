import './Registration.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Registration = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('male');
    const [nic, setNic] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        bcrypt.compare(rePassword, password, (err, result) => {
            if (err) {
                // Handle the error
                alert('Error');
            } else if (result) {
                // Passwords match
                console.log('Passwords match');
                axios.post('http://127.0.0.1:3000/registration', {firstName, lastName, phone, email, gender, nic, password})
                    .then(result => {
                        console.log(result)
                        if(result.request.status === 200){
                            alert('Registration Successfull');
                            navigate('/login');
                        } else {
                            alert('Registration Failed');
                        }
                    })
                    .catch(err => console.log(err));
            } else {
                // Passwords do not match
                console.log('Passwords do not match');
                alert('Passwords do not match');
            }
        });    
    };

    return (
        <div className='registrationPage'>
            
            <div className='d-flex ml-100 justify-content-center align-items-center vh-100 register'>
                <div className='p-4 rounded w-90'>
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit} className="row">
                        {/* Left Column */}
                        <div className="col-md-6">
                            <div className='mb-3'>
                                <label htmlFor="fname" className='fname'>
                                    <strong>First Name</strong>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your first name "
                                    autoComplete='off'
                                    className='form-control rounded-0'
                                    name='fname'
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="phone" className='phone'>
                                    <strong>Phone</strong>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your phone"
                                    autoComplete='off'
                                    className='form-control rounded-0'
                                    name='phone'
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="gender" className='gender'>
                                    <strong>Gender</strong>
                                </label>
                                <select
                                    className='form-select rounded-0'
                                    name='gender'
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
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
                                    onChange={(e) => setPassword(bcrypt.hashSync(e.target.value, 10))}
                                />
                            </div>

                            
                        </div>

                        {/* Right Column */}
                        <div className="col-md-6">
                            <div className='mb-3'>
                                <label htmlFor="lastName" className='lastName'>
                                    <strong>Last Name</strong>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your last name"
                                    autoComplete='off'
                                    className='form-control rounded-0'
                                    name='lastName'
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>

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
                                <label htmlFor="nic" className='nic'>
                                    <strong>NIC</strong>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your NIC"
                                    autoComplete='off'
                                    className='form-control rounded-0'
                                    name='nic'
                                    onChange={(e) => setNic(e.target.value)}
                                />
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="rePassword" className='rePassword'>
                                    <strong>Re-Password</strong>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Re-Enter your password"
                                    autoComplete='off'
                                    className='form-control rounded-0'
                                    name='rePassword'
                                    // onChange={(e) => setRePassword(bcrypt.hashSync(e.target.value, 10))}
                                    onChange={(e) => setRePassword(e.target.value)}
                                />
                            </div>

                        </div>

                        <button type='submit' className='btn btn-success w-100 rounded-10'>
                            <FontAwesomeIcon icon={faUserPlus} />  Register
                        </button>
                    </form>

                        <p>Already have an Account</p>
                        <Link to='/login' type='submit' className='btn btn-secondary border w-100 rounded-10 text-decoration-none align-items-center'>
                            <FontAwesomeIcon icon={faSignInAlt} />  Login
                        </Link>
                    

                </div>
            </div>
        </div>
    );
};

export default Registration;
