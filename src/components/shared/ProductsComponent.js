import React from "react";
import { Link } from "react-router-dom";
import { shorten } from "../../helper/functions";

const ProductsComponent = ({productsData}) => {

    const {image, title, price, id} = productsData;

    return(
        <div>
            <img src={image} alt="product image" style={{width: '240px', height: '390px'}} />
            <div>
                <h3>{shorten(title)}</h3>
                <p>{price}</p>
            </div>
            <p>Product for you</p>
            <div>
                <Link to={`/products/${id}`}>Details</Link>
                <div>

                </div>

            </div>
        </div>
    )
}

export default ProductsComponent;