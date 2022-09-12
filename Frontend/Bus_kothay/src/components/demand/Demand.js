import React, { Component } from "react";
import { Col, FormGroup, Row, Label, Button, Alert } from "reactstrap";
import { Form, Control, Errors, actions } from 'react-redux-form'
import axios from "axios";
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
        resetFeedbackForm: () => {
            dispatch(actions.reset('Demand'))
        }
    }
}


const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));

class Demand extends Component {
    state = {
        alertShow: false,
        alertText: null,
        alertType: null
    }
    handleSubmit = values => {
        //console.log(values);
        axios.post('http://127.0.0.1:8000/apiv1/' + "Demand", values)
            .then(response => response.status)
            .then(status => {
                if (status === 201) {
                    this.setState({
                        alertShow: true,
                        alertText: "Submitted Successfully",
                        alertType: "success"
                    });
                    setTimeout(() => {
                        this.setState({
                            alertShow: false
                        })
                    }, 2000)
                }
            })
            .catch(error => {
                console.log(error.response)
            });
        this.props.resetFeedbackForm();
    }

    render() {
        document.title = "Demand";
        return (
            <div style={{ textAlign: "left" }}>
                <br /><br />
                <div>
                    <p align="center" style={{ color: "black", fontSize: "40px" }}>
                        Submit Your Demand
                    </p>
                    <p align="center" style={{ fontSize: "20px" }}>
                        We try our best to solve your problems.
                    </p>
                </div>
                <div className="shadow p-5 bg-white">
                    <div className="container my-3" style={{}}>
                        <Alert isOpen={this.state.alertShow} color={this.state.alertType}>{this.state.alertText}</Alert>
                        <Form method="post" model="Demand" onSubmit={values => this.handleSubmit(values)}>
                            <Row>
                                <Col md="5">
                                    <FormGroup>
                                        <Row>
                                            <Label style={{ fontSize: "14px" }}>
                                                Full Name<em style={{ color: "red" }}>*</em>
                                            </Label>
                                            <Control.text
                                                model='.name'
                                                name="name"
                                                placeholder=""
                                                style={{ height: "40px" }}
                                                validators={{
                                                    required
                                                }}
                                            />
                                            <Errors
                                                model=".name"
                                                show="touched"
                                                messages={
                                                    {
                                                        required: "Required"
                                                    }
                                                }
                                            />
                                        </Row>
                                    </FormGroup>
                                </Col>
                                <Col md="5" style={{ marginLeft: "2%" }}>
                                    <FormGroup>
                                        <Row>
                                            <Label style={{ fontSize: "14px" }}>
                                                ID<em style={{ color: "red" }}>*</em>
                                            </Label>
                                            <Control.text
                                                model=".ID"
                                                name="ID"
                                                placeholder=""
                                                style={{ height: "40px" }}
                                                validators={{
                                                    required,
                                                    isNumber
                                                }}
                                            />
                                            <Errors
                                                model=".ID"
                                                show="touched"
                                                messages={
                                                    {
                                                        required: "Required",
                                                        validEmail: "Invalid Number. Input like: '102441'"
                                                    }
                                                }
                                            />
                                        </Row>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="5">
                                    <FormGroup>
                                        <Row>
                                            <Label style={{ fontSize: "14px" }}>
                                                Profession<em style={{ color: "red" }}>*</em>
                                            </Label>
                                            <Control.select
                                                model=".profession"
                                                name="profession"
                                                placeholder=""
                                                style={{ height: "40px" }}
                                            >
                                                <option>Student</option>
                                                <option>Teacher</option>
                                                <option>Staff</option>
                                            </Control.select>
                                        </Row>
                                    </FormGroup>
                                </Col>
                                <Col md="5" style={{ marginLeft: "2%" }}>
                                    <FormGroup>
                                        <Row>
                                            <Label style={{ fontSize: "14px" }}>
                                                Route<em style={{ color: "red" }}>*</em>
                                            </Label>
                                            <Control.select
                                                model=".route"
                                                name="route"
                                                style={{ height: "40px" }}
                                            >
                                                <option>Temuki</option>
                                                <option>Modina Market</option>
                                                <option>Rekab Bazar</option>
                                                <option>Subid Bazar</option>
                                                <option>Kazirbazar</option>
                                                <option>Chondipul</option>
                                                <option>Humayun Rashid Chattar</option>
                                            </Control.select>
                                        </Row>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="5">
                                    <FormGroup>
                                        <Row>
                                            <Label style={{ fontSize: "14px" }}>
                                                Timeslot<em style={{ color: "red" }}>*</em>
                                            </Label>
                                            <Control.select
                                                model=".timeslot"
                                                name="timeslot"
                                                style={{ height: "40px" }}
                                            >
                                                <option>08:00 AM</option>
                                                <option>09:00 AM</option>
                                                <option>12:00 PM</option>
                                                <option>01:00 PM</option>
                                            </Control.select>
                                        </Row>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Row>
                                    <Label style={{ fontSize: "14px" }}>
                                        Submit Your Requirements/Query<em style={{ color: "red" }}>*</em>
                                    </Label>
                                    <Control.textarea
                                        model=".message"
                                        name="message"
                                        placeholder=""
                                        style={{ height: "100px", width: "1000px" }}
                                        validators={
                                            {
                                                required
                                            }
                                        }
                                    />
                                    <Errors
                                        model=".message"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required"
                                            }
                                        }
                                    />
                                </Row>
                            </FormGroup><br />
                            <FormGroup>
                                <a href="/">
                                    <Button type="submit" color="danger" outline size="lg">
                                        Submit
                                    </Button>
                                </a>

                            </FormGroup>

                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(null, mapDispatchToProps)(Demand);