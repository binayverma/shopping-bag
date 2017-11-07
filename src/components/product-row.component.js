import React, { Component } from "react";

export default class ProductRowComponent extends Component{

  render(){
    const {cart, onEditClick} = this.props;

    return(
      <div className="cart-product row">
        <div className="prod-image col-md-2 col-xs-6">
          <img src={`./assets/images/T${cart.p_id}.jpg`} />
        </div>
        <div className="col-md-7 col-xs-6">
          <label className="title-name">{cart.p_variation} {cart.p_name}</label>
          <label className="sub-title">Style #: <span className="title">{cart.p_style}</span></label>
          <label className="sub-title text-capitalize">Colour: {cart.p_selected_color.name}</label>
          <div className="mobile-show">
            <label className="sub-title">Size: <span className="title">{cart.p_selected_size.code}</span></label>
            <label className="sub-title">QTY: {cart.p_quantity}</label>
            <label className="price">
              {cart.c_currency}
              {parseFloat(cart.p_price * cart.p_quantity).toFixed(2)}
            </label>
          </div>
          <div className="col-md-7 col-xs-12 action-buttons mobile-hide">
            <a onClick={() => onEditClick(cart)}>EDIT</a>
            <a>REMOVE</a>
            <a>SAVE FOR LATER</a>
          </div>
        </div>
        <div className="col-md-3 col-xs-12 action-buttons mobile-show">
          <a onClick={() => onEditClick(cart)}>EDIT</a>
          <a>REMOVE</a>
          <a>SAVE FOR LATER</a>
        </div>
        <div className="mobile-hide">
          <div className="col-md-1">
            <label className="title">{cart.p_selected_size.code}</label>
          </div>
          <div className="col-md-1 ">
            <label>{cart.p_quantity}</label>
          </div>
          <div className="col-md-1 ">
            <label className="price">
              {cart.c_currency}
              {parseFloat(cart.p_price * cart.p_quantity).toFixed(2)}
            </label>
          </div>
        </div>
      </div>
    );
  }
}