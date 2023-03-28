import React from "react";

const Input = ({ ...params }) => {
  return <input type="text" placeholder="Digite o termo" {...params} />;
};

export default Input;
