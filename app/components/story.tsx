"use client"
import Image from "next/image"
import { Container } from "./container"
import img from "@/public/manager.png"
import icon1 from "@/public/icon1.a3b9ae3818e04a3a5d57.png"
import icon2 from "@/public/icon2.ee6963ee9b38a8ced8cc.png"
import icon3 from "@/public/icon3.2f1157327f0b8e17fc6b.png"
import icon4 from "@/public/icon4.9335ffefdf8b98cc602d.png"
import { useEffect } from "react"
import AOS from "aos"
import { Heading } from "./heading"
export const StoryComponent = ()=>{
    useEffect(() => {
        AOS.init({
       // Animation duration in milliseconds
          once: false,     // Whether animation should happen only once
        });
      }, []);
    const steps = [
        {
            icon :icon1 ,
            head :" First Step",
            text :" A journey of passion, persistence, and growth in crafting digital experiences",
            delay:"100"
        },
        {
            icon :icon2 ,
            head :"Always Search",
            text :" A journey of passion, persistence, and growth in crafting digital experiences",
            delay:"300"
        },
        {
            icon :icon3 ,
            head :" heading!",
            text :"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, veniam!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, veniam!",
            delay:"500"
        },
        {
            icon :icon4 ,
            head :" professional",
            text :" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, veniam!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, veniam!",
            delay:"700"
        },
    ]
    return (
     <Container>

   
            <div className="flex flex-col justify-center items-center my-10  ">
            <Heading
title="My Story"
text="A journey of passion, persistence, and growth in crafting digital experiences"
></Heading>

{/* <p  className="my-2 text-2xl font-bold text-center text-white">
</p> */}
<div  data-aos="zoom-in"  className=" grid grid-cols-1 md:grid-cols-2 gap-5 my-10 p-5  rounded-xl bg-gradient-to-r text-sm  shadow-xl shadow-sky-900 ">
    <div className="flex flex-col justify-center items-center  ">
<div>
    
 
  <div className=" border-b-[.1px] border-b-sky-500 my-4 " >
  <p className="p-2 text-white  " >
         Front-End Developer with 3 years of experience in learning and mastering front-end
basics and new technologies to achieve building responsive and dynamic web apps. 
That leads me to be proficient in HTML, CSS, JavaScript, React, and Next.js .
         </p>
    </div>  
  <div className=" border-b-[.1px] border-b-sky-500 my-4 " >
  <p className="p-2 text-white " >
  Passionate about creating responsive , user-friendly interfaces and continuously
improving my skills through learning the latest front-end technologies.
I can work all the time without any boredom and never stop searching and learning
I am proficient in using the power of AI to help learning and also completing my
tasks faster and with very high accuracy.
         </p>
    </div>  
</div>
    </div>
<div>
    <Image src={img} alt="img" height={400} className=" "/>  
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-4  md:grid-cols-2 gap-4 " >

       
{
    steps.map((step)=>
        <div data-aos="zoom-in"    className="flex flex-col text-white  bg-gradient-to-r rounded-lg items-center ">

<Image src={step.icon} alt=""/>
<p className="font-bold text-2xl mb-3 ">
    {step.head}
</p>

<p className="p-2">
    {step.text}
</p>
        </div>
    )
}
</div>
            </div>
</Container>
    )
}