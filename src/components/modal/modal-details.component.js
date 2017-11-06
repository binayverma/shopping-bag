import React, { Component } from "react";
import { connect } from 'react-redux';

import { updateShoppingBag } from '../../actions';

class ModalDetailsComponent extends Component{

  state = {
    size: null,
    quanity: 0
  }
  updateCart(id, s, q){
    console.log('id:', id);
    console.log('size:', s);
    console.log('quanity:', q);
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
    const sizeValue = this.state.size ? this.state.size : cart.p_selected_size.code;
    const quantity = this.state.quanity;
    return(
      <div className="container product-details row">
        <div className="col-md-6">
        <label className="title-name">{cart.p_variation} {cart.p_name}</label>
          <label>
            {cart.c_currency}
            {parseInt(cart.p_price).toFixed(2)}
          </label>
          Size:
          <select className="form-control" value={sizeValue} ref="size" onChange={this.updateSize.bind(this)}>
            {
              sizes.map(size => (
                <option key={size.code}>{size.name}</option>
              ))
            }
          </select>
          <br/>
          Quantity:
          <select className="form-control" value={quantity} ref="quant" onChange = {this.updateQuantity.bind(this)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <br/>
          <br/>
          <button className="btn btn-primary" onClick={() => { this.updateCart(cart.p_id, sizeValue, quantity) }}>Edit</button>
        </div>
        <div className="col-md-6">
          <img src={`../../../assests/images/T${cart.p_id}.jpg`} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { carts: state.cart };
}
export default connect(mapStateToProps, { updateShoppingBag })(ModalDetailsComponent);