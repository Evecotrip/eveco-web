'use client';

export default function Newsroom() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-orange-100 text-orange-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              🚀 Coming Soon
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Eveco</span> Newsroom
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're building India's next electric mobility platform from the ground up. Follow our development journey and see how we're creating the future of sustainable transportation.
            </p>
          </div>
        </div>
      </section>

      {/* Development Updates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Development Progress
            </h2>
            <p className="text-xl text-gray-600">
              Latest updates from our development team as we build the platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <span className="text-4xl">💻⚡</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-green-600 font-semibold mb-2">DEVELOPMENT</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Core Backend Systems Built</h3>
                <p className="text-gray-600 mb-4">We've completed the foundational backend architecture with user management, ride matching algorithms, and real-time tracking systems.</p>
                <div className="text-sm text-gray-500">December 15, 2024</div>
              </div>
            </article>
            
            <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <span className="text-4xl">📱🎨</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">UI/UX DESIGN</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile App UI Design Complete</h3>
                <p className="text-gray-600 mb-4">Our design team has finalized the user interface for both rider and driver mobile applications with intuitive, accessible design.</p>
                <div className="text-sm text-gray-500">December 10, 2024</div>
              </div>
            </article>
            
            <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <span className="text-4xl">🧪⚙️</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-purple-600 font-semibold mb-2">TESTING</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Alpha Testing Phase Started</h3>
                <p className="text-gray-600 mb-4">Internal testing of core features has begun with our development team identifying and fixing bugs in the ride booking flow.</p>
                <div className="text-sm text-gray-500">December 5, 2024</div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Upcoming Announcements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Development Roadmap
            </h2>
            <p className="text-xl text-gray-600">
              What we're working on next in our development journey
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 opacity-75">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1">
                  <div className="text-sm text-green-600 font-semibold mb-2">COMING SOON • Q1 2025</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Official Platform Launch</h3>
                  <p className="text-gray-600 mb-4">Get ready for the official launch of Eveco's revolutionary electric mobility platform, connecting riders with sustainable transportation.</p>
                </div>
                <div className="text-green-600 font-semibold">
                  Stay Tuned
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-200 opacity-75">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1">
                  <div className="text-sm text-blue-600 font-semibold mb-2">PLANNED • Q2 2025</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Pilot Program Launch in Delhi NCR</h3>
                  <p className="text-gray-600 mb-4">Our pilot program will begin in Delhi NCR, offering early access to select users and gathering valuable feedback.</p>
                </div>
                <div className="text-blue-600 font-semibold">
                  Early Access Soon
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 opacity-75">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1">
                  <div className="text-sm text-purple-600 font-semibold mb-2">IN DEVELOPMENT • Q3 2025</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Charging Network Expansion</h3>
                  <p className="text-gray-600 mb-4">Comprehensive charging infrastructure rollout across major Indian cities to support our growing fleet.</p>
                </div>
                <div className="text-purple-600 font-semibold">
                  Planning Phase
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Building */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We're Building
            </h2>
            <p className="text-xl text-gray-600">
              A glimpse into the future of sustainable mobility in India
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">App Development</h3>
              <p className="text-gray-600">Native mobile apps with intuitive user experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Backend Systems</h3>
              <p className="text-gray-600">Robust server infrastructure and database architecture</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">User Experience</h3>
              <p className="text-gray-600">Seamless ride booking and tracking experience design</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔋</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Testing & QA</h3>
              <p className="text-gray-600">Comprehensive testing for reliability and performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Signup */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Follow Our Development
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get updates on our development progress and be notified when we launch
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email for updates"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200">
              Get Updates
            </button>
          </div>
          <p className="text-sm text-green-100 mt-4">
            💻 Stay updated with development milestones and technical progress
          </p>
        </div>
      </section>
    </div>
  );
}