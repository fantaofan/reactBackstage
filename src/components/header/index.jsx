import React, { Component } from "react";
import "./index.scss";
export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header flex flex-bt">
        <div className="logo flex">
          <div className="logo-toggle center" onClick={this.props.clickToggle}>
            <i
              className={
                this.props.toggle
                  ? "iconfont icon-jiantou_xiangzuoliangci"
                  : "iconfont icon-jiantou_xiangyouliangci"
              }
            />
          </div>
          <div className="logo-brand">
            <a href="#/">React后台</a>
          </div>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <a href="javascript:;">
                <span className="flex">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/1.jpg`}
                    className="header-img"
                  />
                  FTF
                  <i className="iconfont icon-arrow-down" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
