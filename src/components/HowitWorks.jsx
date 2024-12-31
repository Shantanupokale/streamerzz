import { motion } from "framer-motion";
import { HOW_IT_WORKS_CONTENT } from "../constants";

// Animation Variants
const fadeUp = { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };
const fadeIn = { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6 } };
const slideInFromLeft = { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8 } };
const slideInFromRight = { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8 } };

const HowItWorks = () => {
  return (
    <div className="bg-black text-white py-16">
      {/* Section Title and Description */}
      <div className="max-w-6xl mx-auto text-center  px-4 mb-16">
        <motion.h2 className="text-4xl font-bold mb-4" variants={fadeUp} initial="initial" animate="animate" transition={{ duration: 0.8 }}>
          {HOW_IT_WORKS_CONTENT.sectionTitle}
        </motion.h2>
        <motion.p className="text-lg text-gray-400 max-w-2xl py-8 mx-auto" variants={fadeIn} initial="initial" animate="animate" transition={{ duration: 0.8, delay: 0.2 }}>
          {HOW_IT_WORKS_CONTENT.sectionDescription}
        </motion.p>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {HOW_IT_WORKS_CONTENT.steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-gradient-to-r from-stone-900 to-black-900 p-6 rounded-lg shadow-lg h-full"
            variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >

             {/* Step Text */}
             <motion.div className="text-center sm:text-left flex flex-col justify-between flex-grow">
              <motion.h3 className="text-2xl font-semibold mb-4" variants={fadeUp} initial="initial" animate="animate" transition={{ duration: 0.6 }}>
                {step.title}
              </motion.h3>
              <motion.p className="text-base text-gray-200 mb-4" variants={fadeUp} initial="initial" animate="animate" transition={{ duration: 0.6, delay: 0.2 }}>
                {step.description}
              </motion.p>

             {/* Display Users if available
              {step.users && (
                <div className="flex justify-center gap-4">
                  {step.users.map((user, idx) => (
                    <motion.img key={idx} src={user} alt={`User ${idx + 1}`} className="w-10 h-10 rounded-full border-2 border-white object-cover" variants={fadeUp} initial="initial" animate="animate" transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }} />
                  ))}
                </div>
              )} */}

            {/* Step Image */}
            <motion.div className="w-full mb-6" variants={fadeIn} initial="initial" animate="animate" transition={{ duration: 0.6, delay: 0.4 }}>
              <img src={step.imageSrc} alt={step.imageAlt} className="w-full h-auto rounded-lg shadow-lg" />
            </motion.div>

           
             
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
