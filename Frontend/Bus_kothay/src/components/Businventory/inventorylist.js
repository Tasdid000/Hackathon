import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';



const Inventorylist = props => {
    return (
        <div style={{marginRight:"10%"}}>
            <Card style={{
                width: "100%", elevation: "10px", marginTop: "5%", boxSizing: "border-box",
                marginLeft: "7%", borderRadius: "25px", fontFamily: "Open Sans,sans-serif",
                boxShadow: "0 0 10px 5px rgba(57,125,192,0.09)", border: "none", marginBottom: "5px"
            }}>
                <CardBody style={{ textAlign: "left" }}>
                    <CardText style={{ backgroundColor: "transparent" }}>
                        <span>License Number: {props.Inventory.license_number}</span>
                    </CardText>
                    <CardText>CodeName: {props.Inventory.codename}</CardText>
                    <CardText style={{ fontSize: "17px" }}>
                        Capacity: {props.Inventory.capacity}
                    </CardText>
                    <CardText style={{ fontSize: "17px" }}>
                        Route: {props.Inventory.route}
                    </CardText>
                    <CardText style={{ fontSize: "17px" }}>
                        Profession: {props.Inventory.profession}
                    </CardText>
                </CardBody>
            </Card>
        </div>

    );
}

export default Inventorylist;