import React, { Component } from 'react';
import { connect } from 'react-redux';
import {CardGroup } from 'reactstrap';
import { fetchDriver } from '../../../src/redux/actionCreators';
import Loading from '../Loading';
import Driverlist from './Driverlist';


const mapStateToProps = state => {
    return {
        Driver: state.Driver,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDriver: () => dispatch(fetchDriver()),
    }
}

class Driver extends Component {
    state = {
        selectedDriver: null,
        modalOpen: false
    }

    onDriverSelect = Driver => {
        this.setState({
            selectedDriver: Driver,
            modalOpen: !this.state.modalOpen

        });
    }
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }


    componentDidMount() {
        this.props.fetchDriver();

    }

    render() {
        document.title = "Driver";

        if (this.props.Driver.isLoading) {
            return (
                <Loading />
            );
        }
        else {
            const Driver = this.props.Driver.Driver.map(item => {
                return (
                    <Driverlist
                        Driver={item}
                        key={item.id}
                        DriverSelect={() => this.onDriverSelect(item)}
                    />
                );
            })
            return (
                <div style={{ overflow: "hidden" }}>
                    <div>
                        <p style={{ color: "red", fontSize: "30px", textAlign: "center", }}>
                        Driver Information
                        </p>
                    </div>
                    <div className="row">
                        <div>
                            <CardGroup>
                                {Driver}
                            </CardGroup>
                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Driver);