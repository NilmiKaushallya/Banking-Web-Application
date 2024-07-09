import './FundTransfer.css';
import './Users.css'
import React, { useState } from 'react';
import logo from '../assets/logo.png';
import Sidebar from "./SideBar";
import TopBar from "./TopBar";

const FundTransfer = () => {
    //create function to see Fund Transfer
    return(
        <div className='fundTransferPage'>
            <Sidebar />

            <TopBar data="Fund Transfer" />

            <div className="d-flex justify-content-center align-items-center vh-100 ">
            </div>

                {/* <h1>Fund Transfer</h1> */}
        </div>
    )

};

export default FundTransfer;

