import { motion } from "framer-motion";
import { CalendarDays, Sparkles } from "lucide-react";
import Theme from "../../Theme";
import { cardVariants, slideUp } from "../../../utils/Animation";
import useThemeStore from "../../../stores/themeStore";

const EducationExperience = ({ journey }) => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <Theme>
      <section
        id="journey"
        className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-12"
      >
        {/* Background glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-blue-500 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-purple-500 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20 text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-500">
              <CalendarDays size={15} />
              My Journey
            </span>

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-green-700 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                Education, Experience & Growth
              </span>
            </h2>

            <p
              className={`mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base ${theme === "dark" ? "text-slate-300" : "text-slate-600"} `}
            >
              A timeline of my academic journey, practical experience, training,
              and the projects that have shaped me as a developer.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line - desktop */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 lg:block" />

            {/* Left line - mobile */}
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 lg:hidden" />

            <motion.div
              variants={slideUp(0)}
              initial="hidden"
              animate="visible"
              className="space-y-6 lg:space-y-5"
            >
              {journey.map((item, index) => {
                const Icon = item.icon;
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={`${item.title}-${index}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                    className={`relative flex items-center lg:w-full ${
                      isLeft ? "lg:justify-start" : "lg:justify-end"
                    }  `}
                  >
                    {/* Timeline dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.15,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="absolute left-4 z-20 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-100 bg-blue-500 shadow-lg dark:border-slate-950 lg:left-1/2"
                    />

                    {/* Card */}
                    <motion.article
                      variants={slideUp(0)}
                      initial="hidden"
                      animate="visible"
                      className={`ml-10 w-full rounded-2xl p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-blue-400/40 hover:shadow-xl sm:p-6 lg:ml-0 lg:w-[46%] ${theme === "dark" ? "bg-slate-900/60 border border-slate-700" : "bg-slate-200 border border-slate-400"} `}
                    >
                      {/* Top */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20">
                            <Icon size={20} />
                          </div>

                          <div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">
                              {item.type}
                            </span>

                            <h3
                              className={`mt-1 text-base font-bold sm:text-lg ${theme === "dark" ? "text-slate-300" : "text-slate-600"} `}
                            >
                              {item.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Period */}
                      <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
                        <span className="rounded-full bg-blue-500/10 px-3 py-1 font-medium text-blue-500">
                          {item.period}
                        </span>

                        <span className="text-slate-400">•</span>

                        <span className="text-slate-500 dark:text-slate-400">
                          {item.place}
                        </span>
                      </div>

                      {/* Description */}
                      <p
                        className={`mt-4 text-sm leading-7 ${theme === "dark" ? "text-slate-200" : "text-slate-500"} `}
                      >
                        {item.description}
                      </p>

                      {/* Technologies */}
                      {item.technologies && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {item.technologies.map((technology) => (
                            <span
                              key={technology}
                              className={`rounded-lg px-3 py-1.5 text-xs font-medium  ${theme === "dark" ? "bg-slate-800/80 border border-slate-600 text-slate-300" : "bg-slate-300 border border-slate-400 text-slate-600"} `}
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Bottom accent */}
                      <div className="mt-5 h-px w-full bg-gradient-to-r from-blue-500/40 via-purple-500/30 to-transparent" />
                    </motion.article>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Ending statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mt-20 max-w-3xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2.5 text-sm font-medium text-green-600">
              <Sparkles size={16} />
              The journey continues...
            </div>

            <p
              className={`mt-5 text-sm leading-7 sm:text-base ${theme === "dark" ? "text-slate-300" : "text-slate-600"} `}
            >
              I am continuously learning, building, and turning ideas into
              practical software solutions.
            </p>
          </motion.div>
        </div>
      </section>
    </Theme>
  );
};

export default EducationExperience;
