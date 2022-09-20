import React from 'react';
import del from './delivery.jpg';
import {FaWhatsapp,FaInstagram,FaTwitter,FaDiscord} from 'react-icons/fa'

function Contact() {
  return (
    <>
    <div className="grid grid-cols-5 bg-slate-100 p-3 mt-2">
      <div className="col-span-2"></div>
    <div className="sm:col-span-1"><p className="sm:text-[40px] text-center border-black border-4 rounded-3xl bg-slate-200 cursor-pointer hover:scale-110 transition-all ease-out duration-200">Contact Us</p></div>
    </div>

    <div className="grid grid-flow-row sm:grid-cols-4 bg-slate-100 " >
    <div className="col-span-1"></div>
      <div className="col-span-1"> <img src={del} alt="" className="p-4" /></div>
      <div className="col-span-1 sm:border-l-4 border-black my-3 "> 
        <div>
        <h1 className="text-[40px] text-center font-bold underline-offset-4 underline">Free Delivery</h1>
        <p className="font-semibold text-center p-2 m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, blanditiis. Perferendis, modi eveniet, libero quaerat eligendi quibusdam saepe minus maxime numquam aliquam dolorem nostrum sequi similique magnam, eos consequatur reiciendis non adipisci rerum molestias iusto enim laudantium? Excepturi, consequuntur itaque. Perferendis nesciunt quaerat nihil, velit eius accusamus possimus facere qui iusto, sit illo est beatae porro sed libero, et nam?</p>
        </div>
      </div>

    </div>

    <div className="grid sm:grid-cols-4 bg-slate-200 ">
          <div className="bg-green-700 m-2"><FaWhatsapp className="text-[150px] ml-[100px] border-4 text-white my-[10px] border-black p-2 hover:scale-105 transition-all ease-out duration-200 cursor-pointer"/></div>

          <div className="bg-gradient-to-r from-pink-500 to-yellow-500 m-2"><FaInstagram className="text-[150px] ml-[100px] border-4 text-white my-[10px] border-black p-2 hover:scale-105 transition-all ease-out duration-200 cursor-pointer"/></div>

          <div className="bg-blue-400 m-2"><FaTwitter className="text-[150px] ml-[100px] border-4 text-white my-[10px] border-black p-2 hover:scale-105 transition-all ease-out duration-200 cursor-pointer"/></div>

          <div className="bg-purple-500 m-2"><FaDiscord className="text-[150px] ml-[100px] border-4 text-white my-[10px] border-black p-2 hover:scale-105 transition-all ease-out duration-200 cursor-pointer"/></div>

        </div>
    

    </>
  )
}

export default Contact