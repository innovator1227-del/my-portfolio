import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  Code2,
  ExternalLink,
  Layers3,
  X,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Detail = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => onClose()}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/70 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 30 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
            className="relative my-8 w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl dark:bg-slate-900"
          >
            {/* Modal header */}
            <div
              className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} px-6 py-10 sm:px-8`}
            >
              <button
                onClick={() => onClose()}
                aria-label="Close project details"
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition-colors hover:bg-black/40"
              >
                <X size={20} />
              </button>

              <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                {project.category}
              </p>

              <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                {project.title}
              </h2>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                <CheckCircle2 size={14} />
                {project.status}
              </div>
            </div>

            {/* Modal body */}
            <div className="max-h-[65vh] overflow-y-auto p-6 sm:p-8">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Code2 size={18} className="text-green-600" />

                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    About the Project
                  </h3>
                </div>

                <p className="leading-7 text-slate-600 dark:text-slate-300">
                  {project.longDescription}
                </p>
              </div>

              {/* Features */}
              <div className="mt-8">
                <div className="mb-3 flex items-center gap-2">
                  <Layers3 size={18} className="text-green-600" />

                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Key Features
                  </h3>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 rounded-xl bg-slate-50 p-3 text-sm text-slate-600 dark:bg-slate-800/70 dark:text-slate-300"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-green-600"
                      />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-8">
                <div className="mb-3 flex items-center gap-2">
                  <CalendarDays size={18} className="text-green-600" />

                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Technologies
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-green-500 hover:text-green-600 dark:border-slate-700 dark:text-slate-300"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>
                )}

                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-800"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}

                <button
                  onClick={() => onClose()}
                  className="inline-flex items-center justify-center rounded-xl bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Detail;
