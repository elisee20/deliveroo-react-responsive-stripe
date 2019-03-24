import React from "react";
import Price from 'format-price';

export default class CartTotal extends React.Component {
render(){

        return(
            <div>
            <div className={["sous-total", "hidden-sm"].join(" ")}>
              <span>
                <p className="cart-text">Sous-Total</p>
                <p className="cart-text">{Price.format('fr-FR', 'EUR',this.props.sousTotal)}</p>
              </span>
              <span className="cart-items">
                <p className="cart-text">Frais de livraison</p>
                <p className="cart-text">{Price.format('fr-FR', 'EUR',this.props.deliveryFees)}</p>
              </span>
            </div>
            <div className={["total", "hidden-sm"].join(" ")}>
              <span>
                <p className="cart-text">Total</p>
                <p className="cart-text">{Price.format('fr-FR', 'EUR',this.props.total)}</p>
              </span>
            </div>
          </div>
        )


    }
}