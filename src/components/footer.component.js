import React, { Component } from "react";

export default class FooterComponent extends Component{

  render(){
    return(
      <div className="footer text-right">
        <p>
          <img src={`../../assests/images/lock.jpg`} />
          Secure checkout. Shopping is always safe & secure
        </p>
      </div>
    );
  }
}