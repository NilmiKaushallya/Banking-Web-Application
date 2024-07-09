// import React from "react";
// import Sidebar from "./SideBar";
// import TopBar from "./TopBar";
// import './Services.css';

// const Services = () => {
        
//     return (
//         <div className='servicesPage'>
//             <Sidebar />

//             <TopBar data="Services" />

//             <div className="d-flex justify-content-center align-items-center vh-100 ">
                
//             </div>
//         </div>
//     );
// };


import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./SideBar";
import TopBar from "./TopBar";
import './Services.css';
import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.jpg';
import service3 from '../assets/service3.jpg';


const Services = () => {
  return (

    <div className='servicesPage'>
        <Sidebar />

        <TopBar data="Services" />

        <div className="d-flex justify-content-center align-items-center vh-100 ">
            <Container className="d-flex justify-content-center align-items-center">
            <div className='p-4 rounded w-90 mb-5 text-center'>
                <Row>
                    <Col md={4}>
                    <Card>
                        <Card.Img
                        variant="top"
                        src={service1}
                        alt="Service 1"
                        />
                        <Card.Body>
                        <Card.Title>Personal Banking Services</Card.Title>
                        <Card.Text>
                            Customers can access their accounts through online 
                            banking, mobile apps, and ATMs, making it convenient
                            to manage their finances from anywhere.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={4}>
                    <Card>
                        <Card.Img
                        variant="top"
                        src={service2}
                        alt="Service 2"
                        />
                        <Card.Body>
                        <Card.Title>Commercial Banking Solutions</Card.Title>
                        <Card.Text>
                            The bank collaborates with businesses to help them grow, 
                            offering expertise in business finance, investment, and 
                            access to capital for expansion
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={4}>
                    <Card>
                        <Card.Img
                        variant="top"
                        src={service3}
                        alt="Service 3"
                        />
                        <Card.Body>
                        <Card.Title>Investment and Management</Card.Title>
                        <Card.Text>
                            Experienced financial advisors work with clients to 
                            develop customized investment strategies, ensuring their 
                            financial goals are met
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    </div>
    
  );
};

export default Services;
