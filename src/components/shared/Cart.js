import React, { useContext } from "react";
import { shorten } from "../../helper/functions";


//context
import { CartContext } from "../../context/CartContextProvider";

const Cart = ({productData}) => {

    const {dispatch} = useContext(CartContext);
    const {image, title, price, quantity} = productData;
    
    return (
        <div>
            <img src={image} alt='product image'  style={{width: '240px', height: '390px'}}/>
            <h3>{shorten(title)}</h3>
            <p>{price}</p>
            <p>{quantity}</p>
            <div>
                { 
                    quantity > 1 ?
                    <button onClick={() => dispatch({type: 'DECREASE', payload: productData})} >-</button>:
                    <button onClick={() => dispatch({type: 'REMOVE_ITEM', payload: productData})} >-</button>
                }
                <button onClick={() => dispatch({type: 'INCREASE', payload: productData})}>+</button>
            </div>
            <div>
                <button onClick={() => dispatch({type: 'REMOVE_ITEM', payload: productData})}>Remove item</button>
            </div>
        </div>
    )
}

export default Cart;