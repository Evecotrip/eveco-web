"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeItem, setActiveItem] = useState("/");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navRef = useRef<HTMLElement>(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Ride with Us", href: "/ride" },
    { name: "Drive with Us", href: "/drive" },
    { name: "Eveco for Business", href: "/business" },
    { name: "Eveco Charge", href: "/charge" },
    { name: "Newsroom", href: "/newsroom" },
  ];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-4 left-4 right-4 md:left-8 md:right-8 lg:left-16 lg:right-16 xl:left-32 xl:right-32 z-50 transition-all duration-500 ${
        mounted && scrolled
          ? "bg-white/25 backdrop-blur-xl shadow-2xl border border-white/40 shadow-gray-300/20"
          : "bg-white/20 backdrop-blur-lg shadow-xl border border-white/30"
      } rounded-3xl overflow-hidden group hover:shadow-gray-200/30 hover:border-white/50`}
      style={{
        background: scrolled 
          ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.15), transparent 40%), rgba(255, 255, 255, 0.25)`
          : `rgba(255, 255, 255, 0.20)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="/"
              className="flex items-center space-x-2 group"
              onClick={() => setActiveItem("/")}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center hover:rotate-12 transition-transform duration-300">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent bg-size-200 animate-gradient-x group-hover:animate-pulse">
                Eveco Trip
              </span>
            </Link>
          </motion.div>
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <Link
                    href={item.href}
                    onClick={() => setActiveItem(item.href)}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group overflow-hidden ${
                      activeItem === item.href
                        ? "text-white bg-gradient-to-r from-green-500 to-blue-500 shadow-lg shadow-green-500/25"
                        : "text-gray-700 hover:text-gray-800 hover:bg-white/20"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {activeItem !== item.href && (
                      <motion.div
                        className="absolute inset-0 bg-white/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        layoutId="navHover"
                      />
                    )}
                    {activeItem === item.href && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl"
                        layoutId="navActive"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-400 hover:to-blue-400 text-white px-6 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Book Ride</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-700 hover:text-gray-800 focus:outline-none rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden border-t border-white/30 backdrop-blur-xl bg-white/10"
          >
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="border-b border-white/20 last:border-b-0"
                >
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeItem === item.href
                        ? "text-white bg-gradient-to-r from-green-500 to-blue-500 shadow-lg"
                        : "text-gray-700 hover:text-gray-800 hover:bg-white/20"
                    }`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setActiveItem(item.href);
                    }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-400 hover:to-blue-400 text-white px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-green-500/25"
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;