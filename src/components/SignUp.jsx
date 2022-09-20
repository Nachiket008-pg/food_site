import React from 'react'

function SignUp() {
  return (
    <>
    <div className="flex items-center justify-center h-auto">
      
        <div className=" bg-slate-300 mt-[100px] p-4  drop-shadow-xl border-black border-2 rounded-2xl">
        <h1 className="font-bold text-[40px] text-center mt-1 font-serif">Sign Up</h1>
        <input type="mail" name="" id="" placeholder="Enter E-mail" className="block my-2 w-[600px] font-semibold text-lg h-10 p-2 rounded-lg ring-gray-700 ring-1 focus:ring-gray-700 focus:ring-2 outline-none placeholder:p-0 placeholder:font-semibold" />
        <input type="password" name="" id="" placeholder="Enter Password" className="block my-2 w-[600px] font-semibold text-lg h-10 p-2 rounded-lg ring-gray-700 ring-1 focus:ring-gray-700 focus:ring-2 outline-none placeholder:p-0 placeholder:font-semibold" />
       <div className="my-2">
       <p className="float-left mr-[300px] text-blue-700 cursor-pointer font-semibold">Forget password ? </p>
        <p className="float-right text-blue-700 cursor-pointer font-semibold">Create account</p>
       </div>

        <button className="w-[300px] block p-2 font-bold text-lg mt-[60px] ml-[150px] bg-green-400 rounded-2xl border-black border-2 hover:scale-105 hover:bg-green-500 transition-all ease-out duration-200">Log In</button>
       

        </div>
    </div>
    </>
  )
}

export default SignUp;