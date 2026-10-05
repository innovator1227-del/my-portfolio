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
import useThemeStore from "../../../stores/themeStore";

const Detail = ({ project, onClose }) => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => onClose()}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 30 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
            className={`relative my-8 w-full max-w-3xl overflow-hidden rounded-3xl shadow-2xl ${theme === "dark" ? "bg-slate-900" : "bg-slate-100"} `}
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

              <p className="text-xs font-semibold uppercase tracking-widest">
                {project.category}
              </p>

              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                {project.title}
              </h2>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium backdrop-blur-md">
                <CheckCircle2 size={14} />
                {project.status}
              </div>
            </div>

            {/* Modal body */}
            <div className="max-h-[65vh] overflow-y-auto p-6 sm:p-8">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Code2 size={18} className="text-green-600" />

                  <h3 className="font-semibold">About the Project</h3>
                </div>

                <p className="leading-7">{project.longDescription}</p>
              </div>

              {/* Features */}
              <div className="mt-8">
                <div className="mb-3 flex items-center gap-2">
                  <Layers3 size={18} className="text-green-600" />

                  <h3 className="font-semibold">Key Features</h3>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className={`flex items-start gap-2 rounded-xl p-3 text-sm shadow-lg ${theme === "dark" ? "border border-slate-700" : "border border-slate-300"} `}
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

                  <h3 className="font-semibold">Technologies</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className={`rounded-lg px-3 py-1.5 text-sm font-medium  ${theme === "dark" ? "bg-slate-800/80 border border-slate-600 text-slate-300" : "bg-slate-300 border border-slate-400 text-slate-600"} `}
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
                    className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors hover:border-green-500 cursor-pointer hover:text-green-600 ${theme === "dark" ? "border border-slate-700" : "border border-slate-400"} `}
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
                    className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold cursor-pointer transition-colors hover:text-green-600 hover:border-green-500 ${theme === "dark" ? "border border-slate-700" : "border border-slate-400"} `}
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}

                <button
                  onClick={() => onClose()}
                  className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-colors cursor-pointer hover:text-red-500 hover:border-red-400  ${theme === "dark" ? "bg-slate-800" : "bg-slate-300"} `}
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
