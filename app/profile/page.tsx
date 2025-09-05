'use client'

import React from 'react'
import Link from 'next/link'
import { 
  UserIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  HomeIcon,
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
              <Link href="/stats" className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors">
                <ChartBarIcon className="h-5 w-5" />
                <span>Stats</span>
              </Link>
              <Link href="/profile" className="flex items-center space-x-1 text-white hover:text-white/90 transition-colors">
                <UserIcon className="h-5 w-5" />
                <span>Profile</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 shadow-2xl border border-gray-600/50 backdrop-blur-sm p-8 mb-8 hover:shadow-3xl transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-purple-500/5 rounded-2xl"></div>
          <div className="absolute top-4 right-4 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-purple-300/15 rounded-full blur-xl"></div>
          
          <div className="relative z-10">
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
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors border-2 border-white">
                  <CameraIcon className="h-4 w-4 text-white" />
                </button>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-white mb-2">VASU</h1>
                <p className="text-white/70 mb-4">@vasu_instalker</p>
                <p className="text-white/80 mb-6">Digital creator and social media enthusiast. Always exploring new trends and connecting with amazing people! ✨</p>
                
                {/* Stats */}
                <div className="flex space-x-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">398</div>
                    <div className="text-sm text-white/70">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">238</div>
                    <div className="text-sm text-white/70">Following</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">15</div>
                    <div className="text-sm text-white/70">Posts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Section */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 shadow-2xl border border-gray-600/50 backdrop-blur-sm p-6 mb-8 hover:shadow-3xl transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-blue-500/5 rounded-2xl"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Cog6ToothIcon className="h-6 w-6 mr-3 text-blue-300" />
              Account Settings
            </h2>
            <div className="space-y-4">
              {settings.map((setting, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-400/30">
                    <setting.icon className="h-6 w-6 text-blue-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-white">{setting.name}</h3>
                    <p className="text-sm text-white/70">{setting.description}</p>
                  </div>
                  <svg className="h-5 w-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Account Info */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 shadow-2xl border border-gray-600/50 backdrop-blur-sm p-6 mb-8 hover:shadow-3xl transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-transparent to-green-500/5 rounded-2xl"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <UserIcon className="h-6 w-6 mr-3 text-green-300" />
              Account Information
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="text-white/70">Email</span>
                <span className="text-white">vasu@example.com</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="text-white/70">Phone</span>
                <span className="text-white">+1 (555) 123-4567</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="text-white/70">Member Since</span>
                <span className="text-white">January 2024</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-white/70">Last Active</span>
                <span className="text-white">2 hours ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 shadow-2xl border border-red-500/50 backdrop-blur-sm p-6 hover:shadow-3xl transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-red-400/10 via-transparent to-red-500/5 rounded-2xl"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
              <ShieldCheckIcon className="h-6 w-6 mr-3 text-red-400" />
              Danger Zone
            </h2>
            <div className="space-y-4">
              <button className="w-full text-left p-4 rounded-lg border border-red-500/30 hover:bg-red-500/10 transition-colors">
                <h3 className="font-medium text-red-400 mb-1">Delete Account</h3>
                <p className="text-sm text-white/70">Permanently delete your account and all associated data</p>
              </button>
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
