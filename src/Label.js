import React from "react";

const Label = ({ texto, cursor, ...args }) => {
  return (
    <label style={{ cursor: cursor }} {...args}>
      {texto}
    </label>
  );
};

export default Label;
