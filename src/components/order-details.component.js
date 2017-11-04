import React, { Component } from "react";

export default class OrderDetailsComponent extends Component{

  render(){
    return(
      <div className="col-md-8 order-details">
        <span>Enter Promotion Code</span>
        <input type="text" className="" />
        <button className="btn btn-plain">APPLY</button>
        <hr className="thick-line"/>
        <br/>
        <div className="row">
          <label className="col-md-8">SUBTOTAL</label>
          <label className="col-md-4 text-right">$37.00</label>
        </div>
        <div className="row">
          <label className="col-md-8">Promotion Code <strong>JF10</strong> Applied</label>
          <label className="col-md-4 text-right">-$7.00</label>
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
          <label className="col-md-4 text-right">$30.00</label>
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