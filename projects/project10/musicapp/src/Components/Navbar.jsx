import React from 'react'

function Navbar({values}) {
  return (
    <>
      <div className='w-full p-4 bg-orange-400 flex justify-between items-center'>
        <h1 className=' font-semibold text-slate-50 '> pinkRecords</h1>

        <div className='px-2 py-2 bg-orange-500 rounded-md text-sm flex justify-center item-center text-slate-50 gap-2'>
          <h3 className=''> Favtravties </h3>
         <h3>
          {values.filter((items)=>{
            return items.added
          }).length}
         </h3>
        </div>




      </div>
    </>

  )
}

export default Navbar
