import { useState } from 'react'
import './App.css'

function App() {
  //from here below counter is value,setCounter is the function for updating/changing the  counter
  // ,and useState in initial value where currently has 0 value
  const [counter,setCounter]=useState(0)
  //Note for useState:
  //1.counter : a variable which at first has a value of 0;
  //2.setCounter :a function that can change counter
//3.useState is the function that initializes 0 to counter,it is an array that returns an array value
  return (
      <div style={{height:'100vh',background:'black',color:'white'}} className='container'>
         <h1>Counter</h1>
        <div className='counter-section'>
          <button onClick={()=>setCounter(counter+1)}>+</button>
          <h3>{counter}</h3>
          <button onClick={()=>setCounter(counter-1)}>-</button>
        </div>
      </div>
  )
}
export default App
