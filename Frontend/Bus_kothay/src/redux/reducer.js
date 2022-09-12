import { combineReducers } from 'redux';
import { InitialContactForm, InitialContactForm1, } from './forms';
import { createForms } from 'react-redux-form';
import * as actionTypes from './actionTypes';

const RouteReducer = (RouteState = { isLoading: false, Route: [] }, action) => {
    switch (action.type) {
        case actionTypes.Route_LOADING:
            return {
                ...RouteState,
                isLoading: true,
                Route: []
            }
        case actionTypes.LOAD_Route:
            return {
                ...RouteState,
                isLoading: false,
                Route: action.payload
            }
        default:
            return RouteState;
    }
}

const InventoryReducer = (InventoryState = { isLoading: false, Inventory: [] }, action) => {
    switch (action.type) {
        case actionTypes.Inventory_LOADING:
            return {
                ...InventoryState,
                isLoading: true,
                Inventory: []
            }
        case actionTypes.LOAD_Inventory:
            return {
                ...InventoryState,
                isLoading: false,
                Inventory: action.payload
            }
        default:
            return InventoryState;
    }
}

const DriverReducer = (DriverState = { isLoading: false, Driver: [] }, action) => {
    switch (action.type) {
        case actionTypes.Driver_LOADING:
            return {
                ...DriverState,
                isLoading: true,
                Driver: []
            }
        case actionTypes.LOAD_Driver:
            return {
                ...DriverState,
                isLoading: false,
                Driver: action.payload
            }
        default:
            return DriverState;
    }
}


// const certificationsReducer = (certificationsState = { isLoading: false, certifications: [] }, action) => {
//     switch (action.type) {
//         case actionTypes.certifications_LOADING:
//             return {
//                 ...certificationsState,
//                 isLoading: true,
//                 certifications: []
//             }
//         case actionTypes.LOAD_certifications:
//             return {
//                 ...certificationsState,
//                 isLoading: false,
//                 certifications: action.payload
//             }
//         default:
//             return certificationsState;
//     }
// }

export const Reducer = combineReducers({
    Route: RouteReducer,
    Inventory: InventoryReducer,
    Driver:DriverReducer,
    // Job: JobReducer,
    // certifications: certificationsReducer,
    ...createForms({
        feedback: InitialContactForm,
        Demand: InitialContactForm1,
    })
});



