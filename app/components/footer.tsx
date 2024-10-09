import Image from "next/image";
import img from "@/public/IMG_20240725_030359.jpg";
import { Container } from "./container";
import { FaGithub } from "react-icons/fa";
<FaGithub />;
import { FaFacebookF } from "react-icons/fa";
<FaFacebookF />;
import { FaInstagram } from "react-icons/fa6";
<FaInstagram />;
import { FaLinkedinIn } from "react-icons/fa6";
<FaLinkedinIn />;
import { FaXTwitter } from "react-icons/fa6";
<FaXTwitter />;
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
<FaWhatsapp />;
const Footer = () => {
  const routes = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects",
    },

    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];
  const social = [
    {
      icon: <FaGithub size={30} />,
      href: "",
    },
    {
      icon: <FaLinkedinIn size={30} />,
      href: "",
    },
    {
      icon: <FaFacebookF size={30} />,
      href: "",
    },
    // {
    //     icon:<FaInstagram size={30} />,
    //     href:""
    // },
    // {
    //     icon:<FaXTwitter size={30} />,
    //     href:""
    // },
    // {
    //     icon:<FaWhatsapp size={30} />,
    //     href:""
    // },
  ];
  return (
    <Container>
      <div className="grid grid-cols-3 gap-x-2 mt-10 ">
        <div className="flex  flex-col justify-center  space-y-6 h-full items-center">
          <p className="font-semibold text-lg text-white">Made by</p>
          <p className="font-bold whitespace-nowrap text-xl lg:text-3xl text-sky-500">
            Ahmed Khaled
          </p>
          <Image
            className="rounded-full border-2 border-sky-500"
            src={img}
            width={100}
            height={100}
            alt="img"
          ></Image>
        </div>
        <div className="flex flex-col justify-center h-full items-center space-y-3  ms-4  ">
          <p className=" text-white font-semibold text-lg"> Follow Me</p>
          <div className="flex flex-col justify-center items-center ">
            {social.map((item) => (
              <div className="hover:bg-transparent rounded-full p-2 text-white hover:text-sky-500 shadow-inner shadow-sky-700    mb-2  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gradient1 to-black">
                {" "}
                <a href={item.href}> {item.icon}</a>{" "}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-y-4 ms-4 ">
            <p className="text-white font-semibold text-lg"> Links</p>
            {
                routes.map((route)=>
                <Link className="font-semibold text-white hover:text-sky-500" href={route.href}> {route.label}</Link>
                )
            }

        </div>
      </div>
    </Container>
        );
};

export default Footer;
