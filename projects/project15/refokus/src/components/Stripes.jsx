import React from 'react'
import Stripe from './Stripe'

function Stripes() {
    const products = [{
        num: 40,
        url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e1d5aa08ccc379dd_ypo.svg"
    }, {
        num: 10,
        url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2756e8df24e52915c71_flowcode.svg"
    }, {
        num: 50,
        url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg"
    },{
        num: 40,
        url: " https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg"
       
    },{
        num: 30,
        url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg"
       
    }]

    return (
        <div>

            <div className='flex mt-6 max-w-screen-xl mx-auto'>
            {products.map((products) => {
                return (
                    <>
                    <div className='flex flex-col'>
                    <Stripe  products={products} />
                        <Stripe  products={products} />

                    </div>
                   
                    </>


                    )
                })}
                </div>

        </div>
    )
}

export default Stripes
