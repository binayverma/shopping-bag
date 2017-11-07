import React, { Component } from "react";
// import { calcSubTotal, discountTotal, estimatedTotal } from "../utils/cart-total-service";

export default class OrderDetailsComponent extends Component{

  render(){
    const { subTotal, discountTotal, estimatedTotal} = this.props;
    return(
      <div className="col-md-8 order-details">
        <div className="row">
          <label className="col-md-6 text-left">Enter Promotion Code</label>
          <input type="text" className="col-md-4 text-right" />
          <button className="btn btn-plain text-right">APPLY</button>
        </div>
        <hr className="thick-line"/>
        <br/>
        <div className="row">
          <label className="col-md-8">SUBTOTAL</label>
          <label className="col-md-4 text-right">${subTotal}</label>
        </div>
        <div className="row">
          <label className="col-md-8">Promotion Code <strong>JF10</strong> Applied</label>
          <label className="col-md-4 text-right">-${discountTotal}</label>
        </div>
        <div className="row">
          <label className="col-md-8">Estimate Shipping*</label>
          <label className="col-md-4 text-right">FREE</label>
          <label className="col-md-8">You qualify for free shipping</label>
          <label className="col-md-8">because your order is over $50*</label>
        </div>
        <hr/>
        <div className="row">
          <label className="col-md-8">ESTIMATED TOTAL</label>
          <label className="col-md-4 text-right">${estimatedTotal}</label>
          <label className="col-md-8">Tax will be applied during checkout</label>
        </div>
        <hr className="thick-line"/>
        <div className="text-right">
          <a>CONTINUE SHIPPING</a>
          <button className="btn btn-primary">CHECKOUT</button>
        </div>
      </div>
    );
  }
}