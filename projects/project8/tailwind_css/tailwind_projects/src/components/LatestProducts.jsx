import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";

function LatestProducts() {
 let [val , setval]=useState(false)

  return (
    <>
    <div className='w-full h-[60vh] bg-slate-400 p-9 m-auto flex-col flex justify-center items-center overflow-hidden '>
        <h1 className=' p-5 mt-4 text-zinc-50 text-2xl font-semibold '> Latest Products Avaliable </h1>
      <div className="products_image flex justify-center items-center w-[100%] h-[100%] p-5 gap-10   	">
        <img className={`h-full w-full object-cover transition-transform duration-75  rounded-md  shrink-0 ${val===false ? "-translate-x-[0%]" : "-translate-x-[100%]" }`} src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img  className={`h-full w-full object-cover transition-transform duration-75 rounded-md shrink-0 ${val===false ? "-translate-x-[0%]" : "-translate-x-[100%]" }`} src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className={`h-full w-full object-cover transition-transform duration-75 rounded-md shrink-0 ${val===false ? "-translate-x-[0%]" : "-translate-x-[100%]" }`} src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

      </div>

      <span onClick={()=>setval(()=>!val)} className='w-10 h-10 bg-[#dadadf] rounded-full mb-5 flex justify-center items-center p-2' >
      <FaArrowRight />
      </span>


    </div>
    </>
  )
}

export default LatestProducts
