import React from 'react';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const [ buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
    const cartCtx =  useContext(CartContext);
    const { items } = cartCtx;
    const numberOdCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);
    const buttonClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump : ''}`;
    useEffect(() => {
        if(items.length === 0) {
            return;
        }
        setButtonIsHighlighted(true);

        const timer = setTimeout(() => {
            setButtonIsHighlighted(false);
            
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);
    return ( 
        <button className={buttonClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
            {numberOdCartItems}
            </span>
        </button>
     );
}
 
export default HeaderCartButton;