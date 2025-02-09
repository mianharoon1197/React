import { useState,useCallback, useEffect,useRef } from 'react'


function App() {
  const [password,setpassword] = useState("")
  const [length,setlength] = useState(10)
  const [numallowed,setnumallowed] = useState(false)
  const [charallowed,setcharallowed] = useState(false)

  const Generator = useCallback(() => {
    let str  = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let char = '!@#$%^&*()_+'
    let num = '0123456789'
    let pass = ''
    if(numallowed) str += num
    if(charallowed) str += char

    for(let i = 0;i<length;i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  },
  [length,numallowed,charallowed,setpassword])//dependency array as if we change any of these values the function will run again

//for copying the password to clipboard
  const passRef = useRef(null)
  const copyToClipboard = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
    alert('Password Copied To Clipboard!')
 
    
  },[password])//for optimization

  useEffect(() => {Generator()}, [length,numallowed,charallowed,Generator])//dependency array as if we change any of these values the function will run again
  return (
    <>
    <div className='w-full max-w-lg mx-auto bg-gray-600  
    rounded-lg px-3 py-3 my-8 text-orange-500 shadow-lg'>
      <h1 className='text-center text-4xl font-bold text-white mb-3'>Password Generator</h1>
      <div className='flex mb-4 overflow-hidden rounded-full'>
      <input type='text' value={password}
        readOnly
        className = 'outline-none w-full py-1 px-3'
        placeholder='Your Password'
        ref={passRef}
        >
        </input>
        <button  
        onClick={copyToClipboard}
        className='bg-blue-500 overflow-hidden px-3 py-3 font-bold shrink-0 text-black 
        hover:text-white cursor-pointer hover:bg-blue-800 ease-in-out duration-300'
        
        >Copy</button>
      
      </div>
      <div className='flex flex-sm gap-x-4'>
        <div className='flex items-center gap-x-2'>
          <input 
          type="range" 
          min={10}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>setlength(e.target.value)}
          
          />
          <label> Lenght: {length}</label>
        </div>
        <div className='flex items-center gap-x-2'>
        <input 
        type="checkbox"
        id='numberinput'
        defaultChecked={numallowed}
        onChange={()=>setnumallowed((prev)=>!prev)}
        />
        <label htmlFor='numberinput'>Numbers</label>
        </div>

        <div className='flex items-center gap-x-2'>
        <input 
        type="checkbox"
        id='charinput'
        defaultChecked={charallowed}
        onChange={()=>setcharallowed((prev)=>!prev)}
        />
        <label htmlFor='charinput'>Characters</label>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App
