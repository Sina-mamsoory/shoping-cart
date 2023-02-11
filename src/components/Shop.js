import React, { useContext } from "react";
import Cart from "./shared/Cart";


//context
import { CartContext } from "../context/CartContextProvider";
import { Link } from "react-router-dom";

const Shop = () => {

    const {state , dispatch} = useContext(CartContext);

    return (
        <div>
            <div>
                {
                    state.selectedItems.map(item => <Cart key={item.id} productData={item} />)
                }
            </div>
            {
                state.itemCounter > 0 ?
                <div>
                    <div>
                        <button onClick={() => dispatch({type: 'CLEAR'})}>Clear All</button>
                        <button onClick={() => dispatch({type: 'CHECKED'})}>Check Out</button>
                    </div>
                    <div>
                        <h4>Total price: {state.total}</h4>
                    </div>
                </div>:
                (
                    state.checked ?
                    <div>
                        <p>Checked out successfully.</p>
                        <button><Link to='/products'>Buy more</Link></button>
                    </div>:
                    <div>
                        <p>Want to buy?</p>
                        <button><Link to='/products'>Go to shop</Link></button>
                    </div>
                )
                
            }
        </div>
    )
}

export default Shop