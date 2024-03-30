import React, { useState } from 'react'








function Card() {


  let products = [
    {
      name: "beauty products",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, ipsam optio. Neque ea ipsam quae perferendis rem ut, doloremque sit delectus, eius porro expedita totam, illum sequi voluptatem molestiae. Veritati ",
      src: "https://images.unsplash.com/photo-1567721913486-6585f069b332?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
      instock: true
    },
    {
      name: "headphones",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, ipsam optio. Neque ea ipsam quae perferendis rem ut, doloremque sit delectus, eius porro expedita totam, illum sequi voluptatem molestiae. Veritati ",
      src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
      instock: false
    },
    {
      name: "shoes",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, ipsam optio. Neque ea ipsam quae perferendis rem ut, doloremque sit delectus, eius porro expedita totam, illum sequi voluptatem molestiae. Veritati ",
      src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
      instock: true
    },
  ]

  let [cart, setCart]=useState(0)

  

  

  

  return (


    <>
      <div className=" flex w-full h-[50%] bg-slate-300 justify-center p-5  m-auto gap-5 items-center ">




        {products.map((element, index) => (


          <div key={index} className="container bg-slate-300 h-full w-1/2  p-4 border-slate-500 border-2 rounded-xl text-center flex-col flex justify-center content-center ">
            <img key={index} className='h-[150px] w-[50%] object-cover p-1 m-auto rounded-xl ' src={element.src} />
          
              <h1 key={index} className='p-4 text-xl'> {element.name} </h1>
              <p key={index} className='font-sans text-xs ' >{element.desc}</p>
              <button key={index} className={`p-2 m-2 text-slate-50 rounded ${element.instock ? "bg-blue-700" : "bg-red-500"}`}> {element.instock ? "in stock" : "out of stock"}  </button>
              <button key={index}  onClick={()=>setCart((pre)=>pre+1)} className={`p-2 m-2 text-black font-semibold text-sm rounded bg-zinc-50`}> Add to cart  </button>

          
          </div>
        ))}
      </div>

    </>


  )
}

export default Card

