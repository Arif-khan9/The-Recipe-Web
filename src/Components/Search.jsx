import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { Link, useParams } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import { FiX } from "react-icons/fi";
const Search = () => {
 
  const {id } = useParams()
    console.log("id",id)


   const [arif , setArif] = useState("")
   const [value , setValue] = useState("")
   const [category , setCategory ] = useState([])
   const [categoryMealData ,setCategoryMealData  ] = useState([])
   
   let handleclick =(value) =>{
    setValue(value)
   } 


   const searchCategory = async () =>{
         try{
           const res = await  fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
           const data = await res.json()
          setCategory(data.meals)
          
         }catch (erore){
           console.log("erore",erore)
         }
       }
   
       useEffect(()=>{
        searchCategory()
       },[])

       const handleclickbtn =  async () =>{
        if(value.trim().length > 0){
           try{
           const res =  await  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${value}`)
           const data = await res.json()
           console.log("data" , data.meals);
           setCategoryMealData(data.meals);
          
         }catch (erore){
           console.log("erore",erore)
         }
         setArif(value)
       }  
       
       setValue("")
        
        }
       
       

  return (
    <>
    <div>
       <Link to={"/"}><button className="px-4  py-2 ml-7 md:ml-16 lg:ml-80 reltive mt-20 text-xl font-bold hover:-translate-y-1 transition-transform duration-300 rounded-full bg-amber-600 hover:bg-amber-700 hover:shadow-lg text-white">Back</button></Link>
        <div className='flex flex-col justify-center items-center h-40'>
        <h1 className=' text-2xl mt-30 md:mt-0 md:text-4xl font-bold '>Find Your Perfect Recipe</h1>
        <div className='flex flex-col gap-5'>
            <IoIosSearch  className='relative top-15 left-2.5 text-2xl'/>
           <div className='flex '>
            
             <input  className='border  w-87 md:w-187 lg:w-200 rounded-xl py-3 px-10 text-xl'  type="text" placeholder='Search for Region or area......' value={value} onChange={(e)=>setValue(e.target.value)} />
            <span className=' top-4.5 relative right-8'> <FiX className={`${value.length >0 ? "block": "hidden"}`} onClick={()=>{setValue("")}}/></span>
           </div>
            <button className='w-87 md:w-187 lg:w-200 bg-orange-600 hover:bg-orange-700 py-3 text-white rounded-xl' onClick={handleclickbtn}> Search Recipes</button>
        </div>  
    </div>
    <div className='flex justify-center mt-30 md:mt-20'>
            <div className='py-10 px-7 md:px-10 lg:px-16 bg-blue-50 rounded-2xl mb-8'>
                <h3 className='text-2xl font-bold mt-3 '>How to search</h3>
                <div className=' mt-6 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-5'>
                    {category.map((item , index)=>{
                        return(
                             <p key={index} className='bg-orange-200 text-orange-700 text-center px-1 md:px-4 py-1 rounded-full hover:cursor-pointer' onClick={()=>handleclick(item.strArea)}>{item.strArea}</p>
                    
                        )
                    })}
                   
                </div>
            </div>
        </div>
         { arif && categoryMealData.length > 0 &&(
             <div  className='flex justify-center mt-10'>
         <div className='   px-5'>
            <h2 className='text-2xl font-bold border-b border-gray-200 pb-2 mb-6 '>Search for :  <span className='text-amber-900'> {arif}</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-9 place-items-center'>
               {categoryMealData.map((item ,index)=>{  
            return( 
                <Link to={`/recipe/${item.idMeal}`}>
                <div key={index} className='group  h-80 w-80 md:w-60 bg-white shadow-lg mb-7 hover:-translate-y-1 transition-transform duration-300 rounded-2xl'>
                    <img className='object-cover h-40 w-80 rounded-t-2xl group-hover:scale-101 ' src={item?.strMealThumb} alt="" />
                    <div className='mt-2 px-3 '>
                     <h2 className='text-amber-800 text-xl font-bold'>{item?.strMeal}</h2>
                    <span className='px-5  py-1.5 bg-amber-400 rounded-full  relative top-2 text-amber-800'>#{arif}</span>
                     <span className='flex opacity-0 group-hover:opacity-100 py-1.5 px-5 justify-center items-center gap-1.5 w-40   bg-amber-400 rounded-full text-amber-800 relative top-6'>View Recipe<FaArrowRight /></span>
                    </div>
                </div> 
                </Link>

               )
        })} 
            </div>
        </div>
       </div> 
           
      )}
         
       
    </div>
    </>
  )
}

export default Search
