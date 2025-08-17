import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Instructions = () => {


  return (
   <>
   <section>
    <Link to={"/"}><button className="px-4 py-2 ml-7 md:ml-35 lg:ml-55 reltive mt-20 text-xl font-bold hover:-translate-y-1 transition-transform duration-300 rounded-full bg-amber-600 hover:bg-amber-700 hover:shadow-lg text-white">Back</button></Link>
   <div className='flex justify-center items-center   '>
     <div className=' flex-col items-center lg:flex-row mt-10 flex justify-center gap-10 px-5'>
        <img className='md:h-120 h-80 w-80 md:w-120 object-contain rounded-2xl' src="bread.jpg" alt="" />
        <div className=''>
            <h1 className='text-3xl md:text-4xl font-bold text-gray-800  '>Steak and Kidney Pie</h1>
           <div className='flex gap-5 mt-4'>
             <button className='p-1 bg-orange-100 text-orange-800 px-4 rounded-full'>Beef</button>
            <button className='p-1 px-4 bg-blue-100 text-blue-800 rounded-full'>British</button>
           </div>
            <p className='text-gray-600 mt-4 text-sm md:text-xl'>A delicious steak and kidney pie recipe that you'll love!</p>
         <div className='md:h-90 h-110 w-80 md:w-120 mt-5 shadow-sm px-5 overflow-hidden '>
            <h3 className="text-2xl font-bold text-gray-800 mt-5">Instructions</h3>
            <div className="border mt-2 border-gray-200"> </div>
             <p className="mt-5">stock to the pan, stir well and bring to the boil. Turn the heat down and simmer for 1½ hours without a lid. If the liquid evaporates too much, add more stock. Remove from the heat. Add salt, pepper and Worcestershire sauce and allow to cool completely. Place the cooked meat mixture into a pie dish. </p>
           <details>
            <summary className='cursor-pointer  text-blue-600 hover:underline '>Read more</summary>
            <p> <p>  Roll out the pastry to 5mm/¼in thick and 5cm/2in larger than the dish you are using. Using a rolling pin, lift the pastry and place it over the top of the pie dish. Trim and crimp the edges with your fingers and thumb. Brush the surface with the beaten egg mixture and bake for 30-40 minutes until golden-brown and puffed. Serve with creamy mash and steamed vegetables to soak up the gravy.</p></p>
           </details>
            <div className="border mt-4 border-gray-200"> </div>
            <h3 className="text-xl text-bold mt-4">Source</h3>
            <a href="https://www.bbc.co.uk/food/recipes/steakandkidneypie_73308 " target="_blank" className="text-red-600 mt-4 text-sm " >https://www.bbc.co.uk/food/recipes/steakandkidneypie_73308</a>  
        </div>
        </div> 
    </div>
   </div>
    <div className="flex justify-center mt-10">
      <a href="https://www.youtube.com/watch?v=oTw5tPt4KmA" target="blank"> <button className="flex rounded-lg py-2 bg-red-600 hover:bg-red-700 md:px-36 px-17 lg:px-102 text-white gap-2.5 text-xl items-center"><FaYoutube /> Watch on YouTube</button></a>
    </div>
   <div className="flex justify-center">
     <div className="md:w-120  w-82 lg:w-250 shadow-sm h-150">
        <h3 className="text-bol text-3xl font-bold pt-9 pl-5">Ingredients</h3>
        <div className="border mt-4 border-gray-200 mx-5"> </div>
        <div className="flex items-center gap-2 text-wh ml-5 mt-5">
          <button className="bg-orange-100 text-orange-800 flex justify-center hover:bg-orange-200 items-center   w-5 h-5 rounded-full">1</button>
          <span>3/4 cup soy sauce</span>
        </div>
        <div className="flex items-center gap-2 text-wh ml-5 mt-5">
          <button className="bg-orange-100 text-orange-800 flex justify-center hover:bg-orange-200 items-center   w-5 h-5 rounded-full">2</button>
          <span>3/4 cup soy sauce</span>
        </div>
        <div className="flex items-center gap-2 text-wh ml-5 mt-5">
          <button className="bg-orange-100 text-orange-800 flex justify-center hover:bg-orange-200 items-center   w-5 h-5 rounded-full">3</button>
          <span>3/4 cup soy sauce</span>
        </div>
        <div className="flex items-center gap-2 text-wh ml-5 mt-5">
          <button className="bg-orange-100 text-orange-800 flex justify-center hover:bg-orange-200 items-center   w-5 h-5 rounded-full">4</button>
          <span>3/4 cup soy sauce</span>
        </div>
        <div className="flex items-center gap-2 text-wh ml-5 mt-5">
          <button className="bg-orange-100 text-orange-800 flex justify-center hover:bg-orange-200 items-center   w-5 h-5 rounded-full">5</button>
          <span>3/4 cup soy sauce</span>
        </div>
        <div className="flex items-center gap-2 text-wh ml-5 mt-5">
          <button className="bg-orange-100 text-orange-800 flex justify-center hover:bg-orange-200 items-center   w-5 h-5 rounded-full">6</button>
          <span>3/4 cup soy sauce</span>
        </div>
        <div className="flex items-center gap-2 text-wh ml-5 mt-5">
          <button className="bg-orange-100 text-orange-800 flex justify-center hover:bg-orange-200 items-center   w-5 h-5 rounded-full">7</button>
          <span>3/4 cup soy sauce</span>
        </div>
        <div className="flex items-center gap-2 text-wh ml-5 mt-5">
          <button className="bg-orange-100 text-orange-800 flex justify-center hover:bg-orange-200 items-center   w-5 h-5 rounded-full">8</button>
          <span>3/4 cup soy sauce</span>
        </div>
        <div className="flex items-center gap-2 text-wh ml-5 mt-5">
          <button className="bg-orange-100 text-orange-800 flex justify-center hover:bg-orange-200 items-center   w-5 h-5 rounded-full">9</button>
          <span>3/4 cup soy sauce</span>
        </div>
        <div className="flex items-center gap-2 text-wh ml-5 mt-5">
          <button className="bg-orange-100 text-orange-800 flex justify-center hover:bg-orange-200 items-center   w-5 h-5 rounded-full">10</button>
          <span>3/4 cup soy sauce</span>
        </div>
     </div>
   </div>
   </section>
   </>
  )
}

export default Instructions
