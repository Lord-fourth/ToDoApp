import React, { useEffect, useState } from "react";

function Checkbox(props) {
  console.log("inside checkbox component");
  console.log("is it marked in checkbox:", props.isItCompleted);
  const [value, setValue] = useState(false);

  return (
    <input
      type="checkbox"
      className="form-check-input"
      checked={props.isItCompleted}
      // onClick={() => props.toggleCheckbox(props.id)}
      onChange={() => props.toggleCheckbox(props.id)}
    ></input>
  );
}
export default Checkbox;
