import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import useFetch from "../hooks/use-fetch";

import Modal from "../UI/Model";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const {
    isLoading: isSubmitting,
    didLoad: didSubmit,
    error,
    sendRequest: saveOrder,
  } = useFetch();
  const [displayCheckout, setDisplayCheckout] = useState(false);

  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const hasItems = ctx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    ctx.addItem(item);
  };
  const orderHandler = () => {
    setDisplayCheckout(true);
  };

  const submitOrderHandler = (userData) => {
    saveOrder(
      {
        url: "https://react-http-yp-project-default-rtdb.firebaseio.com/orders.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          user: userData,
          orderItems: ctx.items,
        },
      },
      []
    );
    ctx.clearCart();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModelContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {displayCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!displayCheckout && modalActions}
    </React.Fragment>
  );

  const isSubmittingModelContent = <p>Sending order data</p>;
  const didSubmitModelContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModelContent}
      {isSubmitting && !didSubmit && isSubmittingModelContent}
      {!isSubmitting && didSubmit && didSubmitModelContent}
    </Modal>
  );
};

export default Cart;
