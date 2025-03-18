// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useState } from "react";
// import Header from "./containers/Header";
// import Hero from "./containers/Hero";
// import ProductListing from "./containers/ProductListing";
// import ProductDetail from "./containers/ProductDetail";
// import CartRoutes from './routes/CartRoutes';
// import Login from './Components/Login';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <div className="App">
//       <Router>
//         {!isAuthenticated ? (
//           <Login onLogin={() => setIsAuthenticated(true)} />
//         ) : (
//           <>
//             <Header />
//             <Hero />
//             <Routes>
//               <Route path="/" element={<ProductListing />} />
//               <Route path="/product/:productId" element={<ProductDetail />} />
//               <Route path="*" element={<Navigate to="/" />} />
//             </Routes>
//             <CartRoutes />
//           </>
//         )}
//       </Router>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Header from "./containers/Header";
import Hero from "./containers/Hero";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import CartPage from "./containers/CartPage"; // Import the CartPage component
import Login from './Components/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      <Router>
        {!isAuthenticated ? (
          <Login onLogin={() => setIsAuthenticated(true)} />
        ) : (
          <>
            <Header />
            <Hero />
            <Routes>
              <Route path="/" element={<ProductListing />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} /> {/* Add the CartPage route */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
