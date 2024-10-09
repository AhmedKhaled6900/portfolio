
"use client"
import { Project } from "@/types/project"
import Image from "next/image"
import Link from "next/link"
import { useRef,useEffect,useState } from "react"
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
interface props {
project : Project
}


export const ProjectsComponent:React.FC<props> =({project})=>{

      const sectionRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false); // State to track if section is at top

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting )  {
          // Section has reached the top
          setIsAtTop(true);
        } else {
          // Section is not at the top
          setIsAtTop(false);
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: ' -100px 0px 0px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
   }, []);
    return (
      <div ref={sectionRef} className= {isAtTop ? " min-h-[100vh] rounded-lg mt-10 section bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gradient1 to-black bg-opacity-50":
        " rounded-lg  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gradient1 to-black h-[100vh] flex justify-center flex-col items-center "}  >

   
        <div className=""   >
            <Link href={`/projects/${project.id}`} className ="  font-bold text-3xl text-sky-500 ">
            {project.title}
            </Link>
            </div>
       <div  className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 my-10">
       <Image className="" width={600} height={600} src={project.images[0]} alt=""/>
       
       <div className=" p-2">
      {/* <h1 className="text-3xl font-bold my-4">{project.title}</h1> */}
      <p className=" ">{project.description}</p>
<div className="mt-4 flex gap-4 items-center justify-center lg:justify-start ">


 
 <a href={project.liveUrl} className="text-3xl text-white hover:text-sky-500   p-2 rounded-lg font-bold my-4 shadow-inner shadow-sky-500 ">
<IoIosLink size={30}/>
 </a>
 <a href={project.repoUrl} className="text-3xl text-white hover:text-sky-500 p-2 rounded-lg  font-bold my-4 shadow-inner shadow-sky-500 ">
<FaGithub size={30}/>
 </a>
 </div>
      </div>
       </div>

        
    
       
             </div>

    )
}
