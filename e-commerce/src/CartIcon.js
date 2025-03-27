import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartIcon = () => {
    const state = useSelector((state) => state); // Log the entire Redux state
    console.log("Redux State:", state); // Debugging statement

    const cart = state.cart || { cartItems: [] }; // Ensure cart is always defined
    const cartItems = cart.cartItems || []; // Ensure cartItems is always an array
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <Link to="/cart" className="cart-icon">
            <i className="shopping cart icon"></i>
            {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
        </Link>
    );
};

export default CartIcon;

