import React from "react";
import { Col, Row } from "reactstrap";
import Search from "../components/Search";
import Demandcard from "../components/demandCard"
function Teacher() {
    return (
        <>
            <div style={{ marginTop: "10%", overflow:"hidden"}}>
                <img src="assets/student.png" alt="student Bus" width="10%" />
                <h1 style={{marginTop:"2%",fontWeight:"600" }}>
                    Available route and <br/>Bus for Teachers
                </h1>
                <div>
                    <Search/>
                </div>
                <div>
                    <Row style={{marginTop:"10%"}}>
                        <Col md="8">
                            
                        </Col>
                        <Col md="3">
                            <Demandcard/>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default Teacher;