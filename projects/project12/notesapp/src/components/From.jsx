import React from 'react'
import { useForm } from 'react-hook-form'

function From({handelForm}) {
    let FormStyle="border-none mt-5 outline-none  text-uppercase "
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm();
    
  return (

    <div className='p-2  ml-2 '>
      <form  className="flex " action="" onSubmit={handleSubmit((data)=>{
        handelForm(data)
        reset()
      })}>
        <input className={`${FormStyle}`}type="text" placeholder="title" {...register('title')} />
        <input type="text" className={`${FormStyle}`} placeholder="notes" {...register('notes')} />


        <button className='py-2 px-2 bg-orange-100 rounded-md text-sm ' type="submit" >Add Notes</button>
      </form>
    </div>
  )
}

export default From
