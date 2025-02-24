import { ActionTypes } from "../constants/action-types"; 

const initialState = {
    products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:  // ✅ Fixed: replaced semicolon with a colon
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:  // ✅ Fixed: replaced semicolon with a colon
            return { };
        default:
            return state;
    }
};
