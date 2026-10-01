import { motion } from "framer-motion";
import { ArrowRight, Code2, FolderGit2, GraduationCap } from "lucide-react";
import useThemeStore from "../../stores/themeStore";
import Theme from "../Theme";
import { slideLeft, slideRight, slideUp } from "../../utils/Animation";
import tebie from "../../assets/tebie.jpg";

const About = () => {
  const theme = useThemeStore((state) => state.theme);

  const stats = [
    {
      value: "5+",
      label: "Projects",
      icon: FolderGit2,
    },
    {
      value: "MERN",
      label: "Stack",
      icon: Code2,
    },
    {
      value: "BSc",
      label: "IT Student",
      icon: GraduationCap,
    },
  ];

  return (
    <Theme>
      <section
        id="about"
        className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12"
      >
        {/* Background decoration */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-green-400/20 blur-3xl"
        />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-14 lg:flex-row lg:justify-between lg:gap-20">
          {/* Image */}
          <motion.div
            variants={slideRight(0.2)}
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
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 blur-xl"
            />

            {/* Image border */}
            <div className="relative rounded-[2rem] bg-gradient-to-br from-green-500 via-blue-500 to-purple-500 p-1">
              <motion.img
                src={tebie}
                alt="Tebie"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative h-64 w-64 cursor-pointer rounded-[1.8rem] object-cover shadow-2xl sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96"
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
              <p className="text-sm font-semibold">MERN Stack</p>
              <p className="text-xs">Developer</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="flex w-full max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
            {/* Small label */}
            <motion.span
              variants={slideRight(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-3 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-green-700 dark:text-green-400"
            >
              Get to know me
            </motion.span>

            {/* Heading */}
            <motion.h1
              variants={slideRight(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                backgroundPosition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              className="bg-gradient-to-r from-yellow-600 via-green-600 to-red-600 bg-[length:300%_auto] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl"
            >
              About Me
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={slideUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 text-base leading-8 sm:text-lg"
            >
              I&apos;m an Information Technology student and aspiring full-stack
              software developer passionate about building modern, responsive,
              and user-focused web applications. I work mainly with React,
              Node.js, Express.js, and databases, with experience in REST APIs,
              authentication, role-based access control, and modern frontend
              development.
            </motion.p>

            <motion.p
              variants={slideUp(0.6)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-4 text-base leading-8 sm:text-lg"
            >
              I enjoy turning ideas into practical digital products while
              continuously improving my software engineering skills through
              academic projects, personal projects, and real-world development
              experience.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={slideUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 grid w-full max-w-xl grid-cols-3 gap-3 sm:gap-5"
            >
              {stats.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className={`rounded-2xl p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${theme === "dark" ? "bg-slate-900 border border-slate-600" : "bg-slate-300 border border-slate-400"} `}
                >
                  <Icon
                    size={20}
                    className="mx-auto mb-2 text-green-600 lg:mx-0"
                  />

                  <h3 className="text-lg font-bold sm:text-xl">{value}</h3>

                  <p
                    className={`mt-1 text-xs sm:text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"} `}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Button */}
            <motion.div
              variants={slideUp(0.8)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white shadow-lg shadow-green-700/20 transition-all duration-300 hover:bg-green-800 hover:shadow-xl"
              >
                View My Projects
                <ArrowRight size={18} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </Theme>
  );
};

export default About;
