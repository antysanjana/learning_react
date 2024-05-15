import Counter from "./Counter";
import HoverCounter from "../HoverCounter";
import { useTheme } from "../../contexts/themeContext";

export default function Content() {
  const { theme } = useTheme();
  return (
    <div>
      <h1>This is a content</h1>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounter
            count={count}
            incrementCount={incrementCount}
            theme={theme}
          />
        )}
      </Counter>
    </div>
  );
}
