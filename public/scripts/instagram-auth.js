// Instagram Authentication Script
class InstagramAuth {
  constructor() {
    this.popup = null
    this.checkInterval = null
    this.redirectUrl = '/home'
  }

  // Main authentication method
  async authenticate() {
    try {
      // Always force logout first to ensure we get login page
      return this.openLoginPopup()
    } catch (error) {
      console.error('Authentication error:', error)
      return this.handleError(error)
    }
  }

  // Check if user is already logged in to Instagram
  async checkLoginStatus() {
    try {
      // Try to access Instagram's main page
      const response = await fetch('https://www.instagram.com/', {
        method: 'HEAD',
        mode: 'no-cors',
        credentials: 'include'
      })
      
      // If we can access Instagram, user might be logged in
      return true
    } catch (error) {
      // If there's an error, user is likely not logged in
      return false
    }
  }

  // Open Instagram login popup
  openLoginPopup() {
    // Force logout first to ensure we get the login page
    const logoutPopup = window.open(
      'https://www.instagram.com/accounts/logout/',
      'instagram-logout',
      'width=500,height=700,scrollbars=yes,resizable=yes'
    )

    if (!logoutPopup) {
      throw new Error('Popup blocked! Please allow popups for this site.')
    }

    // Close logout popup after 2 seconds and open login popup
    setTimeout(() => {
      logoutPopup.close()
      this.openLoginWindow()
    }, 2000)
  }

  // Open the actual login window
  openLoginWindow() {
    this.popup = window.open(
      'https://www.instagram.com/accounts/login/',
      'instagram-login',
      'width=100%,height=100%,scrollbars=yes,resizable=yes,fullscreen=yes'
    )

    if (!this.popup) {
      throw new Error('Popup blocked! Please allow popups for this site.')
    }

    // Make popup fullscreen
    try {
      this.popup.moveTo(0, 0)
      this.popup.resizeTo(screen.width, screen.height)
    } catch (e) {
      console.log('Could not resize popup to fullscreen')
    }

    // Monitor the popup window
    this.monitorPopup()
  }

  // Monitor popup window for closure
  monitorPopup() {
    this.checkInterval = setInterval(() => {
      if (this.popup.closed) {
        clearInterval(this.checkInterval)
        // Only redirect if user actually logged in (not just closed popup)
        this.checkLoginSuccess()
      }
    }, 1000)

    // Also check if user navigated away from login page
    this.checkNavigation()
  }

  // Check if user navigated away from login page (indicating successful login)
  checkNavigation() {
    const navigationCheck = setInterval(() => {
      try {
        if (this.popup.closed) {
          clearInterval(navigationCheck)
          return
        }

        // Try to access the popup's location
        const currentUrl = this.popup.location.href
        
        // If URL changed from login page, user likely logged in successfully
        if (currentUrl && !currentUrl.includes('/accounts/login/')) {
          clearInterval(navigationCheck)
          clearInterval(this.checkInterval)
          this.popup.close()
          this.handleLoginSuccess()
        }
      } catch (error) {
        // Cross-origin error means user navigated away from login page
        clearInterval(navigationCheck)
        clearInterval(this.checkInterval)
        this.popup.close()
        this.handleLoginSuccess()
      }
    }, 2000)
  }

  // Check if login was actually successful
  checkLoginSuccess() {
    // Try to verify if user is actually logged in
    fetch('https://www.instagram.com/', {
      method: 'HEAD',
      mode: 'no-cors'
    })
    .then(() => {
      // If we can access Instagram, assume login was successful
      this.handleLoginSuccess()
    })
    .catch(() => {
      // If we can't access, login might not have been successful
      console.log('Login verification failed - user may not have logged in')
      // Don't redirect, let user try again
    })
  }

  // Handle successful login
  handleLoginSuccess() {
    // Store login status in localStorage
    localStorage.setItem('instagram_logged_in', 'true')
    localStorage.setItem('instagram_login_time', Date.now().toString())
    
    // Redirect to home page
    window.location.href = this.redirectUrl
  }

  // Handle already logged in case
  handleAlreadyLoggedIn() {
    // Check if login is recent (within 24 hours)
    const loginTime = localStorage.getItem('instagram_login_time')
    const now = Date.now()
    const twentyFourHours = 24 * 60 * 60 * 1000

    if (loginTime && (now - parseInt(loginTime)) < twentyFourHours) {
      // Recent login, redirect directly
      window.location.href = this.redirectUrl
    } else {
      // Old login, show login page anyway
      this.openLoginWindow()
    }
  }

  // Handle errors
  handleError(error) {
    console.error('Instagram authentication failed:', error)
    alert('Authentication failed. Please try again.')
  }

  // Force logout and retry
  forceLogoutAndRetry() {
    // Clear stored login status
    localStorage.removeItem('instagram_logged_in')
    localStorage.removeItem('instagram_login_time')
    
    // Open logout page
    const logoutPopup = window.open(
      'https://www.instagram.com/accounts/logout/',
      'instagram-logout',
      'width=500,height=700,scrollbars=yes,resizable=yes'
    )

    if (logoutPopup) {
      setTimeout(() => {
        logoutPopup.close()
        this.openLoginWindow()
      }, 3000)
    }
  }

  // Check if popup is blocked
  isPopupBlocked() {
    return !this.popup || this.popup.closed
  }
}

// Export for use in React components
if (typeof window !== 'undefined') {
  window.InstagramAuth = InstagramAuth
}

// Auto-initialize if on instagram-auth page
if (typeof window !== 'undefined' && window.location.pathname === '/instagram-auth') {
  const auth = new InstagramAuth()
  auth.authenticate()
}