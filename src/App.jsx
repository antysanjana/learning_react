import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClockList from './assets/ClockList';
import Form from './assets/Form';

function App() {
  const [count, setCount] = useState(0)
  // const quantities = [1, 2, 3];
  return (
    // <div><ClockList quantities={quantities}/></div>
    <div><Form /></div>
  )
}

export default App
