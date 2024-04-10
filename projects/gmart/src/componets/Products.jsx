import { Link, useSearchParams } from "react-router-dom"
import Loading from "./Loading"


function Products({ products }) {



useSearchParams()





    return products ? (
        <div className="w-[70%] h-[80%] mr-5 m-auto flex flex-wrap overflow-y-auto">

            {products.map((items, index) => {
                return (

                    <>



                        <Link key={index} to={`/details/${items.id}`} className="  h-[50%] w-[25%] m-5  p-4 border-slate-500 border-[1px] rounded-xl text-center flex-col flex justify-center content-center flex-wrap ">
                            <div className="w-full h-full flex flex-col">
                                <img className='h-[150px] w-[50%]  hover:scale-[1.2]  object-cover p-1 m-auto rounded-xl ' src={items.image} />

                                <h1 className='p-4 text-sm semibold w-full h-[50%] '>{items.title}</h1>
                            </div>




                        </Link>









                    </>
                )
            })}

        </div>


    ) : (<Loading />)
}

export default Products

