import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BillingDetails.css";

const BillingDetails = () => {
  const { productId } = useParams();
  const productFromStore = useSelector((state) => state.product);

  // Local state for product details
  const [product, setProduct] = useState(null);

  // Fetch the product either from Redux (if it exists and matches)
  // or fetch from the API using productId
  useEffect(() => {
    if (productFromStore && productFromStore.id === parseInt(productId, 10)) {
      setProduct(productFromStore);
    } else {
      axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .then((response) => setProduct(response.data))
        .catch((err) => console.error("Error fetching product:", err));
    }
  }, [productId, productFromStore]);

  // State for billing form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    paymentMethod: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the billing details (and product info) here—for example, send them to your server
    console.log("Billing details submitted:", formData, product);
  };

  return (
    <div className="billing-details-container">
      {product ? (
        <div className="product-preview">
          <img src={product.image} alt={product.title} />
          <div className="product-info">
            <h2>{product.title}</h2>
            <p className="price-tag">${product.price}</p>
            <p className="category">{product.category}</p>
          </div>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
      <div className="billing-form">
        <h1>Enter Your Billing Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="zip">Zip Code</label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="paymentMethod">Payment Method</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="credit-card">Credit Card</option>
              <option value="debit-card">Debit Card</option>
              <option value="net-banking">Net Banking</option>
            </select>
          </div>
          <button type="submit">Purchase</button>
        </form>
      </div>
    </div>
  );
};

export default BillingDetails;
