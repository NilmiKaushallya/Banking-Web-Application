import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';
import "./UpdateUser.css";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEdit, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./SideBar";


const UpdateUser = () => {
    const { id } = useParams();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [nic, setNic] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const [updateSuccessful, setUpdateSuccessful] = useState(false);

    useEffect(() => {
        if (updateSuccessful) {
            console.log(updateSuccessful)
            navigate('/users');
        } else {
            axios.get('http://localhost:3000/getUser/'+id)
            .then(result => {
                // console.log(result);
                setFirstName(result.data.firstName);
                setLastName(result.data.lastName);
                setPhone(result.data.phone);
                setEmail(result.data.email);
                setGender(result.data.gender);
                setNic(result.data.nic);
                setPassword(result.data.password);
            })
            .catch(error => console.log(error));
        }
        
    }, [id, updateSuccessful]);

    const handleUpdate = (e) => {
        axios.put('http://127.0.0.1:3000/updateUser/'+id, {firstName, lastName, email, phone, gender, nic, password})
            .then(result => {
                console.log(gender);
                if(result.request.status === 200){
                    // navigate('/fund-transfer');
                    console.log("hello");
                    setUpdateSuccessful(true);
                    alert('Update Successfull');
                    console.log("hii");         
                } else {
                    alert('Update Failed');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='updatePage'>
            <div className='d-flex justify-content-center align-items-center vh-100 update'>

                <Sidebar />

                <div className='p-4 rounded w-90'>
                    <div className="row">
                        <div className="col-6 text-start">
                            <Link to="/" className="btn btn-primary">
                                <FontAwesomeIcon icon={faHome} /> Home
                            </Link>
                        </div>
                        <div className="col-6 text-end">
                            <Link to='/users' className="btn btn-success">
                                <FontAwesomeIcon icon={faUser} /> Users
                            </Link>
                        </div>
                    </div>
                    
                    <br /><br />
                    <h2>Update User</h2>
                    <form onSubmit={handleUpdate} className="row">
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
                                    value={firstName}
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
                                    value={phone}
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

                            {/* <div className='mb-3'>
                                <label htmlFor="password" className='password'>
                                    <strong>Password</strong>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    autoComplete='off'
                                    className='form-control rounded-0'
                                    name='password'
                                    value={password}
                                    onChange={(e) => setPassword(bcrypt.hashSync(e.target.value, 10))}
                                />
                            </div> */}

                            
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
                                    value={lastName}
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
                                    value={email}
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
                                    value={nic}
                                    onChange={(e) => setNic(e.target.value)}
                                />
                            </div>

                            {/* <div className='mb-3'>
                                <label htmlFor="rePassword" className='rePassword'>
                                    <strong>Re-Password</strong>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Re-Enter your password"
                                    autoComplete='off'
                                    className='form-control rounded-0'
                                    name='rePassword'
                                    value={rePassword}
                                    // onChange={(e) => setRePassword(bcrypt.hashSync(e.target.value, 10))}
                                    onChange={(e) => setRePassword(e.target.value)}
                                />
                            </div> */}

                        </div>

                        <button type='submit' className='btn btn-success w-100 rounded-10'>
                            <FontAwesomeIcon icon={faEdit} /> Update
                        </button>

                        {/* 
                        <Link to='//users' type='submit' className='btn btn-success border w-100 rounded-10 text-decoration-none align-items-center'>
                            Update
                        </Link> 
                        */}
                    </form>
                
                </div>
            </div>
        </div>
    );

};

export default UpdateUser;