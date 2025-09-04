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

  // Feature arrays
  const allFeatures = [
    { emoji: "🔍", text: "See Who Checks Your Profile – Spot secret visitors instantly." },
    { emoji: "🕵️", text: "Watch Stories in Secret Mode – No one knows you watched." },
    { emoji: "💾", text: "Save Instagram Stories – Download in HD, keep forever." },
    { emoji: "🚫", text: "Who Blocked You? – Find out who closed the door on you." },
    { emoji: "➕", text: "New Followers Alert – Get updates on fresh followers." },
    { emoji: "➖", text: "Lost Followers Alert – Know who unfollowed you right away." },
    { emoji: "❌", text: "Who Doesn't Follow Back – Detect one-sided follows." },
    { emoji: "🙋", text: "Whom You Forgot to Follow Back – Fix missed connections." },
    { emoji: "📊", text: "Smart Analytics – Clean and simple insights of your IG." },
    { emoji: "⚡", text: "Fast & Lightweight – No slowdowns, just quick results." },
    { emoji: "🔍", text: "Deep Profile Analysis – Understand your audience better." },
    { emoji: "📱", text: "Mobile Optimized – Works perfectly on all devices." },
    { emoji: "🔒", text: "We Never Save Personal Data – Your privacy is 100% safe." },
    { emoji: "🛡️", text: "We Do Not Store Your Password – Your login stays yours." },
    { emoji: "🌍", text: "Global & Easy to Use – Works anywhere, simple for everyone." },
    { emoji: "🎯", text: "Accurate Insights – Get real, useful account reports." },
    { emoji: "🤫", text: "Stay Invisible – Explore without being noticed." },
    { emoji: "📈", text: "Track Growth Daily – See your progress in real-time." },
    { emoji: "🎁", text: "Share Results Easily – One click to show friends." },
    { emoji: "🧩", text: "All-in-One Tool – Profile views, blocks, stories, followers – all here." },
    { emoji: "🌟", text: "No Extra Permissions – We only use what's needed, nothing more." },
    { emoji: "❤️", text: "Made for Your Safety – Your account, your control, your freedom." },
    { emoji: "💎", text: "Premium Features – Advanced tools for power users." },
    { emoji: "🚀", text: "Instant Results – Get insights in seconds, not minutes." },
    { emoji: "🎨", text: "Beautiful Reports – Stunning visualizations of your data." },
    { emoji: "🔔", text: "Real-time Notifications – Never miss important updates." },
    { emoji: "📊", text: "Historical Data – Track changes over time." },
    { emoji: "🎪", text: "Fun & Interactive – Make analytics enjoyable to use." },
    { emoji: "📸", text: "Story Viewers Tracker – See who viewed your stories." },
    { emoji: "👥", text: "Mutual Followers Finder – Discover common connections." },
    { emoji: "📅", text: "Posting Time Optimizer – Find best times to post." },
    { emoji: "🏷️", text: "Hashtag Performance – Track which hashtags work best." },
    { emoji: "💬", text: "Comment Sentiment Analysis – Understand audience mood." },
    { emoji: "📊", text: "Engagement Rate Calculator – Measure your content success." },
    { emoji: "🎯", text: "Target Audience Insights – Know your followers better." },
    { emoji: "📈", text: "Follower Growth Predictions – Forecast your growth." },
    { emoji: "🔍", text: "Competitor Analysis – Compare with similar accounts." },
    { emoji: "📱", text: "Cross-Platform Sync – Works with multiple accounts." },
    { emoji: "🎨", text: "Content Performance Score – Rate your posts quality." },
    { emoji: "📊", text: "Reach & Impressions Tracker – Monitor your visibility." },
    { emoji: "💡", text: "Content Suggestions – Get ideas for better posts." },
    { emoji: "🔄", text: "Auto-Refresh Data – Always up-to-date information." },
    { emoji: "📋", text: "Export Reports – Download your analytics data." },
    { emoji: "🎭", text: "Fake Follower Detector – Identify bot accounts." },
    { emoji: "⏰", text: "Best Time to Post – Optimize your posting schedule." },
    { emoji: "📊", text: "Story Completion Rate – Track story engagement." },
    { emoji: "🎯", text: "Audience Demographics – Age, location, interests data." }
  ]

  // State for current group and line indices
  const [leftCurrentGroup, setLeftCurrentGroup] = useState(0)
  const [rightCurrentGroup, setRightCurrentGroup] = useState(0)
  const [leftCurrentLine, setLeftCurrentLine] = useState(0)
  const [rightCurrentLine, setRightCurrentLine] = useState(0)
  const [leftIsDestroying, setLeftIsDestroying] = useState(false)
  const [rightIsDestroying, setRightIsDestroying] = useState(false)
  const [leftTitleVisible, setLeftTitleVisible] = useState(false)
  const [rightTitleVisible, setRightTitleVisible] = useState(false)

  // Auto-rotate features with staggered timing - 5 points at a time
  useEffect(() => {
    // Show titles after a short delay
    const showTitles = () => {
      setLeftTitleVisible(false)
      setRightTitleVisible(false)
      setTimeout(() => {
        setLeftTitleVisible(true)
        setRightTitleVisible(true)
      }, 100)
    }
    
    // Initial show
    showTitles()
    
    // Repeat every 3 seconds
    const titleInterval = setInterval(showTitles, 3000)

    const leftInterval = setInterval(() => {
      setLeftCurrentLine((prev) => {
        if (prev < 4) {
          // Show next line (0, 1, 2, 3, 4 = 5 lines total)
          return prev + 1
        } else {
          // All 5 lines shown, wait 3 seconds then destroy
          setTimeout(() => {
            setLeftIsDestroying(true)
            setTimeout(() => {
              setLeftIsDestroying(false)
              setLeftCurrentGroup((group) => (group + 1) % 10) // 10 groups total
              setLeftCurrentLine(0)
            }, 1000)
          }, 3000) // Wait 3 seconds before destroying
          return prev
        }
      })
    }, 1000)

    const rightInterval = setInterval(() => {
      setRightCurrentLine((prev) => {
        if (prev < 4) {
          // Show next line (0, 1, 2, 3, 4 = 5 lines total)
          return prev + 1
        } else {
          // All 5 lines shown, wait 3 seconds then destroy
          setTimeout(() => {
            setRightIsDestroying(true)
            setTimeout(() => {
              setRightIsDestroying(false)
              setRightCurrentGroup((group) => (group + 1) % 10) // 10 groups total
              setRightCurrentLine(0)
            }, 1000)
          }, 3000) // Wait 3 seconds before destroying
          return prev
        }
      })
    }, 1000)

    return () => {
      clearInterval(leftInterval)
      clearInterval(rightInterval)
      clearInterval(titleInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header 
        className="shadow-sm relative overflow-hidden"
        style={{
          backgroundImage: 'url("https://cdn-public.notjustanalytics.com/homepage/background.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
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
      <main className="max-w-4x1 mx-auto py-12 ml-20 mr-20">
        {/* Grid Layout with Three Sections */}
        <div className="grid grid-cols-4 gap-4 mb-16">
          {/* Left Grid Section */}
          <div className="text-center relative rounded-2xl min-h-[250px] bg-transparent col-span-1">
            <div className="py-16 px-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex justify-center">
                {leftTitleVisible ? (
                  <span className="flex">
                    {"Features".split('').map((char, index) => (
                      <span
                        key={index}
                        className="inline-block animate-fadeInUp"
                        style={{
                          animationDelay: `${index * 0.1}s`,
                          animationFillMode: 'both'
                        }}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                ) : (
                  "Features"
                )}
              </h3>
              <div className="relative h-[28rem] overflow-hidden">
                <div className="space-y-6">
                  {allFeatures.slice(leftCurrentGroup * 5, (leftCurrentGroup * 5) + 5).map((feature, index) => {
                    const isVisible = index <= leftCurrentLine
                    const isDestroying = leftIsDestroying && isVisible
                    
                    return (
                      <div 
                        key={`left-${leftCurrentGroup}-${index}`}
                        className={`transition-all duration-500 ${
                          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <span>
                            {isDestroying ? (
                              <span 
                                className="inline-block animate-letter-blast"
                                style={{
                                  '--blast-x': `${(Math.random() - 0.5) * 800}px`,
                                  '--blast-y': `${-Math.random() * 400 - 200}px`
                                } as React.CSSProperties}
                              >
                                {feature.emoji}
                              </span>
                            ) : (
                              feature.emoji
                            )}
                          </span>
                          <p className="text-sm text-gray-800 leading-relaxed font-semibold tracking-wide feature-text feature-highlight flex-1">
                            {isDestroying ? (
                              <span className="inline-block">
                                {feature.text.split('').map((char, charIndex) => {
                                  const blastX = (Math.random() - 0.5) * 800
                                  const blastY = -Math.random() * 400 - 200
                                  
                                  return (
                                    <span
                                      key={charIndex}
                                      className="inline-block animate-letter-blast"
                                      style={{
                                        '--blast-x': `${blastX}px`,
                                        '--blast-y': `${blastY}px`
                                      } as React.CSSProperties}
                                    >
                                      {char}
                                    </span>
                                  )
                                })}
                              </span>
                            ) : (
                              feature.text
                            )}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Center Section - Rotating Images */}
          <div 
            className="text-center relative overflow-hidden rounded-2xl min-h-[500px] col-span-2"
          style={{
            backgroundImage: 'url("https://cdn-public.notjustanalytics.com/homepage/background.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#f3f4f6'
          }}
        >
         <h2 className="text-2xl md:text-4xl font-bold text-white mt-3">
              Connect with Your Network
            </h2>
          <div 
            ref={focusRef}
            className="relative z-10 py-16 px-8 "
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
            className="inline-flex items-center px-8 py-4 mb-5 bg-black from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Start Analyze
            <ChevronRightIcon className="ml-2 h-5 w-5" />
          </Link>
          </div>

          {/* Right Grid Section */}
          <div className="text-center relative rounded-2xl min-h-[250px] bg-transparent col-span-1">
            <div className="py-16 px-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex justify-center">
                {rightTitleVisible ? (
                  <span className="flex">
                    {"Benefits".split('').map((char, index) => (
                      <span
                        key={index}
                        className="inline-block animate-fadeInUp"
                        style={{
                          animationDelay: `${index * 0.1}s`,
                          animationFillMode: 'both'
                        }}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                ) : (
                  "Benefits"
                )}
              </h3>
              <div className="relative h-[28rem] overflow-hidden">
                <div className="space-y-6">
                  {allFeatures.slice(24 + rightCurrentGroup * 5, 24 + (rightCurrentGroup * 5) + 5).map((feature, index) => {
                    const isVisible = index <= rightCurrentLine
                    const isDestroying = rightIsDestroying && isVisible
                    
                    return (
                      <div 
                        key={`right-${rightCurrentGroup}-${index}`}
                        className={`transition-all duration-500 ${
                          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <span>
                            {isDestroying ? (
                              <span 
                                className="inline-block animate-letter-blast"
                                style={{
                                  '--blast-x': `${(Math.random() - 0.5) * 800}px`,
                                  '--blast-y': `${-Math.random() * 400 - 200}px`
                                } as React.CSSProperties}
                              >
                                {feature.emoji}
                              </span>
                            ) : (
                              feature.emoji
                            )}
                          </span>
                          <p className="text-sm text-gray-800 leading-relaxed font-semibold tracking-wide feature-text feature-highlight flex-1">
                            {isDestroying ? (
                              <span className="inline-block">
                                {feature.text.split('').map((char, charIndex) => {
                                  const blastX = (Math.random() - 0.5) * 800
                                  const blastY = -Math.random() * 400 - 200
                                  
                                  return (
                                    <span
                                      key={charIndex}
                                      className="inline-block animate-letter-blast"
                                      style={{
                                        '--blast-x': `${blastX}px`,
                                        '--blast-y': `${blastY}px`
                                      } as React.CSSProperties}
                                    >
                                      {char}
                                    </span>
                                  )
                                })}
                              </span>
                            ) : (
                              feature.text
                            )}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
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
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
       
          <Link
            href="/instructions"
            className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-all duration-200"
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

      {/* Sponsors Section */}
      <section className="bg-white py-8 overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Scrolling Animation Container */}
          <div className="relative">
            <div className="flex animate-scroll space-x-12 items-center opacity-70">
              {/* First set of media logos */}
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="text-gray-600 font-serif text-lg tracking-wide">
                  Rolling Stone
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="text-gray-600 font-bold text-lg">
                  LA STAMPA
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="text-gray-600 font-bold text-lg tracking-wider">
                  WIRED
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="bg-gray-800 text-white px-3 py-1 font-bold text-sm">
                  ANSA
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="text-gray-600 font-serif text-sm leading-tight">
                  CORRIERE<br />DELLA SERA
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center">
                  <div className="text-gray-600 font-bold text-xs leading-tight">
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
                <div className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center">
                  <div className="text-gray-600 font-bold text-xs">
                    LEIENE
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="text-gray-600 font-serif text-sm">
                  la Repubblica
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="text-gray-600 font-serif text-lg tracking-wide">
                  Rolling Stone
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="text-gray-600 font-bold text-lg">
                  LA STAMPA
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="text-gray-600 font-bold text-lg tracking-wider">
                  WIRED
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="bg-gray-800 text-white px-3 py-1 font-bold text-sm">
                  ANSA
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="text-gray-600 font-serif text-sm leading-tight">
                  CORRIERE<br />DELLA SERA
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center">
                  <div className="text-gray-600 font-bold text-xs leading-tight">
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
                <div className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center">
                  <div className="text-gray-600 font-bold text-xs">
                    LEIENE
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-shrink-0">
                <div className="text-gray-600 font-serif text-sm">
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
