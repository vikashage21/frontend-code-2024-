import React from 'react'

function Card({data ,removeHandel , id}) {
   
  return (
    <div>
        <>
            <div className='w-1/2 h-fit  bg-orange-100 p-4 rounded-md m-5  flex flex-col justify-center m-auto    gap-5 relative '>
                <div className='w-20 h-20 rounded-md '>
                    <img className='w-full h-full object-cover overflow-hidden rounded-full ' src='https://play-lh.googleusercontent.com/36szRvmqeewn6fxpx9V88zhpPU3c84Im9zjAFPZl-cReiztnAD6cn0jSnWBGsNNdPsU' alt="" />

                </div>
                <div>
                    <h1 className='font-semibold '> {data.title} </h1>
                    <div className='w-1/2 m-auto  '>
                    <h3 className="justify-center text-center  ">
                        {data.notes}
                    </h3>
                    </div>

                   
                </div>
                <button onClick={()=>removeHandel(id)} className='py-2 px-2 bg-red-50 rounded-md  text-semibold text-sm'> Remove it </button>


            </div>

        </>
      
    </div>
  )
}

export default Card
