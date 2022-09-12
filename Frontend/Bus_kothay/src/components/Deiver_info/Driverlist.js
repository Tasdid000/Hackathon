import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';



const Driverlist = props => {
    return (
        <div style={{ backgroundColor: "transparent", marginRight:"10%" }}>
            <Card style={{
                width: "100%", elevation: "10px", marginTop: "5%", boxSizing: "border-box",
                marginLeft: "7%", borderRadius: "25px", fontFamily: "Open Sans,sans-serif",
                boxShadow: "0 0 10px 5px rgba(57,125,192,0.09)", border: "none", marginBottom: "5px",
            }}>
                <CardBody style={{ textAlign: "left" }}>
                    <CardText style={{ backgroundColor: "transparent" }}>
                        <span>Code Name: Bus-{props.Driver.Bus}</span>
                    </CardText>
                    <CardText>Full Name: {props.Driver.full_name}</CardText>
                    <CardText style={{ fontSize: "17px" }}>
                        Number: {props.Driver.contact_number}
                    </CardText>
                </CardBody>
            </Card>
        </div>

    );
}

export default Driverlist;