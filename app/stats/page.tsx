'use client'

import React from 'react'
import Link from 'next/link'
import { 
  ChartBarIcon,
  UserIcon,
  UserGroupIcon,
  MagnifyingGlassIcon,
  HomeIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  EyeIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

export default function StatsPage() {
  const stats = [
    { name: 'Profile Views', value: '2,847', change: '+12%', changeType: 'positive', icon: EyeIcon },
    { name: 'Followers Gained', value: '156', change: '+8%', changeType: 'positive', icon: UserIcon },
    { name: 'Posts Liked', value: '1,234', change: '+23%', changeType: 'positive', icon: HeartIcon },
    { name: 'Comments Made', value: '89', change: '-5%', changeType: 'negative', icon: ChatBubbleLeftRightIcon }
  ]

  const topStalkers = [
    { name: 'Aditya Solanki', username: '@strange_aadyy', views: 45, lastSeen: '2 hours ago' },
    { name: 'Sarah Johnson', username: '@sarah_j', views: 32, lastSeen: '5 hours ago' },
    { name: 'Mike Chen', username: '@mike_chen', views: 28, lastSeen: '1 day ago' },
    { name: 'Emma Davis', username: '@emma_davis', views: 24, lastSeen: '2 days ago' },
    { name: 'David Brown', username: '@david_brown', views: 19, lastSeen: '3 days ago' }
  ]

  const recentActivity = [
    { action: 'Profile viewed by', user: '@strange_aadyy', time: '2 hours ago', type: 'view' },
    { action: 'Profile viewed by', user: '@sarah_j', time: '5 hours ago', type: 'view' },
    { action: 'Profile viewed by', user: '@mike_chen', time: '1 day ago', type: 'view' },
    { action: 'Profile viewed by', user: '@emma_davis', time: '2 days ago', type: 'view' },
    { action: 'Profile viewed by', user: '@david_brown', time: '3 days ago', type: 'view' }
  ]

  return (
    <div className="min-h-screen relative refined-ash-bg">
      <div className="absolute inset-0 bg-white/20"></div>
      
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
              <Link href="/discover" className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors">
                <MagnifyingGlassIcon className="h-5 w-5" />
                <span>Discover</span>
              </Link>
              <Link href="/stats" className="flex items-center space-x-1 text-white hover:text-white/90 transition-colors">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Analytics & Stats</h1>
          <p className="text-xl text-white/80">Track your profile performance and stalker activity</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 shadow-2xl border border-gray-600/50 backdrop-blur-sm p-6 hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 via-transparent to-gray-500/5 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm font-medium text-white/70 mb-1">{stat.name}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                  </div>
                  <div className={`flex items-center text-sm font-medium ${
                    stat.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stat.changeType === 'positive' ? (
                      <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
                    ) : (
                      <ArrowTrendingDownIcon className="h-4 w-4 mr-1" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <div className="mt-4">
                  <stat.icon className="h-8 w-8 text-purple-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Stalkers */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 shadow-2xl border border-gray-600/50 backdrop-blur-sm p-6 hover:shadow-3xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-purple-500/5 rounded-2xl"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <UserGroupIcon className="h-6 w-6 mr-3 text-purple-300" />
                Top Stalkers
              </h2>
              <div className="space-y-4">
                {topStalkers.map((stalker, index) => (
                  <div key={stalker.username} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-300 font-semibold text-sm border border-purple-400/30">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-white">{stalker.name}</h3>
                      <p className="text-sm text-white/70">{stalker.username}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-white">{stalker.views} views</div>
                      <div className="text-xs text-white/60">{stalker.lastSeen}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 shadow-2xl border border-gray-600/50 backdrop-blur-sm p-6 hover:shadow-3xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-blue-500/5 rounded-2xl"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <EyeIcon className="h-6 w-6 mr-3 text-blue-300" />
                Recent Activity
              </h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-400/30">
                      <EyeIcon className="h-5 w-5 text-blue-300" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">
                        {activity.action} <span className="text-purple-300">{activity.user}</span>
                      </p>
                      <p className="text-xs text-white/60">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="mt-8 relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 shadow-2xl border border-gray-600/50 backdrop-blur-sm p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-transparent to-green-500/5 rounded-2xl"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <ChartBarIcon className="h-6 w-6 mr-3 text-green-300" />
              Profile Views Over Time
            </h2>
            <div className="h-64 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
              <div className="text-center">
                <ChartBarIcon className="h-12 w-12 text-white/60 mx-auto mb-2" />
                <p className="text-white/80">Chart visualization would go here</p>
                <p className="text-sm text-white/60">Integration with charting library needed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer 
        className="border-t border-gray-800/50 relative mt-16"
        style={{
          backgroundImage: 'url("https://cdn-public.notjustanalytics.com/homepage/background.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-white">
            <p>&copy; 2024 Instalker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
