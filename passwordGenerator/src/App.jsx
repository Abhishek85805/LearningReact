import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(isNumber){
      s+="0123456789";
    }
    if(isCharacter){
      s+="~!@#$%^&*()_";
    }

    for(let i=1; i<=length; i++){
      let rand = Math.floor(Math.random()*s.length+1);
      pass += s.charAt(rand);
    }

    setPassword(pass);
  }, [length, isNumber, isCharacter]);

  useEffect(()=>{
    passwordGenerator();
  }, [length, isNumber, isCharacter, passwordGenerator])

  const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className="h-screen flex justify-center" style={{backgroundColor: "black"}}>
        <div className="mt-20 bg-gray-700 h-32 w-1/3 rounded-md p-3 flex flex-col justify-evenly">
          <div className="flex flex-row w-full">
            <input type="text" value={password} className="w-full rounded-l-md" ref={passwordRef}/>
            <button className="text-white bg-blue-700 rounded-r-md p-1" onClick={copyPasswordToClipboard}>Copy</button>
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <input type="range" min={6} max={100} id="range" value={length} className="mr-1"
              onChange={(e)=>{setLength(e.target.value)}}/>
              <label htmlFor="range" className="text-orange-500">Length({length})</label>
            </div>
            <div>
              <input type="checkbox" id="checkbox1" value={isNumber} className="mr-1"
              onChange={()=>{
                setIsNumber((prev) => !prev)
              }}/>
              <label htmlFor="checkbox1" className="text-orange-500">Numbers</label>
            </div>
            <div>
              <input type="checkbox" id="checkbox2" value={isCharacter} className="mr-1"
              onChange={()=>{
                setIsCharacter((prev) => !prev)
              }}/>
              <label htmlFor="checkbox2" className="text-orange-500">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
