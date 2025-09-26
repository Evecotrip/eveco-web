export default function RidePage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Ride with <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Eveco</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experience premium electric mobility with our safe, comfortable, and eco-friendly rides. 
              Book instantly and travel sustainably.
            </p>
            <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200">
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Ride Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Ride Type
            </h2>
            <p className="text-xl text-gray-600">
              Different options for different needs - all 100% electric
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Eveco Go</h3>
              <p className="text-gray-600 mb-6">Perfect for daily commutes and short trips around the city</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Compact electric vehicles</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> AC & music system</li>
                {/* <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Starting at ₹8/km</li> */}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🚙</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Eveco Prime</h3>
              <p className="text-gray-600 mb-6">Premium electric SUVs for comfortable longer journeys</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Spacious SUV vehicles</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Premium interiors</li>
                {/* <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Starting at ₹12/km</li> */}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-100 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🕐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Eveco Rental</h3>
              <p className="text-gray-600 mb-6">Hourly rentals for multiple stops and flexible schedules</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span> 2-12 hour packages</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Unlimited stops</li>
                {/* <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Starting at ₹199/hour</li> */}
              </ul>
            </div>
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

      {/* Pricing 
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
      */}

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
