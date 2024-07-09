import React from "react";
import Sidebar from "./SideBar";
import TopBar from "./TopBar";
import './ContactUs.css';

const ContactUs = () => {
        
    return (
        <div className='contactUsPage'>
            <Sidebar />

            <TopBar data="Contact Us" />

            <div className="d-flex justify-content-center align-items-center vh-100 ">
                <div className='p-4 rounded w-90 mb-5 text-center'>
                    <p>
                        <strong>Contact XMI Bank</strong>
                    </p>
                    <p>
                        We value your feedback and inquiries. <br />Whether you have questions about our services, need assistance with your account, <br />or want to provide suggestions, our dedicated team is here to assist you.
                    </p>
                    <p>
                        <strong>Contact Information:</strong><br />
                        Phone: +1-123-456-7890<br />
                        Email: info@xmibank.com<br />
                        Address: 123 XMI Avenue, City, Country
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default ContactUs