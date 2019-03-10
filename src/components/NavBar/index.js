import React, { Component } from "react";
import "./style.css";


class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default fixed-top">
         <ul>
          <li className="title">Clicky Game  </li>
          <li className="message">{this.props.message} </li>
          <li className="scores">Score: {this.props.score} | Top Score: {this.props.topscore} </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;