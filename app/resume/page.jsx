"use client";

import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About Me",
  description:
    "I am a recent graduate with a Bachelor's degree in Computing and a strong passion for software quality assurance. While I have experience in front-end and back-end development, as well as UI/UX design, I am now focused on ensuring the quality and reliability of software. I am proficient in HTML, CSS, JavaScript, React, .NET, Tailwind CSS, and Next.js, and I am eager to apply my skills in software testing, bug tracking, and quality assurance processes to contribute to a high-performing team.",

  info: [
    {
      fieldName: "Name",
      fieldValue: "Iris Huynh",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+84) 914 048 099",
    },
    {
      fieldName: "Experience",
      fieldValue: "Fresher",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Viet Nam",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Email",
      fieldValue: "mhuynk1005@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "Vietnamese, English",
    },
  ],
};

// education data
const education = {
  icon: "/assets/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Pursuing a Bachelor's degree in Computing, focusing on web development, UI/UX design, testing, and e-commerce. I have consistently maintained a strong academic performance while balancing freelance work.",
  items: [
    {
      degree: "Bachelor of Computing",
      school: "University of Greenwich",
      duration: "2021 - Present",
      gpa: "GPA: 3.3 / 4.0",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I have a diverse skill set that includes front-end and back-end development, UI/UX design, and testing. I am proficient in HTML, CSS, JavaScript, React, .NET, Tailwind CSS, and Next.js.",
  items: [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3 />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: ".NET",
      icon: <AiOutlineDotNet />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
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
      className="min-h-[80vh] flex items-start justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] overflow-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <p className="text-white/85 text-center lg:text-left">
                            {item.school}
                          </p>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.gpa}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                {/* Responsive gap and padding adjustments */}
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                  {skills.items.map((skill, index) => {
                    return (
                      <li
                        key={index}
                        className="flex flex-col items-center gap-2 p-4 rounded-lg bg-[#232329] text-white"
                      >
                        <div className="text-4xl">{skill.icon}</div>
                        <p className="text-sm font-medium">{skill.name}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>

                <ul className="flex flex-col gap-3 items-center xl:items-start">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex gap-4">
                        <span className="font-medium">{item.fieldName}:</span>
                        <span className="text-white/60">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
