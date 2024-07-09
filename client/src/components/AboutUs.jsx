import React from "react";
import Sidebar from "./SideBar";
import TopBar from "./TopBar"; 
import './AboutUs.css';

const AboutUs = () => {
    
    return(
        <div className='aboutUsPage'>
            <Sidebar />

            <TopBar data="About Us" />

            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className='p-4 rounded w-90 mb-5 text-center'>
                    <p>
                        Welcome to XMI Bank, your trusted international banking partner. At XMI Bank, <br />we have a rich history of providing top-notch financial services to our <br />valued customers around the globe. 
                        With over a century of experience, we have built a <br />strong reputation for delivering secure, innovative, and client-focused banking solutions. <br />Our commitment to excellence has made us a leader in the financial industry.
                    
                    </p>

                    <p>
                        Our dedicated team of professionals works tirelessly to meet the unique financial needs <br />of individuals, businesses, and organizations. We offer a wide range of services, from <br />personal banking to corporate finance, investment, and more.
                    </p>

                    <p>
                        At XMI Bank, we believe in the power of partnerships. We partner with you to make <br />your financial dreams a reality. Whether it's helping you secure your future, grow <br />your wealth, or manage your assets, we are here to support you every step of the way.
                    </p>

                    <p>
                        Join us in shaping a brighter financial future. Experience the difference with XMI Bank. <br />We look forward to serving you with excellence, integrity, and innovation.
                    </p>
                </div>
            </div>

                {/* <h1>Fund Transfer</h1> */}
        </div>
    )

};

export default AboutUs;