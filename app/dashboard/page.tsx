'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  HeartIcon, 
  ChatBubbleLeftRightIcon,
  ArrowTrendingUpIcon,
  EyeIcon,
  CalendarIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { name: 'Total Followers', value: '12,345', change: '+12%', changeType: 'positive' },
    { name: 'Engagement Rate', value: '4.2%', change: '+0.3%', changeType: 'positive' },
    { name: 'Posts This Month', value: '24', change: '+8', changeType: 'positive' },
    { name: 'Profile Views', value: '8,432', change: '+15%', changeType: 'positive' }
  ]

  const recentActivity = [
    { id: 1, action: 'New follower', user: '@johndoe', time: '2 minutes ago', type: 'follow' },
    { id: 2, action: 'Liked your post', user: '@sarahsmith', time: '15 minutes ago', type: 'like' },
    { id: 3, action: 'Commented on your photo', user: '@mikechen', time: '1 hour ago', type: 'comment' },
    { id: 4, action: 'Started following you', user: '@emmadavis', time: '2 hours ago', type: 'follow' },
    { id: 5, action: 'Shared your story', user: '@alexjohnson', time: '3 hours ago', type: 'share' }
  ]

  const topPosts = [
    { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop', likes: 1245, comments: 89, engagement: '8.2%' },
    { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop', likes: 892, comments: 45, engagement: '6.1%' },
    { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop', likes: 1567, comments: 123, engagement: '9.4%' },
    { id: 4, image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=300&h=300&fit=crop', likes: 743, comments: 67, engagement: '5.8%' }
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
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">JD</span>
                </div>
                <span className="text-gray-700 font-medium">John Doe</span>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Cog6ToothIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Here's what's happening with your Instagram account today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`flex items-center text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', name: 'Overview', icon: ChartBarIcon },
              { id: 'followers', name: 'Followers', icon: UserGroupIcon },
              { id: 'engagement', name: 'Engagement', icon: HeartIcon },
              { id: 'content', name: 'Content', icon: ChatBubbleLeftRightIcon }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activity.type === 'follow' ? 'bg-blue-100' :
                        activity.type === 'like' ? 'bg-red-100' :
                        activity.type === 'comment' ? 'bg-green-100' : 'bg-purple-100'
                      }`}>
                        {activity.type === 'follow' && <UserGroupIcon className="h-5 w-5 text-blue-600" />}
                        {activity.type === 'like' && <HeartIcon className="h-5 w-5 text-red-600" />}
                        {activity.type === 'comment' && <ChatBubbleLeftRightIcon className="h-5 w-5 text-green-600" />}
                        {activity.type === 'share' && <EyeIcon className="h-5 w-5 text-purple-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.user}</p>
                      </div>
                      <div className="text-sm text-gray-500">{activity.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Performing Posts */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Top Performing Posts</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {topPosts.map((post) => (
                    <div key={post.id} className="relative group">
                      <img
                        src={post.image}
                        alt={`Post ${post.id}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 rounded-lg flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-center">
                          <div className="flex items-center justify-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1">
                              <HeartIcon className="h-4 w-4" />
                              <span>{post.likes}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <ChatBubbleLeftRightIcon className="h-4 w-4" />
                              <span>{post.comments}</span>
                            </div>
                          </div>
                          <p className="text-xs mt-1">{post.engagement} engagement</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
              </div>
              <div className="p-6 space-y-3">
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <ChartBarIcon className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Generate Report</p>
                      <p className="text-sm text-gray-600">Create analytics report</p>
                    </div>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <UserGroupIcon className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Track Competitors</p>
                      <p className="text-sm text-gray-600">Monitor other accounts</p>
                    </div>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <CalendarIcon className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Schedule Posts</p>
                      <p className="text-sm text-gray-600">Plan your content</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Account Summary */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Account Summary</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Account Status</span>
                    <span className="text-green-600 font-medium">Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Sync</span>
                    <span className="text-gray-900">2 minutes ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Account Type</span>
                    <span className="text-gray-900">Business</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Verified</span>
                    <span className="text-blue-600 font-medium">Yes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
