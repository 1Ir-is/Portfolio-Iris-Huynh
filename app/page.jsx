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
              I am a final-year student at the University of Greenwich, with a
              Bachelor's degree in Computing. With a GPA of 3.3/4.0, I am
              passionate about web development and eager to continue learning
              and growing in the tech industry. I am actively seeking
              opportunities to further develop my skills and kick-start my
              career.
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
