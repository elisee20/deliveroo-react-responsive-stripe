import React from "react";
import { Elements } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";
class Checkout extends React.Component {
  render() {
    return (
      <Elements>
        <CheckoutForm
        cart={this.props.location.state.cart}
        quantity={this.props.location.state.quantity}
        sousTotal={this.props.location.state.sousTotal}
        total={this.props.location.state.total}
        deliveryFees={this.props.location.state.deliveryFees}
        />
      </Elements>
    );
  }
}

export default  Checkout;