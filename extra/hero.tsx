import Image from "next/image";
import tataCurvvImage from "./assets/tata-curvv.jpg";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Full-screen background image */}
        <div className="absolute inset-0">
          <Image
            src={tataCurvvImage}
            alt="Tata Curvv Electric Vehicle"
            className="w-full h-full object-cover"
            fill
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                Sustainable
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent block">
                  Electric Mobility
                </span>
                for Everyone
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
                Transforming cities with 100% electric, sustainable and most
                reliable mobility solutions. Experience the future of
                transportation today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105">
                  Book Your Ride
                </button>
                <button className="border-2 border-gradient-to-r border-white text-white hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 hover:border-transparent px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200">
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-400">
                    100%
                  </div>
                  <div className="text-sm text-gray-300">Electric Fleet</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400">
                    50K+
                  </div>
                  <div className="text-sm text-gray-300">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    24/7
                  </div>
                  <div className="text-sm text-gray-300">Service Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Eveco Trip?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of transportation with our sustainable,
              reliable, and comfortable electric mobility solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                100% Electric
              </h3>
              <p className="text-gray-600">
                Zero emissions, maximum impact. Our entire fleet runs on clean
                electric energy.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Safe & Reliable
              </h3>
              <p className="text-gray-600">
                Professional drivers, sanitized vehicles, and 24/7 customer
                support.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete electric mobility solutions tailored for every need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🚗</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">City Rides</h3>
              <p className="text-gray-600 text-sm">
                Quick point-to-point rides within the city with transparent
                pricing
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🕐</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Hourly Rentals</h3>
              <p className="text-gray-600 text-sm">
                Rent a cab for multiple hours with unlimited stops and
                flexibility
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">✈️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Airport Transfers</h3>
              <p className="text-gray-600 text-sm">
                Reliable airport pickup and drop-off with flight tracking
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🏢</span>
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

      {/* App Download Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Download the Eveco App
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Book rides, track your trips, and manage your account - all from
                your smartphone.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3 hover:bg-gray-800 transition-colors">
                  <span className="text-2xl">📱</span>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </button>

                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3 hover:bg-gray-800 transition-colors">
                  <span className="text-2xl">🤖</span>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400">4.8★</div>
                  <div className="text-sm text-gray-400">App Store Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">1M+</div>
                  <div className="text-sm text-gray-400">Downloads</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-green-400 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">📱</div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Go Electric?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made the switch to
            sustainable transportation.
          </p>
          <button className="bg-white text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105">
            Book Your First Ride
          </button>
        </div>
      </section>
    </div>
  );
}
