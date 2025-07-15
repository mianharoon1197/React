import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// to propagate changes to the UI we have to use the useState hook
function App() {

 // let countrval = 5;//in this it will not update the value of the counter on UI 
  // because we are not using the useState hook to update the value of the counter
  // so we will use the useState hook to update the value of the counter on UI
  // useState is a hook that allows you to have state variables in functional components.
  // in usestate we have to pass the initial value of the variable and store the value of the variable in a variable of array
  // in which first element is the value of the variable and the second element is the function to update/control the value of the variable
  let [countrval, setcountrval] = useState(5);//use let instead of const because we are updating the value of the variable

  const addvalue = () => {
    if(countrval<20){
    countrval = countrval + 1;
   // console.log(countrval);
    setcountrval(countrval); // or setcountrval(countrval + 1);
    }
    else{
      alert("Counter value can not be greater than 20");
    }
  }
  const remvalue = () => {
    if(countrval>0){
    //countrval = countrval - 1;
   // console.log(countrval);
    setcountrval(countrval - 1); 
  }
    else{
      alert("Counter value can not be less than 0");
    }
  }
  return (
    <>
     <h1>Haroon</h1>
     <h2>Counter: {countrval}</h2>
     <button id='addbtn' onClick={addvalue}
     >Add Value</button>
     <br />
     <button id='rmbtn' onClick={remvalue}
     >Remove Value</button>
    </>
  )
}

export default App
