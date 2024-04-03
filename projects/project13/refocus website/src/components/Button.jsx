import React from 'react'
import { FiCornerUpRight } from "react-icons/fi";

function Button() {
  return (
    <div>

      <button className='px-6 bg-zinc-50 text-slate-900 rounded-full text-sm py-2 flex items-center gap-5  '>Start Project <FiCornerUpRight /> </button>
    </div>
  )
}

export default Button
