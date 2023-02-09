import React, { useReducer } from "react";
import { act } from "react-dom/test-utils";

const initialValue = {
    selectedItems: [],
    itemCounter: 0,
    total: 0,
    checked: false
}

const sumaition = items => {
    const itemCounter = items.reduce( (sum, product) => sum + product.quantity, 0);
    const total = items.reduce((totalPrice, product) => totalPrice + product.price * product.quantity, 0).toFixed(2);
    return {itemCounter, total};
}

const cartReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            if(!state.selectedItems.find(item => item.id === action.payload.id))
                (state.selectedItems.push({
                    ...action.payload,
                    quantity: 1,
                }))
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumaition(state.selectedItems)
            }
        case 'REMOVE_ITEM':
            const newSelectedItem = state.selectedItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItems: [...newSelectedItem],
                ...sumaition(state.selectedItems)
            }
        case 'INCREASE':
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
                ...sumaition(state.selectedItems)
            }
        case 'DECREASE':
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
                ...sumaition(state.selectedItems)
            }
        case 'CLEAR':
            return {
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checked: false
            }
        case 'CHECKED':
            return {
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checked: true
            }
        default:
        return state;
    }
}


export const CartContext = React.createContext();
const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer ,initialValue)

    return(
        <>
            <CartContext.Provider value={{state, dispatch}} >
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider;