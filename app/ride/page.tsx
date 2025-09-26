"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Car, Zap, Clock, Star, ArrowRight, CheckCircle, Sparkles } from "lucide-react";

export default function RidePage() {
  const [selectedVehicle, setSelectedVehicle] = useState("go");
  const [bookingStep, setBookingStep] = useState(1);

  const vehicles = [
    {
      id: "go",
      name: "Eveco Go",
      icon: "🚗",
      price: "₹8/km",
      features: ["Compact electric vehicles", "AC & music system", "Perfect for city rides"],
      gradient: "from-blue-500 to-blue-700",
      popular: false
    },
    {
      id: "prime",
      name: "Eveco Prime",
      icon: "🚙",
      price: "₹12/km",
      features: ["Spacious SUV vehicles", "Premium interiors", "Comfortable long journeys"],
      gradient: "from-green-500 to-green-700",
      popular: true
    },
    {
      id: "rental",
      name: "Eveco Rental",
      icon: "🕐",
      price: "₹199/hour",
      features: ["2-12 hour packages", "Unlimited stops", "Flexible schedules"],
      gradient: "from-blue-500 to-green-500",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-green-900/20">
      {/* Enhanced Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 cyber-grid opacity-10" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-400" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-sm text-green-400 font-medium">Premium Electric Rides</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ride with{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent animate-gradient-shift">
                Eveco
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Experience premium electric mobility with our{" "}
              <span className="text-neon">safe, comfortable</span>, and eco-friendly rides.
              Book instantly and travel sustainably.
            </motion.p>
            
            <motion.button
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-400 hover:to-blue-400 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 group"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 136, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Book Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Interactive Vehicle Selection */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Ride Type
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Different options for different needs - all{" "}
              <span className="text-neon font-semibold">100% electric</span>
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                className={`relative p-8 rounded-2xl glass-morphism-dark neon-border cursor-pointer transition-all duration-500 ${
                  selectedVehicle === vehicle.id 
                    ? 'border-green-400/60 bg-gradient-to-br from-green-500/10 to-blue-500/10' 
                    : 'hover:border-green-400/40'
                }`}
                onClick={() => setSelectedVehicle(vehicle.id)}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0, 255, 136, 0.2)"
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Popular Badge */}
                {vehicle.popular && (
                  <motion.div
                    className="absolute -top-3 -right-3 bg-gradient-to-r from-green-400 to-blue-400 text-white px-3 py-1 rounded-full text-xs font-semibold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.2, type: "spring", stiffness: 500 }}
                  >
                    <Star className="w-3 h-3 inline mr-1" />
                    Popular
                  </motion.div>
                )}
                
                {/* Selection Indicator */}
                <AnimatePresence>
                  {selectedVehicle === vehicle.id && (
                    <motion.div
                      className="absolute top-4 right-4 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <CheckCircle className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-6xl mb-4 text-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {vehicle.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">
                    {vehicle.name}
                  </h3>
                  
                  <div className="text-center mb-6">
                    <span className={`text-2xl font-bold bg-gradient-to-r ${vehicle.gradient} bg-clip-text text-transparent`}>
                      {vehicle.price}
                    </span>
                  </div>
                  
                  <ul className="space-y-3">
                    {vehicle.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex}
                        className="flex items-center text-gray-300 group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.2 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.span 
                          className="text-green-400 mr-3 text-lg"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          ✓
                        </motion.span>
                        <span className="group-hover:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Book your electric ride in just 3 simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Book</h3>
              <p className="text-gray-600">Enter your pickup and drop location in the app. Choose your preferred ride type.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ride</h3>
              <p className="text-gray-600">Your verified driver arrives in a clean electric vehicle. Enjoy your comfortable ride.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pay</h3>
              <p className="text-gray-600">Automatic cashless payment through the app. Rate your experience and driver.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              No hidden charges, no surge pricing - just fair and transparent rates
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-xl">
                <div className="text-2xl font-bold text-green-600 mb-2">₹8</div>
                <div className="text-sm text-gray-600">Base fare per km</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl">
                <div className="text-2xl font-bold text-green-600 mb-2">₹0</div>
                <div className="text-sm text-gray-600">Surge pricing</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">₹2</div>
                <div className="text-sm text-gray-600">Per minute waiting</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl">
                <div className="text-2xl font-bold text-green-600 mb-2">₹0</div>
                <div className="text-sm text-gray-600">Cancellation fee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">Book rides instantly through our mobile app with live tracking</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Fleet</h3>
              <p className="text-gray-600">Modern electric vehicles with comfort features and AC</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍✈️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Professional Drivers</h3>
              <p className="text-gray-600">Trained, verified drivers with excellent ratings</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Cashless Payment</h3>
              <p className="text-gray-600">Secure digital payments with wallet and card options</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
