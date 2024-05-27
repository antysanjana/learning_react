import { counterContext } from "../App";
import { useContext } from "react";

export default function ComponentB() {
  const countContext = useContext(counterContext);
  return (
    <div>
      <p>Component B</p>
      <button type="button" onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button type="button" onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
    </div>
  );
}
