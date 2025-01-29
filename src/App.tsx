import React from 'react';
import { Coins, Users, Trophy, ArrowRight, Star, Shield, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-950">
      {/* Hero Section */}
      <header className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Star className="h-8 w-8 text-indigo-400" />
            <span className="text-2xl font-bold text-white">RewardHub</span>
          </div>
          <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-400 transition-all hover:scale-105">
            Join Now
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Message */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <Sparkles className="h-6 w-6 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">Limited Time Offer</span>
            <Sparkles className="h-6 w-6 text-yellow-400" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Earn ₦10,000 <span className="text-indigo-400">Instantly</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join our community of creators and earn rewards for your valuable contributions. 
            Quick, simple, and rewarding.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800/50 backdrop-blur p-8 rounded-2xl border border-gray-700 hover:border-indigo-500 transition-all hover:scale-105">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
              <Coins className="h-6 w-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Instant Rewards</h3>
            <p className="text-gray-300">Earn ₦10,000 for your quality contributions and engagement within our platform.</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur p-8 rounded-2xl border border-gray-700 hover:border-indigo-500 transition-all hover:scale-105">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Community Focus</h3>
            <p className="text-gray-300">Connect with like-minded creators and build your audience while earning rewards.</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur p-8 rounded-2xl border border-gray-700 hover:border-indigo-500 transition-all hover:scale-105">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
              <Trophy className="h-6 w-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Achievement System</h3>
            <p className="text-gray-300">Unlock additional bonuses and special rewards as you reach new milestones.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
          <h2 className="text-4xl font-bold mb-4 text-white relative z-10">Start Earning Today</h2>
          <p className="text-xl mb-8 text-indigo-100 relative z-10">
            Join thousands of creators who have already earned ₦10,000 for their contributions.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all hover:scale-105 inline-flex items-center relative z-10 shadow-xl">
            Claim Your ₦10,000 Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        {/* Trust Section */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-6 w-6 text-indigo-400" />
            <span className="text-xl font-semibold text-white">Safe & Secure</span>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our platform ensures transparent rewards distribution and secure payments. 
            We value authentic engagement and maintain strict quality standards.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800/50 backdrop-blur-lg mt-24 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400 text-sm">
            © 2024 RewardHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;