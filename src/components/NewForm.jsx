import { useEffect, useRef } from "react";
import Input from "./NewInput";

export default function Form() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <p>
        {/* <input ref={inputRef} type="text" placeholder="Enter Something..." /> */}
        <Input ref={inputRef} type="text" placeholder="enter something..." />
      </p>
    </div>
  );
}
