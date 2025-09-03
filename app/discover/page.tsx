'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { 
  MagnifyingGlassIcon,
  UserIcon,
  ChartBarIcon,
  HomeIcon,
  HeartIcon,
  UserGroupIcon,
  EyeIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'

export default function DiscoverPage() {
  const profiles = [
    {
      id: 1,
      name: 'Sarah Johnson',
      username: '@sarah_j',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
      followers: '12.5K',
      following: '1.2K',
      posts: '245',
      isVerified: true,
      isPrivate: false
    },
    {
      id: 2,
      name: 'Mike Chen',
      username: '@mike_chen',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      followers: '8.9K',
      following: '890',
      posts: '156',
      isVerified: false,
      isPrivate: true
    },
    {
      id: 3,
      name: 'Emma Davis',
      username: '@emma_davis',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      followers: '25.3K',
      following: '2.1K',
      posts: '432',
      isVerified: true,
      isPrivate: false
    },
    {
      id: 4,
      name: 'David Brown',
      username: '@david_brown',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      followers: '5.7K',
      following: '567',
      posts: '89',
      isVerified: false,
      isPrivate: false
    },
    {
      id: 5,
      name: 'Lisa Garcia',
      username: '@lisa_garcia',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      followers: '18.2K',
      following: '1.8K',
      posts: '298',
      isVerified: true,
      isPrivate: false
    },
    {
      id: 6,
      name: 'Tom Wilson',
      username: '@tom_wilson',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
      followers: '7.4K',
      following: '743',
      posts: '167',
      isVerified: false,
      isPrivate: true
    }
  ]

  // State for popup and story viewer
  const [showPopup, setShowPopup] = useState(false)
  const [selectedProfile, setSelectedProfile] = useState(null)
  const [isStoryOpen, setIsStoryOpen] = useState(false)
  const [currentUserIndex, setCurrentUserIndex] = useState(0)
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef(null)
  const intervalRef = useRef(null)

  // Story data for each profile
  const storyUsers = profiles.map(profile => ({
    id: profile.id,
    name: profile.name,
    username: profile.username,
    image: profile.image,
    stories: [
      {
        id: 1,
        image: `https://images.unsplash.com/photo-${1500000000000 + profile.id * 1000000}?w=400&h=600&fit=crop`,
        timestamp: '2h ago'
      },
      {
        id: 2,
        image: `https://images.unsplash.com/photo-${1500000000000 + profile.id * 1000000 + 100000}?w=400&h=600&fit=crop`,
        timestamp: '1h ago'
      },
      {
        id: 3,
        image: `https://images.unsplash.com/photo-${1500000000000 + profile.id * 1000000 + 200000}?w=400&h=600&fit=crop`,
        timestamp: '30m ago'
      }
    ]
  }))

  // Popup functions
  const handleProfileClick = (profile) => {
    setSelectedProfile(profile)
    setShowPopup(true)
  }

  const handlePopupYes = () => {
    setShowPopup(false)
    const userIndex = storyUsers.findIndex(user => user.id === selectedProfile.id)
    setCurrentUserIndex(userIndex)
    setCurrentStoryIndex(0)
    setProgress(0)
    setIsStoryOpen(true)
  }

  const handlePopupNo = () => {
    setShowPopup(false)
    setSelectedProfile(null)
  }

  // Story viewer functions
  const closeStory = () => {
    setIsStoryOpen(false)
    setCurrentUserIndex(0)
    setCurrentStoryIndex(0)
    setProgress(0)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const nextStory = () => {
    const currentUser = storyUsers[currentUserIndex]
    if (currentStoryIndex < currentUser.stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1)
      setProgress(0)
    } else if (currentUserIndex < storyUsers.length - 1) {
      setCurrentUserIndex(currentUserIndex + 1)
      setCurrentStoryIndex(0)
      setProgress(0)
    } else {
      closeStory()
    }
  }

  const previousStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1)
      setProgress(0)
    } else if (currentUserIndex > 0) {
      setCurrentUserIndex(currentUserIndex - 1)
      const prevUser = storyUsers[currentUserIndex - 1]
      setCurrentStoryIndex(prevUser.stories.length - 1)
      setProgress(0)
    }
  }

  const handleSwipe = (direction) => {
    if (direction === 'left') {
      nextStory()
    } else if (direction === 'right') {
      previousStory()
    }
  }

  const handleTap = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const width = rect.width
    
    if (x < width / 2) {
      previousStory()
    } else {
      nextStory()
    }
  }

  // Auto-play stories
  useEffect(() => {
    if (isStoryOpen) {
      intervalRef.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            nextStory()
            return 0
          }
          return prev + 2
        })
      }, 100)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isStoryOpen, currentUserIndex, currentStoryIndex])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header 
        className="shadow-sm border-b border-gray-200 relative overflow-hidden"
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
              <Link href="/" className="text-2xl font-bold text-white">Instalker</Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/home" className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors">
                <HomeIcon className="h-5 w-5" />
                <span>Home</span>
              </Link>
              <Link href="/discover" className="flex items-center space-x-1 text-white hover:text-white/90 transition-colors">
                <MagnifyingGlassIcon className="h-5 w-5" />
                <span>Discover</span>
              </Link>
              <Link href="/stats" className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors">
                <ChartBarIcon className="h-5 w-5" />
                <span>Stats</span>
              </Link>
              <Link href="/profile" className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors">
                <UserIcon className="h-5 w-5" />
                <span>Profile</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Discover Profiles</h1>
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for profiles, usernames, or keywords..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile) => (
            <div 
              key={profile.id} 
              className="rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow relative overflow-hidden cursor-pointer"
              style={{
                backgroundImage: 'url("https://cdn-public.notjustanalytics.com/homepage/background.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              onClick={() => handleProfileClick(profile)}
            >
              <div className="absolute inset-0 "></div>
              <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  {profile.isVerified && (
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 flex items-center space-x-2">
                    <span>{profile.name}</span>
                    {profile.isPrivate && (
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </h3>
                  <p className="text-sm text-gray-600">{profile.username}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">{profile.followers}</div>
                  <div className="text-xs text-gray-600">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">{profile.following}</div>
                  <div className="text-xs text-gray-600">Following</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">{profile.posts}</div>
                  <div className="text-xs text-gray-600">Posts</div>
                </div>
                              </div>

               
              </div>
              </div>
            ))}
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-sm mx-4">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={selectedProfile?.image}
                  alt={selectedProfile?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                View {selectedProfile?.name}'s Story?
              </h3>
              <p className="text-gray-600 mb-6">
                This will open their story viewer
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={handlePopupNo}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  No
                </button>
                <button
                  onClick={handlePopupYes}
                  className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Story Viewer Modal */}
      {isStoryOpen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="relative w-full h-full max-w-md mx-auto">
            {/* Progress Bars */}
            <div className="absolute top-4 left-4 right-4 z-10">
              <div className="flex space-x-1">
                {storyUsers[currentUserIndex]?.stories.map((_, index) => (
                  <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-white transition-all duration-100 ${
                        index === currentStoryIndex ? 'w-full' : 
                        index < currentStoryIndex ? 'w-full' : 'w-0'
                      }`}
                      style={{
                        width: index === currentStoryIndex ? `${progress}%` : 
                               index < currentStoryIndex ? '100%' : '0%'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* User Info */}
            <div className="absolute top-12 left-4 z-10 flex items-center space-x-3">
              <img
                src={storyUsers[currentUserIndex]?.image}
                alt={storyUsers[currentUserIndex]?.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="text-white font-semibold text-sm">
                  {storyUsers[currentUserIndex]?.name}
                </p>
                <p className="text-white/80 text-xs">
                  {storyUsers[currentUserIndex]?.stories[currentStoryIndex]?.timestamp}
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={closeStory}
              className="absolute top-4 right-4 z-10 text-white hover:text-white/80 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {/* Story Content */}
            <div 
              className="w-full h-full relative"
              onTouchStart={(e) => {
                const startX = e.touches[0].clientX
                const handleTouchEnd = (e) => {
                  const endX = e.changedTouches[0].clientX
                  const diff = startX - endX
                  if (Math.abs(diff) > 50) {
                    handleSwipe(diff > 0 ? 'left' : 'right')
                  }
                  document.removeEventListener('touchend', handleTouchEnd)
                }
                document.addEventListener('touchend', handleTouchEnd)
              }}
            >
              <img
                src={storyUsers[currentUserIndex]?.stories[currentStoryIndex]?.image}
                alt="Story"
                className="w-full h-full object-cover"
              />
              
              {/* Tap Areas */}
              <div 
                className="absolute left-0 top-0 w-1/2 h-full cursor-pointer"
                onClick={handleTap}
              />
              <div 
                className="absolute right-0 top-0 w-1/2 h-full cursor-pointer"
                onClick={handleTap}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
