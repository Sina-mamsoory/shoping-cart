import React, { useContext } from "react";
import { useParams } from "react-router-dom";

//context
import { ProductContext } from "../context/ProductContextProvider";

const ProductDetails = () => {
    const data = useContext(ProductContext);
    const params = useParams();

    const id = params.id;
    const product = data[id - 1];
    const {image, title, price, category, description} = product;

    return(
        <div>
            <img src={image} alt='product image' style={{width: '350px'}} />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>Category: </span>{category}</p>
            </div>
        </div>
    )
}

export default ProductDetails;