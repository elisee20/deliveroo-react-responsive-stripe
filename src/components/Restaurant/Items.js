import React from "react";
import Price from 'format-price';

function truncate(str, no_cars) {
    return str.substring(0, no_cars);
}


export default class Items extends React.Component {
render(){
    const menu=this.props.menu;
    const i=this.props.i
    const j=this.props.j
    const categories=this.props.categories
 return(
    <article
    key={this.props.id}
    onClick={() =>this.props.addtoCart(menu[categories[i]][j])}
    className={
  this.props.isMenuInCart(menu[categories[i]][j]) === null
    ? null
    : "menu-active"
    }
  >
    <div className="content">
    <div 
     className={
     this.props.isMenuInCart(menu[categories[i]][j]) === null
       ? null
       : "oneline"
       }
       >
    <p    className="item-quantity">
    { this.props.isMenuInCart(menu[categories[i]][j]) === null
      ? null
      :
      `${this.props.cart[this.props.isMenuInCart(menu[categories[i]][j])].quantity}x`
    }  
    </p>
      <p className="item-title">{menu[categories[i]][j].title}</p>
      </div>
      <p >{`${truncate(
        menu[categories[i]][j].description,
        50
      )}...`}</p>
      <span className="oneline">
      <p>{Price.format('fr-FR', 'EUR',menu[categories[i]][j].price)}</p>
      <p className="populaire">{menu[categories[i]][j].popular?"★ Populaire":null}</p>
      </span>
    </div>
    <div className="image-meal">
      <img
        src={menu[categories[i]][j].picture}
        alt={menu[categories[i]][j].id}
        height="60 px"
        className={
          !menu[categories[i]][j].picture ? "isEmpty" : "item-image"
        }
      />
    </div>
  </article>

 )


 }
}