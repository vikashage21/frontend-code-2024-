import React from 'react'

function Cards({data,handleClick,index}) {
    return (

        <>
            <div className='w-60 h-40  bg-orange-100 p-4 rounded-md m-5  flex  gap-5 relative'>
                <div className='w-20 h-20 rounded-md '>
                    <img className='w-full h-full object-cover overflow-hidden rounded-md' src={data.img} alt="" />

                </div>
                <div>
                    <h1 className='font-semibold '> {data.name} </h1>

                    <h3>
                        {data.artist}
                    </h3>
                </div>
                <button onClick={()=>handleClick(index)} className={`px-10 py-2 ${data.added ? "bg-emerald-400" :"bg-orange-500"} rounded-md text-sm text-slate-50  absolute bottom-0 `}> {data.added ? "Added " :"Add to favtraties"} </button>



            </div>

        </>
    )
}

export default Cards
