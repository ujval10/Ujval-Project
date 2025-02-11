import React, { useEffect, useCallback } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setproducts } from "../redux/actions/productActions";

const ProductListing = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const fetchProducts = useCallback(async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            dispatch(setproducts(response.data));  // ✅ Now correctly using setproducts
        } catch (err) {
            console.log("Error fetching products:", err);
        }
    }, [dispatch]); // ✅ `dispatch` is a stable dependency

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]); // ✅ No warning

    console.log("Products:", products);
    
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    );
};

export default ProductListing;
