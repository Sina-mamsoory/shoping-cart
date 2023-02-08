import React from "react";
import { Link } from "react-router-dom";

const ProductsComponent = ({productsData}) => {

    const {image, title, price, id} = productsData;

    return(
        <div>
            <img src={image} alt="product image" style={{width: '240px', height: '390px'}} />
            <div>
                <h3>{title}</h3>
                <p>{price}</p>
            </div>
            <p>Product for you</p>
            <Link to={`/products/${id}`}>Details</Link>
        </div>
    )
}

export default ProductsComponent;