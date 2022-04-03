import React from "react";

export default class Historia extends React.Component {
  render() {
    const historia = this.props.historia;
    return (
      <h1 className="historia">{historia}</h1>
    )
  }
}
