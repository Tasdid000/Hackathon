import React from "react";
import { Button, Card, CardBody } from "reactstrap"

function Demandcard() {
    return (
        <div>
            <Card>
                <CardBody style={{ backgroundColor: "red", borderRadius: "5px" }}>
                    <h1>
                        Tell us about your Demand.
                    </h1>
                    <a href="/Demand">
                        <Button style={{marginTop:"10%"}} size="lg" outline color="light">
                            Demand
                        </Button>
                    </a>

                </CardBody>
            </Card>
        </div>
    )
}
export default Demandcard;