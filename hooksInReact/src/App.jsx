import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const addValue = () =>{
    setCount(count+1);
  }

  const subtractValue = () =>{
    setCount(count-1);
  }

  return (
    <>
      <div>Count: {count}</div>

      <button
      onClick={addValue}
      >Add: {count}</button>
      <br/>
      <button
      onClick={subtractValue}
      >Subtract: {count}</button>
    </>
  )
}

export default App
