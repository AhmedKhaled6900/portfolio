// app/projects/[id]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../../../types/project';
import projectsData from '../../../data/projects.json';
import { Metadata } from 'next';
import Gallery from '@/app/components/productsgallery';
import { Container } from '@/app/components/container';

interface ProjectPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  const projects: Project[] = projectsData;
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const projects: Project[] = projectsData;
  const project = projects.find((proj) => proj.id === params.id);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The project you are looking for does not exist.',
    };
  }

  return {
    title: `${project.title} | My Portfolio`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const projects: Project[] = projectsData;
  const project = projects.find((proj) => proj.id === params.id);

  if (!project) {
    notFound();
  }

  const { title, description, images, technologies, liveUrl, repoUrl } = project;

  return (
    <Container>
    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">

      <Gallery images={images}/>
      <div>
      <h1 className="text-3xl font-bold my-4">{title}</h1>
      <p className="mt-4 text-gray-700">{description}</p>
<h2 className="text-2xl font-semibold mt-6">Technologies Used:</h2>
<ul className="list-disc list-inside mt-2">
  {technologies.map((tech, index) => (
    <li key={index} className="text-gray-600">
      {tech}
    </li>
  ))}
</ul>
      </div>
      {/* Image Gallery */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"> */}
        {/* {images.map((imgSrc, index) => (
          <Image
            key={index}
            src={imgSrc}
            alt={`${title} Image ${index + 1}`}
            width={600}
            height={400}
            className="rounded-md"
          />
        ))}
      </div> */}

    

      {/* <div className="mt-6 flex space-x-4"> */}
        {/* <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Live Demo
        </a>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900"
        >
          View Repository
        </a> */}
      </div>
      
    {/* </div>
    </div> */}
    </Container>

  );
}
