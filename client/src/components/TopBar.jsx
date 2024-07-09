import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/logo.png'; 
import axios from 'axios';
import { useEffect, useState } from "react";
import './TopBar.css'

const TopBar = (props) => {

    const email = 'nilmilakshani@gmail.com';
    //password - nilmi@
    // let email = props.email;
    // console.log(email);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:3000/getUserByEmail/${email}`)
            .then(result => {
                setFirstName(result.data.firstName);
                setLastName(result.data.lastName);
            })
            .catch(error => console.log(error));
    }, [email]);

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-between w-100 p-0">
                <div className="navbar-brand">
                    <img src={logo} alt="Logo" />
                </div>
                <h4>{props.data}</h4>
                <div className="navbar-nav">
                    <li className="nav-item ml-4">
                    <Link to="/registration" className="nav-link">
                        <strong>Hello, {firstName + " " + lastName + " "}</strong>
                        <button className="btn btn-success">
                            <FontAwesomeIcon icon={faUser} />
                        </button>
                    </Link>
                    </li>
                </div>
                </div>
            </div>
        </nav>
    );
};

export default TopBar;
