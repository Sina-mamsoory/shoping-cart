import React, { useReducer } from "react";
import { act } from "react-dom/test-utils";

const initialValue = {
    selectedItems: [],
    itemCounter: 0,
    total: 0,
    checked: false
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
                selectedItems: [...state.selectedItems]
            }
        case 'REMOVE_ITEM':
            const newSelectedItem = state.selectedItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItems: [...state.selectedItems],
            }
        case 'INCREASE':
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
            }
        case 'DECREASE':
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems.quantity--;
            return {
                ...state,
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