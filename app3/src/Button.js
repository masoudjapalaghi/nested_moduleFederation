import React from "react";

const style = {
  padding: 12,
  backgroundColor: "#91ff91",
};

const Button = () => (
  <button style={style} onClick={() => alert("This is what app3 says")}>
    App 3 Button
  </button>
);

export default Button;
