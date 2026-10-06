import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { Mail } from "lucide-react";
import useThemeStore from "../../stores/themeStore";
import Theme from "../Theme";

const Footer = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <Theme>
      <footer
        className={`px-6 py-8 ${theme === "dark" ? "border-t border-slate-700" : "border-t border-slate-300"} `}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <p
            className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"} `}
          >
            © {new Date().getFullYear()} Tebie Tegenew. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/innovator1227-del"
              target="_blank"
              rel="noreferrer"
              className={`transition hover:text-green-500 ${theme === "dark" ? "text-slate-300" : "text-slate-700"} `}
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://linkedin.com/in/tebie-tegenew"
              target="_blank"
              rel="noreferrer"
              className={`transition hover:text-green-500 ${theme === "dark" ? "text-slate-300" : "text-slate-700"} `}
            >
              <FaLinkedin size={19} />
            </a>

            <a
              href="https://t.me/tebie_21"
              target="_blank"
              rel="noreferrer"
              className={`transition hover:text-green-500 ${theme === "dark" ? "text-slate-300" : "text-slate-700"} `}
            >
              <FaTelegram size={19} />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ttegenew@gmail.com"
              target="_blank"
              rel="noreferrer"
              className={`transition hover:text-green-500 ${theme === "dark" ? "text-slate-300" : "text-slate-700"} `}
            >
              <Mail size={19} />
            </a>
          </div>

          <p
            className={`text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"}  `}
          >
            Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </Theme>
  );
};

export default Footer;
