import React, { Component } from "react";

export default class HelpLineComponent extends Component{

  render(){
    return(
      <div className="col-md-4 help-line">
        <div>
          <label>Need help</label>
          <label>or have questions?</label>
        </div>
        <div>
          <label>Call Customer Service at</label>
          <label>1-800-555-5555</label>
        </div>
        <div>
          <label><a>Chat with one of</a></label>
          <label><a>our stttylists</a></label>
        </div>
        <div>
          <label><a>See return</a></label>
          <label><a>& echnage policy</a></label>
        </div>
      </div>
    );
  }
}