import React from "react";

const style = {
  padding: 12,
  backgroundColor: "pink",
};

const Button = () => (
  <button style={style} onClick={() => alert("This is what app1 says")}>
    App 1 Button
  </button>
);

export default Button;
