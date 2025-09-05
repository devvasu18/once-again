'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeftIcon, CheckIcon, StarIcon, ShieldCheckIcon, ChartBarIcon, BoltIcon, EyeIcon, UserGroupIcon, HeartIcon, PhotoIcon, LockClosedIcon, MagnifyingGlassIcon, ChartPieIcon, ClockIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'

export default function Features() {
  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url("/images/features-background.png")',
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
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ml-10 mr-10">
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
              <Link href="/features" className="text-white/90 hover:text-white transition-colors">Features</Link>
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
            Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">Features</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive suite of tools and features that make Instalker the ultimate 
            IG analytics platform. Everything you need to grow and succeed on social media.
          </p>
        </div>

        {/* Core Features Section */}
        <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 rounded-3xl shadow-2xl p-8 md:p-12 mb-16 border border-gray-600/50 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 via-transparent to-gray-500/5 rounded-3xl"></div>
          <div className="absolute top-4 right-4 w-32 h-32 bg-gray-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-gray-300/15 rounded-full blur-xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Core Features</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                  Instalker provides a comprehensive suite of IG analytics tools designed to give you 
                  complete visibility into your social media performance. From follower tracking to engagement 
                  analysis, we've got everything you need.
                </p>
                <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                  Our advanced algorithms process millions of data points to deliver accurate, real-time insights 
                  that help you make informed decisions about your content strategy and grow your IG presence.
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

        {/* Key Features Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 rounded-2xl p-8 border border-gray-600/50 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-blue-500/5 rounded-2xl"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <EyeIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Profile Analytics</h3>
                <p className="text-gray-200 leading-relaxed">
                  Get detailed insights into any IG profile including follower count, 
                  engagement rates, and growth patterns.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 rounded-2xl p-8 border border-gray-600/50 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-transparent to-green-500/5 rounded-2xl"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <UserGroupIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Follower Tracking</h3>
                <p className="text-gray-200 leading-relaxed">
                  Monitor follower growth, track unfollowers, and identify your most 
                  engaged audience members.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 rounded-2xl p-8 border border-gray-600/50 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-purple-500/5 rounded-2xl"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HeartIcon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Engagement Analysis</h3>
                <p className="text-gray-200 leading-relaxed">
                  Analyze likes, comments, and shares to understand what content 
                  resonates most with your audience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Features Section */}
        <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 rounded-3xl shadow-2xl p-8 md:p-12 mb-16 border border-gray-600/50 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 via-transparent to-gray-500/5 rounded-3xl"></div>
          <div className="absolute top-4 right-4 w-32 h-32 bg-gray-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-gray-300/15 rounded-full blur-xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Advanced Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Story Viewer</h3>
                    <p className="text-gray-200">View IG stories anonymously without leaving a trace or notification.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Secret Stalker Detection</h3>
                    <p className="text-gray-200">Discover who's been viewing your profile and stories secretly.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Profile Discovery</h3>
                    <p className="text-gray-200">Find and analyze profiles with advanced search and filtering options.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Real-time Monitoring</h3>
                    <p className="text-gray-200">Get instant notifications about profile changes and new followers.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Data Export</h3>
                    <p className="text-gray-200">Export your analytics data in multiple formats for further analysis.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Mobile App</h3>
                    <p className="text-gray-200">Access all features on the go with our mobile-optimized interface.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">Why Choose Instalker?</h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Experience the difference with our comprehensive feature set designed to give you 
            complete control over your IG analytics and growth.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 rounded-2xl p-8 border border-gray-600/50 backdrop-blur-sm">
              <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <LockClosedIcon className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Privacy & Security</h3>
              <p className="text-gray-300 mb-2">100% Anonymous</p>
              <p className="text-sm text-gray-400">Your activities are completely private and secure. No data is stored or shared.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 rounded-2xl p-8 border border-gray-600/50 backdrop-blur-sm">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <ChartPieIcon className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Advanced Analytics</h3>
              <p className="text-gray-300 mb-2">Deep Insights</p>
              <p className="text-sm text-gray-400">Get detailed analytics and insights that help you understand your audience better.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 rounded-2xl p-8 border border-gray-600/50 backdrop-blur-sm">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <DevicePhoneMobileIcon className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Mobile Optimized</h3>
              <p className="text-gray-300 mb-2">Always Accessible</p>
              <p className="text-sm text-gray-400">Access all features on any device with our responsive, mobile-first design.</p>
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
                Ready to Explore All Features?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Start using Instalker today and discover the power of advanced IG analytics.
              </p>
              <Link
                href="/home"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-800/20 to-red-700/10 text-white font-semibold rounded-xl hover:from-red-700/30 hover:to-red-600/20 transition-all duration-200 shadow-2xl hover:shadow-2xl transform hover:-translate-y-0.5 border border-red-600/50 backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-500/10 rounded-xl"></div>
                <span className="relative z-10">Get Started Now</span>
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
