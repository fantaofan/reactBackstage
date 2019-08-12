export default (param = {}, pandName) => {
  const {
    userName,
    passWord,
    email,
    passWordEnd,
    checkBox,
    vcode,
    count
  } = param;
  switch (pandName) {
    case "register":
      // 用户名
      if (userName === "" || userName.length < 2) {
        return {
          status: false,
          msg: "您的用户名不许为空，并且长度不小于2位"
        };
      }

      // 邮箱
      const reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
      if (email === "" || !reg.test(email)) {
        return {
          status: false,
          msg: "您的邮箱不许为空，并且不符合邮箱规则"
        };
      }

      // 密码
      if (passWord === "" || passWord.length < 6) {
        return {
          status: false,
          msg: "您的密码不许为空，并且长度不小于6位"
        };
      }

      // 确认密码
      if (passWord !== passWordEnd) {
        return {
          status: false,
          msg: "您的两次密码不相同，请检查！"
        };
      }

      if (checkBox === false) {
        return {
          status: false,
          msg: "请同意用户协议"
        };
      }
  }
  switch (pandName) {
    case "login":
      // 用户名
      if (userName === "" || userName.length < 2) {
        return {
          status: false,
          msg: "用户名错误"
        };
      }

      // 密码
      if (passWord === "" || passWord.length < 6) {
        return {
          status: false,
          msg: "您的密码不许为空，并且长度不小于6位"
        };
      }

      // 验证码
      if (count !== 0) {
        if (vcode === "" || vcode !== "0822") {
          return {
            status: false,
            msg: "您的验证码不匹配"
          };
        }
      }
  }
  return {
    status: true,
    msg: `恭喜，${pandName === "login" ? "登陆" : "注册"}成功！`
  };
};
