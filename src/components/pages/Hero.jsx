import tebie from "../../assets/tebie.jpg";
import { slideLeft, slideRight } from "../../utils/Animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-1 items-center justify-center gap-10 max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center gap-5">
        <motion.h1
          variants={slideRight(0.2)}
          initial="hidden"
          animate="visible"
          className="mt-20 text-5xl font-bold text-green-800"
        >
          Hi, I'm Tebie
        </motion.h1>

        <motion.p
          variants={slideRight(0.4)}
          initial="hidden"
          animate="visible"
          className="text-3xl font-semibold"
        >
          Information Technology Student & MERN Stack Developer
        </motion.p>

        <motion.p
          variants={slideRight(0.6)}
          initial="hidden"
          animate="visible"
          className="mt-16 max-w-3xl text-xl font-serif"
        >
          Passionate about building beautiful, responsive websites and creating
          exceptional user experiences. Specializing in React, JavaScript,
          Node.js, MongoDB, and tools like Git, GitHub, and modern web
          technologies.
        </motion.p>
      </div>

      <motion.div variants={slideLeft(0.2)} initial="hidden" animate="visible">
        <img
          src={tebie}
          alt="Tebie"
          className="h-96 w-96 rounded-2xl object-cover mt-12 hover:scale-x-50 transition-all duration-300 cursor-pointer"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
