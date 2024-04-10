import React from 'react'

function Stripe({ products }) {


    return (
        <div>

            <div className='w-[100%] h-[70px] px-8 py-3 border-slate-50 border-[1px] items-center flex gap-5 '>

                <img className='object-cover w-full h-full ' src={products.url} alt="" />

                <h1 className='text-slate-50 text-xl semibold'> {products.num}</h1>


            </div>

        </div>
    )
}

export default Stripe
