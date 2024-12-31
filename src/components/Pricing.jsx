import React from "react";
import { motion } from "framer-motion";
import { PLANS_CONTENT } from "../constants";

const fadeIn = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Pricing = () => {
  return (
        <div className="bg-black text-white py-12 px-4 ">
            {/* Section Container */}
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <motion.h2
                className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-6" animate="animate" >
                {PLANS_CONTENT.sectionTitle}
                </motion.h2>

                {/* Section Description */}
                <motion.p
                className="text-center text-sm sm:text-base md:text-md text-gray-400 mb-12"
                variants={fadeIn} initial="initial" animate="animate" transition={{ duration: 0.8, delay: 0.2 }} >
                {PLANS_CONTENT.sectionDescription}
                </motion.p>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {PLANS_CONTENT.plans.map((plan, index) => (
                    <motion.div
                    key={plan.name}
                    className={`rounded-xl shadow-md border border-gray-700 bg-black/60 p-6 transition-all duration-300 hover:border-indigo-500 flex justify-center flex-col`}
                    variants={fadeIn}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                    

                    {/* Plan Name */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-center">
                        {plan.name}{"  "}
                        {/* Plan Badge */}
                    {plan.popular && (
                        <span className="text-center text-sm text-indigo-500 font-semibold mb-4">
                        ( {PLANS_CONTENT.popularBadge} )
                        </span>
                    )}
                    </h3>

                    {/* Plan Price */}
                    <p className="text-xl sm:text-2xl  font-semibold text-indigo-400 mb-6 text-center">
                        {plan.price}
                    </p>

                    {/* Plan Description */}
                    <p className="text-sm text-gray-400 mb-6 text-center">
                        {plan.description}
                    </p>

                    {/* Plan Features */}
                    <ul className="space-y-2 mb-6 flex-grow">
                        {plan.features.map((feature, i) => (
                        <li
                            key={i}
                            className="text-sm text-gray-200 flex items-center"
                        >
                            <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                            {feature}
                        </li>
                        ))}
                    </ul>

                    {/* Call-to-Action Button */}
                    <a
                        href="#"
                        className="block  text-center text-sm font-semibold py-2 px-4 rounded-md bg-indigo-500 text-white   hover:bg-indigo-700 transition-all duration-300"
                    >
                        {PLANS_CONTENT.ctaText}
                    </a>
                    </motion.div>
                ))}
                </div>
            </div>
        </div>
  );
};

export default Pricing;
