'use client'

import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline'

// Sample profile images data (you can replace with actual images)
const profileImages = [
  {
    id: 1,
    name: 'Alex Johnson',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    borderColor: 'border-gray-300'
  },
  {
    id: 2,
    name: 'Sarah Wilson',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    borderColor: 'border-pink-300'
  },
  {
    id: 3,
    name: 'Mike Chen',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    borderColor: 'border-blue-300'
  },
  {
    id: 4,
    name: 'Emma Davis',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    borderColor: 'border-pink-300'
  },
  {
    id: 5,
    name: 'David Brown',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    borderColor: 'border-blue-300'
  },
  {
    id: 6,
    name: 'Lisa Garcia',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    borderColor: 'border-pink-300'
  },
  {
    id: 7,
    name: 'Tom Wilson',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    borderColor: 'border-blue-300'
  },
  {
    id: 8,
    name: 'Anna Smith',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    borderColor: 'border-pink-300'
  },
  {
    id: 9,
    name: 'John Miller',
    image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face',
    borderColor: 'border-blue-300'
  }
]

export default function Home() {
  // Use the first 8 images for surrounding profiles
  const surroundingImages = profileImages.slice(0, 8)
  
  // Ref for focus reference
  const focusRef = useRef<HTMLDivElement>(null)




  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://tinder.com/static/build/8ad4e4299ef5e377d2ef00ba5c94c44c.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      {/* Silver Ink Spread Background */}
      <div className="absolute inset-0">
        {/* Large ink blots */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-gray-300/40 to-gray-500/25 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-bl from-gray-400/50 to-gray-600/35 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-72 h-72 bg-gradient-to-tr from-gray-300/55 to-gray-500/40 rounded-full blur-2xl animate-ping"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-tl from-gray-400/45 to-gray-600/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-88 h-88 bg-gradient-to-br from-gray-300/50 to-gray-500/35 rounded-full blur-2xl animate-bounce"></div>
        
        {/* Medium ink spots */}
        <div className="absolute top-32 left-1/3 w-48 h-48 bg-gradient-to-r from-gray-400/35 to-gray-600/25 rounded-full blur-lg"></div>
        <div className="absolute bottom-40 right-1/4 w-56 h-56 bg-gradient-to-l from-gray-300/45 to-gray-500/35 rounded-full blur-xl"></div>
        <div className="absolute top-2/3 left-1/5 w-40 h-40 bg-gradient-to-br from-gray-400/50 to-gray-600/40 rounded-full blur-lg"></div>
        
        {/* Small ink droplets */}
        <div className="absolute top-16 left-2/3 w-24 h-24 bg-gradient-to-r from-gray-500/55 to-gray-700/40 rounded-full blur-md"></div>
        <div className="absolute bottom-24 left-1/2 w-32 h-32 bg-gradient-to-l from-gray-400/45 to-gray-600/35 rounded-full blur-lg"></div>
        <div className="absolute top-1/3 right-1/5 w-28 h-28 bg-gradient-to-br from-gray-300/50 to-gray-500/40 rounded-full blur-md"></div>
        <div className="absolute bottom-1/3 right-2/3 w-36 h-36 bg-gradient-to-tl from-gray-400/35 to-gray-600/25 rounded-full blur-lg"></div>
        
        {/* Additional scattered ink effects */}
        <div className="absolute top-1/4 left-1/6 w-20 h-20 bg-gray-400/45 rounded-full blur-sm"></div>
        <div className="absolute bottom-1/4 right-1/6 w-16 h-16 bg-gray-500/55 rounded-full blur-sm"></div>
        <div className="absolute top-3/4 left-3/4 w-12 h-12 bg-gray-300/60 rounded-full blur-sm"></div>
        <div className="absolute bottom-1/6 left-1/3 w-14 h-14 bg-gray-400/45 rounded-full blur-sm"></div>
      </div>
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
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">Instalker</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/home" className="flex items-center space-x-1 text-white hover:text-white/90 transition-colors">
                <HomeIcon className="h-5 w-5" />
                <span>Home</span>
              </Link>
              <a href="#" className="text-white/90 hover:text-white transition-colors">Features</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-8xl mx-auto py-12 px-1 sm:px-2 lg:px-4">
        {/* Main Content Section */}
        <div className="flex justify-center mb-16">
          {/* Center Section - Rotating Images */}
          <div 
            className="text-center relative overflow-hidden rounded-2xl min-h-[500px] max-w-4xl w-full"
        >
       
          <div 
            ref={focusRef}
            className="relative z-10 pt-16 px-8 "
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
           
            
            {/* Profile Images Network */}
            <div className="relative w-[250px] h-96 mx-auto mb-8" >
              {/* Central Profile - Fixed */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-24 h-24 rounded-full border-4 border-gray-300 overflow-hidden shadow-lg bg-white p-1">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                    alt="Center Profile"
                    className="w-full h-full object-cover rounded-full profile-image"
                  />
                </div>
              </div>

              {/* Rotating Surrounding Profiles */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-[350px] h-80 rotating-container">
                  {surroundingImages.map((profile, index) => {
                    const angle = (index * 45) * (Math.PI / 180) // 45 degrees apart
                    const radius = 180
                    const x = Math.cos(angle) * radius
                    const y = Math.sin(angle) * radius

                    return (
                      <div
                        key={profile.id}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 profile-container"
                        style={{
                          '--x': `${x}px`,
                          '--y': `${y}px`
                        } as React.CSSProperties}
                      >
                        <div className={`w-16 h-16 rounded-full border-3 ${profile.borderColor} overflow-hidden shadow-md bg-white p-0.5`}>
                          <img
                            src={profile.image}
                            alt={profile.name}
                            className="w-full h-full object-cover rounded-full profile-image"
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

           
          </div>
            <Link
            href="/instagram-auth"
            className="inline-flex items-center px-8 py-4  bg-gradient-to-r from-gray-800/90 to-gray-700/90 text-white font-semibold rounded-xl hover:from-gray-700/90 hover:to-gray-600/90 transition-all duration-200 shadow-2xl hover:shadow-2xl transform hover:-translate-y-0.5 border border-gray-600/50 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-400/10 to-gray-500/5 rounded-xl"></div>
            <div className="absolute top-1 right-2 w-8 h-8 bg-gray-400/20 rounded-full blur-lg"></div>
            <div className="absolute bottom-1 left-2 w-6 h-6 bg-gray-300/15 rounded-full blur-md"></div>
            <span className="relative z-10">Start Analyze</span>
           
          </Link>
          
          {/* App Store and Play Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 mb-6">
            <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800/90 to-gray-700/90 text-white font-medium rounded-xl hover:from-gray-700/90 hover:to-gray-600/90 transition-all duration-200 shadow-2xl hover:shadow-2xl border border-gray-600/50 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400/10 to-gray-500/5 rounded-xl"></div>
              <div className="absolute top-1 right-1 w-6 h-6 bg-gray-400/20 rounded-full blur-md"></div>
              <div className="absolute bottom-1 left-1 w-4 h-4 bg-gray-300/15 rounded-full blur-sm"></div>
              <div className="flex items-center space-x-2 relative z-10">
                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                   {/* Blue shape - top horizontal bar with curved bottom */}
                   <path d="M2 2h14v4H8c-1.1 0-2-.9-2-2V2z M8 6h8v2H8V6z" fill="#3B82F6"/>
                   
                   {/* Green shape - left side with large curved cutout */}
                   <path d="M2 8h6c1.1 0 2 .9 2 2v2H2V8z M2 12h8v8H2v-8z M4 10c0-1.1.9-2 2-2s2 .9 2 2v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4z" fill="#10B981"/>
                   
                   {/* Red shape - right side with rounded protrusion */}
                   <path d="M16 2h6v4h-4c-1.1 0-2-.9-2-2V2z M18 6h4v4h-4V6z M20 10c0 1.1.9 2 2 2v-2h-2z M16 10h4v8h-4v-8z" fill="#EF4444"/>
                   
                   {/* Yellow shape - bottom L-shape */}
                   <path d="M8 16h8v2H8v-2z M8 18h6v4H8v-4z" fill="#F59E0B"/>
                </svg>
                <div className="text-left">
                   <div className="text-sm font-semibold">get extension</div>
                </div>
              </div>
            </button>
            
            <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800/90 to-gray-700/90 text-white font-medium rounded-xl hover:from-gray-700/90 hover:to-gray-600/90 transition-all duration-200 shadow-2xl hover:shadow-2xl border border-gray-600/50 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400/10 to-gray-500/5 rounded-xl"></div>
              <div className="absolute top-1 right-1 w-6 h-6 bg-gray-400/20 rounded-full blur-md"></div>
              <div className="absolute bottom-1 left-1 w-4 h-4 bg-gray-300/15 rounded-full blur-sm"></div>
              <div className="flex items-center space-x-2 relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" focusable="false" role="img"><title></title><path fill="#EA4335" d="M11.278 11.462 1.185 22.006A2.725 2.725 0 0 0 3.818 24c.504 0 .978-.134 1.383-.37l.032-.018 11.362-6.452z"></path><path fill="#FBBC04" d="m21.489 9.667-.01-.007-4.905-2.8-5.526 4.841 5.547 5.46 4.877-2.774a2.676 2.676 0 0 0 1.437-2.365c0-1.017-.573-1.9-1.42-2.355"></path><path fill="#4285F4" d="M1.184 1.994c-.061.22-.093.45-.093.69v18.632c.01.267.033.47.094.69l10.44-10.275z"></path><path fill="#34A853" d="m11.352 12 5.222-5.14L5.228.385A2.764 2.764 0 0 0 3.818 0a2.72 2.72 0 0 0-2.634 1.99l-.001.003z"></path></svg>
                <div className="text-left">
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </div>
            </button>
            </div>
          </div>
        </div>

        {/* Track People Section */}
        <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-600/50 backdrop-blur-sm relative overflow-hidden">
          {/* Subtle ink effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 via-transparent to-gray-500/5 rounded-2xl"></div>
          <div className="absolute top-4 right-4 w-32 h-32 bg-gray-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-gray-300/15 rounded-full blur-xl"></div>
          <div className="text-center relative z-10">
            <h3 className="text-3xl font-bold text-white mb-6">
              Track People on Instagram
            </h3>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Analyze Instagram profiles, followers, and insights with just one click. 
              Get detailed analytics about engagement, growth patterns, and audience demographics.
            </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
       
          <Link
            href="/instructions"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800/90 to-gray-700/90 text-white font-medium rounded-xl hover:from-gray-700/90 hover:to-gray-600/90 transition-all duration-200 shadow-2xl hover:shadow-2xl border border-gray-600/50 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-400/10 to-gray-500/5 rounded-xl"></div>
            <div className="absolute top-1 right-1 w-6 h-6 bg-gray-400/20 rounded-full blur-md"></div>
            <div className="absolute bottom-1 left-1 w-4 h-4 bg-gray-300/15 rounded-full blur-sm"></div>
            <span className="relative z-10">How it works?</span>
          </Link>
        </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 shadow-2xl border border-gray-600/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 via-transparent to-gray-500/5 rounded-2xl"></div>
            <div className="relative z-10">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white-900 mb-2">Analytics</h4>
            <ul className="text-sm text-gray-300 space-y-1 text-center">
              <li>• Follower growth tracking</li>
              <li>• Engagement rate analysis</li>
              <li>• Post performance metrics</li>
              <li>• Audience demographics</li>
              <li>• Best posting times</li>
              <li>• Hashtag effectiveness</li>
            </ul>
            </div>
          </div>
          
          <div className="text-center p-6 relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 shadow-2xl border border-gray-600/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 via-transparent to-gray-500/5 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white-900 mb-2">Real-time</h4>
              <ul className="text-sm text-gray-300 space-y-1 text-center">
                <li>• Live follower updates</li>
                <li>• Instant notifications</li>
                <li>• Real-time story views</li>
                <li>• Immediate data refresh</li>
                <li>• Live engagement tracking</li>
                <li>• Up-to-the-minute insights</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center p-6 relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 shadow-2xl border border-gray-600/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 via-transparent to-gray-500/5 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white-900 mb-2">Secure</h4>
              <ul className="text-sm text-gray-300 space-y-1 text-center">
                <li>• End-to-end encryption</li>
                <li>• No password storage</li>
                <li>• Privacy protection</li>
                <li>• Secure data handling</li>
                <li>• GDPR compliant</li>
                <li>• Enterprise-grade security</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Sponsors Section */}
      <section className="bg-black/50 backdrop-blur-sm py-8 overflow-hidden border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Scrolling Animation Container */}
          <div className="relative">
            <div className="flex animate-scroll space-x-12 items-center opacity-70">
              {/* First set of media logos */}
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="text-gray-300 font-serif text-lg tracking-wide">
                  Rolling Stone
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="text-gray-300 font-bold text-lg">
                  LA STAMPA
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="text-gray-300 font-bold text-lg tracking-wider">
                  WIRED
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="bg-gray-800 text-white px-3 py-1 font-bold text-sm">
                  ANSA
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="text-gray-300 font-serif text-sm leading-tight">
                  CORRIERE<br />DELLA SERA
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center">
                  <div className="text-gray-300 font-bold text-xs leading-tight">
                    DEE<br />JAY
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="text-gray-600 font-serif text-lg">
                  Forbes
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center">
                  <div className="text-gray-300 font-bold text-xs">
                    LEIENE
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="text-gray-300 font-serif text-sm">
                  la Repubblica
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="text-gray-300 font-serif text-lg tracking-wide">
                  Rolling Stone
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="text-gray-300 font-bold text-lg">
                  LA STAMPA
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="text-gray-300 font-bold text-lg tracking-wider">
                  WIRED
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="bg-gray-800 text-white px-3 py-1 font-bold text-sm">
                  ANSA
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="text-gray-300 font-serif text-sm leading-tight">
                  CORRIERE<br />DELLA SERA
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center">
                  <div className="text-gray-300 font-bold text-xs leading-tight">
                    DEE<br />JAY
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="text-gray-600 font-serif text-lg">
                  Forbes
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center">
                  <div className="text-gray-300 font-bold text-xs">
                    LEIENE
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="text-gray-300 font-serif text-sm">
                  la Repubblica
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="border-t border-gray-200 relative"
        style={{
          backgroundImage: 'url(https://cdn-public.notjustanalytics.com/homepage/background.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-white">
            <p>&copy; 2024 Instalker . All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
