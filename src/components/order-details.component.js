import React, { Component } from "react";

export default class OrderDetailsComponent extends Component{

  render(){
    const { subTotal, discountTotal, estimatedTotal} = this.props;
    return(
      <div className="col-md-8 col-xs-12 order-details">
        <div className="row">
          <div className="col-md-4">
            <label className="title">Enter Promotion Code</label>
            <label className="title">or gift card</label>
          </div>
          <div className="col-md-8 col-xs-12 coupon">
            <input type="text"/>
            <button className="btn-white">APPLY</button>
          </div>
        </div>
        <hr className="thick-line"/>
        <br/>
        <div className="row">
          <label className="col-xs-8">SUBTOTAL</label>
          <label className="col-xs-4 text-right price">${subTotal}</label>
        </div>
        <div className="row">
          <label className="col-xs-8">Promotion Code <strong>JF10</strong> Applied</label>
          <label className="col-xs-4 text-right price">-${discountTotal}</label>
        </div>
        <div className="row">
          <label className="col-xs-8">Estimate Shipping*</label>
          <label className="col-xs-4 text-right">FREE</label>
          <label className="col-xs-8 sub-title">You qualify for free shipping</label>
          <label className="col-xs-8 sub-title">because your order is over $50*</label>
        </div>
        <hr/>
        <div className="row">
          <label className="col-xs-8">ESTIMATED TOTAL</label>
          <label className="col-xs-4 text-right total-price">${estimatedTotal}</label>
          <label className="col-xs-8 sub-title">Tax will be applied during checkout</label>
        </div>
        <hr className="thick-line"/>
        <div className="row checkout">
          <div className="col-md-6 col-xs-12"><a>CONTINUE SHOPPING</a></div>
          <div className="col-md-6 col-xs-12"><button className="btn-main">CHECKOUT</button></div>
        </div>
      </div>
    );
  }
}