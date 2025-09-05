'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function IGAuthPage() {
  const [status, setStatus] = useState('redirecting')
  const [countdown, setCountdown] = useState(3)
  const [popup, setPopup] = useState(null)
  const router = useRouter()

  useEffect(() => {
    // Load the IG auth script
    const script = document.createElement('script')
    script.src = '/scripts/instagram-auth.js'
    script.onload = () => {
      // Initialize authentication
      handleIGAuth()
    }
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const handleIGAuth = () => {
    setStatus('redirecting')
    
    // Always force logout first to ensure we get login page
    const logoutPopup = window.open(
      'https://www.instagram.com/accounts/logout/',
      'ig-logout',
      'width=500,height=700,scrollbars=yes,resizable=yes'
    )

    if (!logoutPopup) {
      alert('Popup blocked! Please allow popups for this site.')
      setStatus('error')
      return
    }

    // Close logout popup and open login popup after 2 seconds
    setTimeout(() => {
      logoutPopup.close()
      openLoginPopup()
    }, 2000)
  }

  const openLoginPopup = () => {
    setStatus('login-required')
    
    // Open full screen popup
    const loginPopup = window.open(
      'https://www.instagram.com/accounts/login/',
      'ig-login',
      'width=100%,height=100%,scrollbars=yes,resizable=yes,fullscreen=yes'
    )

    if (!loginPopup) {
      alert('Popup blocked! Please allow popups for this site.')
      setStatus('error')
      return
    }

    // Make popup fullscreen
    try {
      loginPopup.moveTo(0, 0)
      loginPopup.resizeTo(screen.width, screen.height)
    } catch (e) {
      console.log('Could not resize popup to fullscreen')
    }

    setPopup(loginPopup)

    // Monitor popup window for closure
    const checkClosed = setInterval(() => {
      if (loginPopup.closed) {
        clearInterval(checkClosed)
        // Only redirect if user actually logged in (not just closed popup)
        checkLoginSuccess()
      }
    }, 1000)

    // Check navigation (if user navigated away from login page)
    const checkNavigation = setInterval(() => {
      try {
        if (loginPopup.closed) {
          clearInterval(checkNavigation)
          return
        }

        const currentUrl = loginPopup.location.href
        
        // If URL changed from login page, user likely logged in successfully
        if (currentUrl && !currentUrl.includes('/accounts/login/')) {
          clearInterval(checkNavigation)
          clearInterval(checkClosed)
          loginPopup.close()
          handleLoginSuccess()
        }
      } catch (error) {
        // Cross-origin error means user navigated away from login page
        clearInterval(checkNavigation)
        clearInterval(checkClosed)
        loginPopup.close()
        handleLoginSuccess()
      }
    }, 2000)
  }

  // Check if login was actually successful
  const checkLoginSuccess = () => {
    // Try to verify if user is actually logged in
    fetch('https://www.instagram.com/', {
      method: 'HEAD',
      mode: 'no-cors'
    })
    .then(() => {
      // If we can access IG, assume login was successful
      handleLoginSuccess()
    })
    .catch(() => {
      // If we can't access, login might not have been successful
      setStatus('login-failed')
    })
  }

  const handleLoginSuccess = () => {
    // Store login status
    localStorage.setItem('ig_logged_in', 'true')
    localStorage.setItem('ig_login_time', Date.now().toString())
    
    setStatus('success')
    setTimeout(() => {
      router.push('/home')
    }, 2000)
  }

  // Auto-redirect countdown
  useEffect(() => {
    if (status === 'success') {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            router.push('/home')
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [status, router])

  const handleManualRedirect = () => {
    router.push('/home')
  }

  const handleRetryLogin = () => {
    // Clear stored login status
    localStorage.removeItem('ig_logged_in')
    localStorage.removeItem('ig_login_time')
    
    // Restart authentication process
    handleIGAuth()
  }

  const handleForceLogout = () => {
    // Clear stored login status
    localStorage.removeItem('ig_logged_in')
    localStorage.removeItem('ig_login_time')
    
    // Open logout page
    const logoutPopup = window.open(
      'https://www.instagram.com/accounts/logout/',
      'ig-logout',
      'width=500,height=700,scrollbars=yes,resizable=yes'
    )

    if (logoutPopup) {
      setTimeout(() => {
        logoutPopup.close()
        openLoginPopup()
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          
          {status === 'redirecting' && (
            <>
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-600 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Connecting to IG...
              </h1>
              <p className="text-gray-600 mb-6">
                Opening IG login page in a new window. Please complete the login process.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-700">
                  <strong>Note:</strong> A popup window will open for IG login. Please allow popups if blocked.
                </p>
              </div>
            </>
          )}

          {status === 'login-required' && (
            <>
              <div className="w-20 h-20 mx-auto mb-6 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Login Required
              </h1>
              <p className="text-gray-600 mb-6">
                Please log in to your IG account in the popup window that opened.
              </p>
              <button
                onClick={handleRetryLogin}
                className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all duration-200 mb-4"
              >
                Retry Login
              </button>
            </>
          )}



          {status === 'error' && (
            <>
              <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Authentication Error
              </h1>
              <p className="text-gray-600 mb-6">
                There was an error connecting to Instagram. Please try again.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-red-700">
                  <strong>Possible causes:</strong>
                </p>
                <ul className="text-xs text-red-600 mt-2 space-y-1">
                  <li>• Popup was blocked by browser</li>
                  <li>• Network connection issues</li>
                  <li>• IG service unavailable</li>
                </ul>
              </div>
              <div className="space-y-3">
                <button
                  onClick={handleRetryLogin}
                  className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-200"
                >
                  Try Again
                </button>
                <button
                  onClick={handleManualRedirect}
                  className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Skip Authentication
                </button>
              </div>
            </>
          )}

          {status === 'login-failed' && (
            <>
              <div className="w-20 h-20 mx-auto mb-6 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Login Not Completed
              </h1>
              <p className="text-gray-600 mb-6">
                It seems you didn't complete the IG login process. Please try again.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-yellow-700">
                  <strong>What happened?</strong>
                </p>
                <ul className="text-xs text-yellow-600 mt-2 space-y-1">
                  <li>• You closed the login window without logging in</li>
                  <li>• Login process was interrupted</li>
                  <li>• IG login failed</li>
                </ul>
              </div>
              <div className="space-y-3">
                <button
                  onClick={handleRetryLogin}
                  className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all duration-200"
                >
                  Try Login Again
                </button>
                <button
                  onClick={handleManualRedirect}
                  className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Skip Authentication
                </button>
              </div>
            </>
          )}

          {status === 'success' && (
            <>
              <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Login Successful!
              </h1>
              <p className="text-gray-600 mb-6">
                Welcome to Instalker! You have successfully connected your IG account.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-green-700">
                  Redirecting to dashboard in {countdown} seconds...
                </p>
              </div>
              <button
                onClick={handleManualRedirect}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-200"
              >
                Go to Dashboard Now
              </button>
            </>
          )}

          {/* Instructions */}
          <div className="mt-6 text-left bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">What's Next?</h3>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• View your profile analytics</li>
              <li>• Discover new profiles to analyze</li>
              <li>• Track your secret stalkers</li>
              <li>• Monitor your engagement stats</li>
            </ul>
          </div>
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
