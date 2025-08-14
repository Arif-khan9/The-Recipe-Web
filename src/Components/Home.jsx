import React, { useEffect, useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";

const Home = () => {

  const [data, setData] = useState([]);
  // const [searchTerm, setSearchTerm] = useState(""); 

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

  // const filteredData = data.filter(item =>
  //   item.strCategory.toLowerCase().includes(searchTerm.toLowerCase())
  // );

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
          <button className='py-3 px-6 rounded-full bg-amber-500 hover:bg-amber-700 hover:shadow-lg hover:translate-y-1 text-white flex items-center gap-2.5'>
            <FaBookOpen /> Today's Special
          </button>
          <button className='py-3 px-6 rounded-full hover:bg-gray-50 text-amber-800 border border-amber-300 hover:translate-y-1 flex items-center gap-2.5'>
            <IoMdSearch /> Search a Recipe
          </button>
        </div>
      </div>
      <div className='bg-amber-100'>
        <div className="flex flex-col justify-center text-center items-center gap-6 pt-20">
          <h3 className='text-3xl md:text-4xl text-amber-900 font-bold'>Browse by Category</h3>
          <div className='flex items-center relative gap-2.5'>
            <IoMdSearch className='absolute left-3 text-amber-900 text-xl' />
            <input
              className='border border-amber-300 rounded-full p-3 px-9 placeholder:text-amber-600'
              type="text"
              placeholder='Search for Category'
             
            />
          </div>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2  lg:grid-cols-3 place-items-center md:px-10  py-16">
          {
            data.map((item, index) => (
              <div
                key={index}
                className="bg-white h-90 w-80 mt-10 px-5 hover:shadow-2xl flex flex-col justify-center rounded-2xl"
              >
                <img
                  src={item.strCategoryThumb}
                  alt={item.strCategory}
                  className="rounded-xl h-40 object-cover"
                />
                <h3 className="text-xl text-amber-900 hover:text-amber-700 font-bold mt-4">
                  {item.strCategory}
                </h3>
                <p className="text-amber-800 text-sm mt-2">
                  {item.strCategoryDescription.slice(0, 80)}...
                </p>
              </div>
            ))
          }
          
        </div>
      </div>
    </>
  );
};

export default Home;
