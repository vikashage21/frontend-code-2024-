import React from 'react'
import Navbar from './Components/Navbar'
import Cards from './Components/Cards'
import { useState } from 'react'

function App() {

  const data = [{
    name: "moonlight",
    artist: "xxxtetacion",
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    added: false,
  }, {
    name: "heartBreaking",
    artist: "bulldog",
    img: "https://plus.unsplash.com/premium_photo-1664302427357-40eb7c8fd3c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
    added: false,
  }, {
    name: "motherhood",
    artist: "trylor twifts",
    img: "https://plus.unsplash.com/premium_photo-1674875072587-e1caa5f934a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
    added: false,
  }, {
    name: "fu#k you",
    artist: "drake",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
    added: false,
  }]
  let [songData, setSongData] = useState(data);

  const handleClick = (index) => {
    setSongData((pres) => {
     return pres.map((items, itemsIndex) => {
       
        if (itemsIndex === index) {
          return { ...items, added: !items.added}

        }
        return items
      })


    })
  }




    return (

      <div>
        <Navbar values={songData} />

        <div className='p-4 flex flex-wrap'>
          {songData.map((items, index) => {
            return (
              <Cards key={index} index={index} data={items} handleClick={handleClick} />
            )
          })}
        </div>


      </div>
    )
  }

  export default App
