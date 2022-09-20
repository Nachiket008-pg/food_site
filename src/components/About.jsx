import React from 'react';
import user from './user.json'


function About() {
  return (
    <>
  <div className="border-gray-600 rounded-[40px] drop-shadow-xl border-2 w-4/5 ml-32 mt-10 mb-10">

    {/* Div 1 */}


    {
      user.map((el) => {
        return (

          <div className=" place-content-evenly mt-12 mb-12 grid md:grid-cols-2 ml-[430px]" key={el.id}>

          <section className=" bg-slate-400 h-[120px] rounded-[15px] border-2 border-gray-800 w-[380px] hover:scale-125 cursor-pointer transition-all ease-out duration-500 drop-shadow-xl">
            <div className="flex flex-row float-left ">
            <img src={el.img} alt="" className="h-[116px] float-left p-2 border-r-black border-r-4 rounded-r-lg" />
            <div className=" mt-[0px] float-right font-semibold p-2">
              <p className="mb-1 font-bold">{el.name}</p>
              <p className="mb-1 ">{el.mail}@foodiecenter.com</p>
              <p className="mb-[2px]">+91-{el.tel}</p>
              <p>Experience : {el.exp} Years</p>
            </div>
            </div>
          </section>
          
          {/* <section className=" bg-slate-400 h-[120px] rounded-[15px] border-2 border-gray-800 w-[380px] hover:scale-125 cursor-pointer transition-all ease-out duration-500 drop-shadow-xl" >
            <div className="flex flex-row float-left ">
            <img src={el.img} alt="" className="h-[116px] float-left p-2 border-r-black border-r-4 rounded-r-lg" />
            <div className=" mt-[0px] float-right font-semibold p-2">
              <p className="mb-1">{el.name}</p>
              <p className="mb-1 ">{el.mail}@gmail.com</p>
              <p className="mb-[2px]">+91-{el.tel}</p>
              <p>Experience : {el.exp} Years</p>
            </div>
            </div>
          </section> */}
            
          </div>

        )
      })
    }




  </div>
    
    </>
  )
}

export default About;