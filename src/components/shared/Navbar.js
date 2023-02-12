import React, { useContext, useReducer } from "react";
import { Link } from "react-router-dom";

import styles from './Navbar.module.css';
import shopIcon from './../../assets/icons/shop.svg';

import { CartContext } from "../../context/CartContextProvider";


const initialValue =  {
    status1: false,
    status2: true,
    status3: false,
}

const statusReducer = (status, action) => {

    switch(action.type) {
        case 'HOME':
            return{
                status1: true,
                status2: false,
                status3: false,
            }
        case 'PRODUCTS':
            return{
                status1: false,
                status2: true,
                status3: false,
            }
        case 'ABOUT':
            return{
                status1: false,
                status2: false,
                status3: true,
            }
        case 'SHOP':
            return{
                status1: false,
                status2: false,
                status3: false,
            }
        default: 
            return status;
    }
}

const Navbar = () => {

    const [status, dispatch] = useReducer(statusReducer, initialValue);
    const {state} = useContext(CartContext)

    return (
        <div className={styles.header}>
            <div className={styles.linkContainer}>
                <h5  onClick={() => dispatch({type: 'HOME'})} ><Link className={status.status1 ? styles.clicked : styles.notClicked } to='/home'>Home</Link></h5>
                <h5  onClick={() => dispatch({type: 'PRODUCTS'})} ><Link className={status.status2 ? styles.clicked : styles.notClicked } to='/products'>Products</Link></h5>
                <h5  onClick={() => dispatch({type: 'ABOUT'})} ><Link className={status.status3 ? styles.clicked : styles.notClicked } to='/aboutus'>About Us</Link></h5>
            </div>
            <div className={styles.icon}>
                <Link to='/shop' ><img src={shopIcon} alt='Shop icon' /></Link>
                <span>{state.itemCounter}</span>
            </div>
        </div>
    )
}

export default Navbar;