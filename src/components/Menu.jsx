import React,{useEffect,useState} from 'react';
import { FaBeer,FaMortarPestle,FaPizzaSlice } from 'react-icons/fa';
import {MdFastfood} from "react-icons/md";
import {GiMeal} from "react-icons/gi";
import piz from './PizzaFood.json';
import cof from './Coldrink.json';



function Menu() {

  const [search,setSearch] =useState("")
  const [item,setItem] = useState();

  const handleClick = ()=>{
    console.log(piz)
  }

  
  
  return (
    <>

    
    {/* Search Bar */}
    <div className="flex justify-center items-center mt-3">
        <input type="search" onChange={(e) => setSearch(e.target.value)} id="" placeholder="Search Your Craving..." className=" pl-8 p-2 w-[800px] drop-shadow-md mt-[10px] rounded-2xl font-semibold text-lg outline-none placeholder:p-0 placeholder:font-semibold  ring-gray-700 ring-1 focus:ring-gray-700 focus:ring-2" />
    </div>
    <div className="mt-[8px] w-screen flex">
      {/* SideBar Section */}
            <section id="side-bar" className="w-[100px] ml-1 flex flex-col bg-slate-100 drop-shadow-lg border-2 border-black rounded-r-[50px] rounded-l-[10px] border-r-4 fixed">

            <FaPizzaSlice size="50" className=" p-2 pt-2 mt-3 text-black font-semibold ml-3 hover:bg-slate-300 transition-all delay-100 ease-out rounded-xl cursor-pointer drop-shadow-lg" />

            <FaBeer size="50" className=" p-2 pt-2 mt-10 text-black font-semibold ml-3 hover:bg-slate-300 transition-all delay-100 ease-out rounded-xl cursor-pointer drop-shadow-lg" />

            <FaMortarPestle size="50" className=" p-2 pt-2 mt-10 text-black font-semibold ml-3 hover:bg-slate-300 transition-all delay-100 ease-out rounded-xl cursor-pointer drop-shadow-lg" />

            <MdFastfood size="50" className=" p-2 pt-2 mt-10 text-black font-semibold ml-3 hover:bg-slate-300 transition-all delay-100 ease-out rounded-xl cursor-pointer drop-shadow-lg" />

            <GiMeal size="50" className=" p-2 pt-2 mt-10 mb-3 text-black font-semibold ml-3 hover:bg-slate-300 transition-all delay-100 ease-out rounded-xl cursor-pointer drop-shadow-lg" />
           
            
            </section>

            
            {/* Menu Section */}
            <section id="main" className="w-[480px] flex flex-col p-3 ml-[300px] mb-[10px] x ">

              
            {
              piz.filter((val) =>{
                if (search === ""){
                  return val
                }else if(val.name.toLowerCase().includes(search.toLowerCase())){
                  return val
                }
              }).map((el) => {
                return(
                  <div className=" grid grid-cols-2 space-x-[500px]"  key={el.id} onClick={handleClick}>

                  <section className=" border-4 border-black h-[450px] w-[440px] m-2 overflow-hidden drop-shadow-lg " >
                   <img src={el.img} alt="" className=" pb-1 p-[2px] mb-1 object-cover h-[260px] w-[100%] drop-shadow-lg rounded-b-[40px]" />
                  
                   <div className="p-2 bg-slate-100 h-[100%] border-t-4 border-gray-400">
                     <p className="text-start font-bold text-lg border-b-2 border-gray-400">{el.name}</p>
                     <p className="text-start font-semibold text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quo earum esse nostrum praesentium quisquam repellat aliquid quaerat minima provident, nemo, temporibus odit blanditiis nulla dignissimos accusamus unde, voluptatum nesciunt.</p>
                  
                     <div className="flex flex-row place-content-between mt-2">
                     <span className="p-1 mt-1 rounded-md font-bold text-md bg-slate-300 border-2 border-black hover:bg-slate-400 cursor-pointer transition-all delay-100 ease-out">Price: {el.price}</span>
                     <span className="p-1 mt-1 rounded-md font-bold text-md bg-slate-300 border-2 border-black hover:bg-slate-400 cursor-pointer transition-all delay-100 ease-out" >Add to Cart </span>
                   
                     </div>
                  
                   </div>
                     </section>   
                  
                  </div>
                )
              })


            }

           

                
             
            
            </section>

             {/* Coffe */}

            <section className="w-[480px] flex flex-col p-3 ml-[5px] mb-[10px] h-auto ">

             {
              cof.filter((val) =>{
                if (search === ""){
                  return val
                }else if(val.name.toLowerCase().includes(search.toLowerCase())){
                  return val
                }
              }).map((el) => {
                return(
                     <section className=" border-4 border-black h-[450px] w-[440px] m-2 overflow-hidden drop-shadow-lg" key={el.id}>
                   <img src={el.img} alt="" className="pb-1 p-[2px] mb-1 object-cover h-[260px] w-[100%] drop-shadow-lg rounded-b-[40px]" />
                  
                   <div className="p-2 bg-slate-100 h-[100%] border-t-4 border-gray-400">
                     <p className="text-start font-bold text-lg border-b-2 border-gray-400">{el.name}</p>
                     <p className="text-start font-semibold text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quo earum esse nostrum praesentium quisquam repellat aliquid quaerat minima provident, nemo, temporibus odit blanditiis nulla dignissimos accusamus unde, voluptatum nesciunt.</p>
                  
                     <div className="flex flex-row place-content-between mt-2">
                     <span className="p-1 mt-1 rounded-md font-bold text-md bg-slate-300 border-2 border-black hover:bg-slate-400 cursor-pointer transition-all delay-100 ease-out">Price: {el.price}</span>
                     <span className="p-1 mt-1 rounded-md font-bold text-md bg-slate-300 border-2 border-black hover:bg-slate-400 cursor-pointer transition-all delay-100 ease-out">Add to Cart </span>
                   
                     </div>
                  
                   </div>
                     </section>  
                )
              })
            }
            </section>
          

    </div>
    </>
  )
}

export default Menu