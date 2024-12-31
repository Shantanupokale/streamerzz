import { motion } from "framer-motion";
import { TESTIMONIALS_CONTENT } from "../constants";

const Testimonials = () => {
  return (
    <section id="Testimonial">
      <motion.div 
        className="max-w-7xl mx-auto px-4 mt-20 mb-10 pb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="text-center  mb-12 border-t border-neutral-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl font-semibold lg:text-5xl mt-20 bg-gradient-to-t from-neutral-50 to-neutral-700 bg-clip-text text-transparent">
            {TESTIMONIALS_CONTENT.sectionTitle}
          </h1>
          <p className="mt-4 text-neutral-400">
            {TESTIMONIALS_CONTENT.sectionDescription}
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {TESTIMONIALS_CONTENT.reviews.map((review, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-neutral-800 p-6 sm:p-8 hover:bg-neutral-950 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
              }}
            >
              <p className="mb-4 text-neutral-200 text-center">
                {review.review}
              </p>
              <div className="flex items-center mt-4">
                <img
                  src={review.image}
                  alt={review.alt}
                  className="w-12 h-12 rounded-full border border-neutral-700"
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-sm font-bold text-white">
                  {review.name}
                </p>
                <p className="text-sm text-gray-500">
                  {review.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
