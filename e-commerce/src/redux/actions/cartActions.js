// export const addToCart = (product) => {
//     return {
//         type: "ADD_TO_CART",
//         payload: product,
//     };
// };

export const addToCart = (product) => {
    return {
        type: "ADD_TO_CART",
        payload: product,
    };
};

export const removeFromCart = (productId) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: productId,
    };
};

export const incrementQuantity = (productId) => {
    return {
        type: "INCREMENT_QUANTITY",
        payload: productId,
    };
};

export const decrementQuantity = (productId) => {
    return {
        type: "DECREMENT_QUANTITY",
        payload: productId,
    };
};