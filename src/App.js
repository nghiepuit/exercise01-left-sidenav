import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSidebar: true
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState({
      openSidebar: !this.state.openSidebar
    });
  }

  render() {
    const { openSidebar } = this.state;
    return (
      <div className="App">
        <Sidebar isOpen={openSidebar} />
        <div className={`content ${openSidebar ? "" : "remove-left"}`}>
          <span className="fas fa-th" style={{ cursor: "pointer" }} onClick={this.toggleSidebar} />
          <span style={{ marginLeft: 10 }}>Content</span>
        </div>
      </div>
    );
  }
}
