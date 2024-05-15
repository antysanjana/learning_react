import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState(null);

  const handleChange = (e) => {
    const inputVal = e.target.value;
    const updatedWarning = inputVal.includes(".js")
      ? "You need JS skill to complete the task. Do you have it?"
      : null;

    setTodo(inputVal);
    setWarning(updatedWarning);
  };

  return (
    <div>
      <p>{todo}</p>
      <p>
        <textarea name="todo" value={todo} onChange={handleChange} />
      </p>
      <hr />
      <h2>{warning || "Good Choice!"}</h2>
    </div>
  );
}
