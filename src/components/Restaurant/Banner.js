import React from "react";
export default class Banner extends React.Component {
  render() {
    return (
      <section className="hero-banner"> 
        <div className="banner-left">
          <h1>{this.props.info.name}</h1>
          <p>{this.props.info.description}</p>
        </div>
        <div className="banner-right">
          <img
            src={this.props.info.picture}
            alt={this.props.info.name}
            className="cover-image"
          />
        </div>
      </section>
    );
  }
}
