'use client'

import React from 'react'
import Link from 'next/link'
import { 
  MagnifyingGlassIcon,
  UserIcon,
  ChartBarIcon,
  HeartIcon,
  UserGroupIcon,
  EyeIcon
} from '@heroicons/react/24/outline'

export default function DiscoverPage() {
  const profiles = [
    {
      id: 1,
      name: 'Sarah Johnson',
      username: '@sarah_j',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">Instalker</Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/discover" className="flex items-center space-x-1 text-purple-600 hover:text-purple-700 transition-colors">
                <MagnifyingGlassIcon className="h-5 w-5" />
                <span>Discover</span>
              </Link>
              <Link href="/stats" className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors">
                <ChartBarIcon className="h-5 w-5" />
                <span>Stats</span>
              </Link>
              <Link href="/profile" className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors">
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
            <div key={profile.id} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow">
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

              {/* Actions */}
              <div className="flex space-x-2">
                <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
                  <EyeIcon className="h-4 w-4" />
                  <span>View Profile</span>
                </button>
                <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                  <HeartIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
