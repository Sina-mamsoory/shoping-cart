import React from "react";

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
        </div>
    )
}

export default ProductsComponent;