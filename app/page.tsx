'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

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
  
  // Ref for the button element to scroll to
  const buttonRef = useRef<HTMLDivElement>(null)
  
  // Function to scroll to the button
  const scrollToButton = () => {
    if (buttonRef.current) {
      buttonRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Instalker</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Rotating Images Section */}
        <div 
          className="text-center mb-16 relative overflow-hidden rounded-2xl min-h-[500px] cursor-pointer"
          style={{
            backgroundImage: 'url("https://cdn-public.notjustanalytics.com/homepage/background.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#f3f4f6'
          }}
          onClick={scrollToButton}
        >
          <div 
            className="relative z-10 py-16 px-8"
            style={{
              backgroundImage: 'url("https://cdn-public.notjustanalytics.com/homepage/background.webp")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Connect with Your Network
            </h2>
            
            {/* Profile Images Network */}
            <div className="relative w-96 h-96 mx-auto mb-8">
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
                <div className="relative w-80 h-80 rotating-container">
                  {surroundingImages.map((profile, index) => {
                    const angle = (index * 45) * (Math.PI / 180) // 45 degrees apart
                    const radius = 140
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

            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover connections and insights across your social network
            </p>
          </div>
        </div>

        {/* Track People Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Track People on Instagram
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Analyze Instagram profiles, followers, and insights with just one click. 
              Get detailed analytics about engagement, growth patterns, and audience demographics.
            </p>
                    <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/instagram-auth"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Start Analyze
            <ChevronRightIcon className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/instructions"
            className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-all duration-200"
          >
            How it works?
          </Link>
        </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Analytics</h4>
            <p className="text-gray-600">Comprehensive insights into follower growth and engagement patterns</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Real-time</h4>
            <p className="text-gray-600">Get instant updates on profile changes and activity</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Secure</h4>
            <p className="text-gray-600">Your data is protected with enterprise-grade security</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 Instalker . All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
