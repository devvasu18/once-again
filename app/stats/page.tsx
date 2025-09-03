'use client'

import React from 'react'
import Link from 'next/link'
import { 
  ChartBarIcon,
  UserIcon,
  MagnifyingGlassIcon,
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">Instalker</Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/discover" className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors">
                <MagnifyingGlassIcon className="h-5 w-5" />
                <span>Discover</span>
              </Link>
              <Link href="/stats" className="flex items-center space-x-1 text-purple-600 hover:text-purple-700 transition-colors">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics & Stats</h1>
          <p className="text-gray-600">Track your profile performance and stalker activity</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`flex items-center text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
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
                <stat.icon className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Stalkers */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Top Stalkers</h2>
            <div className="space-y-4">
              {topStalkers.map((stalker, index) => (
                <div key={stalker.username} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{stalker.name}</h3>
                    <p className="text-sm text-gray-600">{stalker.username}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">{stalker.views} views</div>
                    <div className="text-xs text-gray-500">{stalker.lastSeen}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <EyeIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.action} <span className="text-purple-600">{activity.user}</span>
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Views Over Time</h2>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <ChartBarIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Chart visualization would go here</p>
              <p className="text-sm text-gray-400">Integration with charting library needed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
