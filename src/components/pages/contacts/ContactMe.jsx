import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";
import useThemeStore from "../../../stores/themeStore";

const ContactMe = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className={`relative overflow-hidden rounded-3xl p-6 shadow-sm backdrop-blur-xl sm:p-8 ${theme === "dark" ? "bg-slate-900/60 border border-slate-700" : "bg-slate-200 border border-slate-400"} `}
      >
        {/* Decorative glow */}
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl" />

        <div className="relative">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            Contact Me
          </span>

          <h3
            className={`mt-4 text-2xl font-bold sm:text-3xl ${theme === "dark" ? "text-slate-400" : "text-slate-600"} `}
          >
            Let&apos;s start a conversation.
          </h3>

          <p
            className={`mt-4 text-sm leading-7  ${theme === "dark" ? "text-slate-400" : "text-slate-600"} `}
          >
            I&apos;m open to internships, software development opportunities,
            collaborations, freelance projects, and interesting ideas.
          </p>

          <div className="mt-8 space-y-5">
            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ttegenew@gmail.com"
              className={`group flex items-center gap-4 rounded-2xl p-4  hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-lg  ${theme === "dark" ? "bg-slate-800/80 border border-slate-700/60" : "bg-slate-200 border border-slate-400"} `}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                <Mail size={20} />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-medium text-slate-400">Email</p>

                <p className="truncate text-sm font-semibold">
                  ttegenew@gmail.com
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="ml-auto text-slate-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-500"
              />
            </a>

            {/* Location */}
            <div
              className={`flex items-center gap-4 rounded-2xl p-4  ${theme === "dark" ? "bg-slate-800/80 border border-slate-700/60" : "bg-slate-200 border border-slate-400"} `}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-500">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-xs font-medium text-slate-400">Location</p>

                <p className="text-sm font-semibold">Bahir Dar Ethiopia</p>
              </div>
            </div>

            <div
              className={`flex items-center gap-4 rounded-2xl p-4  ${theme === "dark" ? "bg-slate-800/80 border border-slate-700/60" : "bg-slate-200 border border-slate-400"} `}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-500">
                <Phone size={20} />
              </div>

              <div>
                <p className="text-xs font-medium text-slate-400">Phone</p>

                <p className="text-sm font-semibold">+251 9275 203 86</p>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="mt-8">
            <p
              className={`mb-4 text-xs font-semibold uppercase tracking-widest ${theme === "dark" ? "text-slate-300" : "text-slate-600"} `}
            >
              Find me online
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <motion.a
                whileHover={{ y: -4 }}
                href="https://github.com/innovator1227-del"
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 hover:border-green-500 cursor-pointer hover:text-green-600 ${theme === "dark" ? "border border-slate-700" : "border border-slate-400"} `}
                aria-label="GitHub"
              >
                <FaGithub size={20} className="h-4 w-4 shrink-0" />
                GitHub
              </motion.a>

              <motion.a
                whileHover={{ y: -4 }}
                href="https://linkedin.com/in/tebie-tegenew"
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors hover:border-green-500 cursor-pointer hover:text-green-600 ${theme === "dark" ? "border border-slate-700" : "border border-slate-400"} `}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} className="h-4 w-4 shrink-0" />
                Linkedin
              </motion.a>

              <motion.a
                whileHover={{ y: -4 }}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ttegenew@gmail.com"
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors hover:border-green-500 cursor-pointer hover:text-green-600  ${theme === "dark" ? "border border-slate-700" : "border border-slate-400"} `}
                aria-label="Email"
              >
                <Mail size={20} className="h-4 w-4 shrink-0" />
                Email
              </motion.a>

              <motion.a
                whileHover={{ y: -4 }}
                href="https://telegram.me/tebie_21"
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors hover:border-green-500 cursor-pointer hover:text-green-600  ${theme === "dark" ? "border border-slate-700" : "border border-slate-400"} `}
                aria-label="Telegram"
              >
                <FaTelegram size={20} className="h-4 w-4 shrink-0" />
                Telegram
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactMe;
