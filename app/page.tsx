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

  // Review modal state
  const [showReviewModal, setShowReviewModal] = useState(false)
  const [reviewText, setReviewText] = useState('')
  const [rating, setRating] = useState(0)
  const [userName, setUserName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [reviews, setReviews] = useState([])
  const [hasSubmittedReview, setHasSubmittedReview] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  // Fetch reviews from database
  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews')
      if (response.ok) {
        const data = await response.json()
        setReviews(data.reviews || [])
      }
    } catch (error) {
      console.error('Error fetching reviews:', error)
    }
  }

  // Check if user has already submitted a review
  const checkReviewStatus = () => {
    const hasReview = localStorage.getItem('instalker-review-submitted')
    setHasSubmittedReview(hasReview === 'true')
  }

  // Load reviews and check status on component mount
  useEffect(() => {
    fetchReviews()
    checkReviewStatus()
  }, [])

  // Handle review submission
  const handleSubmitReview = async () => {
    if (!userName.trim()) {
      alert('Please enter your name.')
      return
    }

    if (reviewText.length > 100) {
      alert('Review must be 100 characters or less.')
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: userName,
          rating: rating,
          review: reviewText,
        }),
      })

      if (response.ok) {
        // Save to localStorage to prevent duplicate submissions
        localStorage.setItem('instalker-review-submitted', 'true')
        setHasSubmittedReview(true)
        
        // Show success message
        setShowSuccessMessage(true)
        setTimeout(() => setShowSuccessMessage(false), 3000) // Hide after 3 seconds
        
        setShowReviewModal(false)
        setReviewText('')
        setRating(0)
        setUserName('')
        
        // Refresh reviews to show the new one
        await fetchReviews()
      } else {
        alert('Failed to submit review. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting review:', error)
      alert('Failed to submit review. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

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

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="relative z-30 max-w-8xl mx-auto px-4 pt-4">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-300 text-sm font-medium rounded-lg border border-green-500/30 backdrop-blur-sm">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Review added successfully!
          </div>
        </div>
      )}

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
            className="inline-flex items-center px-8 py-4  bg-gradient-to-r from-red-800/20 to-red-700/10 text-white font-semibold rounded-xl hover:from-red-700/30 hover:to-red-600/20 transition-all duration-200 shadow-2xl hover:shadow-2xl transform hover:-translate-y-0.5 border border-red-600/50 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-500/10 rounded-xl"></div>
            <div className="absolute top-1 right-2 w-8 h-8 bg-gray-400/20 rounded-full blur-lg"></div>
            <div className="absolute bottom-1 left-2 w-6 h-6 bg-gray-300/15 rounded-full blur-md"></div>
            <span className="relative z-10">Start Now</span>
           
          </Link>
          
          {/* App Store and Play Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 mb-6">
            <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800/90 to-gray-700/90 text-white font-medium rounded-xl hover:from-gray-700/90 hover:to-gray-600/90 transition-all duration-200 shadow-2xl hover:shadow-2xl border border-gray-600/50 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400/10 to-gray-500/5 rounded-xl"></div>
              <div className="absolute top-1 right-1 w-6 h-6 bg-gray-400/20 rounded-full blur-md"></div>
              <div className="absolute bottom-1 left-1 w-4 h-4 bg-gray-300/15 rounded-full blur-sm"></div>
              <div className="flex items-center space-x-2 relative z-10">

    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
    <path d="M 11.5 0 C 10.119 0 9 1.119 9 2.5 L 9 4 L 5 4 C 3.895 4 3 4.895 3 6 L 3 9 C 3 9.552 3.448 10 4 10 L 4.3574219 10 C 5.6654219 10 6.8553281 10.941188 6.9863281 12.242188 C 7.1363281 13.739187 5.966 15 4.5 15 L 4 15 C 3.448 15 3 15.448 3 16 L 3 19 C 3 20.105 3.895 21 5 21 L 8 21 C 8.552 21 9 20.552 9 20 L 9 19.642578 C 9 18.334578 9.9411875 17.144672 11.242188 17.013672 C 12.739187 16.863672 14 18.034 14 19.5 L 14 20 C 14 20.552 14.448 21 15 21 L 18 21 C 19.105 21 20 20.105 20 19 L 20 15 L 21.5 15 C 22.881 15 24 13.881 24 12.5 C 24 11.119 22.881 10 21.5 10 L 20 10 L 20 6 C 20 4.895 19.105 4 18 4 L 14 4 L 14 2.5 C 14 1.119 12.881 0 11.5 0 z"></path>
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

        {/* Reviews Section */}
        <div className="mt-20 bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 rounded-2xl shadow-2xl p-8 md:p-12 max-w-6xl mx-auto border border-gray-600/50 backdrop-blur-sm relative overflow-hidden">
          {/* Subtle ink effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 via-transparent to-gray-500/5 rounded-2xl"></div>
          <div className="absolute top-4 right-4 w-32 h-32 bg-gray-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-gray-300/15 rounded-full blur-xl"></div>
          
          <div className="text-center relative z-10 mb-12">
            <h3 className="text-3xl font-bold text-white mb-6">
              What People Say About Us
            </h3>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Real reviews from real users who trust our platform
            </p>
          </div>

          {/* Reviews Carousel */}
          <div className="relative overflow-hidden mb-8">
            <div className="flex animate-scroll-reviews space-x-6">
              {/* Real Review Cards */}
              {reviews.length > 0 ? (
                reviews.map((review, index) => {
                  const colors = [
                    'from-blue-500 to-purple-600',
                    'from-green-500 to-teal-600',
                    'from-pink-500 to-rose-600',
                    'from-orange-500 to-red-600',
                    'from-indigo-500 to-blue-600',
                    'from-yellow-500 to-orange-600',
                    'from-purple-500 to-pink-600',
                    'from-cyan-500 to-blue-600'
                  ]
                  const colorClass = colors[index % colors.length]
                  const firstLetter = review.name ? review.name.charAt(0).toUpperCase() : 'U'
                  
                  return (
                    <div key={review._id || index} className="flex-shrink-0 w-80 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-6 border border-gray-600/30 backdrop-blur-sm">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${colorClass} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                          {firstLetter}
                        </div>
                        <div className="ml-4">
                          <h4 className="text-white font-semibold">{review.name}</h4>
                          <div className="flex text-yellow-400">
                            {'★'.repeat(review.rating)}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-200 text-sm leading-relaxed">
                        "{review.review}"
                      </p>
                    </div>
                  )
                })
              ) : (
                // Fallback dummy reviews when no real reviews exist
                <>
                  <div className="flex-shrink-0 w-80 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-6 border border-gray-600/30 backdrop-blur-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        A
                      </div>
                      <div className="ml-4">
                        <h4 className="text-white font-semibold">Alex Johnson</h4>
                        <div className="flex text-yellow-400">
                          {'★'.repeat(5)}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      "This tool is absolutely amazing! I can track my Instagram analytics in real-time and the insights are incredibly detailed. Highly recommended!"
                    </p>
                  </div>

                  <div className="flex-shrink-0 w-80 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-6 border border-gray-600/30 backdrop-blur-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        S
                      </div>
                      <div className="ml-4">
                        <h4 className="text-white font-semibold">Sarah Wilson</h4>
                        <div className="flex text-yellow-400">
                          {'★'.repeat(5)}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      "The best Instagram analytics tool I've ever used. The interface is clean and the data is always accurate. Love it!"
                    </p>
                  </div>

                  <div className="flex-shrink-0 w-80 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-6 border border-gray-600/30 backdrop-blur-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        M
                      </div>
                      <div className="ml-4">
                        <h4 className="text-white font-semibold">Mike Chen</h4>
                        <div className="flex text-yellow-400">
                          {'★'.repeat(4)}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      "Great tool for understanding my audience better. The follower tracking feature is particularly useful for my business."
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Add Review Button */}
          <div className="text-center">
            {hasSubmittedReview ? (
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-800/20 to-green-700/10 text-white font-semibold rounded-xl border border-green-600/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/10 rounded-xl"></div>
                <div className="absolute top-1 right-2 w-8 h-8 bg-green-400/20 rounded-full blur-lg"></div>
                <div className="absolute bottom-1 left-2 w-6 h-6 bg-green-300/15 rounded-full blur-md"></div>
                <span className="relative z-10">✓ Review Already Added</span>
              </div>
            ) : (
              <button 
                onClick={() => setShowReviewModal(true)}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-800/20 to-red-700/10 text-white font-semibold rounded-xl hover:from-red-700/30 hover:to-red-600/20 transition-all duration-200 shadow-2xl hover:shadow-2xl transform hover:-translate-y-0.5 border border-red-600/50 backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-500/10 rounded-xl"></div>
                <div className="absolute top-1 right-2 w-8 h-8 bg-red-400/20 rounded-full blur-lg"></div>
                <div className="absolute bottom-1 left-2 w-6 h-6 bg-red-300/15 rounded-full blur-md"></div>
                <span className="relative z-10">Add Your Review</span>
              </button>
            )}
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

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-gray-800/95 via-gray-700/90 to-gray-900/95 rounded-2xl shadow-2xl p-8 max-w-md w-full border border-gray-600/50 backdrop-blur-sm relative overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Add Your Review</h3>
              <button
                onClick={() => setShowReviewModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Star Rating */}
            <div className="mb-6">
              <label className="block text-white font-medium mb-2">Rating</label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className={`text-2xl transition-colors ${
                      star <= rating ? 'text-yellow-400' : 'text-gray-400'
                    } hover:text-yellow-400`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            {/* Name Input */}
            <div className="mb-6">
              <label className="block text-white font-medium mb-2">Name</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent"
                required
              />
            </div>

            {/* Review Text */}
            <div className="mb-6">
              <label className="block text-white font-medium mb-2">Your Review (100 characters max)</label>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Share your experience with us..."
                rows={4}
                maxLength={100}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent resize-none"
                required
              />
              <div className="text-right text-sm text-gray-400 mt-1">
                {reviewText.length}/100 characters
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmitReview}
              disabled={isSubmitting || rating === 0 || !reviewText.trim() || !userName.trim()}
              className="w-full py-3 bg-gradient-to-r from-red-800/20 to-red-700/10 text-white font-semibold rounded-xl hover:from-red-700/30 hover:to-red-600/20 transition-all duration-200 shadow-2xl hover:shadow-2xl transform hover:-translate-y-0.5 border border-red-600/50 backdrop-blur-sm relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-500/10 rounded-xl"></div>
              <span className="relative z-10">
                {isSubmitting ? 'Submitting...' : 'Submit Review'}
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
