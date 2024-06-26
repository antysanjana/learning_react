import { useEffect, useState } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  // const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());

  const tick = () => {
    console.log("clock ticking");
    setDate(new Date());
  };

  const addClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    console.log("Document title rendered");
    document.title = `Clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    console.log("starting timer");
    const interval = setInterval(tick, 1000);

    return () => {
      console.log("componet unmounted");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {/* <p>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </p> */}
      <p>Time: {date.toLocaleTimeString()}</p>
      <p>
        <button type="button" onClick={addClick}>
          click
        </button>
      </p>
    </div>
  );
}
