import img from "@/app/public/images/bandicam2024-10-0407-46-31-391-ezgif.com-video-to-gif-converter.gif"
import Image from "next/image"
import projects from "@/data/projects.json"
import { Container } from "../components/container"
import { Heading } from "../components/heading"
import { ProjectsComponent } from "../components/projects"
import  {Project}  from "@/types/project"
const ProjectsPage = ()=>{

    const ProjectsData:Project[]= projects
    return (
        <Container>
            <div>
            <Heading title="My Projects" 
            text="Projects made with Love and Passion" 
            text1="100 % Responsive"
            text2="100 % User friendly"
            >
            </Heading>
            </div>
{
    ProjectsData.map((project)=>

        <ProjectsComponent project ={project}>

        </ProjectsComponent>
        // <div className="flex flex-col justify-center items-center h-[100vh]">
        //     <div>
        //     {project.title}
        //     <Image width={600} height={800} src= {project.images[0]} alt="">

        //     </Image>
        //     </div>
        
        // </div>
    )
}

{/* <div>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, placeat!</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, placeat!</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, placeat!</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, placeat!</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, placeat!</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, placeat!</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, placeat!</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, placeat!</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, placeat!</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, placeat!</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, placeat!</h1>
</div> */}
     
        </Container>
    )
}
export default ProjectsPage