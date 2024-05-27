// /* eslint-disable no-unused-vars */
// import "./App.css";
// import React, { useReducer } from "react";
// import ComponentA from "./components/ComponentA";

// // import Time from "./components/Time";
// // // import Counter from "./components/NewCounter";
// // import Counter from "./components/ComplexCounter";
// // // import React, { useMemo, useState } from "react";
// // import Form from "./components/NewForm";
// // import { useCallback } from "react";
// // import Title from "./components/Title";
// // import NewButton from "./components/NewButton";
// // import ShowCount from "./components/ShowCount";
// // import reactLogo from "./assets/react.svg";
// // import viteLogo from "/vite.svg";
// // import ClockList from './components/ClockList';
// // import Form from './components/Form';
// // import Calculator from './components/Calculator';
// // import Emoji from './components/composition/Emoji'
// // import Text from './components/composition/Text'
// // import Bracket from './components/composition/Bracket';
// // import ClickCounter from "./components/ClickCounter";
// // // import HoverCounter from './components/HoverCounter';
// // import Counter from "./components/HOC/Counter";
// // import Section from "./components/HOC/Section";
// // import { ThemeProvider } from "./contexts/themeContext";
// // import Todo from "./Todo";
// // import MyComponent from "./MyComponent";

// // export default class App extends React.Component {
// //   render() {
// //     return (
// //       <div className="app">
// //         <MyComponent />
// //       </div>
// //     );
// //   }

// // render() {
// //   return (
// //     <div className="app">
// //       <Todo />
// //     </div>
// //   );
// // }

// // const [count, setCount] = useState(0)
// // const quantities = [1, 2, 3];
// //  render() {
// //     return (
// //       <>
// //         {/* Higher order component
// //       <div className="app">
// //         <ClickCounter /></div>
// //         <HoverCounter /> */}

// //         <Counter
// //           render={(count, incrementCount) => (
// //             <ClickCounter count={count} incrementCount={incrementCount} />
// //           )}
// //         />
// //         <ThemeProvider>
// //           <Section />
// //         </ThemeProvider>
// //       </>
// //     );
// //   }

// // <div><ClockList quantities={quantities}/></div>
// //Composition
// /*<Emoji>

//       {({addEmoji}) =>
//       (<Bracket>
//         {({addBracket}) => <Text addEmoji={addEmoji} addBracket={addBracket}/>}
//       </Bracket>)}
//       </Emoji>*/
// // }

// const initialState = 0;
// // eslint-disable-next-line react-refresh/only-export-components
// export const counterContext = React.createContext();

// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// export default function App() {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <div>Count: {count}</div>
//       <counterContext.Provider value={{ countDispatch: dispatch }}>
//         <ComponentA />
//       </counterContext.Provider>
//     </div>
//   );
// }

// //useRef, useReduce
// // export default function App() {
// //   return (
// //     <div className="app">
// //       <div>
// //         <Counter />
// //       </div>
// //     </div>
// //   );
// // }

// //useCallBack, useMemo
// /*export default function App() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

//   const incrementByOne = useCallback(() => {
//     setCount1((prevState) => prevState + 1);
//   }, []);

//   const incrementByFive = useCallback(() => {
//     setCount2((prevState) => prevState + 5);
//   }, []);

//   const isEvenOrOdd = useMemo(() => {
//     let i = 0;
//     while (i < 100000000) i += 1;
//     return count1 % 2 === 0;
//   }, [count1]);

//   return (
//     <div className="app">
//       <Title />
//       <ShowCount count={count1} title="Counter 1" />
//       <span>{isEvenOrOdd ? "Even" : "Odd"}</span>
//       <NewButton handleClick={incrementByOne}>Increment By One</NewButton>
//       <hr />
//       <ShowCount count={count2} title="Counter 2" />
//       <NewButton handleClick={incrementByFive}>Increment By Five</NewButton>
//     </div>
//   );

//   // const [show, setShow] = useState(true);

//   // return (
//   //   <div className="app">
//   //     <div>{show && <MyComponent />}</div>
//   //     <p>
//   //       <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
//   //         {show ? "Hide" : "Show"}
//   //       </button>
//   //     </p>
//   //   </div>
//   // );
// }*/
