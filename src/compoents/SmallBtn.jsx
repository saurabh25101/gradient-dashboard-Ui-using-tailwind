import React from "react";

const Btn = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`px-8 py-3 rounded-lg font-semibold cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Btn;
