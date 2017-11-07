import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCart, updateShoppingBag } from '../actions';
import { Link } from "react-router";
import { Modal, ModalHeader, ModalTitle, ModalClose, ModalBody, ModalFooter } from "react-modal-bootstrap";
import priceUtils  from "../utils/cart-total-service";
import ProductHeaderComponent from './product-header.component';
import ProductRowComponent from './product-row.component';
import HelpLineComponent from './help-line.component';
import OrderDetailsComponent from './order-details.component';
import FooterComponent from './footer.component';
import ModalDetailsComponent from './modal/modal-details.component';

class ShoppingBag extends Component {

  state = {
    isModalOpen: false,
    prodId: null,
    data: null,
    carts: this.props.carts ? this.props.carts : ''
  }
  
  componentDidMount() {
    this.props.fetchCart();
    this.onEditClick = this.onEditClick.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      carts: nextProps.carts
    });
  }

  onEditClick(data) {
    if(data != null){
      this.setState({
        prodId: data.p_id,
        isModalOpen: true,
        data
      });
    }
  }

  renderPosts() {
    const {data, status, statusText} = this.state.carts;
    if(!data){
      return null;
    }
    // console.log('cart', data.productsInCart);
    return data.productsInCart.map(cart => {
      return (
        <li className="list-group-item" key={cart.p_id}>
          <ProductRowComponent cart={cart} onEditClick={this.onEditClick} />
        </li>
      );
    });
  }

  hideModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    const { propId, data, isModalOpen, carts, itemCount } = this.state;
    
    if(!carts.data){
      return null;
    }
    let cart = carts.data.productsInCart;

    const {subTotal, discount, estimatedTotal} = priceUtils(cart);

    return (
      <div>
        <h3 className="header">Shopping Bag</h3>
        <hr className="mobile-hide"/>
        <ProductHeaderComponent itemCount={cart.length}/>
        <hr className="thick-line"/>
        <div className="product-row">
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
        </div>
        <hr className="thick-line"/>
        <div className="order-summary row">
          <HelpLineComponent />
          <OrderDetailsComponent subTotal={subTotal} discountTotal={discount} estimatedTotal={estimatedTotal}/>
        </div>
        <FooterComponent />
        <br/><br/>
        <Modal isOpen={isModalOpen} onRequestHide={this.hideModal.bind(this)}>
          <ModalHeader>
            <ModalClose onClick={this.hideModal.bind(this)} />
          </ModalHeader>
          <ModalBody>
            <ModalDetailsComponent cart={data} hideModal={this.hideModal.bind(this)}/>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { carts: state.cart };
}
export default connect(mapStateToProps, { fetchCart, updateShoppingBag })(ShoppingBag);
