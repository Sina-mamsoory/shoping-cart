import React, { useContext } from "react";
import ProductsComponent from "./shared/ProductsComponent";

//context
import { ProductContext } from "../context/ProductContextProvider";

const Store = () => {
    const products = useContext(ProductContext);
    // console.log(products)

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center'}}>
            {products.length ? products.map( item => <ProductsComponent key={item.id} productsData={item} />)  : <h1>Loading ...</h1> }
        </div>
    )
}


export default Store;