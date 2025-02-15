import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);

    return (
        <div className="ui three column grid container">
            <div className="row">
                {products && products.length > 0 ? (
                    products.map((product) => (
                        <div className="column" key={product.id}>
                            <div className="ui card" style={{ minHeight: "350px" }}>
                                <Link to={`/product/${product.id}`}>
                                    <div className="image">
                                        <img 
                                            src={product.image} 
                                            alt={product.title} 
                                            style={{ maxHeight: "200px", objectFit: "contain" }} 
                                        />
                                    </div>
                                    <div 
                                        className="content" 
                                        style={{ 
                                            whiteSpace: "normal", 
                                            overflow: "hidden", 
                                            textOverflow: "ellipsis", 
                                            minHeight: "100px" 
                                        }}
                                    >
                                        <div className="header">{product.title}</div>
                                        <div className="meta price">$ {product.price}</div>
                                        <div className="meta">{product.category}</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <h2>Loading...</h2>
                )}
            </div>
        </div>
    );
};

export default ProductComponent;
