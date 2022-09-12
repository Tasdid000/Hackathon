import React from "react";
import { Col, Row } from "reactstrap";
function Footer() {
    return (
        <div style={{backgroundColor:"black", height:"200px"}}>
            <Row>
                <Col md="4" style={{marginTop:"5%"}}>
                    <h1 style={{color:"white"}}>
                        Bus Kothay
                    </h1>
                    <p style={{color:"white", }}>
                        University Bus Transport
                    </p>
                </Col>
                <Col style={{marginTop:"2%", fontSize:"20px"}}>
                <p style={{color:"white"}}>
                    Contact Us
                </p>
                <p style={{fontSize:"18px", color:"white"}} >
                    Phone: 01709882474<br/>
                    Email: t@gmail.com
                </p>
                </Col>
            </Row>
        </div>
    )
}
export default Footer;