import * as actionTypes from './actionTypes';
import { baseUrl, baseUrl1,baseUrl2} from './baseUrl';
import axios from 'axios';



export const loadRoute = Route => ({
    type: actionTypes.LOAD_Route,
    payload: Route
})

export const RouteLoading = () => ({
    type: actionTypes.Route_LOADING
})

export const fetchRoute = () => dispatch => {
    dispatch(RouteLoading());

    axios.get(baseUrl)
        .then(response => response.data)
        .then(Route => dispatch(loadRoute(Route)))
}



export const loadInventory = Inventory => ({
    type: actionTypes.LOAD_Inventory,
    payload: Inventory
})

export const InventoryLoading = () => ({
    type: actionTypes.Inventory_LOADING
})

export const fetchInventory = () => dispatch => {
    dispatch(InventoryLoading());

    axios.get(baseUrl1)
        .then(response => response.data)
        .then(Inventory => dispatch(loadInventory(Inventory)))
}



export const loadDriver = Driver => ({
    type: actionTypes.LOAD_Driver,
    payload: Driver
})

export const DriverLoading = () => ({
    type: actionTypes.Driver_LOADING
})

export const fetchDriver = () => dispatch => {
    dispatch(DriverLoading());

    axios.get(baseUrl2)
        .then(response => response.data)
        .then(Driver => dispatch(loadDriver(Driver)))
}




// export const loadcertifications = certifications => ({
//     type: actionTypes.LOAD_certifications,
//     payload: certifications
// })

// export const certificationsLoading = () => ({
//     type: actionTypes.certifications_LOADING
// })

// export const fetchcertifications = () => dispatch => {
//     dispatch(certificationsLoading());

//     axios.get(baseUrl6)
//         .then(response => response.data)
//         .then(certifications => dispatch(loadcertifications(certifications)))
// }