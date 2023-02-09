import React, { useContext } from "react";
import { Link } from "react-router-dom";

import shopIcon from './../../assets/icons/shop.svg';

import { CartContext } from "../../context/CartContextProvider";

const Navbar = () => {

    const {state} = useContext(CartContext)

    return (
        <div>
            <div>
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='aboutus'>About Us</Link></li>
                </ul>
            </div>
            <div>
                <Link to='/shop' ><img src={shopIcon} alt='Shop icon' /></Link>
                <span>{state.itemCounter}</span>
            </div>
        </div>
    )
}

export default Navbar;