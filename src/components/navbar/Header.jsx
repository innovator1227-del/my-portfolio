import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import Theme from "../Theme";
import ThemeChanger from "../ThemeChanger";

const Header = ({ heroMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Theme>
      <header className="sticky top-0 z-50 w-full font-serif shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="group shrink-0"
          >
            <motion.h1
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="bg-gradient-to-r from-green-700 via-amber-600 to-blue-700 bg-[length:200%_auto] bg-clip-text text-lg font-bold text-transparent transition-transform duration-300 group-hover:scale-105 sm:text-xl lg:text-2xl"
            >
              Tebie Tegenew
            </motion.h1>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {heroMenu.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="group relative flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-green-500/10 hover:text-green-700 dark:hover:text-green-400 lg:px-4"
              >
                {item.icon && (
                  <item.icon
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5"
                  />
                )}

                <span>{item.name}</span>

                <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-green-600 transition-all duration-300 group-hover:w-1/2" />
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <ThemeChanger />

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-xl shadow-lg shadow-purple-600 transition-all duration-300 hover:border-green-500 hover:text-green-600 md:hidden border border-slate-400"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiX size={21} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBars size={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="overflow-hidden backdrop-blur-xl md:hidden"
            >
              <motion.nav
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.06,
                    },
                  },
                }}
                className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
              >
                {heroMenu.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -15,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.25,
                        },
                      },
                    }}
                  >
                    <Link
                      to={item.link}
                      onClick={() => setIsMenuOpen(false)}
                      className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 hover:bg-green-500/10 hover:pl-6 hover:text-green-700"
                    >
                      {item.icon && (
                        <item.icon
                          size={18}
                          className="transition-colors duration-300 group-hover:text-green-600 dark:group-hover:text-green-400"
                        />
                      )}

                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </Theme>
  );
};

export default Header;
