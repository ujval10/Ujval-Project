import {ActionTypes} from "../contains/action-types";
export const setproducts = (products)=>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (product)=>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};