import React from "react";
import '../App.css';

export default function ElemComp() {
  return React.createElement(
    "h3",
    { className: "elem-comp" },
    "React createElement component"
  );
}
