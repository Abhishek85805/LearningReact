import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="h-screen flex justify-center" style={{backgroundColor: color}}>
        <div className="fixed flex justify-center flex-wrap bottom-40 rounded-md" 
        style={{backgroundColor: "white"}}>
          <div className="w-20 m-2 p-2 rounded-md text-white" style={{backgroundColor: "red"}}
          onClick={()=>setColor("red")}>
            Red
          </div>
          <div className="w-20 m-2 p-2 rounded-md text-white" style={{backgroundColor: "blue"}}
          onClick={()=>setColor("blue")}>
            Blue
          </div>
          <div className="w-20 m-2 p-2 rounded-md text-white" style={{backgroundColor: "red"}}
          onClick={()=>setColor("green")}>
            Green
          </div>
          <div className="w-20 m-2 p-2 rounded-md text-white" style={{backgroundColor: "black"}}
          onClick={()=>setColor("black")}>
            Black
          </div>
        </div>
      </div>
    </>
  )
}

export default App
