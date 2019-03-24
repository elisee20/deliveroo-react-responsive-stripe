import React from "react";
import axios from "axios";
import Price from 'format-price';
import { CardElement, injectStripe, } from "react-stripe-elements";
import CartTotal from "../Cart/CartTotal"


class CheckoutForm extends React.Component {
  state = {
    cart: [],
    error:"false",
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    // console.log(this.state[name]);
  };

  handleSubmit = event => {
    const url =
      "https://55ba12d5.ngrok.io/api";
    event.preventDefault();

    this.props.stripe
    .createToken({
      name: this.state.fullName,
      address_line1: this.state.adresse,
      address_country:"France",
      address_line2:this.state.ville,
      country: "France",
    })
    .then(({ token }) => {
      axios.post(url, {
        token,
        name:this.state.name,
        address: this.state.adresse,
        order:this.props.cart,
        amount: this.props.total,
    
      })
      .then(function(response) {
        console.log("response",response.data);
        if (response.status === 200)
window.location=response.data.receipt_url;
      })
      .catch(function(error) {
        // console.log(error);
this.setState({error:true});
      });
      

  });
  };

  renderFinalCart = cart => {
    let itemsCart = [];
    for (let i = 0; i < cart.length; i++) {
      // console.log(cart[i]);

      itemsCart.push(
        <span key={cart[i].id}>
          <p>{`${cart[i].quantity}x`}</p>
          <p className="cart-menu">{cart[i].menu}</p>
          <p className="price">{Price.format('fr-FR', 'EUR',cart[i].price)}</p>
        </span>
      );
      return itemsCart;
    }
  };
  
  renderError =()=>{
    if (this.state.error === true) return (<p className="error">Erreur de payment</p>)
  }
  
  render() {

    return (

      <main style={{backgroundColor:'#f3f5f5'}} >
      <div className="second-block">
        <div className="wrapper">
          <div className="principal">
            <section className="restaurant-offer">
              <main className="restaurant-items">
                <form onSubmit={this.handleSubmit}>
                  <section className="section-form">
                    <h1>Le Pain Quotidien - Montorgueil</h1>
                    <h3>Adresse de livraison</h3>
                      <label>
                        Nom complet:
                        <input
                          name="fullName"
                          type="string"
                          value={this.state.Name}
                          onChange={this.handleInputChange}
                          placeholder="ex: Kylian Mbappé"
                        />
                      </label>
                    <div className="form-field-half-line">
                      <label>
                        Etage et numéro d'appartement:
                        <input
                          name="Etage"
                          type="string"
                          value={this.state.etage}
                          onChange={this.handleInputChange}
                          placeholder="ex: Appartement n°15"
                        />
                      </label>
                      <div className="spacer" />
                      <label>
                        Digicode
                        <input
                          name="digicode"
                          type="string"
                          value={this.state.digicode}
                          onChange={this.handleInputChange}
                          placeholder="B 1341"
                        />
                      </label>
                    </div>
                    <br />
                    <label>
                      Adresse
                      <input
                        name="adresse"
                        type="string"
                        value={this.state.adresse}
                        onChange={this.handleInputChange}
                        placeholder="ex: 100 rue de Rivoli"
                      />
                    </label>
                    <div className="form-field-half-line">
                      <label>
                        Code postal
                        <input
                          name="codePostal"
                          type="string"
                          value={this.state.codePostal}
                          onChange={this.handleInputChange}
                          placeholder="75001"
                        />
                      </label>
                      <div className="spacer" />
                      <label>
                        Ville
                        <input
                          name="ville"
                          type="string"
                          value={this.state.ville}
                          onChange={this.handleInputChange}
                          placeholder="Paris"
                        />
                      </label>
                    </div>
                    <label>
                      Numéro de téléphone
                      <input
                        name="telephone"
                        type="tel"
                        value={this.state.telephone}
                        onChange={this.handleInputChange}
                        placeholder="+33 6 45 05 05 65"
                      />
                    </label>
                    <label>
                      Instructions pour le livreur
                      <input
                        name="instructions"
                        type="string"
                        value={this.state.telephone}
                        onChange={this.handleInputChange}
                        placeholder="+33 6 45 05 05 65"
                      />
                    </label>
                  </section>
                  <section className={["form-validation","vertical-spacer"].join(" ")}>
                    <span>
                      <span>
                        <p> Votre commande arrivera  </p>
                        <p className="bold">  dans 15-25 min </p>
                      </span>
                    </span>
                    <label>
                   <p> Coordonnées bancaires</p>
                   {this.renderError()}
                    <CardElement />
                    </label>
                    <input
                      type="submit"
                      value="Confirmer & payer"
                      label="Submit"
                    />
                  </section>
                </form>
              </main>
            </section>
            <section className="right-column">
              <div className={["cart-checkout","cart"].join(" ")}>
                <h3 className="cart-checkout-title">
                <span>Panier</span>
                <span className="visible-xs">{`Montant total : ${Price.format('fr-FR', 'EUR',this.props.total)}`}</span>
                </h3>
                <div className="hidden-sm">
                  {this.renderFinalCart(this.props.cart)}
                </div>
                <div>
                <CartTotal 
               sousTotal ={this.props.sousTotal}
                deliveryFees={this.props.deliveryFees} 
                total={this.props.total}/>
              </div>
              </div>
            </section>
            <section className="right-blank"/>
          </div>
        </div>
      </div>
      </main>

    );
  }
}
export default injectStripe(CheckoutForm)