'use client';

export default function Newsroom() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Eveco</span> Newsroom
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay updated with the latest news, announcements, and insights from India's leading electric mobility platform.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest News
            </h2>
            <p className="text-xl text-gray-600">
              Breaking news and updates from the world of electric mobility
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <span className="text-4xl">🚗⚡</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-green-600 font-semibold mb-2">COMPANY NEWS</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Eveco Expands to 10 New Cities</h3>
                <p className="text-gray-600 mb-4">We're excited to announce our expansion to 10 new cities across India, bringing sustainable mobility to millions more customers.</p>
                <div className="text-sm text-gray-500">December 15, 2024</div>
              </div>
            </article>
            
            <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <span className="text-4xl">🏆📊</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">ACHIEVEMENT</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1 Million Zero-Emission Rides Completed</h3>
                <p className="text-gray-600 mb-4">Eveco reaches a major milestone with 1 million completed rides, saving over 500 tons of CO2 emissions.</p>
                <div className="text-sm text-gray-500">December 10, 2024</div>
              </div>
            </article>
            
            <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <span className="text-4xl">🔋🏗️</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-purple-600 font-semibold mb-2">INFRASTRUCTURE</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">500+ Charging Stations Now Live</h3>
                <p className="text-gray-600 mb-4">Our charging network reaches a new milestone with 500+ stations operational across 25+ cities nationwide.</p>
                <div className="text-sm text-gray-500">December 5, 2024</div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Press Releases
            </h2>
            <p className="text-xl text-gray-600">
              Official announcements and company updates
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1">
                  <div className="text-sm text-green-600 font-semibold mb-2">PRESS RELEASE • DECEMBER 12, 2024</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Eveco Raises ₹100 Crore in Series B Funding</h3>
                  <p className="text-gray-600 mb-4">Leading investors back Eveco's mission to revolutionize India's transportation with sustainable electric mobility solutions.</p>
                </div>
                <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                  Read More →
                </button>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1">
                  <div className="text-sm text-blue-600 font-semibold mb-2">PRESS RELEASE • NOVEMBER 28, 2024</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Partnership with Major Corporate Clients</h3>
                  <p className="text-gray-600 mb-4">Eveco signs agreements with Fortune 500 companies to provide sustainable employee transportation solutions.</p>
                </div>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📰</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Company News</h3>
              <p className="text-gray-600">Latest updates and announcements from Eveco</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Industry Insights</h3>
              <p className="text-gray-600">Expert analysis on electric mobility trends</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">Environmental impact and green initiatives</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Press Releases</h3>
              <p className="text-gray-600">Official company announcements and media</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Subscribe to our newsletter for the latest news and updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
