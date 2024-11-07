"use client"
import { useState, useEffect } from 'react';
import img from "@/public/FB_IMG_1721750338893.jpg"
import Image from 'next/image';
import AOS from 'aos';
const HeroSectionContact = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const words = ['innovative', 'dynamic', 'responsive', 'user-focused']; // Words to type out
  const speed = 150; // Typing speed in milliseconds
  useEffect(() => {
    AOS.init({
   // Animation duration in milliseconds
      once: false,     // Whether animation should happen only once
    });
  }, []);
  useEffect(() => {
    if (index < words.length) {
      const word = words[index];
      let charIndex = 0;
      const typeInterval = setInterval(() => {
        setText(word.substring(0, charIndex + 1));
        charIndex++;
        if (charIndex === word.length) {
          clearInterval(typeInterval);
          setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
          }, 1000); // Pause between words
        }
      }, speed);
      return () => clearInterval(typeInterval);
    }
  }, [index]);

  return (
    <section className="    flex flex-col justify-center items-center text-center text-white">
      {/* Animated Typing Text */}
<div data-aos="zoom-in"> 
    <Image className='rounded-full shadow-2xl mt-10 mb-5 shadow-sky-500' src={img} width={200} height={200} alt="img" ></Image>
</div>


      <p data-aos="zoom-in" data-aos-delay="300" className="text-4xl font-bold mb-2">
        Hi, I'm <span className="text-sky-500">Ahmed Khaled</span> <br /> Developer Creating <br />  <span className="text-sky-500"> {text} </span> <br />  Digital Experiences.
      </p>

      {/* Subheading */}
      <p className=" mt-2">
        Bringing Your Ideas to Life with Responsive, Dynamic Web Applications.
      </p>

      {/* CTA Button */}
      <div className="mt-6 ">
        <a href="/contact" className="px-8 py-3 bg-sky-300 text-black font-semibold rounded-lg hover:bg-sky-500">
          Let’s create something amazing
        </a>
      </div>

      {/* Floating Interactive Icons */}
  
      
    </section>
  );
};

export default HeroSectionContact;
