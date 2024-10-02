"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">Iris Huynh</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              <p className="max-w-[500px] mb-9 text-white/80">
                I am a graduate with a Bachelor's degree in Computing from the
                University of Greenwich, holding a GPA of 3.3/4.0. I have a
                solid understanding of software testing principles and
                methodologies, and I am eager to apply and expand my expertise
                in software testing, bug tracking, and quality assurance
                processes. I am looking forward to contributing to a dynamic
                team and gaining hands-on experience in ensuring product quality
                and reliability through real-world projects.
              </p>
            </p>
            {/* socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
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

      <Stats />
    </section>
  );
};

export default Home;
