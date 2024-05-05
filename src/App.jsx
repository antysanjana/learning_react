import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClockList from './components/ClockList';
import Form from './components/Form';
import Calculator from './components/Calculator';
import Emoji from './components/composition/Emoji'
import Text from './components/composition/Text'
import Bracket from './components/composition/Bracket';

function App() {
  const [count, setCount] = useState(0)
  // const quantities = [1, 2, 3];
  return (
    // <div><ClockList quantities={quantities}/></div>
    <Emoji>
      {({addEmoji}) => 
      (<Bracket>
        {({addBracket}) => <Text addEmoji={addEmoji} addBracket={addBracket}/>}
      </Bracket>)}
      </Emoji>
  )
}

export default App
