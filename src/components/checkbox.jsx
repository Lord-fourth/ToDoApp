import React, { useEffect, useState } from "react";

function Checkbox(props) {
  console.log("is it marked in checkbox:", props.isItCompleted);
  const [value, setValue] = useState(false);

  useEffect(() => {
    console.log("inside use effect");
    setValue(props.isItCompleted);
  }, [props.isItCompleted]);
  return (
    <input
      key={props.isItCompleted}
      type="checkbox"
      className="form-check-input"
      checked={value}
      onClick={() => props.toggleCheckbox(props.id)}
      onChange={props.toggleCheckbox}
    ></input>
  );
}
export default Checkbox;
