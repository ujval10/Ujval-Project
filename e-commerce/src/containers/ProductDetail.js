
// import React, { useEffect, useCallback } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";
// import { addToCart } from "../redux/actions/cartActions"; // Import the addToCart action
// import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
// import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications
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

//     const handleAddToCart = () => {
//         dispatch(addToCart(product)); // Dispatch the addToCart action
//         toast.success(`${product.title} added to cart!`); // Show a success notification
//     };

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
//                 <div className="button-group">
//     <button className="add-to-cart" onClick={handleAddToCart}>
//         Add to Cart
//     </button>
//     <button className="Buy-Now" onClick={handleAddToCart}>
//         Buy Now
//     </button>
// </div>
//             </div>
//             <ToastContainer /> {/* Add ToastContainer to display notifications */}
//         </div>
//     );
// };

// export default ProductDetail;

// H:\GIT Projects\e-commerce\src\containers\ProductDetail.js
import React, { useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const product = useSelector((state) => state.product); // Ensure this matches the reducer key

  const fetchProductDetail = useCallback(async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
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
      dispatch(removeSelectedProduct());
    };
  }, [productId, fetchProductDetail, dispatch]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart!`);
  };

  // New function to handle Buy Now
  const handleBuyNow = () => {
    // Optionally, you can dispatch an action to set the selected product for purchase
    // Then navigate to the billing page with the product ID as a route param.
    navigate(`/billing/${product.id}`);
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
        <div className="button-group">
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="Buy-Now" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
      <ToastContainer /> {/* Displays toast notifications */}
    </div>
  );
};

export default ProductDetail;
