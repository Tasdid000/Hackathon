import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap'
import './Navbar.css';
class Headers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
    }
    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render() {
        return (
            <div>
                <div>
                    <Navbar
                        expand="md"
                        fixed="top"
                        light
                        className="shadow p-3 md-5"
                        color="danger"
                    >
                        <NavbarToggler onClick={this.navToggle} />
                        <NavbarBrand href="/">
                            <img src="assets/logo.png" style={{marginLeft:""}} width="100px" alt="pic" />
                        </NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="offset-lg-7 col-lg-7"
                                navbar
                            >
                                <UncontrolledDropdown
                                    inNavbar
                                    nav
                                >
                                    <DropdownToggle
                                        nav
                                    >
                                        <span className="text">Bus Category</span>
                                    </DropdownToggle>
                                    <DropdownMenu right style={{ backgroundColor: "#dc3545", marginTop: "11%", border: "none", width: "200px" }}>
                                        <DropdownItem href="/StudentBus">
                                            <span className="text1">Students Bus</span>
                                        </DropdownItem><br />
                                        <DropdownItem href="/TeacherBus">
                                            <span className="text1">Teachers Bus</span>
                                        </DropdownItem><br />
                                        <DropdownItem href="/StaffBus">
                                            <span className="text1">Staff Bus</span>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <NavLink href="/Businventory">
                                    <span className="text">Bus Inventory</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/Support">
                                        <Button
                                            color="dark"
                                            outline
                                        >
                                            Support
                                        </Button>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }
}

export default Headers;