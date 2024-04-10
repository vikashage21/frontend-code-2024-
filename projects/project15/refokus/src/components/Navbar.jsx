import React from 'react'
import Button from './Button'

function Navbar() {
    return (
        <div>

            <nav className=' max-w-screen-xl py-5 px-2 mx-auto text-zinc-50  flex  border-b-2 border-zinc-700 items-center justify-center gap-20   '>
                <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" srcset="" />
                {["Home", "work", "", "News"].map((elem, index) => {
                    return (

                        <>


                            <a className='text-sm  flex items-center justify-center gap-1 ' href='#' >
                                {index == 1 ? <span className="w-2 h-2 rounded-full bg-green-700 inline-block boxshadow  "></span> : ""}
                                {elem.length == 0 && <span className='w-0.5 h-5 bg-zinc-700'></span>}
                                {elem}
                            </a>

                        </>


                    )

                })}
                <Button />
            </nav>


        </div>
    )
}

export default Navbar
