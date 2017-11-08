import React, { Component } from "react";
import { connect } from 'react-redux';

import { updateShoppingBag } from '../../actions';

class ModalDetailsComponent extends Component{

  state = {
    size: null,
    quanity: 0
  }
  updateCart(id, s, q){
    this.props.hideModal();
    this.props.updateShoppingBag(id, s, q);
  }
  updateSize(e){
    this.setState({
      size: e.target.value
    });
  }

  updateQuantity(e){
    this.setState({
      quanity: e.target.value
    });
  }

  render(){
    if(!this.props.cart){
      return null;
    }
    const { cart } = this.props;
    const sizes = cart.p_available_options.sizes;
    const colors = cart.p_available_options.colors;
    const sizeValue = this.state.size ? this.state.size : cart.p_selected_size.code;
    const quantity = this.state.quanity;
    return(
      <div className="product-modal row">
        <div className="col-md-6">
          <hr className="thick-line"/>
          <div className="left">
          <label className="title-name">{cart.p_variation} {cart.p_name}</label>
            <label className="price">
              {cart.c_currency}
              {parseFloat(cart.p_price).toFixed(2)}
            </label>
            <label className="title">{cart.p_variation}</label>
                {
                  colors.map(color => (
                    <div key={color.name} style={{background: color.hexcode}} className="color-box"></div>
                  ))
                }
            <div className="row">
              <div className="col-md-6">
              Size:
              <select className="form-control" value={sizeValue} onChange={this.updateSize.bind(this)}>
                {
                  sizes.map(size => (
                    <option key={size.name}>{size.code}</option>
                  ))
                }
              </select>
              </div>
              <div className="col-md-6">
              Quantity:
              <select className="form-control" value={quantity} onChange={this.updateQuantity.bind(this)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              </div>
            </div>
            <button className="btn-main title" onClick={() => { this.updateCart(cart.p_id, sizeValue, quantity) }}>Edit</button>
            <label><a>See product details</a></label>
          </div>
        </div>
        <div className="col-md-6 right">
          <img src={`./assets/images/T${cart.p_id}.jpg`} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { carts: state.cart };
}
export default connect(mapStateToProps, { updateShoppingBag })(ModalDetailsComponent);