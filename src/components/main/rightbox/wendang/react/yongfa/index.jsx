import React from "react";
function Yongfa() {
  return (
    <div className="pre">
      <pre>
        <code>
          {`
            class HelloMessage extends React.Component {
                render() {
                    return (  
                        Hello {this.props.name}
                    );
                }
            }
              
            ReactDOM.render(
                <HelloMessage name="Taylor" />,
                document.getElementById('hello-example')
            );
         `}
        </code>
      </pre>
    </div>
  );
}
export default Yongfa;
