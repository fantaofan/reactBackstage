import React from "react";
function Text() {
  return (
    <div>
      <div className="pre">
        <pre>
          <code>
            {`
              class Welcome extends React.Component {
                render() {
                  return <h1>Hello, {this.props.name}</h1>;
                }
              }
            `}
          </code>
        </pre>
      </div>
    </div>
  );
}
export default Text;
