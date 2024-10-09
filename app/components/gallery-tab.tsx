import NextImage from "next/image";
import { Tab } from "@headlessui/react";




interface GalleryTabProps {
  image: string;
}

const GalleryTab: React.FC<GalleryTabProps> = ({
  image
}) => {
  return ( 
    <Tab
      className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white"
    >
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <NextImage 
              fill 
              src={image} 
              alt="" 
              className="object-cover object-center" 
            />
          </span>
       
        
        </div>
      )}
    </Tab>
  );
}
 
export default GalleryTab;
