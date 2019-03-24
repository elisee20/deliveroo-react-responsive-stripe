import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="wrapper">
  
          <img
            src="./assets/img/logo_deliveroo.png"
            alt={this.props.img}
            className="logo"
            height="40px"
          />
          {this.props.children}

        </div>

      </header>
    );
  }
}
