"use client";

import Image from "next/image";
import tataCurvvImage from "./assets/tata-curvv.jpg";
import tataCurvvImage2 from "./assets/tatata.jpg";
import tataCurvvImage3 from "./assets/tataN.jpg";
import tataCurvvImage4 from "./assets/gem.png";
import zSEVImage from "./assets/mg-zsev.webp";
import EvecoStats from "./components/EvecoStats";
import EvecoShinyCard from "./components/EvecoShinyCard";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Zap, ArrowRight, Play, Sparkles, Car, Shield, Leaf } from "lucide-react";
import gsap from "gsap";

// Particle component for background effects
const Particle = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-green-400 rounded-full opacity-60"
      initial={{ 
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 10,
        scale: 0
      }}
      animate={{
        y: -10,
        scale: [0, 1, 0],
        opacity: [0, 0.8, 0]
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        delay: delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 2
      }}
    />
  );
};

// Floating 3D Car Component
const FloatingCar = () => {
  return (
    <motion.div
      className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block"
      initial={{ opacity: 0, x: 100, rotateY: -30 }}
      animate={{ 
        opacity: 1, 
        x: 0, 
        rotateY: 0,
        y: [-10, 10, -10]
      }}
      transition={{
        opacity: { duration: 1, delay: 1.5 },
        x: { duration: 1, delay: 1.5 },
        rotateY: { duration: 1, delay: 1.5 },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative w-64 h-32 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-2xl backdrop-blur-sm border border-white/10 p-4 hover:scale-105 transition-transform duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl animate-pulse" />
        <Car className="w-12 h-12 text-green-400 mb-2" />
        <div className="text-white text-sm font-medium">Electric Vehicle</div>
        <div className="text-green-400 text-xs">100% Eco-Friendly</div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-ping" />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full" />
      </div>
    </motion.div>
  );
};

export default function Home() {
  const heroTitleRef = useRef(null);
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    if (heroTitleRef.current) {
      gsap.fromTo(
        heroTitleRef.current,
        { opacity: 0, scale: 0.95, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
   
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Futuristic Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-green-900">
        {/* Animated Background */}
        <div className="absolute inset-0">

         <Image src={tataCurvvImage3} fill alt="Tata Curvv" />
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Video Background with Enhanced Overlay */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/bg2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Dynamic Gradient Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-black/60 via-blue-900/40 to-green-900/40"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 136, 0.1) 0%, rgba(0, 136, 255, 0.05) 25%, transparent 50%)`
            }}
          />
          
          {/* Cyber Grid Pattern */}
          <div className="absolute inset-0 cyber-grid opacity-20" />
          
          {/* Floating Particles */}
          <div className="particles">
            {Array.from({ length: 50 }).map((_, i) => (
              <Particle key={i} delay={i * 0.1} />
            ))}
          </div>
          
          {/* Holographic Elements */}
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 border border-green-400/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-4 border border-blue-400/30 rounded-full animate-pulse" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-20 right-20 w-24 h-24 border border-blue-400/30 rounded-lg"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-2 border border-green-400/30 rounded-lg animate-pulse" />
          </motion.div>

        </div>

        {/* Enhanced Content Overlay */}
        <motion.div 
          className="relative z-10 h-full flex items-center"
          style={{ y: y1, opacity }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

            <div className="max-w-3xl">
              <h1
                ref={heroTitleRef}
                className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
              >
                <span className="inline-block">Sustainable</span>
                <span className="inline-block animate-gradient-shift">
                  Electric Mobility
                </span>
                <span className="inline-block">for Everyone</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 animate-fade-up animation-delay-800">
                Transforming cities with 100% electric, sustainable and most
                reliable mobility solutions. Experience the future of
                transportation today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up animation-delay-800">
                <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Book Your Ride
                </button>
                <button className="border-2 border-white text-white hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 hover:border-transparent px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 animate-fade-up animation-delay-800">
                <div className="text-center animate-counter-up">
                  <div className="text-3xl md:text-4xl font-bold text-green-400 hover:scale-110 transition-transform duration-300">
                    100%
                  </div>
                  <div className="text-sm text-gray-300">Electric Fleet</div>
                </div>
               
                <div className="text-center animate-counter-up animation-delay-400">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300">
                    24/7
                  </div>
                  <div className="text-sm text-gray-300">Service Available</div>
                </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-3xl">
                {/* Animated Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-4 py-2 mb-6 hover:scale-105 transition-transform duration-300"
                >
                  <Sparkles className="w-4 h-4 text-green-400 animate-pulse" />
                  <span className="text-sm text-green-400 font-medium">Future of Mobility</span>
                </motion.div>
                
                <motion.h1
                  ref={heroTitleRef}
                  className="text-5xl md:text-7xl font-bold leading-tight mb-6"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <span className="block text-white">Sustainable</span>
                  <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-green-400 bg-clip-text text-transparent animate-gradient-shift">
                    Electric Mobility
                  </span>
                  <span className="block text-white">for Everyone</span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Transforming cities with{" "}
                  <span className="text-neon font-semibold">100% electric</span>,
                  sustainable and most reliable mobility solutions. Experience the
                  <span className="text-neon font-semibold"> future of transportation</span> today.
                </motion.p>

                {/* Enhanced CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 136, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-400 hover:to-blue-400 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <Zap className="w-5 h-5" />
                      <span>Book Your Ride</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group glass-morphism border border-white/20 text-white hover:border-green-400/50 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:bg-white/10"
                  >
                    <span className="flex items-center space-x-2">
                      <Play className="w-5 h-5" />
                      <span>Watch Demo</span>
                    </span>
                  </motion.button>
                </motion.div>

                {/* Enhanced Stats with Neon Effects */}
                <motion.div 
                  className="grid grid-cols-3 gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                >
                  {[
                    { value: "100%", label: "Electric Fleet", icon: Leaf, color: "green" },
                    { value: "50K+", label: "Happy Customers", icon: Sparkles, color: "blue" },
                    { value: "24/7", label: "Service Available", icon: Shield, color: "gradient" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center group"
                      whileHover={{ scale: 1.1, y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <div className="relative mb-2">
                        <div className={`w-16 h-16 mx-auto rounded-full border-2 ${
                          stat.color === 'green' ? 'border-green-400/30 bg-green-400/10' :
                          stat.color === 'blue' ? 'border-blue-400/30 bg-blue-400/10' :
                          'border-green-400/30 bg-gradient-to-r from-green-400/10 to-blue-400/10'
                        } flex items-center justify-center mb-3 group-hover:border-green-400/60 transition-all duration-300`}>
                          <stat.icon className={`w-6 h-6 ${
                            stat.color === 'green' ? 'text-green-400' :
                            stat.color === 'blue' ? 'text-blue-400' :
                            'text-green-400'
                          }`} />
                        </div>
                        <div className={`text-3xl md:text-4xl font-bold mb-1 ${
                          stat.color === 'gradient' 
                            ? 'bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent'
                            : stat.color === 'green' ? 'text-green-400' : 'text-blue-400'
                        } group-hover:animate-pulse`}>
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              
              {/* Floating 3D Car */}
              <FloatingCar />
            </div>
          </div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            animate={{ borderColor: ["rgba(255,255,255,0.3)", "rgba(0,255,136,0.6)", "rgba(255,255,255,0.3)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-green-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <p className="text-white/60 text-xs mt-2 text-center">Scroll to explore</p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Eveco Trip?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of transportation with our sustainable,
              reliable, and comfortable electric mobility solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-up animation-delay-200">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                100% Electric
              </h3>
              <p className="text-gray-600">
                Zero emissions, maximum impact. Our entire fleet runs on clean
                electric energy.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-up animation-delay-400">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10.5V11.5C14.8,12.4 14.4,13.2 13.7,13.7V16.5C13.7,17.1 13.3,17.5 12.7,17.5H11.3C10.7,17.5 10.3,17.1 10.3,16.5V13.8C9.6,13.3 9.2,12.5 9.2,11.6V10.5C9.2,8.6 10.6,7 12,7Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Safe & Reliable
              </h3>
              <p className="text-gray-600">
                Professional drivers, sanitized vehicles, and 24/7 customer
                support.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-up animation-delay-600">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Affordable
              </h3>
              <p className="text-gray-600">
                Competitive pricing with transparent fare structure and no
                hidden charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eveco Stats Bento Grid 
      <EvecoStats />
      */}

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete electric mobility solutions tailored for every need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fade-up animation-delay-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">City Rides</h3>
              <p className="text-gray-600 text-sm">
                Quick point-to-point rides within the city with transparent
                pricing
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fade-up animation-delay-400">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Hourly Rentals</h3>
              <p className="text-gray-600 text-sm">
                Rent a cab for multiple hours with unlimited stops and
                flexibility
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fade-up animation-delay-600">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,16V14L13,9V7A1,1 0 0,0 12,6A1,1 0 0,0 11,7V9L3,14V16L11,13.5V19L8,20.5V22L12,21L16,22V20.5L13,19V13.5L21,16Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Airport Transfers</h3>
              <p className="text-gray-600 text-sm">
                Reliable airport pickup and drop-off with flight tracking
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fade-up animation-delay-800">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,7V3H2V21H22V7H12M6,19H4V17H6V19M6,15H4V13H6V15M6,11H4V9H6V11M6,7H4V5H6V7M10,19H8V17H10V19M10,15H8V13H10V15M10,11H8V9H10V11M10,7H8V5H10V7M20,19H12V17H20V19M20,15H12V13H20V15M20,11H12V9H20V11Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Corporate</h3>
              <p className="text-gray-600 text-sm">
                Enterprise solutions with centralized billing and management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Safety & Hygiene First
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Your safety is our top priority. Every ride comes with
                comprehensive safety measures and sanitization protocols.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Verified Drivers
                    </h3>
                    <p className="text-gray-600">
                      All drivers undergo thorough background checks and
                      training
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Sanitized Vehicles
                    </h3>
                    <p className="text-gray-600">
                      Every vehicle is thoroughly cleaned and sanitized between
                      rides
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Real-time Tracking
                    </h3>
                    <p className="text-gray-600">
                      Live GPS tracking and trip sharing for added security
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      24/7 Support
                    </h3>
                    <p className="text-gray-600">
                      Round-the-clock customer support for any assistance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-8 text-white text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold mb-2">Safety Certified</h3>
                <p className="text-green-100">
                  ISO 27001 certified safety protocols
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Experience the Future
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our cutting-edge technology makes electric mobility
              seamless and efficient
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-fade-up animation-delay-200">
              <EvecoShinyCard
                title="Smart Booking"
                subtitle="AI-Powered Rides"
                icon="zap"
                gradientFrom="from-green-500"
                gradientTo="to-green-700"
                steps={[
                  { title: "Location Detection", time: "Instant" },
                  { title: "Route Optimization", time: "2s" },
                  { title: "Driver Matching", time: "30s" },
                ]}
              />
            </div>

            <div className="animate-fade-up animation-delay-400">
              <EvecoShinyCard
                title="Fleet Management"
                subtitle="Real-time Monitoring"
                icon="car"
                gradientFrom="from-blue-500"
                gradientTo="to-blue-700"
                steps={[
                  { title: "Vehicle Status", time: "Live" },
                  { title: "Battery Monitoring", time: "24/7" },
                  { title: "Maintenance Alerts", time: "Auto" },
                ]}
              />
            </div>

            <div className="animate-fade-up animation-delay-600">
              <EvecoShinyCard
                title="Safety Protocol"
                subtitle="Advanced Security"
                icon="shield"
                gradientFrom="from-green-600"
                gradientTo="to-blue-600"
                steps={[
                  { title: "Identity Verification", time: "Instant" },
                  { title: "Trip Monitoring", time: "Live" },
                  { title: "Emergency Response", time: "24/7" },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-right">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-up">
                Download the Eveco App
              </h2>
              <p className="text-xl text-gray-300 mb-8 animate-fade-up animation-delay-200">
                Book rides, track your trips, and manage your account - all from
                your smartphone.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-up animation-delay-400">
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </button>

                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6 text-center animate-fade-up animation-delay-600">
                <div className="hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-green-400">Launching Soon</div>
                  <div className="text-sm text-gray-400">App Store Rating</div>
                </div>
                <div className="hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-green-400">Launching Soon</div>
                  <div className="text-sm text-gray-400">Downloads</div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-left">
              <div className="bg-gradient-to-br from-blue-500 to-green-400 rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21C5,22.1 5.9,23 7,23H17C18.1,23 19,22.1 19,21V3C19,1.89 18.1,1 17,1Z" />
                </svg>
                <div className="text-white text-xl font-semibold">
                  Eveco Trip App
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-up">
            Ready to Go Electric?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Join thousands of satisfied customers who have made the switch to
            sustainable transportation.
          </p>
          <button className="bg-white text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-xl animate-fade-up animation-delay-400">
            Book Your First Ride
          </button>
        </div>
      </section>
    </div>
  );
}
