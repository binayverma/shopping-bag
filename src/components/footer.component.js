import React, { Component } from "react";

export default class FooterComponent extends Component{

  render(){
    return(
      <div className="footer">
        <div className="secure-message">
          <img src={`./assets/images/lock.jpg`} />
          <p className="sub-title">Secure checkout. Shopping is always safe & secure</p>
        </div>
        <div className="mobile-show signin">
          <hr/>
          <a>SIGN IN</a> to save your cart and have access to your item on mobile, tablet, and desktop.
        </div>
        <hr/>
        <div className="signature">Developed by <a href="http://binayverma.com/" target="_blank">Binay Verma</a></div>
      </div>
    );
  }
}