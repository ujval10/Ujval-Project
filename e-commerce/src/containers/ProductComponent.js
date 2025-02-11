import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);

    return (
        <div className="four column wide">
            <div className="ui link cards">
                {products && products.length > 0 ? (
                    products.map((product) => {
                        const { id, title, image, price, category } = product;
                        return (
                            <div className="card" key={id}>
                                <div className="image">
                                    <img src={image} alt={title} />
                                </div>
                                <div className="content">
                                    <div className="header">{title}</div>
                                    <div className="meta price">$ {price}</div>
                                    <div className="meta">{category}</div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <h2>Loading...</h2>
                )}
            </div>
        </div>
    );
};

export default ProductComponent;
