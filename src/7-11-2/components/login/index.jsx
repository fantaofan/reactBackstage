import React from "react";
export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      userName,
      passWord,
      onHandleChange,
      onFormSubmit,
      onToggle,
      count,
      vcode,
      close
    } = this.props;
    return (
      <div className="denglu">
        <p>
          登陆<span onClick={close}>X</span>
        </p>
        <form>
          <label className="form-label">
            <input
              type="text"
              placeholder="Username"
              onChange={onHandleChange}
              name="userName"
              value={userName}
            />
          </label>
          <label className="form-label">
            <input
              type="password"
              placeholder="Password"
              onChange={onHandleChange}
              name="passWord"
              value={passWord}
            />
          </label>
          {count >= 2 && (
            <label>
              <div>
                <input
                  type="text"
                  placeholder="Verification Code"
                  name="vcode"
                  value={vcode}
                  onChange={onHandleChange}
                />
                <span>请输入验证码：</span>
                <span>0822</span>
              </div>
            </label>
          )}
          <label className="form-label">
            <button onClick={e => onFormSubmit(e, "login")} className="zhu">
              Login in
            </button>
            <button onClick={onToggle} className="fu">
              <a href="#">注册新用户</a>
            </button>
          </label>
        </form>
      </div>
    );
  }
}
