import { CheckCircle2, Send } from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import useThemeStore from "../../../stores/themeStore";

const EmailingMe = () => {
  const theme = useThemeStore((state) => state.theme);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const mailto = `mailto:ttegenew@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact",
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    )}`;

    window.location.href = mailto;

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 4000);
  };
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className={`rounded-3xl p-6 shadow-sm backdrop-blur-xl sm:p-8 ${theme === "dark" ? "bg-slate-900/60 border border-slate-700" : "bg-slate-200 border border-slate-400"} `}
      >
        <div className="mb-7">
          <h3
            className={`text-2xl font-bold ${theme === "dark" ? "text-slate-200" : "text-slate-800"} `}
          >
            Send me a message
          </h3>

          <p
            className={`mt-2 text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"} `}
          >
            Text me your intension and idea.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name + Email */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className={`mb-2 block text-sm font-medium ${theme === "dark" ? "text-slate-300" : "text-slate-700"} `}
              >
                Your Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`h-12 w-full rounded-xl px-4 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 ${theme === "dark" ? "bg-slate-800/80 border border-slate-700/60" : "bg-slate-200 border border-slate-400"} `}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className={`mb-2 block text-sm font-medium ${theme === "dark" ? "text-slate-300" : "text-slate-700"} `}
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={`h-12 w-full rounded-xl px-4 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 ${theme === "dark" ? "bg-slate-800/80 border border-slate-700/60" : "bg-slate-200 border border-slate-400"} `}
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className={`mb-2 block text-sm font-medium ${theme === "dark" ? "text-slate-300" : "text-slate-700"} `}
            >
              Subject
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project collaboration"
              className={`h-12 w-full rounded-xl px-4 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 ${theme === "dark" ? "bg-slate-800/80 border border-slate-700/60" : "bg-slate-200 border border-slate-400"} `}
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className={`mb-2 block text-sm font-medium ${theme === "dark" ? "text-slate-300" : "text-slate-700"} `}
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project, opportunity, or idea..."
              className={`w-full resize-none rounded-xl px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 ${theme === "dark" ? "bg-slate-800/80 border border-slate-700/60" : "bg-slate-200 border border-slate-400"} `}
            />
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30"
          >
            {sent ? (
              <>
                <CheckCircle2 size={18} />
                Message Ready
              </>
            ) : (
              <>
                Send Message
                <Send size={17} />
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default EmailingMe;
