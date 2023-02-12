import React, { useContext } from "react";
import { shorten } from "../../helper/functions";

import styles from './Cart.module.css';

//context
import { CartContext } from "../../context/CartContextProvider";

const Cart = ({productData}) => {

    const {dispatch} = useContext(CartContext);
    const {image, title, price, quantity} = productData;
    
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt='product image' />
            <p className={styles.title}>{shorten(title)}</p>
            <p className={styles.price}>{price}</p>
            <p className={styles.quantity}>{quantity}</p>
            <div className={styles.buttonContainer}>
                { 
                    quantity > 1 ?
                    <button onClick={() => dispatch({type: 'DECREASE', payload: productData})} >-</button>:
                    <button onClick={() => dispatch({type: 'REMOVE_ITEM', payload: productData})} >-</button>
                }
                <button onClick={() => dispatch({type: 'INCREASE', payload: productData})}>+</button>
            </div>
            <div className={styles.removeBtn}>
                <button onClick={() => dispatch({type: 'REMOVE_ITEM', payload: productData})}>Remove item</button>
            </div>
        </div>
    )
}

export default Cart;