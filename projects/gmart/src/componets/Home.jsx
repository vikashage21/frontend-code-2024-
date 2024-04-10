import React, { useContext } from 'react'
import Products from '../componets/Products'
import Navbar from './Navbar'
import { ProductContext } from '../utils/Context'

function Home() {

   const [products]= useContext(ProductContext)
 
  return (
    <div className='flex w-screen h-screen '>
        <Navbar/>
     <Products  products={products}/>
    </div>
  )
}

export default Home
