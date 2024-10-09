"use client";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdAddReaction } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { SlPresent } from "react-icons/sl";
import { useEffect, useRef, useState } from "react";
import { FaMedal } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import AOS from "aos";
import { Heading } from "./heading";


export  const SecondSection = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState<number>(0);
  const [count3, setCount3] = useState<number>(0);
  const [count4, setCount4] = useState<number>(0);
  const target = 100; // Target number
  const target2 = 40; // Target number
  const target3 = 40; // Target number
  const target4 = 60; // Target number
  const speed = 80; // Speed of counting
  const counter1Ref = useRef(null); // To observe the counter section
  const counter2Ref = useRef(null); // To observe the counter section
  const counter3Ref = useRef(null); // To observe the counter section
  const counter4Ref = useRef(null); // To observe the counter section
  const [isVisible, setIsVisible] = useState(false); // To track visibility of section

  // IntersectionObserver to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Start counting when visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (counter1Ref.current) {
      observer.observe(counter1Ref.current);
    }
    if (counter2Ref.current) {
      observer.observe(counter2Ref.current);
    }
    if (counter3Ref.current) {
      observer.observe(counter3Ref.current);
    }
    if (counter4Ref.current) {
      observer.observe(counter4Ref.current);
    }

    return () => {
      if (counter1Ref.current) {
        observer.unobserve(counter1Ref.current);
      }
      if (counter2Ref.current) {
        observer.unobserve(counter2Ref.current);
      }
      if (counter3Ref.current) {
        observer.unobserve(counter3Ref.current);
      }
      if (counter4Ref.current) {
        observer.unobserve(counter4Ref.current);
      }
    };
  }, []);

  // Start counting when the section becomes visible
  useEffect(() => {
    if (isVisible && count < target) {
      const increment = Math.ceil(target / speed); // Calculate increment
      const interval = setInterval(() => {
        setCount((prevCount: number) => {
          if (prevCount < target) {
            return Math.min(prevCount + increment, target);
          } else {
            clearInterval(interval);
            return prevCount;
          }
        });
      }, 100);
    }
    if (isVisible && count2 < target2) {
      const increment = Math.ceil(target2 / speed); // Calculate increment
      const interval = setInterval(() => {
        setCount2((prevCount) => {
          if (prevCount < target2) {
            return Math.min(prevCount + increment, target2);
          } else {
            clearInterval(interval);
            return prevCount;
          }
        });
      }, 100);
    }
    if (isVisible && count3 < target3) {
      const increment = Math.ceil(target3 / speed); // Calculate increment
      const interval = setInterval(() => {
        setCount3((prevCount) => {
          if (prevCount < target3) {
            return Math.min(prevCount + increment, target3);
          } else {
            clearInterval(interval);
            return prevCount;
          }
        });
      }, 100);
    }
    if (isVisible && count4 < target4) {
      const increment = Math.ceil(target4 / speed); // Calculate increment
      const interval = setInterval(() => {
        setCount4((prevCount) => {
          if (prevCount < target4) {
            return Math.min(prevCount + increment, target4);
          } else {
            clearInterval(interval);
            return prevCount;
          }
        });
      }, 100);

    }
  }, [isVisible]);

  const data = [
    {
      icon: <BsGraphUpArrow size={30} />,
      head: "Business Growth",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex neque, nostrum doloribus maxime error doloremque!  doloribus maxime error doloribus maxime error doloribus maxime error",
      delay: "50",
    },
    {
      icon: <FaRegHeart size={30} />,
      head: "Unlimited Revision",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing  amet consectetur adipisicing elit. Ex neque, nostrum doloribus maxime error doloremque!",
      delay: "150",
    },
    {
      icon: <MdAddReaction size={30} />,
      head: " Ultimate Perfection",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex neque, nostrum doloribus maxime  doloribus maxime error doloremque!",
      delay: "250",
    },
    {
      icon: <SlPresent size={30} />,
      head: "Smart Experience",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex neque, nostrum amet consectetur adipisicing doloribus maxime error doloremque  doloribus maxime error!",
      delay: "350",
    },
    {
      icon: <FaRegCalendarCheck size={30} />,
      head: "Strict Deadline",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex neque, nostrum doloribus maxime error  doloribus maxime error doloremque!",
      delay: "450",
    },
    {
      icon: <FaMedal size={30} />,
      head: "Reputed Company",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing  Ex neque, nostrum doloribus maxime elit. Ex neque, nostrum doloribus maxime error doloremque!",
      delay: "550",
    },
  ];
  const subjects = [
    {
      head: "PROJECTS COMPLETED",
      icon: <BsGraphUpArrow size={30} />,
      count: count,
      ref: { counter1Ref },
      delay: "50",
    },
    {
      head: "SATISFIED CLIENTS",
      icon: <MdAddReaction size={30} />,
      count: count2,
      ref: { counter2Ref },
      delay: "150",
    },
    {
      head: "POSITIVE FEEDBACKS",
      icon: <FaRegHeart size={30} />,
      count: count3,
      ref: { counter3Ref },
      delay: "250",
    },
    {
      head: "PARTENERSHIPS",
      icon: <SlPresent size={30} />,
      count: count4,
      ref: { counter4Ref },
      delay: "300",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <div className=" h-full mt-10  mb-10">
      <Heading
            title="Why Hire Me?"
            text=" I understand your requirments & provide quality work 😊"
          ></Heading>
        <div className=" lg:py-5 my-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gradient1 to-black  rounded-full grid lg:flex justify-center items-center grid-cols-2 gap-5   whitespace-nowrap text-sm w-full">
          {subjects.map((sub) => (
            <div key={sub.head}
              ref={counter1Ref}
              data-aos="fade-down"
              data-aos-delay={sub.delay}
              className=" rounded flex flex-col p-4 text-sky-500 justify-center items-center gap-4 font-semibold  shadow-md shadow-slate-700"
            >
              {sub.icon}
              {sub.count}
              <h1 className="p-3">{sub.head}</h1>
            </div>
          ))}
        </div>
        <div className="    flex flex-col justify-center items-center text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:text-sm text-xs my-5">
            {data.map((item) => (
              <div key={item.head}
                data-aos="fade-down"
                data-aos-delay={item.delay}
                className="border-s-2 group border-sky-500   bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gradient1 to-black  flex flex-col justify-start items-start rounded-lg shadow-md shadow-slate-700 p-4 "
              >
                <div className="text-sky-500 flex items-start justify-center text-center gap-x-3  ">
                  <div>{item.icon}</div>
                  <p className=" whitespace-nowrap font-bold flex items-center h-full text-center">
                    {item.head}
                  </p>
                </div>
                <p className="mt-3 group-hover:text-white  text-gray-500 ">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};


