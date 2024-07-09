import './TransactionHistory.css';
import React, { useState } from 'react';
import logo from '../assets/logo.png';
import Sidebar from "./SideBar";
import TopBar from "./TopBar";

const TransactionHistory = () => {
    //create function to see transaction History
    return(
        <div className='transactionHistoryPage'>
            <Sidebar />

            <TopBar data="Transaction History" />

            <div className="d-flex justify-content-center align-items-center vh-100 ">
            </div>

                {/* <h1>Fund Transfer</h1> */}
        </div>
    )

};

export default TransactionHistory;

