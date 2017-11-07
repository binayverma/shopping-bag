import React, { Component } from "react";

export default class HelpLineComponent extends Component{

  render(){
    return(
      <div className="col-md-4 help-line mobile-hide">
        <div>
          <label>Need help</label>
          <label>or have questions?</label>
        </div>
        <div>
          <label>Call Customer Service at</label>
          <label>1-800-555-5555</label>
        </div>
        <div>
          <label><a>Chat with one of<br/>our stttylists</a></label>
        </div>
        <div>
          <label><a>See return<br/>& exchnage policy</a></label>
        </div>
      </div>
    );
  }
}