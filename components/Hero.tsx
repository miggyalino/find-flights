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
    <ImagesSlider className="h-[40rem] flexAround" images={IMAGES}>
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
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="text-center bg-clip-text">
          <h1 className="flex items-center text-white text-8xl font-bold">
            <TypewriterEffectSmooth words={HERO_WORDS} />
          </h1>
        </motion.p>
        <p className="text-white/50 text-xl">
          Explore the world with our affordable flights
        </p>
      </motion.div>
      <div className="z-50">
        <BookFlight />
      </div>
    </ImagesSlider>
  );
};

export default Hero;
