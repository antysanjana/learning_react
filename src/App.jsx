/* eslint-disable no-unused-vars */
import React, { useState } from "react";

// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import ClockList from './components/ClockList';
// import Form from './components/Form';
// import Calculator from './components/Calculator';
// import Emoji from './components/composition/Emoji'
// import Text from './components/composition/Text'
// import Bracket from './components/composition/Bracket';
// import ClickCounter from "./components/ClickCounter";
// // import HoverCounter from './components/HoverCounter';
// import Counter from "./components/HOC/Counter";
// import Section from "./components/HOC/Section";
// import { ThemeProvider } from "./contexts/themeContext";
// import Todo from "./Todo";
import MyComponent from "./MyComponent";

// export default class App extends React.Component {
//   render() {
//     return (
//       <div className="app">
//         <MyComponent />
//       </div>
//     );
//   }

// render() {
//   return (
//     <div className="app">
//       <Todo />
//     </div>
//   );
// }

// const [count, setCount] = useState(0)
// const quantities = [1, 2, 3];
//  render() {
//     return (
//       <>
//         {/* Higher order component
//       <div className="app">
//         <ClickCounter /></div>
//         <HoverCounter /> */}

//         <Counter
//           render={(count, incrementCount) => (
//             <ClickCounter count={count} incrementCount={incrementCount} />
//           )}
//         />
//         <ThemeProvider>
//           <Section />
//         </ThemeProvider>
//       </>
//     );
//   }

// <div><ClockList quantities={quantities}/></div>
//Composition
/*<Emoji>

      {({addEmoji}) => 
      (<Bracket>
        {({addBracket}) => <Text addEmoji={addEmoji} addBracket={addBracket}/>}
      </Bracket>)}
      </Emoji>*/
// }

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="app">
      <div>{show && <MyComponent />}</div>
      <p>
        <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
          {show ? "Hide" : "Show"}
        </button>
      </p>
    </div>
  );
}

// export default App
