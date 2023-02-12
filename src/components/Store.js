import React, { useContext } from "react";
import ProductsComponent from "./shared/ProductsComponent";

import styles from './Store.module.css';

//context
import { ProductContext } from "../context/ProductContextProvider";

const Store = () => {
    const products = useContext(ProductContext);
    // console.log(products)

    return (
        <div className={styles.container}>
            {products.length ? products.map( item => <ProductsComponent key={item.id} productsData={item} />)  : <h1>Loading ...</h1> }
        </div>
    )
}


export default Store;