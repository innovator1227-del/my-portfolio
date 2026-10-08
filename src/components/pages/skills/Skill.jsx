import { motion } from "framer-motion";
import Theme from "../../Theme";
import useThemeStore from "../../../stores/themeStore";
import { cardVariants, containerVariants } from "../../../utils/Animation";

const Skills = ({ skillGroups }) => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <Theme>
      <section
        id="skills"
        className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12"
      >
        {/* Background decoration */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 bottom-10 h-72 w-72 rounded-full bg-green-500/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-green-700 dark:text-green-400"
            >
              My Expertise
            </motion.span>

            <motion.h2
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
              className="mt-4 bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 bg-[length:300%_auto] bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
            >
              Skills & Technologies
            </motion.h2>

            <p
              className={`mt-5 text-base leading-7 sm:text-lg ${theme === "dark" ? "text-slate-300" : "text-slate-600"} `}
            >
              Technologies and tools I use to design, build, and maintain modern
              web applications.
            </p>
          </motion.div>

          {/* Skill groups */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-6 md:grid-cols-2"
          >
            {skillGroups.map((group) => {
              const GroupIcon = group.icon;

              return (
                <motion.div
                  key={group.title}
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  className={`group relative overflow-hidden rounded-3xl p-6 shadow-sm backdrop-blur-md transition-shadow duration-300 hover:shadow-2xl ${theme === "dark" ? "bg-slate-900/60 border border-slate-700" : "bg-slate-200 border border-slate-400"} `}
                >
                  {/* Card glow */}
                  <div
                    className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${group.color} opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-30`}
                  />

                  {/* Card header */}
                  <div className="relative flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.08 }}
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${group.color} ${theme === "dark" ? "text-slate-200" : "text-slate-700"} shadow-lg`}
                    >
                      <GroupIcon size={24} />
                    </motion.div>

                    <div>
                      <h3
                        className={`text-xl font-bold ${theme === "dark" ? "text-slate-200" : "text-slate-700"} `}
                      >
                        {group.title}
                      </h3>

                      <p
                        className={`mt-1 text-sm leading-6 ${theme === "dark" ? "text-slate-300" : "text-slate-600"} `}
                      >
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="relative mt-6 flex flex-wrap gap-3">
                    {group.skills.map((skill, index) => {
                      const SkillIcon = skill.icon;

                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.08,
                            duration: 0.4,
                          }}
                          whileHover={{
                            y: -3,
                            scale: 1.04,
                          }}
                          className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium shadow-sm transition-colors hover:border-green-400 hover:text-green-700 dark:hover:border-green-500 dark:hover:text-green-400 ${theme === "dark" ? "bg-slate-800/80 border border-slate-600 text-slate-300" : "bg-slate-300 border border-slate-400 text-slate-600"} `}
                        >
                          <SkillIcon size={20} className="text-green-600" />
                          {skill.name}
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Bottom accent */}
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.3,
                      ease: "easeOut",
                    }}
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${group.color}`}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </Theme>
  );
};

export default Skills;
