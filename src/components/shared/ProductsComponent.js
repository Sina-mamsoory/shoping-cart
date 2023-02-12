import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { isInCart, quantityCounter, shorten } from "../../helper/functions";

import styles from './ProductsComponent.module.css';
import trashIcon from './../../assets/icons/trash.svg';


//context
import { CartContext } from "../../context/CartContextProvider";
import style from "radium/lib/components/style";

const ProductsComponent = ({productsData}) => {

    const {state, dispatch} = useContext(CartContext);

    const {image, title, price, id} = productsData;

    return(
        <div className={styles.container}>
            <img src={image} alt="product image" className={styles.image} />
            <div className={styles.infoContainer}>
                <h3>{shorten(title)}</h3>
                <p>${price}</p>
            </div>
            <p>Product for you</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                    {quantityCounter(state, id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type: 'REMOVE_ITEM', payload: productsData})}><img src={trashIcon} alt='trash icon' style={{width: '20px'}}/></button>}
                    {quantityCounter(state, id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type: 'DECREASE', payload: productsData})}>-</button>}
                    {
                        isInCart(state, id) ?
                        <button className={styles.smallButton} onClick={() => dispatch({type: 'INCREASE', payload: productsData})} >+</button>:
                        <button onClick={() => dispatch({type: 'ADD_ITEM', payload: productsData})}>Add to Cart</button>
                    }
                </div>
                    {console.log(state)}
            </div>
        </div>
    )
}

export default ProductsComponent;