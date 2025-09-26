'use client';

export default function EvecoCharge() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Eveco</span> Charge
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Power your electric journey with India's fastest growing charging network. 
              Fast, reliable, and accessible charging stations nationwide.
            </p>
            <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200">
              Find Charging Stations
            </button>
          </div>
        </div>
      </section>

      {/* Network Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              India's Fastest Growing EV Charging Network
            </h2>
            <p className="text-xl text-gray-600">
              Powering the future of electric mobility across the country
            </p>
          </div>

          {/**
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Charging Stations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">50,000+</div>
              <div className="text-gray-600">Charging Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.5%</div>
              <div className="text-gray-600">Uptime Reliability</div>
            </div>
          </div>

        */}
        </div>
      </section>

      {/* Charging Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Charging Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Multiple charging options to suit every need and vehicle type
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">DC Fast Charging</h3>
              <p className="text-gray-600 mb-6">Ultra-fast charging for quick top-ups on the go</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> 0-80% in 30 minutes</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> 50kW - 150kW power</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> CCS & CHAdeMO compatible</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🔌</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AC Charging</h3>
              <p className="text-gray-600 mb-6">Standard charging for overnight and extended stays</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> 3-8 hour full charge</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> 7kW - 22kW power</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Type 2 connector</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-100 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Home Charging</h3>
              <p className="text-gray-600 mb-6">Install charging points at your home or office</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Professional installation</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Smart monitoring</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span> 24/7 support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Charging</h3>
              <p className="text-gray-600">Quick charge your vehicle in 30 minutes or less</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🗺️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Wide Network</h3>
              <p className="text-gray-600">Coming soon</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart App</h3>
              <p className="text-gray-600">Find, reserve, and pay for charging seamlessly</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Payment</h3>
              <p className="text-gray-600">Multiple payment options with transparent pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Charging with Eveco
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Download the app and access India's most reliable charging network
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200">
              Download App
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-transparent hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 hover:bg-clip-text transition-all duration-200">
              Find Stations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
