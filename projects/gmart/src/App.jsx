
import './App.css'

import {Routes,Route} from 'react-router-dom'
import Home from './componets/Home'
import Details from './componets/Details'



function App() {


  return (

    
    <>
   
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/details/:id" element={<Details />} />


     
   </Routes>

    </>
  )
}

export default App
