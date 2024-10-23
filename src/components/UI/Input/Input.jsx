import s from "./Input.module.css";
import React from "react";
const Input = React.forwardRef((props, ref) => {
  return <input className={s.Input} type="text" {...props} ref={ref} />;
});
export default Input;
