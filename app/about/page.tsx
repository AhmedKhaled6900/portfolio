// //  const AboutPage =()=>{
// //     return (
// //         <div>
// //             about me
// //         </div>

import HeroSectionContact from "../components/hero-contact"
import { StoryComponent } from "../components/story"



// //     )
// // }
// // export default AboutPage


// // HeroSection.tsx

// "use client"
// import { useState, useEffect } from 'react';
// import img from '@/public/IMG_20240725_030359.jpg';
// import Image from 'next/image';
// const HeroSectionContact = () => {
//   const [text, setText] = useState('');
//   const [index, setIndex] = useState(0);
//   const words = ['innovative', 'dynamic', 'responsive', 'user-focused']; // Words to type out
//   const speed = 150; // Typing speed in milliseconds

//   useEffect(() => {
//     if (index < words.length) {
//       const word = words[index];
//       let charIndex = 0;
//       const typeInterval = setInterval(() => {
//         setText(word.substring(0, charIndex + 1));
//         charIndex++;
//         if (charIndex === word.length) {
//           clearInterval(typeInterval);
//           setTimeout(() => {
//             setIndex((prevIndex) => (prevIndex + 1) % words.length);
//           }, 1000); // Pause between words
//         }
//       }, speed);
//       return () => clearInterval(typeInterval);
//     }
//   }, [index]);

//   return (
//     <section className="relative  h-screen flex flex-col justify-center items-center text-center text-white">
//       {/* Animated Typing Text */}
//       <h1 className="text-4xl md:text-6xl font-bold mb-4">
//         Hi, I'm <span className="text-sky-500">Ahmed Khaled</span>, a Developer <br /> Creating <span className="text-sky-500"> {text} </span> Digital Experiences.
//       </h1>

//       {/* Subheading */}
//       <p className="text-lg md:text-xl mt-4">
//         Bringing Your Ideas to Life with Responsive, Dynamic Web Applications.
//       </p>

//       {/* CTA Button */}
//       <div className="mt-8">
//         <a href="/contact" className="px-8 py-3 bg-yellow-300 text-black font-semibold rounded-lg hover:bg-yellow-400">
//           Let’s create something amazing
//         </a>
//       </div>

//       {/* Floating Interactive Icons */}
  
      
//     </section>
//   );
// };

// export default HeroSectionContact;

const ContactPage =()=>{
  return (
    <div>

   <div>
   <HeroSectionContact/>

   </div>
   
   <StoryComponent/>

 
    </div>
    
  )
}
export default ContactPage