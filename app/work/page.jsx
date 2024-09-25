"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";

import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "eBookSphere",
    description:
      "Designed and developed a responsive UI using ReactJS, TailwindCSS, and Flowbite. Deployed front-end on Vercel and Netlify, ensuring scalability. Built and tested features for a smooth user experience. Implemented mock API with JSON Server, deployed on Render. Integrated secure authentication with JSON Server Auth and JWT. Performed manual testing to ensure functionality and responsiveness.",
    stack: [
      { name: "ReactJS" },
      { name: "TailwindCSS" },
      { name: "Flowbite" },
      { name: "JSON Server" },
      { name: "Vercel" },
    ],
    image: "/assets/assets/work/eBookSphere.png",
    live: "https://ebooksphere.vercel.app/",
    github: "https://github.com/1Ir-is/eBookSphere-ReactApp-Basic",
  },
  {
    num: "02",
    category: "Frontend",
    title: "CineAtlas",
    description:
      "Built a movie database platform similar to IMDb using ReactJS and TailwindCSS. Integrated movie data from The Movie Database (TMDb) API. Styled with Flowbite for seamless UI design. Deployed on Netlify and Vercel for scalability and performance.",
    stack: [
      { name: "ReactJS" },
      { name: "TailwindCSS" },
      { name: "Flowbite" },
      { name: "TMDb API" },
    ],
    image: "/assets/assets/work/CineAtlat.png",
    live: "https://cineatlas.vercel.app/",
    github: "https://github.com/1Ir-is/CineAtlas-ReactApp-Basic",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "Car Rental System (Final Year Project)",
    description:
      "Developed a car rental platform with separate interfaces for users, car owners, and admins. Built user and car owner front-end with React.js, Tailwind CSS, Ant Design, and custom CSS. Integrated Google Login, PayPal, TalkJS, and Cloudinary for enhanced functionality. Back-end developed with ASP.NET Core and SQL Server for robust API interactions. Admin site built using ASP.NET Core MVC with a responsive interface.",
    stack: [
      { name: "ReactJS" },
      { name: "TailwindCSS" },
      { name: "Ant Design" },
      { name: "ASP.NET Core" },
      { name: "SQL Server" },
    ],
    image: "/assets/assets/work/Carental.png",
    live: "",
    github:
      "https://github.com/1Ir-is/FinalYearProject-CarRental-FrontEnd-Remake",
  },
  {
    num: "04",
    category: "IoT",
    title: "Smart Car Parking System",
    description:
      "Developed a smart car parking system using Arduino and C++ for automatic parking detection and slot management. The system used sensors to detect the presence of vehicles and displayed the availability of parking slots on an LCD screen. It was designed to help users easily find available parking spaces.",
    stack: [
      { name: "Arduino" },
      { name: "C++" },
      { name: "Sensors" },
      { name: "LCD Display" },
    ],
    image: "/assets/assets/work/IoT.png",
    live: "",
    github:
      "https://github.com/1Ir-is/Internet-Of-Thing-Assignment-Project.git",
  },
  {
    num: "05",
    category: "Fullstack",
    title: "AMaz System",
    description:
      "AMaz is a web-based Article Magazine System developed using .NET 6 MVC framework. It aims to facilitate the submission, review, and publication process of articles and images contributed by students in various faculties within a university setting. The system includes features to ensure smooth coordination between students, faculty marketing coordinators, and the university marketing manager.",
    stack: [
      { name: ".NET 6" },
      { name: "MVC Framework" },
      { name: "Entity Framework Core" },
      { name: "HTML/CSS/JavaScript" },
      { name: "Bootstrap" },
    ],
    image: "/assets/assets/work/Amaz.png",
    live: "",
    github: "https://github.com/EnterpriseWebGang/AMaz.git",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on the current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4 flex-wrap text-center">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-lg md:text-xl text-accent whitespace-nowrap"
                    >
                      {item.name}
                      {index < project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/* github project button */}
                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
