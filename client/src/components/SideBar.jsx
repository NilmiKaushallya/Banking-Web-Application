import React from "react";
import { useState } from "react";
import './SideBar.css';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faSignOut } from "@fortawesome/free-solid-svg-icons";
import Logout from "./Logout";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
  
    const toggleSidebar = () => {
      setCollapsed(!collapsed);
    };
  
    return (
      <nav id="sidebar" className={collapsed ? "active" : ""}>
        <div className="sidebar-header">
          <button
            type="button"
            id="sidebarCollapse"
            onClick={toggleSidebar}
            className="btn btn-info"
          >
            <FontAwesomeIcon icon={collapsed ? faArrowLeft : faArrowRight} />
          </button>

        </div>

        <ul className={`list-unstyled components ${collapsed ? "right-aligned" : ""}`}>
          {collapsed ? (
            <div className="sidebar-links">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/users">Users</a>
                </li>
                <li>
                    <a href="/fund-transfer">Fund Transfer</a>
                </li>
                <li>
                    <a href="/account-balances">Account Balances</a>
                </li>
                <li>
                    <a href="/transaction-history">Transaction History</a>
                </li>
                <li>
                    <a href="/about-us">About Us</a>
                </li>
                <li>
                    <a href="/services">Services</a>
                </li>
                <li>
                    <a href="/contact-us">Contact Us</a>
                </li>

                {/* add logiut button */}
                <li>
                    <Logout />
                </li>
            </div>
            ) : (
            <div>

            </div>)
          }
        </ul>
      </nav>
    );
  };
  
  export default Sidebar;
  