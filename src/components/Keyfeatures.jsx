import { motion } from 'framer-motion';
import { RiBarChart2Line, RiSettings2Line, RiTeamLine, RiTwitchLine, RiYoutubeLine, RiCalendarLine } from '@remixicon/react';
import { KEY_FEATURES_CONTENT } from '../constants';

const fadeIn = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const KeyFeatures = () => {
  return (
    <div className="bg-black text-white py-16 px-8 mx-auto max-w-screen-xl">
      {/* Section Title */}
      <motion.h2
        className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-6"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        {KEY_FEATURES_CONTENT.sectionTitle}
      </motion.h2>

      {/* Section Description */}
      <motion.p
        className="text-center text-xs sm:text-sm md:text-base text-gray-400 mb-8"
        variants={fadeIn}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {KEY_FEATURES_CONTENT.sectionDescription}
      </motion.p>

      {/* Features Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {KEY_FEATURES_CONTENT.features.map((feature) => (
          <motion.div
            key={feature.id}
            className="bg-black/50 p-6 mx-4 sm:mx-6 md:mx-8 rounded-lg shadow-md backdrop-blur-md hover:bg-neutral-900 transition-colors duration-300"
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: feature.id * 0.1 }}
          >
            {/* Feature Icon */}
            <div className="flex justify-center mb-4">
              {/* Use Remix Icons here */}
              {feature.id === 1 && <RiBarChart2Line className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />}
              {feature.id === 2 && <RiSettings2Line className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />}
              {feature.id === 3 && <RiTeamLine className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />}
              {feature.id === 4 && <RiTwitchLine className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />}
              {feature.id === 5 && <RiYoutubeLine className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />}
              {feature.id === 6 && <RiCalendarLine className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />}
            </div>

            {/* Feature Title */}
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 text-center">{feature.title}</h3>

            {/* Feature Description */}
            <p className="text-xs sm:text-sm md:text-base text-center text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
