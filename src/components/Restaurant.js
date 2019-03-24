import React, { Component } from "react";
import Banner from "./Restaurant/Banner"
import Cart from "./Cart/Cart";
import Menu from "./Restaurant/Menu"
import axios from "axios"
import "../App.css";


class Restaurant extends Component {

  constructor(props){  
    super(props)
    this.state={
      cart: [],
      name: {},
      menu: {}
    }
  this.getData();

  
  }
  getData =()=>{
  
    const url =
        "https://s3-eu-west-1.amazonaws.com/lereacteurapp/react/deliveroo/deliveroo-cart.json";
      axios.get(url, {crossdomain:true}).then(response => {
        this.setState({
          name: response.data.restaurant,
          menu: response.data.menu,

        });
      }).catch(err =>{console.log(err)});

  }
  isMenuInCart = menu => {
    //fonction qui renvoie un index null si le panier est vide. Si le panier est plein, elle renvoie
    //soit l'index de l'item dans le panier s'il a déja été ajouté au préalable dans le panier (this.state.card)
    //ou sinon renvoie null
    let index = null;
    if (this.state.cart.length === 0) {
      return index;
    } else {
      for (let i = 0; i < this.state.cart.length; i++) {
        if (this.state.cart[i].id === menu.id) {
          index = i;
        }
      }
    }
    return index;
  };
  addtoCart = menu => {
    // si l'item n'a pas été ajouté au panier, on l'ajoute, sinon on incremente d'un sa quantité dans le panier
    let index = this.isMenuInCart(menu);
    var newCart = [...this.state.cart];
  
    if (index == null) {
      newCart.push({
        menu: menu.title,
        quantity: 1,
        price: menu.price,
        id: menu.id
      });
    } else if (index >= 0) {
      newCart[index].quantity += 1;
    }
    this.setState({
      cart: newCart
    });
  };

  increment = menu => {
    // est forcément utilisé sur un element du panier (qui s'affiche quand il n'est pas vide (donc un index positif)).
    // pas besoin de prévoir un message d'erreur si l'index est null
    var newCart = [...this.state.cart];

    var index = this.isMenuInCart(menu);
    if (index >= 0) {
      newCart[index].quantity += 1;
    }

    this.setState({
      cart: newCart
    });
  };
  decrement = menu => {
    //decremente le panier et supprime l'item du panier des que sa quantité devient 0
    var newCart = [...this.state.cart];

    var index = this.isMenuInCart(menu);
    if (index >= 0 && menu.quantity > 0) {
      newCart[index].quantity -= 1;
    }
    if (newCart[index].quantity === 0) {
      newCart.splice(index, 1);
      // console.log("newCart" + newCart);
    }
    this.setState({
      cart: newCart
    });
  };

 

 
  render() {
    if (this.state.menu.length === 0) return <div>is Loading...</div>;
    else {
   
      return (
      <main>
            <div className="wrapper">
             <Banner info={this.state.name} />
          </div>
    
       <main style={{backgroundColor:'#f3f5f5'}} >
        <div className="wrapper">
          <div className="principal">
              
            <Menu
             menu={this.state.menu} 
             isMenuInCart={this.isMenuInCart}
             addtoCart={this.addtoCart}
             cart={this.state.cart}

             />
            <section className="right-column">
            <Cart
                className={["cart", "value2"].join(" ")}
                cart={this.state.cart}
                increment={this.increment}
                decrement={this.decrement}
                isMenuInCart={this.isMenuInCart}
                addtoCart={this.addtoCart}
            />
            </section>

        </div>
      </div>
    </main>
    </main>
      );
    }
  }
  
}


export default Restaurant;
