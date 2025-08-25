
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



const Meals = () => {
 
  const [ mealapi , setMealApi] = useState([])

  const fetchMealApi = async ()=>{
    try{
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
      const data = await res.json()
      setMealApi(data.meals)
      console.log("data",data)
    }catch(erore){
      console.log("erore",erore)
    }
  }
  useEffect(()=>{
    fetchMealApi()
  },[])

  return (
    <>
    <nav>
        <div className='  z-40 h-30 bg-amber-200 px-5 fixed top-0 w-full '>
             <Link to={"/"}><button className="px-4 py-2 mt-3 text-xl font-bold hover:-translate-y-1 transition-transform duration-300 rounded-full bg-amber-600 hover:bg-amber-700 hover:shadow-lg text-white">Back</button></Link>
             <h2 className=' mt-2 text-3xl text-amber-900 font-bold '>Chicken Meals</h2>
        </div>
    </nav>
    <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center mt-40'>
      { mealapi.map(( iteam , index)=>{
        return(
          <Link to={`/recipe/${iteam.idMeal}`}>
          <div key={index} className=' group h-90 w-80 mt-9 hover:-translate-y-1 transition-transform duration-300  shadow-2xl rounded-2xl'>
            <img className='h-65 group-hover:scale-102 object-cover  rounded-t-2xl w-80' src={iteam.strMealThumb} alt="" />
          <span className='px-4 w-31 py-1.5 bg-amber-500 text-white rounded-full relative bottom-12 left-2 hidden  group-hover:block'>View Recipe</span>
            <div className='flex flex-col gap-3 group-hover:bottom-9 relative '>
              <h3 className='text-xl font-bold px-5 mt-3'>{iteam.strMeal.slice(0 , 25)}...</h3>
              <div className='flex justify-between px-5 items-center'>
                <p className='text-amber-600'>internation</p>
                <p className='bg-amber-300 text-amber-700 p-1.5 px-4 rounded-full'>#Chicken</p>
              </div>
            </div>
        </div> 
          </Link>
        )
      })}
        
    </div>
    </>
  )
}

export default Meals
