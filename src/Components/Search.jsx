import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
const Search = () => {
  return (
    <>
    <div>
       <Link to={"/"}><button className="px-4  py-2 ml-7 md:ml-16 lg:ml-80 reltive mt-20 text-xl font-bold hover:-translate-y-1 transition-transform duration-300 rounded-full bg-amber-600 hover:bg-amber-700 hover:shadow-lg text-white">Back</button></Link>
        <div className='flex flex-col justify-center items-center h-40'>
        <h1 className=' text-2xl mt-30 md:mt-0 md:text-4xl font-bold '>Find Your Perfect Recipe</h1>
        <div className='flex flex-col gap-5'>
            <IoIosSearch  className='relative top-15 left-2.5 text-2xl'/>
            <input  className='border  w-87 md:w-170 lg:w-200 rounded-xl py-3 px-10 text-xl'  type="text" placeholder='Search for Region or area......' />
            <button className='w-87 md:w-170 lg:w-200 bg-orange-600 hover:bg-orange-700 py-3 text-white rounded-xl'>Search Recipes</button>
        </div>  
    </div>
    <div className='flex justify-center mt-30 md:mt-20'>
            <div className='py-5 px-2 md:px-13 bg-blue-50 rounded-2xl'>
                <h3 className='text-2xl font-bold mt-3 '>How to search</h3>
                <div className=' mt-6 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5'>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                    <p className='bg-orange-200 text-orange-700 px-4 py-1 rounded-full'>American</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Search
