// import { combineReducers } from 'redux';
// import { productReducer , selectedProductReducer } from './productReducer';

// const reducers = combineReducers({
//     allProducts: productReducer,
//     product:selectedProductReducer
// });

// export default reducers;

import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './productReducer';
import cartReducer from './cartReducer'; // Import cartReducer

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cart: cartReducer, // ✅ Ensure this is added
});

export default reducers;

