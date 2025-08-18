import React, { useEffect, useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Home = () => {

  const [data, setData] = useState([]);
  const [singleMealId , setSingleMealId] = useState(null)
  

  const API = `https://www.themealdb.com/api/json/v1/1/categories.php`;

  const fetchBoxData = async () => {
    try {
      const res = await fetch(API);
      const json = await res.json();
      console.log("data", json);
      setData(json.categories); 
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchBoxData();
  }, []);

   const fetchSingleMeal = async () => {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
      const json = await res.json();
      console.log("singleData", json);
      setSingleMealId(json.meals[0].idMeal)
     
    } catch (error) {
      console.log("Error", error);
    }
  };

 useEffect(()=>{
  fetchSingleMeal()
 },[])
  return (
    <>
      <div className='bg-[url(hero.jpg)] flex flex-col items-center justify-center text-center h-[750px] gap-8'>
        <h1 className='text-5xl md:text-6xl font-bold text-amber-100 font-playfair'>
          Welcome to <span className='text-amber-500'>Recipe Finder</span>
        </h1>
        <p className='text-xl md:text-2xl text-amber-100'>
          Discover delicious meals that will tantalize your taste buds and <br /> brighten your day!
        </p>
        <div className='md:flex md:flex-row flex flex-col gap-2.5'>
         <Link to={`/recipe/${singleMealId}`}> <button className='py-3 px-6 rounded-full bg-amber-500 hover:bg-amber-700 hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 text-white flex items-center gap-2.5'>
            <FaBookOpen /> Today's Special
          </button></Link>
         <Link to={"/search"}> <button className='py-3 px-6 rounded-full hover:bg-gray-50 text-amber-800 border border-amber-300 hover:-translate-y-1 transition-transform duration-300 flex items-center gap-2.5'>
            <IoMdSearch /> Search a Recipe
          </button></Link>
        </div>
      </div>
      <div className='bg-amber-100'>
        <div className="flex flex-col justify-center text-center items-center gap-6 pt-20">
          <h3 className='text-3xl md:text-4xl text-amber-900 font-bold'>Browse by Category</h3>
          <div className='flex items-center relative  gap-2.5'>
            <IoMdSearch className='absolute hover:translate-y-1  left-1.5 md:left-3 text-amber-900 text-xl' />
            <input
              className='border bg-white border-amber-300 rounded-full hover:-translate-y-1 transition-transform duration-300 py-2 md:p-3 px-5 md:px-9 placeholder:text-amber-600'
              type="text"
              placeholder='Search for Category'
             
            />
          </div>
        </div>

        <div className="flex flex-col  md:grid md:grid-cols-2  gap-10 lg:grid-cols-3 place-items-center md:px-10  py-16">
          {
            data.map((item, index) => {
              return(
                <div
                key={index}
                className=" group  bg-white w-80 pb-5 hover:-translate-y-1 transition-transform duration-300 gap-3  hover:shadow-2xl flex flex-col justify-center rounded-2xl"
              >
              <div className=' relative h-60'>
                  <img
                  src={item.strCategoryThumb}
                  alt={item.strCategory}
                  className="rounded-xl h-50 w-full object-cover  overflow-hidden transition-transform  duration-300 group-hover:scale-105"
                />
                <div className='absolute w-full opacity-0 group-hover:opacity-100  -z-1 inset-0 h-full  bg-gradient-to-t from-[#868e96] to-transparent'></div>
              </div>
                <h3 className="text-xl text-amber-900 hover:text-amber-700 font-bold mt-4 px-5">
                  {item.strCategory}
                </h3>
                <p className="text-amber-800 text-sm mt-2 px-5">
                  {item.strCategoryDescription.slice(0, 120)}...
                </p>
                <button className='bg-amber-200 flex items-center w-40  ml-5 justify-center text-amber-700 rounded-full gap-3.5 py-1.5   opacity-0 group-hover:opacity-100'>View Recipe <FaArrowRightLong /></button>
              </div>
              )
            }
              
            )
          }
          
        </div>
      </div>
    </>
  );
};

export default Home;
