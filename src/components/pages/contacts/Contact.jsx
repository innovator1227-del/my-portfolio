import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Theme from "../../Theme";
import useThemeStore from "../../../stores/themeStore";
import EmailingMe from "./EmailingMe";
import ContactMe from "./ContactMe";

const Contact = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <Theme>
      <section
        id="contact"
        className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-12"
      >
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
          className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-500 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-purple-500 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-500">
              <Mail size={15} />
              Get In Touch
            </span>

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl bg-gradient-to-r from-violet-800 via-amber-700 to-green-500 bg-clip-text text-transparent">
              Let's Build Something Great Together
            </h2>

            <p
              className={`mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base ${theme === "dark" ? "text-slate-300" : "text-slate-600"} `}
            >
              Have a project idea, opportunity, or just want to connect?
              I&apos;d love to hear from you.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <ContactMe />

            <EmailingMe />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 flex justify-center"
          >
            <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs font-medium text-green-600 dark:text-green-400 sm:text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              Open to opportunities & collaborations
            </div>
          </motion.div>
        </div>
      </section>
    </Theme>
  );
};

export default Contact;
