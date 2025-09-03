'use client'

import React from 'react'
import Link from 'next/link'
import { 
  UserIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  PencilIcon,
  CameraIcon,
  BellIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export default function ProfilePage() {
  const settings = [
    { name: 'Edit Profile', icon: PencilIcon, description: 'Update your personal information' },
    { name: 'Privacy Settings', icon: ShieldCheckIcon, description: 'Control who can see your profile' },
    { name: 'Notifications', icon: BellIcon, description: 'Manage your notification preferences' },
    { name: 'Account Settings', icon: Cog6ToothIcon, description: 'General account configuration' }
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
              <Link href="/stats" className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors">
                <ChartBarIcon className="h-5 w-5" />
                <span>Stats</span>
              </Link>
              <Link href="/profile" className="flex items-center space-x-1 text-purple-600 hover:text-purple-700 transition-colors">
                <UserIcon className="h-5 w-5" />
                <span>Profile</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="flex items-center space-x-6">
            {/* Profile Picture */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                <CameraIcon className="h-4 w-4 text-white" />
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">VASU</h1>
              <p className="text-gray-600 mb-4">@vasu_instalker</p>
              <p className="text-gray-700 mb-6">Digital creator and social media enthusiast. Always exploring new trends and connecting with amazing people! ✨</p>
              
              {/* Stats */}
              <div className="flex space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">398</div>
                  <div className="text-sm text-gray-600">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">238</div>
                  <div className="text-sm text-gray-600">Following</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">15</div>
                  <div className="text-sm text-gray-600">Posts</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Settings</h2>
          <div className="space-y-4">
            {settings.map((setting, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <setting.icon className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{setting.name}</h3>
                  <p className="text-sm text-gray-600">{setting.description}</p>
                </div>
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Account Info */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Information</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600">Email</span>
              <span className="text-gray-900">vasu@example.com</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600">Phone</span>
              <span className="text-gray-900">+1 (555) 123-4567</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600">Member Since</span>
              <span className="text-gray-900">January 2024</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-600">Last Active</span>
              <span className="text-gray-900">2 hours ago</span>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm p-6 border border-red-200">
          <h2 className="text-xl font-semibold text-red-600 mb-6">Danger Zone</h2>
          <div className="space-y-4">
            <button className="w-full text-left p-4 rounded-lg border border-red-200 hover:bg-red-50 transition-colors">
              <h3 className="font-medium text-red-600 mb-1">Delete Account</h3>
              <p className="text-sm text-gray-600">Permanently delete your account and all associated data</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
