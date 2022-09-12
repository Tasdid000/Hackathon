import React, { Component } from "react";
import { Col, FormGroup, Row, Label, Button, Alert } from "reactstrap";
import { Form, Control, Errors, actions } from 'react-redux-form'
import axios from "axios";
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
        resetFeedbackForm: () => {
            dispatch(actions.reset('feedback'))
        }
    }
}


const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    state = {
        alertShow: false,
        alertText: null,
        alertType: null
    }
    handleSubmit = values => {
        //console.log(values);
        axios.post('http://127.0.0.1:8000/apiv1/Support/' + "feedback", values)
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
        document.title = "Contact";
        return (
            <div style={{ textAlign: "left" }}>
                <div style={{ backgroundImage: "url('/assets/support.png')", height: "350px", width: "100%", backgroundSize: "cover", backgroundPosition: "center center" }}>
                    <p style={{ color: "balck", fontSize: "60px", fontWeight: "600", textAlign: "center", paddingTop: "5%", backgroundColor: "white", height: "350px", opacity: "0.8" }}>
                        Our Support
                    </p>
                </div>

                <br /><br />
                <div>
                    <p align="center" style={{ color: "black", fontSize: "40px" }}>
                        Request a Quote
                    </p>
                    <p align="center" style={{ fontSize: "14px" }}>
                        Whether you have a question about your needs, or anything else, We<br /> are is ready to answer all your questions
                    </p>
                </div>
                <div className="shadow p-5 bg-white">
                    <div className="container my-3" style={{}}>
                        <Alert isOpen={this.state.alertShow} color={this.state.alertType}>{this.state.alertText}</Alert>
                        <Form method="post" model="feedback" onSubmit={values => this.handleSubmit(values)}>
                            <Row>
                                <Col md="5">
                                    <FormGroup>
                                        <Row>
                                            <Label htmlfor="full_Name" style={{ fontSize: "14px" }}>
                                                Full Name<em style={{ color: "red" }}>*</em>
                                            </Label>
                                            <Control.text
                                                model='.full_Name'
                                                name="full_Name"
                                                placeholder=""
                                                style={{ height: "40px" }}
                                                validators={{
                                                    required
                                                }}
                                            />
                                            <Errors
                                                model=".full_Name"
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
                                            <Label htmlfor="exampleEmail" style={{ fontSize: "14px" }}>
                                                Email<em style={{ color: "red" }}>*</em>
                                            </Label>
                                            <Control.text
                                                model=".email"
                                                name="email"
                                                placeholder=""
                                                style={{ height: "40px" }}
                                                validators={{
                                                    required,
                                                    validEmail
                                                }}
                                            />
                                            <Errors
                                                model=".email"
                                                show="touched"
                                                messages={
                                                    {
                                                        required: "Required",
                                                        validEmail: "Invalid Email!"
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
                                            <Label htmlfor="profession" style={{ fontSize: "14px" }}>
                                                Profession
                                            </Label>
                                            <Control.select
                                                model=".profession"
                                                name="profession"
                                                placeholder=""
                                                style={{ height: "40px" }}
                                            >
                                                <option>student</option>
                                                <option>Teacher</option>
                                                <option>Staff</option>
                                            </Control.select>
                                        </Row>
                                    </FormGroup>
                                </Col>
                                <Col md="5" style={{ marginLeft: "2%" }}>
                                    <FormGroup>
                                        <Row>
                                            <Label htmlfor="ID" style={{ fontSize: "14px" }}>
                                                ID
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
                                                        validEmail: "Invalid Number !"
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
                                            <Label htmlfor="phone" style={{ fontSize: "14px" }}>
                                                Phone number
                                            </Label>
                                            <Control.text
                                                model=".phone"
                                                name="phone"
                                                placeholder=""
                                                style={{ height: "40px" }}
                                                validators={{
                                                    required,
                                                    isNumber
                                                }}
                                            />
                                            <Errors
                                                model=".phone"
                                                show="touched"
                                                messages={
                                                    {
                                                        required: "Required",
                                                        validEmail: "Invalid Number !"
                                                    }
                                                }
                                            />
                                        </Row>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Row>
                                    <Label htmlfor="text_area" style={{ fontSize: "14px" }}>
                                        Submit Your Requirements/Query
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
export default connect(null, mapDispatchToProps)(Contact);