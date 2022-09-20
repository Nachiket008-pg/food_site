import React from "react";
import {
  UilShoppingCartAlt,
  UilSun,
  UilSetting,
  UilUserCircle,
} from "@iconscout/react-unicons";
import images from "./images.jpg";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <>
      <div className="items-center justify-center flex flex-wrap bg-slate-100 drop-shadow-lg w-screen">
        <div className="flex h-[60px] w-screen ml-[100px] ">
          <div className="flex mt-[6px]">
            <img src={images} alt="" className="p-2" />

            <p className="ml-[50px] text-4xl">|</p>

            <p className="text-md font-bold ml-[25px] p-2 mt-1 drop-shadow-lg">
              <Link
                to="/"
                className="p-3 hover:bg-slate-200 transition-all delay-100 ease-out rounded-xl"
              >
                Home
              </Link>
            </p>

            <p className="text-md font-bold ml-[25px] p-2 mt-1 drop-shadow-lg">
              <Link
                to="menu"
                className="p-3 hover:bg-slate-200 transition-all delay-100 ease-out rounded-xl"
              >
                Menu
              </Link>
            </p>

            <p className="text-md font-bold ml-[25px] p-2 mt-1 drop-shadow-lg">
              <Link
                to="about"
                className="p-3 hover:bg-slate-200 transition-all delay-100 ease-out rounded-xl"
              >
                Staff
              </Link>
            </p>

            <p className="text-md font-bold ml-[25px] p-2 mt-1 drop-shadow-lg">
              <Link
                to="contact"
                className="p-3 hover:bg-slate-200 transition-all delay-100 ease-out rounded-xl"
              >
                Contact
              </Link>
            </p>

            <p className="ml-[25px] text-4xl">|</p>
          </div>

          <div className="flex ml-[200px] mr-[100px]">
            <button
              className="p-[10px] h-[40px] mt-[8px] font-bold hover:bg-slate-200 transition-all delay-100 ease-out rounded-xl ml-[300px] drop-shadow-lg"
              title="Cart"
            >
              <UilShoppingCartAlt size="25" />
            </button>

            <button
              className="p-[10px] h-[40px] mt-[8px] font-bold hover:bg-slate-200 transition-all delay-100 ease-out rounded-xl ml-[10px] drop-shadow-lg"
              title="Settings"
            >
              <UilSetting size="25" />
            </button>

            <button
              className="p-[10px] h-[40px] mt-[8px] font-bold hover:bg-slate-200 transition-all delay-100 ease-out rounded-xl ml-[10px] drop-shadow-lg"
              title="Log In"
            >
              <Link to="signup"><UilUserCircle size="25" /></Link>
              
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
