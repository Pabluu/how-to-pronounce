import React from "react";

const Label = ({ texto, ...args }) => {
  return <label {...args}>{texto}</label>;
};

export default Label;
