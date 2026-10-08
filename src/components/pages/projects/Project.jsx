import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
} from "lucide-react";
import { motion } from "framer-motion";
import Theme from "../../Theme";
import { FaGithub } from "react-icons/fa";
import Detail from "./Detail";
import useThemeStore from "../../../stores/themeStore";
import { cardVariants, containerVariants } from "../../../utils/Animation";

const Project = ({ projects }) => {
  const theme = useThemeStore((state) => state.theme);
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageIndexes, setImageIndexes] = useState({});
  return (
    <Theme>
      <section
        id="projects"
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
          className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-green-500/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-green-700 dark:text-green-400">
              <Code2 size={14} />
              My Work
            </span>

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
              className="mt-4 bg-gradient-to-r from-green-700 via-yellow-700 to-purple-500 bg-[length:300%_auto] bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
            >
              Featured Projects
            </motion.h2>

            <p
              className={`mt-5 text-base leading-7 sm:text-lg ${theme === "dark" ? "text-slate-300" : "text-slate-600"} `}
            >
              A collection of applications and systems I have built or am
              currently developing while growing my software engineering skills.
            </p>
          </motion.div>

          {/* Project grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.article
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className={`group relative flex flex-col overflow-hidden rounded-3xl shadow-sm backdrop-blur-md transition-shadow duration-300 hover:shadow-2xl ${theme === "dark" ? "bg-slate-900/60 border border-slate-700" : "bg-slate-200 border border-slate-400"} `}
              >
                <div className="relative h-52 overflow-hidden">
                  {project.images?.length > 0 ? (
                    <>
                      {/* Current Image */}
                      <img
                        src={project.images[imageIndexes[project.id] || 0]}
                        alt={`${project.title} screenshot`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                      {/* Status */}
                      <div className="absolute right-5 top-5">
                        <span className="rounded-full bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                          {project.status}
                        </span>
                      </div>

                      {/* Previous */}
                      {project.images.length > 1 && (
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation();

                            setImageIndexes((prev) => ({
                              ...prev,
                              [project.id]:
                                ((prev[project.id] || 0) -
                                  1 +
                                  project.images.length) %
                                project.images.length,
                            }));
                          }}
                          className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-black/70"
                          aria-label="Previous image"
                        >
                          <ArrowLeft size={17} />
                        </button>
                      )}

                      {/* Next */}
                      {project.images.length > 1 && (
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation();

                            setImageIndexes((prev) => ({
                              ...prev,
                              [project.id]:
                                ((prev[project.id] || 0) + 1) %
                                project.images.length,
                            }));
                          }}
                          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-black/70"
                          aria-label="Next image"
                        >
                          <ArrowRight size={17} />
                        </button>
                      )}

                      {/* Dots */}
                      {project.images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
                          {project.images.map((_, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={(event) => {
                                event.stopPropagation();

                                setImageIndexes((prev) => ({
                                  ...prev,
                                  [project.id]: index,
                                }));
                              }}
                              className={`h-2 rounded-full transition-all ${
                                (imageIndexes[project.id] || 0) === index
                                  ? "w-5 bg-white"
                                  : "w-2 bg-white/50"
                              }`}
                              aria-label={`Go to image ${index + 1}`}
                            />
                          ))}
                        </div>
                      )}

                      {/* Project title */}
                      <div className="absolute bottom-5 left-6">
                        <p className="text-xs font-medium uppercase tracking-wider text-white/75">
                          {project.category}
                        </p>

                        <h3 className="mt-1 text-xl font-bold text-white">
                          {project.title}
                        </h3>
                      </div>
                    </>
                  ) : (
                    /* Gradient fallback */
                    <div
                      className={`relative h-full bg-gradient-to-br ${project.gradient}`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Layers3 size={55} className="text-white/30" />
                      </div>

                      <div className="absolute right-5 top-5">
                        <span className="rounded-full bg-black/20 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                          {project.status}
                        </span>
                      </div>

                      <div className="absolute bottom-5 left-6">
                        <p className="text-xs font-medium uppercase tracking-wider text-white/75">
                          {project.category}
                        </p>

                        <h3 className="mt-1 text-xl font-bold text-white">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p
                    className={`line-clamp-3 text-sm leading-7 ${theme === "dark" ? "text-slate-300" : "text-slate-600"} `}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((technology) => (
                      <span
                        key={technology}
                        className={`rounded-lg px-2.5 py-1 text-xs font-medium ${theme === "dark" ? "bg-slate-800/80 border border-slate-600 text-slate-300" : "bg-slate-300 border border-slate-400 text-slate-600"} `}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-auto flex items-center gap-3 pt-6">
                    <motion.button
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setSelectedProject(project)}
                      className={`inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${theme === "dark" ? " bg-slate-900 border border-slate-600" : " bg-slate-300 border border-slate-400"} `}
                    >
                      View Details
                      <ArrowUpRight size={17} />
                    </motion.button>

                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub`}
                        className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all hover:border-green-500 hover:text-green-600 ${theme === "dark" ? "border border-slate-700" : "border border-slate-400"} `}
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Bottom accent */}
                <div
                  className={`h-1 w-full bg-gradient-to-r ${project.gradient}`}
                />
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <Detail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Theme>
  );
};

export default Project;
