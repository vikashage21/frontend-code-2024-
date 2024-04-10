import React from 'react'
import { useState } from 'react'

function App() {
  let [count, setCount] = useState(0)
let [totalValue, setValue] = useState([])

  const countFun = () => {

    const currentValue = count;

    setValue((previewValue) =>{
      return [...previewValue, currentValue]
    })
    

  }






  return (
    <>
      <div className=' cantainer flex flex-col  bg-slate-200 w-1/2 h-1/2 m-auto px-5 py-5  text-center items-center '>
        <h1 className='text-4xl text-slate-900 semibold m-5'> Passanger App</h1>

        <h2>{count}</h2>
        <button className=' px-2 py-2 bg-slate-600 rounded-md mx-2 my-2  w-60 ' onClick={() => setCount(count + 1)}> increament</button>
        <button className='px-2 py-2 bg-green-600 rounded-md mx-2 my-2 w-60' onClick={() => countFun()} >save</button>

        <h4> total person :- {  totalValue.map((items )=> {
          return (items + "+"    ) 
        })} = {totalValue.filter((items)=> items )}  </h4>


      </div>

    </>

  )
}

export default App
