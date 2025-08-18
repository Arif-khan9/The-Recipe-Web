import { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const Instructions = () => {

  const [meal, setMeal] = useState(null);
    const {id } = useParams()
    console.log("id",id)

    

    const fatchSearchMeal = async () =>{
      try{
        const res = await  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data = await res.json()
        console.log("data",data)
        setMeal(data.meals[0]);
      }catch (erore){
        console.log("erore",erore)
      }
    }

    useEffect(()=>{
      fatchSearchMeal()
    },[id])

  return (
   <>
   <section>
    <Link to={"/"}><button className="px-4 py-2 ml-7 md:ml-35 lg:ml-55 reltive mt-20 text-xl font-bold hover:-translate-y-1 transition-transform duration-300 rounded-full bg-amber-600 hover:bg-amber-700 hover:shadow-lg text-white">Back</button></Link>
   <div className='flex justify-center items-center   '>
     <div className=' flex-col items-center lg:flex-row mt-10 flex justify-center gap-10 px-5'>
        <img className='md:h-120 h-80 w-80 md:w-120 object-contain rounded-2xl' src={meal?.strMealThumb} alt="" />
        <div className=''>
            <h1 className='text-3xl md:text-4xl font-bold text-gray-800  md:w-120'>{meal?.strMeal}</h1>
           <div className='flex gap-5 mt-4'>
             <button className='p-1 bg-orange-100 text-orange-800 px-4 rounded-full'>{meal?.strArea}</button>
            <button className='p-1 px-4 bg-blue-100 text-blue-800 rounded-full'>{meal?.strCategory}</button>
           </div>
            <p className='text-gray-600 mt-4 text-sm md:text-xl'>{meal?.strTags}</p>
         <div className='md:h-90 h-110 w-80 md:w-120 mt-5 shadow-sm px-5 overflow-hidden '>
            <h3 className="text-2xl font-bold text-gray-800 mt-5">Instructions</h3>
            <div className="border mt-2 border-gray-200"> </div>
             <p className="mt-5">{meal?.strInstructions.slice(0,200)} </p>
           <details>
            <summary className='cursor-pointer  text-blue-600 hover:underline '>Read more</summary>
            <p> <p>  {meal?.strInstructions}</p></p>
           </details>
            <div className="border mt-4 border-gray-200"> </div>
            <h3 className="text-xl text-bold mt-4">Source</h3>
            <a href={meal?.strYoutube} target="_blank" className="text-red-600 mt-4 text-sm " >{meal?.strYoutube}</a>  
        </div>
        </div> 
    </div>
   </div>
    <div className="flex justify-center mt-5 md:mt-10 md:mr-0 mr-2">
      <a href="https://www.youtube.com/watch?v=oTw5tPt4KmA" target="blank"> <button className="flex rounded-lg py-2 bg-red-600 hover:bg-red-700 md:px-36 px-17 lg:px-102 text-white gap-2.5 text-xl items-center"><FaYoutube /> Watch on YouTube</button></a>
    </div>
   <div className="flex justify-center mr-2 md:mr-0 ">
     <div className="md:w-120  w-82 lg:w-250 shadow-sm  ">
        <h3 className="text-bol text-3xl font-bold pt-9 pl-5">Ingredients</h3>
        <div className="border mt-4 border-gray-200 mx-5"> </div>
        <div className="flex items-center gap-2 text-wh ml-5 mt-5">
          <button className="bg-orange-100 text-orange-800 flex justify-center hover:bg-orange-200 items-center   w-5 h-5 rounded-full">1</button>
          <span>{meal?.strIngredient1}</span>
        </div>
        <div className="flex items-center gap-2 text-wh ml-5 mt-5">
          <button className="bg-orange-100 text-orange-800 flex justify-center hover:bg-orange-200 items-center   w-5 h-5 rounded-full">2</button>
          <span>{meal?.strIngredient2}</span>
        </div>
        <div className="flex items-center gap-2 text-wh ml-5 mt-5">
          <button className="bg-orange-100 text-orange-800 flex justify-center hover:bg-orange-200 items-center   w-5 h-5 rounded-full">3</button>
          <span>{meal?.strIngredient3}</span>
        </div>
        <div className="flex items-center gap-2 text-wh ml-5 mt-5">
          <button className="bg-orange-100 text-orange-800 flex justify-center hover:bg-orange-200 items-center   w-5 h-5 rounded-full">4</button>
          <span>{meal?.strIngredient4}</span>
        </div>
        <div className="flex items-center gap-2 text-wh ml-5 mt-5">
          <button className="bg-orange-100 text-orange-800 flex justify-center hover:bg-orange-200 items-center   w-5 h-5 rounded-full">5</button>
          <span>{meal?.strIngredient5}</span>
        </div>
        <div className="flex items-center gap-2 text-wh ml-5 mt-5">
          <button className="bg-orange-100 text-orange-800 flex justify-center hover:bg-orange-200 items-center   w-5 h-5 rounded-full">6</button>
          <span>{meal?.strIngredient6}</span>
        </div>
        <div className="flex items-center gap-2 text-wh ml-5 mt-5">
          <button className="bg-orange-100 text-orange-800 flex justify-center hover:bg-orange-200 items-center   w-5 h-5 rounded-full">7</button>
          <span>{meal?.strIngredient7}</span>
        </div>
        <div className="flex items-center gap-2 text-wh ml-5 mt-5">
          <button className="bg-orange-100 text-orange-800 flex justify-center hover:bg-orange-200 items-center   w-5 h-5 rounded-full">8</button>
          <span>{meal?.strIngredient8}</span>
        </div>
        <div className="flex items-center gap-2 text-wh ml-5 mt-5">
          <button className="bg-orange-100 text-orange-800 flex justify-center hover:bg-orange-200 items-center   w-5 h-5 rounded-full">9</button>
          <span>{meal?.strIngredient9}</span>
        </div>
        <div className="flex items-center gap-2 text-wh ml-5 mt-5">
          <button className="bg-orange-100 text-orange-800 flex justify-center hover:bg-orange-200 items-center   w-5 h-5 rounded-full">10</button>
          <span>{meal?.strIngredient10}</span>
        </div>
     </div>
   </div>
   </section>
   </>
  )
}

export default Instructions
