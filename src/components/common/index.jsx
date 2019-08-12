import React from "react";
import "./index.scss";
function Content(props) {
  var render = props => {
    if (props.type && props.type === "li") {
      return <props.type className={props.liName}>{props.children}</props.type>;
    } else {
      return <div className={props.liName}>{props.children}</div>;
    }
  };
  return render(props);
}

export default Content;
