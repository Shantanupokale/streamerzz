import HeroImage from "../assets/hero.jpg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import brand1 from '../assets/broadcastly-logo.png'; 
import brand2 from '../assets/cloudcast-logo.png';
import brand3 from '../assets/livestreamer-logo.png';
import brand4 from '../assets/streamlabs-logo.png';

// Animation Variants
const fadeUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 },
};

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden mt-12">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black-900" />

      {/* Content container */}
      <div className="relative max-w-6xl mx-auto px-4 py-24 text-center z-10">
        {/* Badge */}
        <motion.div
          className="inline-block mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <span className="text-sm text-white font-medium">
            {HERO_CONTENT.badgeText}
          </span>
        </motion.div>

        {/* Main heading with gradient */}
        <motion.h1
          className="mb-6 text-5xl md:text-7xl font-bold tracking-tight"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-900 text-transparent bg-clip-text whitespace-pre-line">
            {HERO_CONTENT.mainHeading}
          </span>
        </motion.h1>

        {/* Sub heading */}
        <motion.p
          className="mb-12 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {HERO_CONTENT.subHeading}
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <motion.button
            className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors duration-200"
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {HERO_CONTENT.callToAction.primary}
          </motion.button>
          <motion.button
            className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm"
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {HERO_CONTENT.callToAction.secondary}
          </motion.button>
        </div>

        {/* Trusted by section */}
        <motion.div
          className="mt-20"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-lg text-gray-500 mb-6">
            {HERO_CONTENT.trustedByText}
          </p>

          {/* Brand logos */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-10 opacity-70 hover:opacity-90 transition-opacity duration-300"
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.img
              src={brand1}
              alt="Brand 1"
              className="w-28 h-14 object-contain hover:brightness-110 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={brand2}
              alt="Brand 2"
              className="w-28 h-14 object-contain hover:brightness-110 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={brand3}
              alt="Brand 3"
              className="w-28 h-14 object-contain hover:brightness-110 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={brand4}
              alt="Brand 4"
              className="w-28 h-14 object-contain hover:brightness-110 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Hero image */}
          <motion.div
            className="mt-12"
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <img
              src={HeroImage}
              alt="Hero"
              className="w-full h-auto rounded-3xl border border-slate-700 mb-14"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
