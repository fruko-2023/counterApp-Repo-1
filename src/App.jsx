import { useState } from 'react'
import './App.css'

function App() {
  return (
      <div style={{height:'100vh',background:'black',color:'white'}} className='container'>
         <h1>Counter</h1>
        <div className='counter-section'>
          <button>+</button>
          <h3>0</h3>
          <button>-</button>
        </div>
      </div>
     
  )
}
export default App
