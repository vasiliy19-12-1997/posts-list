import s from "./Button.module.css";
export default function Button({ children, ...props }) {
  return (
    <button className={s.Button} {...props}>
      {children}
    </button>
  );
}
