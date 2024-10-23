import s from "./Button.module.css";
export default function Button(props, children) {
  return (
    <button className={s.Button} {...props}>
      {props.children}
    </button>
  );
}
