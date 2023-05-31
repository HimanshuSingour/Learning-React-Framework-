import React from "react";

function TextShow(props , them) {
  return (
    <div className="container border bg-them">
      <h6>{props.about}</h6>
    </div>
  );
}

export default TextShow;
