"use client";

import NextImage from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import GalleryTab from "./gallery-tab";

// import { Image } from "@/types";

// import GalleryTab from "./gallery-tab";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({
  images = []
}) => {
  return ( 
    <TabGroup as="div" className="flex h-full flex-col">
          <TabPanels className="flex w-full">
        {images.map((image) => (
          <TabPanel key={image}>
            <div className="  h-full w-full sm:rounded-lg overflow-hidden">
              <NextImage
               width={700}
                height={400}
                src={image}
                alt="Image"
                
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
      <div className="mx-auto mt-6 w-full max-w-2xl sm:block lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image} image={image} />
          ))}
        </TabList>
      </div>
    
    </TabGroup>
  );
}
 
export default Gallery;
