import React from 'react'

import From from './components/From'
import { useState } from 'react'
import Cards from './components/Cards.jsx'





function App() {
  let [totalNotes, setTotalNotes] = useState([])



  const handelForm=(formdata)=>{
   setTotalNotes([...totalNotes, formdata])
   

  }

  const removeHandel =(id)=>{
   setTotalNotes(()=>{
    return totalNotes.filter((items, index)=> index !== id)
   })

  }

  return (
    <div>

      <From handelForm={handelForm}
      />
<Cards users={totalNotes} removeHandel={removeHandel}/>

    </div>
  )
}

export default App
