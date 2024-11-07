// pages/index.js
"use client"
import { BsCurrencyDollar } from "react-icons/bs";
import 'animate.css';
import { GrPlan } from "react-icons/gr";
import { FaRegSmile } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { IoTimerOutline } from "react-icons/io5";
import { SlUserFollowing } from "react-icons/sl";
import React, { useEffect } from 'react';
import AOS from "aos";
import Link from "next/link";
export default function Hero() {

  const routes = [
    {
      text: "PROJECT PLANNING",
      icon: <GrPlan size={30} className=" animate__animated animate__fadeInDown" />,
      delay: "animate__delay-1s"
    },
    {
      text: "RECIEVE ON TIME",
      icon: <IoTimerOutline size={30} className=" animate__animated animate__fadeInDown" />,
      delay: "animate__delay-2s"
    },
    {
      text: "  SATISFICATION QURANTEED",
      icon: <FaRegSmile size={30} className=" animate__animated animate__fadeInDown" />,
      delay: "animate__delay-3s"
    },
    {
      text: "  TECHNICAL SUPPORT",
      icon: <BiSupport size={30} className=" animate__animated animate__fadeInDown" />,
      delay: "animate__delay-4s"
    },
    {
      text: "FIXED PRICE",
      icon: <BsCurrencyDollar size={30} className=" animate__animated animate__fadeInDown" />,
      delay: "animate__delay-5s"
    },
    {
      text: "Follow UP",
      icon: <SlUserFollowing size={30} className=" animate__animated animate__fadeInDown" />,
      delay: "animate__delay-5s"
    },
  ]
  useEffect(() => {
    AOS.init({
      // Animation duration in milliseconds
      once: false,     // Whether animation should happen only once
    });
  }, []);
  return (
    <div >
      <div className='   '>
        <div className=' flex flex-col'>
          <div className=" text-white">
            <h1 className='font-bold text-4xl md:text-6xl text-center '>
              Hello & Welcome
            </h1>
            <div className=' animated-text font-semibold lg:text-2xl my-2   text-center'>
              <span data-aos="zoom-in" data-aos-delay="" className="text-sky-500 font-bold text-4xl md:text-6xl"> A</span>
              <span data-aos="zoom-in" data-aos-delay="300" className="text-sky-500 font-bold text-4xl md:text-6xl"> H</span>
              <span data-aos="zoom-in" data-aos-delay="500" className="text-sky-500 font-bold text-4xl md:text-6xl"> M</span>
              <span data-aos="zoom-in" data-aos-delay="700" className="text-sky-500 font-bold text-4xl md:text-6xl"> E</span>
              <span data-aos="zoom-in" data-aos-delay="900" className="text-sky-500 font-bold text-4xl md:text-6xl pe-2" > D</span>
              <span data-aos="zoom-in" data-aos-delay="1100" className="text-sky-500 font-bold text-4xl md:text-6xl"> K</span>
              <span data-aos="zoom-in" data-aos-delay="1300" className="text-sky-500 font-bold text-4xl md:text-6xl"> H</span>
              <span data-aos="zoom-in" data-aos-delay="1500" className="text-sky-500 font-bold text-4xl md:text-6xl"> A</span>
              <span data-aos="zoom-in" data-aos-delay="1700" className="text-sky-500 font-bold text-4xl md:text-6xl"> L</span>
              <span data-aos="zoom-in" data-aos-delay="1900" className="text-sky-500 font-bold text-4xl md:text-6xl"> E</span>
              <span data-aos="zoom-in" data-aos-delay="2100" className="text-sky-500 font-bold text-4xl md:text-6xl"> D</span>
              <br />
              <p className="text-4xl md:text-6xl ">Portfolio</p>
            </div>
            <h1 className=' whitespace-nowrap font-semibold lg:text-2xl    text-center'>
              React.js , Next.js Front end developer
            </h1>
            <h1 className='font-semibold lg:text-2xl  text-center'>
              Iam designing apps with 💕and 👌
            </h1>

            <div className="flex justify-center items-center  w-full gap-5 mt-5">
            <Link href={"/projects"} className="w-full flex justify-center items-center md:justify-end">
              <button className="bg-sky-400 hover:bg-sky-500 md:w-[50%] w-full font-semibold text-xl p-2 rounded-full" type="submit" > See Projects </button>
            </Link>
            <Link href={"/contact"} className="w-full flex justify-center items-center md:justify-start">
              <button className="bg-sky-400 hover:bg-sky-500  w-full md:w-[50%] font-semibold text-xl   p-2 rounded-full " type="submit" > Hire me !  </button>

            </Link>
          </div>
          </div>
          <div className=" grid sm-grid-cols-2 md:grid-cols-3 lg:grid-cols-6  text-sm text-sky-500 gap-6 mt-6">
            {
              routes.map((route) => (
                <div className=" rounded-lg flex lg:flex-col   flex-row gap-6 text-center items-center lg:justify-center justify-start hover:bg-black w-full  p-4  shadow-inner hover:shadow-sky-500 shadow-slate-700 ">
                  {
                    route.icon
                  }
                  <h1 className={`animate__animated animate__fadeInUp  font-semibold `} >
                    {route.text}
                  </h1>
                </div>
              ))
            }
          </div>
        

        </div>

      </div>
    </div>
  );
}
