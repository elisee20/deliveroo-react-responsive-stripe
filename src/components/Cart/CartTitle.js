import React from "react";
import { Link } from "react-router-dom";
import Price from 'format-price';

export default class CartTitle extends React.Component {
render(){
    if (this.props.cart.length > 0) 
        return(
        <Link
        to={{
          pathname: "/checkout",
          state: {
            cart: this.props.cart,
            total:this.props.total,
            sousTotal:this.props.sousTotal,
            deliveryFees:this.props.deliveryFees,
            quantity:this.props.quantity
          }
        }}
        style={{ textDecoration: 'none' }}
      >
        <div className={["cart-title", "cart-active"].join(" ")}>
        <span className={["visible-xs","visible-quantity"].join(" ")}>{this.props.quantity}</span>
          {this.props.title}
        <span className="visible-xs">{Price.format('fr-FR', 'EUR',this.props.total)}</span>
        </div>
      </Link>
        )
    
    
    else return (
        <div className="cart-title">Valider mon panier</div>)
    

    }
}