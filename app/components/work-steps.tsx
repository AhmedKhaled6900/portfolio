"use client"
import Image from "next/image" 
import img from"/public/GQHSv7AO.jpeg"
import img2 from"/public/XjRts09t.jpeg"
import img3 from"/public/xFG5RbXb.jpeg"
import img4 from"/public/Ffoe40-q.jpeg"
import { Heading } from "./heading"
import { Container } from "./container"
import AOS from "aos"
import { useEffect } from "react"

export const WorkSteps =()=>{

    const data =[
        {
            head :"Project Understanding",
            num:"1",
            text:" Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, Lorem ipsum dolor sit ame, consectetur adipisicing elit. Repudiandae, nam. consectetur adipisicing elit. Totam, culpa?",
            img:img

        },
        {
            head :"Research & Planning",
            num:"2",
            text:" Lorem amet Lorem ipsum dolor sit amet, consectetur adipisicing elit ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, nam. consectetur adipisicing elit. Totam, culpa?",
            img:img2

        },
        {
            head :"Wireframe & Design",
            num:"3",
            text:" Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, nam. consectetur adipisicing elit. Totam, culpa?",
            img:img3

        },
        {
            head :"Development",
            num:"4",
            text:" Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametamet Lorem ipsum dolor sit amet, consectetur adipisicing elit, consectetur adipisicing elit. Repudiandae, nam. consectetur adipisicing elit. Totam, culpa?",
            img:img4

        },
    ]

    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: false,     // Whether animation should happen only once
        });
      }, []);
      
    return(
        <div className="  flex flex-col justify-center items-center text-white">
            <Heading title="Work Steps" 
                text="we understand your requirments & 
                provide quality work 😊">
            </Heading>


    {data.map((item)=>(
        <div key={item.num}  data-aos="fade-down" className=" lg:grid group   grid-cols-2 gap-0 lg:gap-5 flex justify-center items-center flex-col">
        

       <Image className="rounded-lg"  src={item.img}  alt=""></Image>
        
       <div>

<div className="flex-col group-hover:translate-y-0 group-hover:mb-3 group-hover:lg:mb-0  transition-transform duration-500 flex lg:translate-y-0 translate-y-[-50px]  bg-[radial-gradient(ellipse_at_left_top,_var(--tw-gradient-stops))] from-gradient1 to-black  shadow-md shadow-slate-700  border-s-2 rounded-lg border-sky-500">
    <div className="flex justify-start items-start px-4 bg-black bg-opacity-20 lg:bg-transparent gap-x-5 rounded-ss-lg ">
        <p className=" my-2 text-3xl font-bold text-opacity-50 opacity-45    ">{item.num}</p>
    <p className=" my-2 text-2xl font-bold text-sky-500">{item.head}</p>
    </div>
             <p className="px-4 my-4 group-hover:text-white text-xs lg:text-sm  text-gray-500"> {item.text}</p>
            </div>
             </div>
             </div>
          
       
    ))}


           
        
          

    
        </div>
    )
}