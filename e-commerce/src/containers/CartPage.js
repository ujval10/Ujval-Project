import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../redux/actions/cartActions";
import "./CartPage.css"; // Ensure this CSS file is linked

const CartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleIncrementQuantity = (productId) => {
        dispatch(incrementQuantity(productId));
    };

    const handleDecrementQuantity = (productId) => {
        dispatch(decrementQuantity(productId));
    };

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} className="cart-item-image" />
                            <div className="item-details">
                                <h3>{item.title}</h3>
                                <p>${item.price}</p>
                                <div className="quantity-controls">
                                    <button onClick={() => handleDecrementQuantity(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleIncrementQuantity(item.id)}>+</button>
                                </div>
                                <button className="remove-button" onClick={() => handleRemoveFromCart(item.id)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CartPage;
