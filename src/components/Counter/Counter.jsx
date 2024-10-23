import s from "./Counter.module.css";
import { useState } from "react";
export default function Counter(props) {
  const [state, setState] = useState(0);
  function increment() {
    setState(state + 1);
  }
  function decrement() {
    setState(state - 1);
  }
  return (
    <div className={s.Counter}>
      <p>{state}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}
