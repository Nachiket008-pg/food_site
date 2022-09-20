import React from 'react';
import meal from "./meal.avif";



function Home() {
  return (
    <>
  
        < div className=" flex flex-row bg-slate-100">
      <img src={meal} className="ml-[200px] mt-[40px] hover:scale-105 transition-all ease-out duration-150 h-[600px] w-[500px] shadow-xl shadow-slate-400 rounded-[25px] hover:cursor-pointer border-2 border-black" />

      <div className="mt-24 p-3 border-black border-2 h-[400px] w-[700px] ml-16 shadow-xl shadow-slate-300 hover:scale-105 transition-all ease-out duration-150 cursor-pointer">
        <h1 className="font-semibold font-serif text-6xl text-center italic underline">P & D</h1>
        <p className="mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita eligendi numquam maiores tempore, nam excepturi doloremque, libero delectus repudiandae consequuntur atque natus amet, fugiat ipsam consequatur soluta asperiores distinctio maxime optio molestiae? Dolore quis culpa corrupti hic, dicta mollitia autem perspiciatis natus laboriosam consequuntur, non voluptate nisi, repellendus quos possimus? Corporis in maxime ipsam officiis quidem cupiditate iusto corrupti temporibus, esse, distinctio eius odio culpa perferendis ab, illum aliquid unde eligendi doloremque sit accusantium veniam autem nam incidunt. Ab, vel quae expedita non unde sint maiores quia reprehenderit, itaque incidunt culpa autem pariatur dolores hic odit dolor adipisci quam asperiores!</p>
      </div>



        </div>
    </>
  )
}

export default Home