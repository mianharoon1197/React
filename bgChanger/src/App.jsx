import { useState } from 'react'

import './App.css'

function App() {
  const [bgcolor, setbgcolor] = useState("olive")

  return (
    <div className="h-screen w-full duration-200 flex justify-center items-center"
    style={{backgroundColor:bgcolor}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-white rounded-full shadow-lg w-fit max-w-full'>

        <div className='flex flex-wrap justify-center gap-3 px-3 py-2 '>
        
        <button className=' p-2 rounded-full  text-white'
        onClick={() => setbgcolor("red")}
        style={{backgroundColor:"red"}}
       >Red</button>
        <button className=' p-2 rounded-full text-white'
        onClick={() => setbgcolor("green")}
        style={{backgroundColor:"green"}}
       >Green</button>
        <button className=' p-2 rounded-full text-white'
        onClick={() => setbgcolor("navy")}
        style={{backgroundColor:"navy"}}
       >Navy</button>
        <button className=' p-2 rounded-full text-white'
        onClick={() => setbgcolor("gold")}
        style={{backgroundColor:"gold"}}
       >Gold</button>
        <button className=' p-2 rounded-full text-white'
        onClick={() => setbgcolor("Pink")}
        style={{backgroundColor:"Pink"}}
       >Pink</button>
        <button className=' p-2 rounded-full text-white'
        onClick={() => setbgcolor("Purple")}
        style={{backgroundColor:"Purple"}}
       >Purple</button>
        <button className=' p-2 rounded-full text-white'
        onClick={() => setbgcolor("Orange")}
        style={{backgroundColor:"Orange"}}
       >Orange</button>
        <button className=' p-2 rounded-full text-white'
        onClick={() => setbgcolor("Grey")}
        style={{backgroundColor:"Grey"}}
       >Grey</button>
        <button className=' p-2 rounded-full text-white'
        onClick={() => setbgcolor("Black")}
        style={{backgroundColor:"Black"}}
       >Black</button>
        <button className=' p-2 rounded-full text-white'
        onClick={() => setbgcolor("Salmon")}
        style={{backgroundColor:"Salmon"}}
       >Salmon</button>
        <button className=' p-2 rounded-full text-white'
        onClick={() => setbgcolor("Brown")}
        style={{backgroundColor:"Brown"}}
       >Brown</button>
        
       
        </div>
     
      </div>
    
    </div>
    
  )
}

export default App
