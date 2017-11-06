import React, { Component } from "react";

export default class ProductRowComponent extends Component{

  render(){
    const {cart, onEditClick} = this.props;

    return(
      <div className="cart-product row">
      <div className="prod-image col-md-2">
        <img src={`../../assests/images/T${cart.p_id}.jpg`} />
      </div>
      <div className="col-md-7">
        <label className="title-name">{cart.p_variation} {cart.p_name}</label>
        <label className="sub-title">Style #: <span className="title">{cart.p_style}</span></label>
        <label className="sub-title">Colour: {cart.p_selected_color.name}</label>
        <div className="action-buttons">
          <a onClick={() => onEditClick(cart)}>EDIT</a>
          <a>REMOVE</a>
          <a>SAVE FOR LATER</a>
        </div>
      </div>
      <hr/>
      <div className="col-md-1">
        <label className="title">{cart.p_selected_size.code}</label>
      </div>
      <div className="col-md-1">
        <label>{cart.p_quantity}</label>
      </div>
      <div className="col-md-1">
        <label>
          {cart.c_currency}
          {parseInt(cart.p_price * cart.p_quantity).toFixed(2)}
        </label>
      </div>
    </div>
    );
  }
}