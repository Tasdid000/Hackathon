import React, { Component } from 'react';
import { connect } from 'react-redux';
import {CardGroup } from 'reactstrap';
import { fetchInventory } from '../../../src/redux/actionCreators';
import Loading from '../Loading';
import Inventorylist from './inventorylist';


const mapStateToProps = state => {
    return {
        Inventory: state.Inventory,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchInventory: () => dispatch(fetchInventory()),
    }
}

class Inventory extends Component {
    state = {
        selectedInventory: null,
        modalOpen: false
    }

    onInventorySelect = Inventory => {
        this.setState({
            selectedInventory: Inventory,
            modalOpen: !this.state.modalOpen

        });
    }
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }


    componentDidMount() {
        this.props.fetchInventory();

    }

    render() {
        document.title = "Inventory";

        if (this.props.Inventory.isLoading) {
            return (
                <Loading />
            );
        }
        else {
            const Inventory = this.props.Inventory.Inventory.map(item => {
                return (
                    <Inventorylist
                        Inventory={item}
                        key={item.id}
                        InventorySelect={() => this.onInventorySelect(item)}
                    />
                );
            })
            return (
                <div style={{ overflow: "hidden" }}>
                    <div>
                        <div style={{ backgroundImage: "url('/assets/images/17.png')", height: "250px", backgroundSize: "cover", backgroundPosition: "center center" }}>
                            <p style={{ color: "#ea7826", fontSize: "30px", textAlign: "center", paddingTop: "100px" }}>
                                Inventory
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <p style={{ color: "#ea7826", fontSize: "30px", textAlign: "center", }}>Bus Information</p>
                            <CardGroup style={{marginRight:"0%"}}>
                                {Inventory}
                            </CardGroup>
                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);