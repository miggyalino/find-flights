"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "./ui/typewriter-effect";
import { HERO_WORDS, IMAGES } from "@/constants";
import { ImagesSlider } from "./ui/images-slider";
import BookFlight from "./BookFlight";

const Hero = () => {
  return (
    <ImagesSlider className="h-screen" images={IMAGES}>
      <div className="flexCenter flex-col lg:grid lg:grid-cols-2 space-x-20 padding-container max-container z-50">
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center lg:items-start"
        >
          <motion.p className="text-right bg-clip-text">
            <h1 className="flex text-white text-8xl font-bold">
              <TypewriterEffectSmooth words={HERO_WORDS} />
            </h1>
          </motion.p>
          <p className="text-white/50 text-xl">
            Explore the world with our affordable flights
          </p>
        </motion.div>
        <div className="flexCenter">
          <BookFlight />
        </div>
      </div>
    </ImagesSlider>
  );
};

export default Hero;
