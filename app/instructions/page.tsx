'use client'

import React from 'react'
import Link from 'next/link'
import { 
  ChevronLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

export default function InstructionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">Instalker</Link>
            </div>
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900">
              <ChevronLeftIcon className="h-5 w-5 mr-1" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Connect IG
          </h1>
          <p className="text-xl text-gray-600">
            Follow these simple steps to connect your IG account
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-blue-600">1</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Click "Start Analyze" Button
                </h3>
                <p className="text-gray-600 mb-4">
                  On the landing page, click the "Start Analyze" button. This will open IG's official login page in a new tab.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <ExclamationTriangleIcon className="h-5 w-5 text-blue-400 mr-2" />
                    <p className="text-sm text-blue-700">
                      <strong>Note:</strong> The IG login page will open in a new tab for security reasons.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-purple-600">2</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Login to IG
                </h3>
                <p className="text-gray-600 mb-4">
                  On the IG login page, enter your username/email and password to log into your IG account.
                </p>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-purple-400 mr-2" />
                    <p className="text-sm text-purple-700">
                      <strong>Study Purpose:</strong> This is the real IG login page for educational purposes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-green-600">3</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Return to Instalker
                </h3>
                <p className="text-gray-600 mb-4">
                  After successfully logging into IG, close the IG tab and return to this Instalker tab. 
                  Then click the button below to access your dashboard.
                </p>
                <Link
                  href="/redirect"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200"
                >
                  Access Dashboard
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative Method */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
          <div className="flex items-start space-x-4">
            <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                Alternative Method
              </h3>
              <p className="text-yellow-700 mb-4">
                If you prefer a direct approach, you can also navigate directly to the dashboard:
              </p>
              <Link
                href="/home"
                className="inline-flex items-center px-4 py-2 bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-700 transition-colors"
              >
                Go to Dashboard
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-8 bg-gray-100 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            🔒 Security & Privacy Notice
          </h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• This is a study project for educational purposes only</li>
            <li>• We do not store or access your IG credentials</li>
            <li>• The IG login is handled entirely by IG's secure servers</li>
            <li>• Your data remains private and secure</li>
            <li>• This application is for learning web development concepts</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer 
        className="border-t border-gray-200 relative mt-8"
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
