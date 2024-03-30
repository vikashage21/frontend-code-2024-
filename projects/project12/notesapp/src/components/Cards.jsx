import React from 'react'
import Card from '../components/Card'


function Cards({ users ,removeHandel }) {
  return (
   <>
   
{
  users.map((items ,index) => {
    return (
      
        <Card key={index} data={items} id={index} removeHandel={removeHandel} />

      
      
      
    )
  })
}

   </>
             
      
    
  )
}
 
export default Cards
