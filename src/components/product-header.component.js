import React, { Component } from "react";

export default class ProductHeaderComponent extends Component{

  render(){
    return(
      <div className="product-header row">
        <div className="col-md-9 title item-count">{this.props.itemCount} ITEMS</div>
        <div className="mobile-hide"> 
          <div className="col-md-1 title">SIZE</div>
          <div className="col-md-1 title">QTY</div>
          <div className="col-md-1 title">PRICE</div>
        </div>
      </div>
    );
  }
}