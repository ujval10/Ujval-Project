// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setproducts } from "../redux/actions/productActions";
// import axios from "axios";

// const Header = () => {
//     const [query, setQuery] = useState("");
//     const dispatch = useDispatch();
//     const allProducts = useSelector((state) => state.allProducts.products); // Get all products

//     const handleSearch = async (e) => {
//         const searchQuery = e.target.value.toLowerCase();
//         setQuery(searchQuery);

//         if (searchQuery === "") {
//             // If search is empty, reset to all products
//             const response = await axios.get("https://fakestoreapi.com/products");
//             dispatch(setproducts(response.data));
//         } else {
//             // Filter existing products by search query
//             const filteredProducts = allProducts.filter((product) =>
//                 product.title.toLowerCase().includes(searchQuery)
//             );
//             dispatch(setproducts(filteredProducts));
//         }
//     };

//     return (
//         <div className="ui fixed menu">
//             <div className="ui container center flex justify-between items-center">
//                 <h2>FakeShop</h2>
//                 <input
//                     type="text"
//                     placeholder="Search products..."
//                     value={query}
//                     onChange={handleSearch}
//                     className="p-2 border rounded-md"
//                 />
//             </div>
//         </div>
//     );
// };

// export default Header;


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setproducts } from "../redux/actions/productActions";
import axios from "axios";
import CartIcon from "../CartIcon"; // Corrected import path

const Header = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.allProducts.products); // Get all products

    const handleSearch = async (e) => {
        const searchQuery = e.target.value.toLowerCase();
        setQuery(searchQuery);

        if (searchQuery === "") {
            // If search is empty, reset to all products
            const response = await axios.get("https://fakestoreapi.com/products");
            dispatch(setproducts(response.data));
        } else {
            // Filter existing products by search query
            const filteredProducts = allProducts.filter((product) =>
                product.title.toLowerCase().includes(searchQuery)
            );
            dispatch(setproducts(filteredProducts));
        }
    };

    return (
        <div className="ui fixed menu">
            <div className="ui container center flex justify-between items-center">
                <h2>FakeShop</h2>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={query}
                    onChange={handleSearch}
                    className="p-2 border rounded-md"
                />
                <CartIcon /> {/* Add the CartIcon component */}
            </div>
        </div>
    );
};

export default Header;
