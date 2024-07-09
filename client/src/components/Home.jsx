import { React, useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from "./SideBar";
import "./Home.css";
import { Link, useParams, useLocation  } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHome } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/logo.png';
import TopBar from "./TopBar";

const Home = () => {

    return (
        <div className='homePage'>

            <Sidebar />

            <TopBar />

            <div className='d-flex justify-content-center align-items-center vh-100'>
                <div className='p-4 rounded w-90 home'>
                    <div className="col">
                        <div className="row-4 text-center p-2">
                            <h1>Welcome to XMI Bank</h1>
                            <h5>Empowering Financial Wellness, Expert Guidance, Enriching Lives.</h5>
                        </div>
                    </div>
                    <div className="row-4">
                        <div className="col text-center ml-2 align-items-center">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>
    );
};

export default Home;