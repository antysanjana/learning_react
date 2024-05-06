import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ClockList from './components/ClockList';
// import Form from './components/Form';
// import Calculator from './components/Calculator';
// import Emoji from './components/composition/Emoji'
// import Text from './components/composition/Text'
// import Bracket from './components/composition/Bracket';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import Counter from './components/HOC/Counter';

function App() {
  const [count, setCount] = useState(0)
  // const quantities = [1, 2, 3];
  return (
    <>
    {/* Higher order component
    <div className="app">
      <ClickCounter /></div>
      <HoverCounter /> */}

      <Counter render={(count, incrementCount) => <ClickCounter count={count} incrementCount={incrementCount}/>}/>
      <Counter render={(count, incrementCount) => <HoverCounter count={count} incrementCount={incrementCount}/>}/></>


    // <div><ClockList quantities={quantities}/></div>
    //Composition
    /*<Emoji>
      {({addEmoji}) => 
      (<Bracket>
        {({addBracket}) => <Text addEmoji={addEmoji} addBracket={addBracket}/>}
      </Bracket>)}
      </Emoji>*/
  )
}

export default App
