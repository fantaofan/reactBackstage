import React from "react";
import "./index.scss";
import verity from "../tool/verity.js";
import Login from "../login";
import Register from "../register";
export default class Loginbox extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      passWord: "",
      toggle: true,
      checkBox: false,
      Repassword: "",
      email: "",
      count: 0,
      vcode: "",
      isShow: true
    };
  }

  // 改变值
  onHandleChange = ({ target }) => {
    this.setState({
      [target.name]: target.name === "checkBox" ? target.checked : target.value
    });
  };

  // 取消点击的默认事件
  onFormSubmit = (e, pandName = "login") => {
    e.preventDefault();
    let data = verity(this.state, pandName, this.count);
    if (data.status) {
      alert(data.msg);
      if (pandName === "register") {
        this.setState({
          toggle: true,
          passWord: ""
        });
      } else {
        this.setState({
          isShow: false
        });
      }
      this.setState({
        count: 0
      });
    } else {
      alert(data.msg);
      if (pandName === "login") {
        this.setState({
          count: this.state.count + 1
        });
      }
    }
  };

  // 界面切换
  onToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  // 关闭界面
  close = () => {
    this.setState({
      isShow: !this.state.isShow
    });
  };

  render() {
    let {
      userName,
      passWord,
      checkBox,
      passWordEnd,
      email,
      toggle,
      count,
      isShow
    } = this.state;
    return (
      <React.Fragment>
        {isShow && (
          <div className="zhezhao">
            <div className="login-box">
              {toggle ? (
                <Login
                  userName={userName}
                  passWord={passWord}
                  onHandleChange={this.onHandleChange}
                  onFormSubmit={this.onFormSubmit}
                  onToggle={this.onToggle}
                  count={count}
                  close={this.close}
                />
              ) : (
                <Register
                  userName={userName}
                  passWord={passWord}
                  email={email}
                  passWord={passWord}
                  passWordEnd={passWordEnd}
                  onToggle={this.onToggle}
                  onFormSubmit={this.onFormSubmit}
                  onHandleChange={this.onHandleChange}
                  checkBox={checkBox}
                  close={this.close}
                />
              )}
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
