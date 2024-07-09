import './AccountBalances.css';
import React, { useState } from 'react';
import logo from '../assets/logo.png';
import Sidebar from "./SideBar";
import TopBar from "./TopBar";


const AccountBalances = () => {
    //create function to see Account Balances
    return(
        <div className='accountBalancesPage'>
            <Sidebar />

            <TopBar data="Account Balances" />

            <div className="d-flex justify-content-center align-items-center vh-100 ">
                
            </div>

                {/* <h1>Fund Transfer</h1> */}
        </div>
    )

};

export default AccountBalances;

