"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

// Updated array of CV file URLs
const cvFiles = [
  {
    name: "CV HUYNH MINH HUY - Fresher AI Engineer",
    url: "/CV HUYNH MINH HUY - CV - Fresher AI Engineer.pdf",
  },
  {
    name: "CV HUYNH MINH HUY - Fresher Data Engineer",
    url: "/CV HUYNH MINH HUY - CV - Fresher Data Engineer.pdf",
  },
  {
    name: "CV HUYNH MINH HUY - Fresher QA",
    url: "/CV HUYNH MINH HUY - CV - QA.pdf",
  },
  {
    name: "CV HUYNH MINH HUY - Fresher .NET",
    url: "/CV HUYNH MINH HUY - CV-.NET-TopCV.vn.pdf",
  },
  {
    name: "CV HUYNH MINH HUY - Fresher Frontend",
    url: "/CV HUYNH MINH HUY - CV-Fresher-Frontend.pdf",
  },
];

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.split("/").pop(); // Use the filename from the URL
    link.click();
    setModalOpen(false); // Close the modal after download
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Front-End Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">Iris Huynh</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a front-end developer currently studying at the University of
              Greenwich. Though I am new to the field, I am passionate about web
              development and eager to learn and grow. I am actively seeking
              opportunities to build my skills and start my career in the tech
              industry.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={() => setModalOpen(true)} // Open modal on click
              >
                <span>Download CV</span>
                <FiDownload className="text-xl ml-2" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover: transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      {/* Modal for selecting CV */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-primary p-6 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-4">
              Select CV to Download
            </h2>
            <ul className="flex flex-col">
              {cvFiles.map((cv, index) => (
                <li key={index} className="mb-2">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handleDownload(cv.url)}
                  >
                    {cv.name}
                  </Button>
                </li>
              ))}
            </ul>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => setModalOpen(false)} // Close modal
            >
              Close
            </Button>
          </div>
        </div>
      )}

      <Stats />
    </section>
  );
};

export default Home;
