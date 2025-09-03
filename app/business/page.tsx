export default function BusinessPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Eveco</span> for Business
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Sustainable corporate mobility solutions for modern businesses. 
              Reduce your carbon footprint while ensuring reliable transportation for your team.
            </p>
            <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200">
              Get Enterprise Quote
            </button>
          </div>
        </div>
      </section>

      {/* Business Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise Mobility Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive transportation solutions for businesses of all sizes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Employee Transportation</h3>
              <p className="text-gray-600 mb-6">Safe and reliable commute solutions for your workforce</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Daily office shuttles</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Flexible pickup points</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Real-time tracking</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Airport Transfers</h3>
              <p className="text-gray-600 mb-6">Premium airport services for executives</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Meet & greet service</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Flight tracking</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Premium vehicles</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-100 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🚐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Event Transportation</h3>
              <p className="text-gray-600 mb-6">Large-scale transportation for corporate events</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Group bookings</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Event coordination</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Dedicated support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Eveco for Business?
            </h2>
            <p className="text-xl text-gray-600">
              Benefits that matter to your business and employees
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Cost & Efficiency</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">30% Cost Savings</strong>
                    <p className="text-gray-600 text-sm">Reduce transportation costs vs traditional services</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Centralized Billing</strong>
                    <p className="text-gray-600 text-sm">Single monthly invoice for all rides</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Real-time Analytics</strong>
                    <p className="text-gray-600 text-sm">Track usage, costs, and carbon savings</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Sustainability</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Zero Emissions</strong>
                    <p className="text-gray-600 text-sm">100% electric vehicle fleet</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Carbon Reports</strong>
                    <p className="text-gray-600 text-sm">Monthly sustainability impact tracking</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">ESG Goals</strong>
                    <p className="text-gray-600 text-sm">Support your environmental commitments</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Corporate Mobility?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join leading companies using Eveco for sustainable business transportation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200">
              Schedule Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
