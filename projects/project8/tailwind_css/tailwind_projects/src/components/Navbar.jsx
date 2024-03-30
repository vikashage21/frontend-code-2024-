import React, { useState } from 'react'




function Navbar(props) {

 


  return (
    <div>
      <div className="nav w-full h-10 bg-slate-500 flex  justify-between">

        <h1 className='text-slate-50 font-semibold p-2'> shopy.com</h1>

        <div className="cart flex">
            <img  src="https://img.icons8.com/color/48/000000/shopping-cart.png" alt="cart" className="w-fit h-8 object-cover"/>
            <span className="text-slate-50 font-semibold p-2">0</span>
        </div>


      </div>
    </div>
  )
}

export default Navbar
