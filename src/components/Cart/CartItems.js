import React from "react";
import Price from 'format-price';

export default class CartItems extends React.Component {
render(){
    var array = [];
    const cart=this.props.cart;
    console.log("cartin cartitems",this.props.cart);
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        array.push(
          <span key={cart[i].id} className="cart-items">
          <span className="quantity-section">
            <p className="plus" onClick={() => this.props.decrement(cart[i])}>
              -             
            </p>
            <p className="quantity"> {cart[i].quantity}</p>
            <p className="plus" onClick={() => this.props.increment(cart[i])}>
              +
            </p>
          </span>
            <p className="cart-menu"> {cart[i].menu} </p>
            <p className="price"> {Price.format('fr-FR', 'EUR',cart[i].price)}</p>
          </span>
        );
    
      }
      console.table("cartincart" + array[0]);
      return( <ul className={["cart-content","hidden-sm"].join(" ")}>{array}</ul>)

    }
}
}