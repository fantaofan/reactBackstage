import React from "react";
import CheckBox from "_rc-checkbox@2.1.7@rc-checkbox";
export default class Register extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      onToggle,
      onFormSubmit,
      userName,
      passWord,
      email,
      passWordEnd,
      checkBox,
      onHandleChange,
      close
    } = this.props;
    return (
      <div className="denglu">
        <p>
          注册<span onClick={close}>X</span>
        </p>
        <form>
          <label className="form-label">
            <input
              type="text"
              placeholder="Username"
              name="userName"
              value={userName}
              onChange={onHandleChange}
            />
          </label>
          <label className="form-label">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onHandleChange}
            />
          </label>
          <label className="form-label">
            <input
              type="password"
              placeholder="Password"
              name="passWord"
              value={passWord}
              onChange={onHandleChange}
            />
          </label>
          <label className="form-label">
            <input
              type="password"
              placeholder="Repassword"
              name="passWordEnd"
              value={passWordEnd}
              onChange={onHandleChange}
            />
          </label>

          <label className="checkbox">
            <input
              type="checkbox"
              name="checkBox"
              checked={checkBox}
              onChange={onHandleChange}
            />
            请同意用户协议
          </label>

          <label className="form-label">
            <button onClick={e => onFormSubmit(e, "register")} className="zhu">
              register
            </button>
            <button onClick={onToggle} className="fu">
              <a href="#">登陆已有账户</a>
            </button>
          </label>
        </form>
      </div>
    );
  }
}
