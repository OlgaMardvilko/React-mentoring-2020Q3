import React, { PureComponent } from "react";

export default class PureComp extends PureComponent {
  render() {
    return <h3> {this.props.compName} </h3>
  }
}
