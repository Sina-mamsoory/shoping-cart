import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import styles from './ProductDetails.module.css'

//context
import { ProductContext } from "../context/ProductContextProvider";

const ProductDetails = () => {
    const data = useContext(ProductContext);
    const params = useParams();

    const id = params.id;
    const product = data[id - 1];
    const {image, title, price, category, description} = product;

    return(
        <div className={styles.container}>
            <img className={styles.image} src={image} alt='product image' />
            <div className={styles.infoContainer}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category: </span>{category}</p>
                <div className={styles.priceAndBtn}>
                <div> {price} $ </div>
                    <button><Link to='/products'>Back to shop</Link></button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;