import React from 'react';
import { Card, CardBody, CardHeader, CardImg, CardText } from 'reactstrap';



const Routelist = props => {
    return (
        <div style={{marginBottom:"5%", marginRight:"5%"}}>
            <Card style={{
                width: "600px", elevation: "10px",boxSizing: "border-box",
                marginLeft: "7%", borderRadius: "25px", fontFamily: "Open Sans,sans-serif",
                boxShadow: "0 0 10px 5px rgba(57,125,192,0.09)", border: "none", marginBottom: "5px"
            }}>
                <CardBody style={{textAlign:"left"}}>
                    <CardHeader style={{backgroundColor:"transparent"}}>
                        <p>
                            Route: {props.Route.route}</p>
                    </CardHeader><br/>
                    <CardImg
                        src={props.Route.images}
                        style={{ height: "300px" }}
                    />
                    <CardText style={{ marginTop: "30px", fontSize: "17px" }}>
                        Timeslot: {props.Route.timeslot}
                    </CardText>
                </CardBody>
            </Card>
        </div>

    );
}

export default Routelist;