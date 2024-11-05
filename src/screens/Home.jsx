import React from 'react';
import { Shield, Zap,  DollarSign, Scale, ChevronRight, Phone, Mail, MapPin, Facebook, Twitter, Instagram, FacebookIcon, Mic } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <header className="relative bg-orange-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                Secure Payments, <span className="text-orange-600">Seamless Transactions</span>
              </h1>
              <p className="text-lg text-gray-600">
                Effortlessly connect and transact with PaySecure, the safest P2P payment platform designed for buyers and sellers. With us, your payment is always protected—so you can trade with peace of mind.
              </p>
              <div className="space-x-4">
                <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition">
                  Get Started
                </button>
                <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://img.freepik.com/free-vector/people-using-online-payment-mobile-app-cartoon-illustration_74855-14481.jpg?t=st=1730808810~exp=1730812410~hmac=f078746395eadb3fc02242d60bf85baeb396cc17e2d5c257550885c9e708abb1&w=740"
                alt="African mobile payment"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">About Us</h2>
            <p className="text-gray-600 leading-relaxed">
              At PaySecure, we believe in transforming the way people transact. As a peer-to-peer payment platform, our mission is to create a seamless and secure environment for both buyers and sellers. Whether you're purchasing a product, hiring a service, or paying for a gig, PaySecure ensures your money is in safe hands.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="w-12 h-12 text-orange-600" />, title: "Guaranteed Safety", description: "Our advanced security protocols protect your funds and personal information." },
              { icon: <Zap className="w-12 h-12 text-orange-600" />, title: "Quick Transactions", description: "PaySecure simplifies payment processes, making it easy to connect and transact." },
              { icon: <Mic className="w-12 h-12 text-orange-600" />, title: "24/7 Support", description: "We're here for you, anytime. Round-the-clock assistance whenever you need it." },
              { icon: <DollarSign className="w-12 h-12 text-orange-600" />, title: "Transparent Fees", description: "No hidden charges—just clear, straightforward fees." },
              { icon: <Scale className="w-12 h-12 text-orange-600" />, title: "Dispute Resolution", description: "Our dedicated team ensures that any issues are resolved quickly." }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
              <p className="text-gray-600 mb-8">
                Got questions or need help? Our team is just a click away!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-orange-600" />
                  <span>support@paysecure.com</span>
                </div>
              </div>
            </div>
            <form className="bg-orange-50 p-8 rounded-2xl">
              <div className="space-y-4">
                <input type="text" placeholder="Name" className="w-full p-3 rounded-lg border border-gray-300" />
                <input type="email" placeholder="Email" className="w-full p-3 rounded-lg border border-gray-300" />
                <textarea placeholder="Message" rows={4} className="w-full p-3 rounded-lg border border-gray-300"></textarea>
                <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">PaySecure</h3>
              <p className="text-gray-400">Secure, Simple, Seamless.</p>
              <p className="text-gray-400 mt-2">Transact with peace of mind, every time.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-500">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Facebook  className="hover:text-orange-500 cursor-pointer" />
                <Twitter className="hover:text-orange-500 cursor-pointer" />
                <Instagram className="hover:text-orange-500 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 PaySecure. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;