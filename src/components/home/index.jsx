import React, { Component } from "react";
import Loginbox from "../../7-11-2/components/login-box";
import Header from "../header";
import Main from "../main";
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      toggle: true,
      link: "shouye"
    };
  }

  // 切换箭头
  clickToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  // 改变link
  setRouter = link => {
    this.setState({
      link
    });
  };

  render() {
    return (
      <React.Fragment>
        <Loginbox />
        <Header clickToggle={this.clickToggle} toggle={this.state.toggle} />
        <Main
          clickToggle={this.clickToggle}
          toggle={this.state.toggle}
          setRouter={this.setRouter}
          link={this.state.link}
        />
      </React.Fragment>
    );
  }
}
