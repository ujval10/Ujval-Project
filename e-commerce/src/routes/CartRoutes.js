import React from "react";
import { Routes, Route } from "react-router-dom";
import CartItem from "../Components/CartItem";

function CartRoutes() {
  return (
    <Routes>
      <Route path="/21" element={<CartItem />} />
    </Routes>
  );
}

export default CartRoutes;
