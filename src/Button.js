import React from "react";

const Button = ({ texto, ...args }) => {
  return <button {...args}>{texto}</button>;
};

export default Button;
