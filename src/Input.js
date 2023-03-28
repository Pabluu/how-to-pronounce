import React from "react";

const Input = ({ ...params }) => {
  return <input type="text" placeholder="Termo a procurar" {...params} />;
};

export default Input;
