'use client';

export default function DriveWithUs() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Drive with <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Eveco</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join our fleet of professional drivers and earn while contributing to a sustainable future. 
              Drive electric, earn more, impact less.
            </p>
            <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200">
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* Earnings Potential */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Earning Potential
            </h2>
            <p className="text-xl text-gray-600">
              Maximize your income with our transparent and fair earning structure
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">₹25,000 - ₹40,000</h3>
              <p className="text-gray-600 mb-4">Average monthly earnings</p>
              <p className="text-sm text-gray-500">Based on 8-10 hours daily driving</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">₹10,000</h3>
              <p className="text-gray-600 mb-4">Quarterly rewards</p>
              <p className="text-sm text-gray-500">Complete 500+ trips per quarter</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-100 p-8 rounded-2xl text-center">
              <div className="text-4xl mb-4">🎆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">₹2,000</h3>
              <p className="text-gray-600 mb-4">Weekly bonus potential</p>
              <p className="text-sm text-gray-500">Complete 50+ trips per week</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Driver Requirements
            </h2>
            <p className="text-xl text-gray-600">
              Simple requirements to get started as an Eveco driver
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Basic Requirements</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Valid Driving License</strong>
                    <p className="text-gray-600 text-sm">Minimum 2 years of driving experience</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Age 21-60 years</strong>
                    <p className="text-gray-600 text-sm">Must be within the eligible age range</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Clean Background</strong>
                    <p className="text-gray-600 text-sm">Police verification and background check</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Smartphone</strong>
                    <p className="text-gray-600 text-sm">Android/iOS device for the driver app</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Documents Needed</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Driving License (original + photocopy)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Aadhaar Card</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-gray-700">PAN Card</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Bank Account Details</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Passport Size Photos (2)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Police Verification Certificate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Drive with Eveco?
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of drivers who chose Eveco for better earnings and support
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Higher Earnings</h3>
              <p className="text-gray-600">85% commission rate with weekly bonuses and incentives</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Vehicles</h3>
              <p className="text-gray-600">Drive latest electric cars with comfort and safety features</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Driver Community</h3>
              <p className="text-gray-600">Join a supportive network of professional drivers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance and emergency support</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Join Eveco
            </h2>
            <p className="text-xl text-gray-600">
              Start earning with Eveco in just 4 simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Apply Online</h3>
              <p className="text-gray-600">Fill out our simple online application form with your details</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Document Verification</h3>
              <p className="text-gray-600">Submit required documents for background and license verification</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Training</h3>
              <p className="text-gray-600">Complete our driver training program and app orientation</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Start Driving</h3>
              <p className="text-gray-600">Get your vehicle assigned and start earning with Eveco</p>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Driver Support & Benefits
            </h2>
            <p className="text-xl text-gray-600">
              We care about our drivers and provide comprehensive support
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Financial Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Weekly Payouts</strong>
                    <p className="text-gray-600 text-sm">Get paid every week directly to your bank account</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Performance Bonuses</strong>
                    <p className="text-gray-600 text-sm">Extra earnings for high ratings and trip completions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Fuel Savings</strong>
                    <p className="text-gray-600 text-sm">Save on fuel costs with our electric vehicle fleet</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Insurance Coverage</strong>
                    <p className="text-gray-600 text-sm">Comprehensive insurance for you and passengers</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Support Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">24/7 Helpline</strong>
                    <p className="text-gray-600 text-sm">Round-the-clock support for any issues or emergencies</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Vehicle Maintenance</strong>
                    <p className="text-gray-600 text-sm">Regular servicing and maintenance of electric vehicles</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Training Programs</strong>
                    <p className="text-gray-600 text-sm">Ongoing training for customer service and safety</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Driver App</strong>
                    <p className="text-gray-600 text-sm">Easy-to-use app with navigation and earnings tracking</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join Eveco today and become part of India's sustainable mobility revolution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-transparent hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 hover:bg-clip-text transition-all duration-200">
              Download Driver App
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
