import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
// import './Logout.css';


const Logout = () => {
    
    return (
        <div className='logoutPage'>
            <Link to="/login" className="btn btn-danger">
                    <FontAwesomeIcon icon={faSignOut} /> Logout
            </Link>
            
        </div>
    );
};

export default Logout;