import React, { useEffect, useState } from 'react'


import axios from '../utils/axios'
import { useParams } from 'react-router-dom'
import Loading from './Loading'


function Details() {

    const [products , setsingleproducts] = useState(null)

    const {id} = useParams()
    const getSingleProducts = async () => {
        try {

            const { data } = await  axios.get(`/products/${id}`)
            setsingleproducts(data)

           
           

        } catch (error) {
            console.log(error)

        }

    }

    useEffect(() => {
        getSingleProducts()
    }, [])

return products?  (
      
        <div>

            <div className="w-[70vw] h-[80vh]  m-auto mt-10 ">
                <div className="  h-full w-full  p-10 border-slate-400 border-[1px] rounded-xl text-center  flex items-center  ">
                    <img className='h-90 w-80 object-cover p-1 m-auto rounded-xl ' src={`${products.image}`} />
                    <div className='w-[30%]  items-center text-center'>
                        <h1 className=' text-2xl mb-2 semibold '> {products.title}</h1>
                        <h2 className=' text-xl text-slate-500 mb-5'>{products.price} </h2>
                        <h3 className=' text-sm'> {products.description}</h3>
                        <button className={`p-2 m-2 mt-5 text-slate-50 rounded bg-green-400 `}> Edit items  </button>
                        <button className={`p-2 m-2 text-black font-semibold text-sm rounded bg-red-200`}> delete items  </button>


                    </div>




                </div>

            </div>
        </div>
    ):(<Loading/>)
}

export default Details
