import React, { createContext, useEffect, useState } from 'react'
import axios from '../utils/axios'

export const ProductContext = createContext()

function Context(props) {
    const [products , setproducts]=useState(null)

    const getproduct = async ()=>{

        try {

            const {data} = await  axios('/products') ;

          setproducts(data)
            
        } catch (error) {

            console.log(error)
            
        }
    }
 useEffect(()=>{

    getproduct()

 },[])

  return (
    <div>
      <ProductContext.Provider value={[products , setproducts]}>  {props.children} </ProductContext.Provider> 
     
    </div>
  )
}

export default Context
