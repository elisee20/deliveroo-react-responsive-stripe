import  React from "react";
import Items from "./Items";


class Menu extends React.Component{

 renderMenu(menu){
    let items = []; 
    const categories = Object.keys(menu); 

    for (let i = 0; i < categories.length; i++) {
      if (menu[categories[i]].length > 0) {

        items.push(<h2 key={i}>{categories[i]}</h2>);

        for (let j = 0; j < menu[categories[i]].length; j++) {
          items.push(
           <Items 
           menu={this.props.menu} 
           isMenuInCart={this.props.isMenuInCart}
           addtoCart={this.props.addtoCart}
           cart={this.props.cart}
           i={i}
           j={j}
           categories={categories}
           id={menu[categories[i]][j].id}
           />
          );
        }
      }
    }
    //cas d'un composant stateless Cart qui actualise le state du parent, au clic sur quelques zones (increment/decrement)
    //on envoie des props à Cart: le cart(pour que Cart puisse en afficher son contenu)
    // on envoie aussi en props les fonctions increment/decrement pour qu'elle soient éxécuteés dans le contexte de Card et de ses variables
    //isMenuInCart: on n'a aussi besoin de l'envoyer (increment l'appelle)

  return(
    // <section className="restaurant-offer">
     <main className="restaurant-items">{items}</main>
  //  </section>

  ) 
}
    
    render(){
        return <React.Fragment>{this.renderMenu(this.props.menu)}</React.Fragment>

    }
}
export default Menu;