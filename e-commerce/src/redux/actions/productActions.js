import { ActionTypes } from "../../redux/constants/action-types";

export const setproducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
}; 

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};
