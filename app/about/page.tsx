'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeftIcon, CheckIcon, StarIcon, ShieldCheckIcon, ChartBarIcon, BoltIcon } from '@heroicons/react/24/outline'

export default function About() {
  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url("/images/about-background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Light overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Header */}
      <header 
        className="relative z-20 backdrop-blur-sm border-b border-gray-800/50"
        style={{
          backgroundImage: 'url("https://cdn-public.notjustanalytics.com/homepage/background.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link 
                href="/"
                className="flex items-center text-white/90 hover:text-white transition-colors"
              >
                <ArrowLeftIcon className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </div>
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">Instalker</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/about" className="text-white/90 hover:text-white transition-colors">About</Link>
              <Link href="/help" className="text-white/90 hover:text-white transition-colors">Help</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">Instalker</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your trusted companion for Instagram analytics and insights. We believe in transparency, 
            honesty, and providing you with the tools you need to succeed on social media.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 rounded-3xl shadow-2xl p-8 md:p-12 mb-16 border border-gray-600/50 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 via-transparent to-gray-500/5 rounded-3xl"></div>
          <div className="absolute top-4 right-4 w-32 h-32 bg-gray-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-gray-300/15 rounded-full blur-xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                  Founded with a simple mission: to democratize Instagram analytics and make them accessible 
                  to everyone. We started as a small team of developers who were frustrated with the lack of 
                  transparent, honest analytics tools in the market.
                </p>
                <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                  Our journey began when we realized that most analytics platforms were either too expensive, 
                  too complex, or simply not trustworthy. We set out to create something different - a platform 
                  that puts users first, values their privacy, and delivers real value.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-red-400/30 to-pink-400/30 rounded-full flex items-center justify-center">
                    <ChartBarIcon className="w-24 h-24 text-white/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 rounded-2xl p-8 border border-gray-600/50 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-blue-500/5 rounded-2xl"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheckIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Honesty</h3>
                <p className="text-gray-200 leading-relaxed">
                  We believe in complete transparency. No hidden fees, no misleading metrics, 
                  and no false promises. What you see is what you get.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 rounded-2xl p-8 border border-gray-600/50 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-transparent to-green-500/5 rounded-2xl"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BoltIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
                <p className="text-gray-200 leading-relaxed">
                  We continuously push the boundaries of what's possible in social media analytics, 
                  always staying ahead of the curve with cutting-edge technology.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 rounded-2xl p-8 border border-gray-600/50 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-purple-500/5 rounded-2xl"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <StarIcon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
                <p className="text-gray-200 leading-relaxed">
                  We strive for excellence in everything we do, from our user interface design 
                  to our data accuracy and customer support.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 rounded-3xl shadow-2xl p-8 md:p-12 mb-16 border border-gray-600/50 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 via-transparent to-gray-500/5 rounded-3xl"></div>
          <div className="absolute top-4 right-4 w-32 h-32 bg-gray-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-gray-300/15 rounded-full blur-xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">What Makes Us Different</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Real-time Analytics</h3>
                    <p className="text-gray-200">Get instant updates on your Instagram performance with our lightning-fast data processing.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Privacy First</h3>
                    <p className="text-gray-200">Your data is encrypted and secure. We never sell your information to third parties.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">User-Friendly Interface</h3>
                    <p className="text-gray-200">Clean, intuitive design that makes complex analytics easy to understand.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Accurate Data</h3>
                    <p className="text-gray-200">Our algorithms ensure 99.9% accuracy in all metrics and analytics.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                    <p className="text-gray-200">Our dedicated support team is always here to help you succeed.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Regular Updates</h3>
                    <p className="text-gray-200">We continuously improve our platform with new features and enhancements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">Meet Our Team</h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            We're a passionate group of developers, designers, and data scientists who believe 
            in the power of honest, transparent analytics.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 rounded-2xl p-8 border border-gray-600/50 backdrop-blur-sm">
              <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">JD</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">John Developer</h3>
              <p className="text-gray-300 mb-2">Lead Developer</p>
              <p className="text-sm text-gray-400">Passionate about creating clean, efficient code and user-friendly experiences.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 rounded-2xl p-8 border border-gray-600/50 backdrop-blur-sm">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">SD</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Sarah Designer</h3>
              <p className="text-gray-300 mb-2">UI/UX Designer</p>
              <p className="text-sm text-gray-400">Focused on creating beautiful, intuitive interfaces that users love.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 rounded-2xl p-8 border border-gray-600/50 backdrop-blur-sm">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">MA</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Mike Analyst</h3>
              <p className="text-gray-300 mb-2">Data Scientist</p>
              <p className="text-sm text-gray-400">Expert in data analysis and machine learning algorithms for accurate insights.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-red-800/20 to-red-700/10 rounded-3xl p-8 md:p-12 border border-red-600/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-red-500/10 rounded-3xl"></div>
            <div className="absolute top-4 right-4 w-32 h-32 bg-red-400/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-red-300/15 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Join thousands of users who trust Instalker for their Instagram analytics needs.
              </p>
              <Link
                href="/"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-800/20 to-red-700/10 text-white font-semibold rounded-xl hover:from-red-700/30 hover:to-red-600/20 transition-all duration-200 shadow-2xl hover:shadow-2xl transform hover:-translate-y-0.5 border border-red-600/50 backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-500/10 rounded-xl"></div>
                <span className="relative z-10">Start Your Journey</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer 
        className="border-t border-gray-200 relative mt-16"
        style={{
          backgroundImage: 'url("https://cdn-public.notjustanalytics.com/homepage/background.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-white">
            <p>&copy; 2024 Instalker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
