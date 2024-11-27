import React, { Component } from "react";
import "./styles.css";

export class Button extends Component {
  render() {
    const { buttonText, loadMorePosts, disabled } = this.props;
    return (
      <button className="button" onClick={loadMorePosts} disabled={disabled}>
        {buttonText}
      </button>
    );
  }
}
