// import React, { useEffect, useCallback } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";
// import "./ProductDetail.css"; // Import CSS for styling

// const ProductDetail = () => {
//     const { productId } = useParams();
//     const dispatch = useDispatch();
//     const product = useSelector((state) => state.product); // Ensure this matches the reducer key

//     const fetchProductDetail = useCallback(async () => {
//         try {
//             const response = await axios.get(`https://fakestoreapi.com/products/${productId}`); // ✅ Fixed template literal
//             dispatch(selectedProduct(response.data));
//         } catch (err) {
//             console.error("Error fetching product details:", err);
//         }
//     }, [productId, dispatch]);

//     useEffect(() => {
//         if (productId) {
//             fetchProductDetail();
//         }

//         return () => {
//             dispatch(removeSelectedProduct()); // ✅ Cleanup on unmount
//         };
//     }, [productId, fetchProductDetail, dispatch]); // ✅ Added `dispatch` to dependencies

//     if (!product || !product.title) {
//         return <h2>Loading...</h2>;
//     }

//     return (
//         <div className="product-container">
//             <div className="image-container">
//                 <img src={product.image} alt={product.title} />
//             </div>
//             <div className="details-container">
//                 <h2>{product.title}</h2>
//                 <div className="price-tag">${product.price}</div>
//                 <p className="category">{product.category}</p>
//                 <p>{product.description}</p>
//                 <button className="add-to-cart">Add to Cart</button>
//             </div>
//         </div>
//     );
// };

// export default ProductDetail;

import React, { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions"; // Import the addToCart action
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications
import "./ProductDetail.css"; // Import CSS for styling

const ProductDetail = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product); // Ensure this matches the reducer key

    const fetchProductDetail = useCallback(async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${productId}`); // ✅ Fixed template literal
            dispatch(selectedProduct(response.data));
        } catch (err) {
            console.error("Error fetching product details:", err);
        }
    }, [productId, dispatch]);

    useEffect(() => {
        if (productId) {
            fetchProductDetail();
        }

        return () => {
            dispatch(removeSelectedProduct()); // ✅ Cleanup on unmount
        };
    }, [productId, fetchProductDetail, dispatch]); // ✅ Added `dispatch` to dependencies

    const handleAddToCart = () => {
        dispatch(addToCart(product)); // Dispatch the addToCart action
        toast.success(`${product.title} added to cart!`); // Show a success notification
    };

    if (!product || !product.title) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="product-container">
            <div className="image-container">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="details-container">
                <h2>{product.title}</h2>
                <div className="price-tag">${product.price}</div>
                <p className="category">{product.category}</p>
                <p>{product.description}</p>
                <button className="add-to-cart" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
            <ToastContainer /> {/* Add ToastContainer to display notifications */}
        </div>
    );
};

export default ProductDetail;