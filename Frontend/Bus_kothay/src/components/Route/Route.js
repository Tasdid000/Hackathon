import React, { Component } from 'react';
import { connect } from 'react-redux';
import {CardGroup } from 'reactstrap';
import { fetchRoute } from '../../../src/redux/actionCreators';
import Loading from '../Loading';
import Routelist from './Routelist';


const mapStateToProps = state => {
    return {
        Route: state.Route,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRoute: () => dispatch(fetchRoute()),
    }
}

class Route extends Component {
    state = {
        selectedRoute: null,
        modalOpen: false
    }

    onRouteSelect = Route => {
        this.setState({
            selectedRoute: Route,
            modalOpen: !this.state.modalOpen

        });
    }
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }


    componentDidMount() {
        this.props.fetchRoute();

    }

    render() {
        document.title = "Route";

        if (this.props.Route.isLoading) {
            return (
                <Loading />
            );
        }
        else {
            const Route = this.props.Route.Route.map(item => {
                return (
                    <Routelist
                        Route={item}
                        key={item.id}
                        RouteSelect={() => this.onRouteSelect(item)}
                    />
                );
            })
            return (
                <div style={{ overflow: "hidden" }}>
                    <div>
                        <br /><br /><br />
                        <div style={{ backgroundImage: "url('/assets/images/17.png')", height: "250px", backgroundSize: "cover", backgroundPosition: "center center" }}>
                            <p style={{ color: "#ea7826", fontSize: "30px", textAlign: "center", paddingTop: "100px" }}>
                                All Possible Route for Bus
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <CardGroup>
                                {Route}
                            </CardGroup>
                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Route);