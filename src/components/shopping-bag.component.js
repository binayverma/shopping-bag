import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchCart } from '../actions';

class ShoppingBag extends Component {
  
  componentDidMount() {
    this.props.fetchCart();

    
  }

  renderPosts() {
    
    const {data, status, statusText} = this.props.carts;
    if(!data){
      return null;
    }
    console.log('cart', data.productsInCart);
    return _.map(data.productsInCart, cart => {
      return (
        <li className="list-group-item" key={cart.p_id}>
          
            {cart.p_name}
         
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Shopping Bag</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { carts: state.cart };
}
export default connect(mapStateToProps, { fetchCart })(ShoppingBag);
