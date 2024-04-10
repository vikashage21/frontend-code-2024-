import React from 'react'


function Works() {
  let data = [
    {
      url: "https://images.unsplash.com/photo-1711861413115-797ee0655214?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
      top: "50%",
      left: "50%",
      isActive: true,
    },
    {
      url: "https://images.unsplash.com/photo-1711861413115-797ee0655214?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
      top: "55%",
      left: "46%",
      isActive: true,
    }
    ,
    {
      url: "https://images.unsplash.com/photo-1711861413115-797ee0655214?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
      top: "56%",
      left: "54%",
      isActive: true,
    }
    , {
      url: "https://images.unsplash.com/photo-1711861413115-797ee0655214?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
      top: "70%",
      left: "45%",
      isActive: true,
    }
  ]

  return (
    <>
      <div className='max-w-screen-xl  h-[60vh] bg-zinc-500 py-2 px-2 mx-auto  '>

        <div className='w-full h-full  text-center   relative'>
          <h1 className='text-[40vh] leading-none font-semibold tracking-tight'>Work</h1>
          <div className={`absolute top-0  w-full h-full flex`}>
          {data.map((items, index) => {
            return (
             items.isActive && <img key={index} src={items.url} className={`obejct-cover absolute  rounded-lg    w-40 h-40 -translate-x-[50%] -translate-y-[50%]`} style={{ top : items.top , left : items.left}} alt="" /> 
            )
          })}
        </div>


        </div>


       


      </div>



    </>

  )
}

export default Works
