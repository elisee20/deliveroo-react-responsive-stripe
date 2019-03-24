import React from "react";

import CartTitle from "./CartTitle"
import CartItems from "./CartItems"
import CartTotal from "./CartTotal"

export default class Cart extends React.Component {

  render() {
    // console.log("props" + this.props.cart); 
    var cartQuantity=0;
    var sousTotal = 0;
    var deliveryFees = 2.5;

    for (let i = 0; i < this.props.cart.length; i++) {
      cartQuantity+=Number(this.props.cart[i].quantity)
      sousTotal += Number(this.props.cart[i].price) * Number(this.props.cart[i].quantity);
    }
   var total=sousTotal+deliveryFees;
    if (this.props.cart.length > 0) {
      return (
        <div className={["cart", "box-active"].join(" ")}>
        <CartTitle
        cart={this.props.cart}
        total={total}
        quantity={cartQuantity}
        sousTotal={sousTotal}
        deliveryFees={deliveryFees} 
        title={"Valider mon panier"}
        />
          <CartItems 
        cart={this.props.cart}
        decrement={this.props.decrement}
        increment={this.props.increment}
          />
          <div className="total-price">
            <CartTotal 
               sousTotal ={sousTotal}
                deliveryFees={deliveryFees} 
                total={total}/>

          </div>
        </div>
      );
    } else
      return (
        <div className={["cart", "hidden-sm"].join(" ")}>
        <CartTitle
        cart={this.props.cart}
        />          
        <p className={["cart-content", "cart-inactive"].join(" ")}>
            Votre panier est vide
          </p>
        </div>
      );
  }
}
