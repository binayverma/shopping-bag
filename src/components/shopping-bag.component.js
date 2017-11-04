import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchCart } from '../actions';
import { Link } from "react-router";
// import { Modal, ModalHeader, ModalTitle, ModalClose, ModalBody, ModalFooter } from "react-modal-bootstrap";
import ProductHeaderComponent from './product-header.component';
import ProductRowComponent from './product-row.component';
import HelpLineComponent from './help-line.component';
import OrderDetailsComponent from './order-details.component';
import FooterComponent from './footer.component';
class ShoppingBag extends Component {

  state = {
    isModalOpen: false,
    popupContent: null,
    popupFooter: null
  }
  
  componentDidMount() {
    this.props.fetchCart();
    // this.setState({
    //   isModalOpen: true,
    //   popupFooter: 'test',
    //   popupContent: 'vjvjvjvjv'
    // })
    
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
          <ProductRowComponent cart={cart} />
        </li>
      );
    });
  }

  hideModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <div>
        {/* <Modal isOpen={true} onRequestHide={this.hideModal.bind(this)} style={{ width: "400px" }} >
          <ModalHeader>
            <ModalClose onClick={this.hideModal.bind(this)} />
          </ModalHeader>
          <ModalBody>
            {this.state.popupContent}
          </ModalBody>
          {this.state.popupFooter}
        </Modal> */}
        <h3 className="header">Shopping Bag</h3>
        <hr/>
        <ProductHeaderComponent />
        <hr className="thick-line"/>
        <div className="product-row">
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
        </div>
        <hr className="thick-line"/>
        <div className="order-summary row">
          <HelpLineComponent />
          <OrderDetailsComponent />
        </div>
        <br/><br/>
        <FooterComponent />
        <br/><br/><br/>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { carts: state.cart };
}
export default connect(mapStateToProps, { fetchCart })(ShoppingBag);
