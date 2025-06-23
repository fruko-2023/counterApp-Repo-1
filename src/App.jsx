import { useState,useEffect } from 'react'
import './App.css'

function App() {
  //from here below counter is value,setCounter is the function for updating/changing the  counter
  // ,and useState in initial value where currently has 0 value
  const [counter,setCounter]=useState(0)
  const [date,setDate]=useState('')
  //Note for useState:
  //1.counter : a variable which at first has a value of 0;
  //2.setCounter :a function that can change counter
//3.useState is the function that initializes 0 to counter,it is an array that returns an array value
useEffect(()=>{
  console.log(typeof(Number(localStorage.getItem('count'))))
   setCounter(Number(localStorage.getItem('count')))
},[])
//This use effect above it used to store data into browser(local storage) permanently even if you refresh


function handleInc()
{
  setDate(new Date().toString())
  //only this local storage line is used to install permanently into local storage(install small things but not credentials,pictures or videos)
  localStorage.setItem('count',counter+1)
  setCounter(counter+1)
}
function handleDec()
{
  setDate(new Date().toString())
  localStorage.setItem('count',counter-1)
  setCounter(counter-1)
}
  return (
      <div style={{height:'100vh',background:'black',color:'white'}} className='container'>
         <h1>Counter</h1>
        <div className='counter-section'>
        {/* <button onClick={()=>setCounter(counter+1)}>+</button> */}
          <button onClick={handleInc}>+</button>
          <h3>{counter}</h3>
          <button onClick={handleDec}>-</button>
        </div>
        <h3>{date}</h3>
      </div>
  )
}
export default App
