import React from 'react';
import { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {

    return ( 
        //jsx code
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}> 
             {/* with dash so syntax change */}
            <img src={mealsImage} alt="meals"/>
            </div>
        </Fragment>
     );
}
 
export default Header;