import React, { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";
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
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetail;
