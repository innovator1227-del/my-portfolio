import { Download, ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import portfolio from "../../assets/portfolio.jpg";
import { slideLeft, slideRight } from "../../utils/Animation";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaGithub, FaTelegram } from "react-icons/fa";
import useThemeStore from "../../stores/themeStore";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/innovator1227-del",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/tebie-tegenew",
    icon: LiaLinkedinIn,
  },
  {
    name: "Email",
    href: "https://accounts.google.com/ttegenew@gmail.com",
    icon: Mail,
  },
  {
    name: "Telegram",
    href: "https://telegram.me/tebie_21",
    icon: FaTelegram,
  },
];

const Hero = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <section
      id="home"
      className="flex min-h-[calc(90vh-40px)] items-center px-6 py-12"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-center gap-12 lg:flex-row lg:justify-between lg:gap-20">
        <div className="flex w-full max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
          <span className="w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            • Problem Solving
          </span>
          <motion.h1
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="mt-5 bg-linear-to-r from-yellow-700 via-green-600 to-red-700 bg-[length:300%_auto] bg-clip-text text-5xl font-bold text-transparent"
          >
            Tebie Tegenew
          </motion.h1>

          <motion.p
            variants={slideRight(0.4)}
            initial="hidden"
            animate="visible"
            className="mt-4 text-xl font-semibold font-serif sm:text-2xl md:text-3xl"
          >
            Information Technology Student & MERN Stack Developer
          </motion.p>

          <motion.p
            variants={slideRight(0.6)}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8"
          >
            Passionate about building beautiful, responsive websites and
            creating exceptional user experiences. Specializing in React,
            JavaScript, Node.js, MongoDB, and tools like Git, GitHub, and modern
            web technologies.
          </motion.p>

          <motion.div
            variants={slideRight(0.8)}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-green-700 px-5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-green-800 hover:shadow-md"
            >
              View Projects <ArrowRight size={17} />
            </motion.a>
            <motion.a
              href="/Tebie-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-green-600 hover:text-green-700 hover:shadow-md"
            >
              View CV
            </motion.a>
            <motion.a
              href="/Tebie-CV.pdf"
              download="Tebie-Tegenew-CV.pdf"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-green-700 bg-green-50 px-5 text-sm font-semibold text-green-700 shadow-sm transition-all duration-300 hover:bg-green-100 hover:shadow-md"
            >
              <Download size={17} /> Download CV
            </motion.a>
          </motion.div>

          <motion.div
            variants={slideRight(1)}
            initial="hidden"
            animate="visible"
            className="mt-8 flex items-center gap-3"
          >
            <span className="mr-2 text-sm">Connect with me</span>

            {socialLinks.map(({ name, href, icon: Icon }) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                whileHover={{ y: -5, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border border-slate-200 bg-white p-3 text-slate-600 shadow-sm transition-colors hover:border-green-600 hover:text-green-600"
              >
                <Icon size={19} strokeWidth={1.8} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          variants={slideLeft(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative shrink-0"
        >
          {/* Animated glow */}
          <motion.div
            animate={{
              scale: [1.05, 1.12, 1.05],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-4 rounded-full bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 blur-xl"
          />

          <div className="relative rounded-full bg-gradient-to-br from-green-500 via-blue-500 to-amber-500 p-1">
            <motion.img
              src={portfolio}
              alt="Portfolio"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative h-64 w-64 cursor-pointer rounded-full object-cover shadow-2xl sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96"
            />
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute -bottom-5 -right-5 rounded-2xl px-5 py-3 shadow-xl backdrop-blur-md ${theme === "dark" ? "bg-slate-950 text-slate-400" : "bg-slate-400"} `}
          >
            <p className="text-sm font-semibold">Software</p>
            <p className="text-xs">Developer</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
