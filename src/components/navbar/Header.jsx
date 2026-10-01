import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Theme from "../Theme";
import ThemeChanger from "../ThemeChanger";
import { motion } from "framer-motion";

const Header = ({ heroMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Theme>
      <div className="w-full shadow-2xl font-serif">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-2xl md:hidden"
          >
            <FaBars size={20} />
          </button>
          <button className="hover:scale-105 transition-all duration-100 hover:translate-x-0.5 cursor-pointer">
            <motion.h1
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="bg-linear-to-r from-green-700 via-amber-600 to-blue-700 bg-[length:200%_auto] bg-clip-text text-2xl font-bold text-transparent"
            >
              Tebie Tegenew
            </motion.h1>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-2 md:flex">
            {heroMenu.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="whitespace-nowrap rounded-full flex items-center px-5 py-2.5 text-sm font-medium transition hover:text-green-700"
              >
                {item.icon && <item.icon size={20} className="mr-2" />}
                {item.name}
              </Link>
            ))}
          </nav>

          <ThemeChanger />
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="px-4 py-3 md:hidden border-t border-slate-400">
            <nav className="flex flex-col gap-1">
              {heroMenu.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </Theme>
  );
};

export default Header;
