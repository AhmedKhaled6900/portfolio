"use client"
import AOS from "aos";
import { useEffect } from "react";
interface props {
    title:string ,
    text:string,
    text1?:string,
    text2?:string

}


 export const Heading :React.FC<props> =({title,text,text1,text2})=>{
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: false,     // Whether animation should happen only once
        });
      }, []);
    return (
        <div data-aos="zoom-in" className="flex items-center flex-col justify-center mt-5 text-white">
        <p className="text-center font-bold text-3xl my-4">
           {title}
        </p>
        <p className="text-center font-bold text-lg">
       {text}
        </p>
        <p className="text-center font-bold text-lg">
       {text1}
        </p>
        <p className="text-center font-bold text-lg">
       {text2}
        </p>
    </div>

    )

 }