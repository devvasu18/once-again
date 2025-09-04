'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { 
  UserGroupIcon, 
  HeartIcon, 
  PhotoIcon,
  LockClosedIcon,
  UserIcon,
  HomeIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'

export default function HomePage() {
  const [followersCount, setFollowersCount] = useState(0)
  const [followingsCount, setFollowingsCount] = useState(0)
  const [postsCount, setPostsCount] = useState(0)
  
  // Story viewer state
  const [isStoryOpen, setIsStoryOpen] = useState(false)
  const [currentUserIndex, setCurrentUserIndex] = useState(0)
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const [showMoreStalkers, setShowMoreStalkers] = useState(false)

  const maxFollowers = 398
  const maxFollowings = 238
  const maxPosts = 15

  // 15 dummy users with 3 stories each
  const storyUsers = [
    {
      id: 1,
      name: 'vasudev',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop', type: 'image' },
        { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop', type: 'image' },
        { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop', type: 'image' }
      ]
    },
    {
      id: 2,
      name: 'mery_m',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop', type: 'image' },
        { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop', type: 'image' },
        { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop', type: 'image' }
      ]
    },
    {
      id: 3,
      name: 'bhaktip',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop', type: 'image' },
        { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop', type: 'image' },
        { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop', type: 'image' }
      ]
    },
    {
      id: 4,
      name: 'butatid',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop', type: 'image' },
        { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop', type: 'image' },
        { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop', type: 'image' }
      ]
    },
    {
      id: 5,
      name: 'karni_m',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop', type: 'image' },
        { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop', type: 'image' },
        { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop', type: 'image' }
      ]
    },
    {
      id: 6,
      name: 'jaga',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop', type: 'image' },
        { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop', type: 'image' },
        { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop', type: 'image' }
      ]
    },
    {
      id: 7,
      name: 'alex_j',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop', type: 'image' },
        { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop', type: 'image' },
        { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop', type: 'image' }
      ]
    },
    {
      id: 8,
      name: 'sarah_w',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop', type: 'image' },
        { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop', type: 'image' },
        { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop', type: 'image' }
      ]
    },
    {
      id: 9,
      name: 'mike_t',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop', type: 'image' },
        { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop', type: 'image' },
        { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop', type: 'image' }
      ]
    },
    {
      id: 10,
      name: 'emma_l',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop', type: 'image' },
        { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop', type: 'image' },
        { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop', type: 'image' }
      ]
    },
    {
      id: 11,
      name: 'david_k',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop', type: 'image' },
        { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop', type: 'image' },
        { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop', type: 'image' }
      ]
    },
    {
      id: 12,
      name: 'lisa_m',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop', type: 'image' },
        { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop', type: 'image' },
        { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop', type: 'image' }
      ]
    },
    {
      id: 13,
      name: 'tom_r',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop', type: 'image' },
        { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop', type: 'image' },
        { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop', type: 'image' }
      ]
    },
    {
      id: 14,
      name: 'anna_s',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop', type: 'image' },
        { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop', type: 'image' },
        { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop', type: 'image' }
      ]
    },
    {
      id: 15,
      name: 'john_d',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop', type: 'image' },
        { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop', type: 'image' },
        { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop', type: 'image' }
      ]
    },
    {
      id: 16,
      name: 'sophia_c',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop', type: 'image' },
        { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop', type: 'image' },
        { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop', type: 'image' }
      ]
    },
    {
      id: 17,
      name: 'ryan_p',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop', type: 'image' },
        { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop', type: 'image' },
        { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop', type: 'image' }
      ]
    },
    {
      id: 18,
      name: 'olivia_h',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop', type: 'image' },
        { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop', type: 'image' },
        { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop', type: 'image' }
      ]
    },
    {
      id: 19,
      name: 'james_w',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop', type: 'image' },
        { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop', type: 'image' },
        { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop', type: 'image' }
      ]
    },
    {
      id: 20,
      name: 'chloe_b',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop', type: 'image' },
        { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop', type: 'image' },
        { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop', type: 'image' }
      ]
    },
    {
      id: 21,
      name: 'noah_s',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop', type: 'image' },
        { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop', type: 'image' },
        { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop', type: 'image' }
      ]
    },
    {
      id: 22,
      name: 'ava_m',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop', type: 'image' },
        { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop', type: 'image' },
        { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop', type: 'image' }
      ]
    },
    {
      id: 23,
      name: 'liam_t',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop', type: 'image' },
        { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop', type: 'image' },
        { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop', type: 'image' }
      ]
    },
    {
      id: 24,
      name: 'mia_r',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop', type: 'image' },
        { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop', type: 'image' },
        { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop', type: 'image' }
      ]
    },
    {
      id: 25,
      name: 'william_c',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      stories: [
        { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop', type: 'image' },
        { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop', type: 'image' },
        { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop', type: 'image' }
      ]
    }
  ]

  // Story functions
  const openStory = (userIndex: number) => {
    setCurrentUserIndex(userIndex)
    setCurrentStoryIndex(0)
    setProgress(0)
    setIsStoryOpen(true)
  }

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
    } else {
      // Move to next user
      if (currentUserIndex < storyUsers.length - 1) {
        setCurrentUserIndex(currentUserIndex + 1)
        setCurrentStoryIndex(0)
        setProgress(0)
      } else {
        closeStory()
      }
    }
  }

  const previousStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1)
      setProgress(0)
    } else {
      // Move to previous user
      if (currentUserIndex > 0) {
        setCurrentUserIndex(currentUserIndex - 1)
        setCurrentStoryIndex(storyUsers[currentUserIndex - 1].stories.length - 1)
        setProgress(0)
      }
    }
  }

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      // Swipe left = next person's story
      if (currentUserIndex < storyUsers.length - 1) {
        setCurrentUserIndex(currentUserIndex + 1)
        setCurrentStoryIndex(0)
        setProgress(0)
      } else {
        closeStory()
      }
    } else {
      // Swipe right = previous person's story
      if (currentUserIndex > 0) {
        setCurrentUserIndex(currentUserIndex - 1)
        setCurrentStoryIndex(0)
        setProgress(0)
      }
    }
  }

  const handleTap = (side: 'left' | 'right') => {
    if (side === 'left') {
      // Tap left = previous story of same user
      if (currentStoryIndex > 0) {
        setCurrentStoryIndex(currentStoryIndex - 1)
        setProgress(0)
      }
    } else {
      // Tap right = next story of same user
      const currentUser = storyUsers[currentUserIndex]
      if (currentStoryIndex < currentUser.stories.length - 1) {
        setCurrentStoryIndex(currentStoryIndex + 1)
        setProgress(0)
      }
    }
  }

  // Auto-play story progress
  useEffect(() => {
    if (isStoryOpen) {
      intervalRef.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            nextStory()
            return 0
          }
          return prev + 2 // 2% per 40ms = 2 seconds total
        })
      }, 40)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isStoryOpen, currentUserIndex, currentStoryIndex])

  // Animate counting from 0 to max numbers
  useEffect(() => {
    const animateCount = (setter: (value: number) => void, max: number, duration: number = 2000) => {
      let startTime: number
      const startValue = 0
      const endValue = max

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
        
        setter(currentValue)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }

    // Start animations with slight delays for better effect
    setTimeout(() => animateCount(setFollowersCount, maxFollowers), 500)
    setTimeout(() => animateCount(setFollowingsCount, maxFollowings), 800)
    setTimeout(() => animateCount(setPostsCount, maxPosts), 1100)
  }, [])



  const secretStalkers = [
    {
      id: 1,
      name: 'Aditya Solanki',
      username: '@strange_aadyy',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
      status: 'Friend',
      isUnlocked: true
    },
    {
      id: 2,
      name: 'Secret Stalker',
      username: '@hidden_user',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face',
      status: 'Friend',
      isUnlocked: false
    },
    {
      id: 3,
      name: 'Secret Stalker',
      username: '@mystery_follower',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
      status: 'Friend',
      isUnlocked: true
    },
    {
      id: 4,
      name: 'Secret Stalker',
      username: '@anonymous_viewer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face',
      status: 'Friend',
      isUnlocked:true
    },
    {
      id: 5,
      name: 'Secret Stalker',
      username: '@ghost_profile',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face',
      status: 'Friend',
      isUnlocked: true
    },
    {
      id: 6,
      name: 'Secret Stalker',
      username: '@mystery_viewer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face',
      status: 'Friend',
      isUnlocked: true
    },
    {
      id: 7,
      name: 'Secret Stalker',
      username: '@shadow_follower',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face',
      status: 'Friend',
      isUnlocked: false
    },
    {
      id: 8,
      name: 'Secret Stalker',
      username: '@silent_watcher',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
      status: 'Friend',
      isUnlocked: true
    },
    {
      id: 9,
      name: 'Secret Stalker',
      username: '@hidden_observer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face',
      status: 'Friend',
      isUnlocked: true
    },
    {
      id: 10,
      name: 'Secret Stalker',
      username: '@phantom_user',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face',
      status: 'Friend',
      isUnlocked: true
    },
    {
      id: 11,
      name: 'Secret Stalker',
      username: '@stealth_browser',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
      status: 'Friend',
      isUnlocked: true
    },
    {
      id: 12,
      name: 'Secret Stalker',
      username: '@invisible_fan',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face',
      status: 'Friend',
      isUnlocked: true
    },
    {
      id: 13,
      name: 'Secret Stalker',
      username: '@covert_admirer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
      status: 'Friend',
      isUnlocked: false
    },
    {
      id: 14,
      name: 'Secret Stalker',
      username: '@secret_follower',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face',
      status: 'Friend',
      isUnlocked: true
    },
    {
      id: 15,
      name: 'Secret Stalker',
      username: '@unknown_viewer',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face',
      status: 'Friend',
      isUnlocked: false
    }
  ]

  // Additional stalkers for discover more
  const additionalStalkers = [
    {
      id: 16,
      name: 'Secret Stalker',
      username: '@stealth_watcher',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
      status: 'Friend',
      isUnlocked: true
    },
    {
      id: 17,
      name: 'Secret Stalker',
      username: '@ghost_browser',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face',
      status: 'Friend',
      isUnlocked: false
    },
    {
      id: 18,
      name: 'Secret Stalker',
      username: '@shadow_viewer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
      status: 'Friend',
      isUnlocked: true
    },
    {
      id: 19,
      name: 'Secret Stalker',
      username: '@silent_observer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face',
      status: 'Friend',
      isUnlocked: true
    },
    {
      id: 20,
      name: 'Secret Stalker',
      username: '@mystery_browser',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face',
      status: 'Friend',
      isUnlocked: false
    },
    {
      id: 21,
      name: 'Secret Stalker',
      username: '@covert_viewer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face',
      status: 'Friend',
      isUnlocked: true
    },
    {
      id: 22,
      name: 'Secret Stalker',
      username: '@phantom_browser',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face',
      status: 'Friend',
      isUnlocked: true
    },
    {
      id: 23,
      name: 'Secret Stalker',
      username: '@invisible_observer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
      status: 'Friend',
      isUnlocked: false
    },
    {
      id: 24,
      name: 'Secret Stalker',
      username: '@stealth_follower',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face',
      status: 'Friend',
      isUnlocked: true
    },
    {
      id: 25,
      name: 'Secret Stalker',
      username: '@ghost_admirer',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face',
      status: 'Friend',
      isUnlocked: true
    }
  ]

  // Combine stalkers based on showMoreStalkers state
  const displayStalkers = showMoreStalkers ? [...secretStalkers, ...additionalStalkers] : secretStalkers

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
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-white">Instalker</Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/home" className="flex items-center space-x-1 text-white hover:text-white/90 transition-colors">
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
              <Link href="/profile" className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors">
                <UserIcon className="h-5 w-5" />
                <span>Profile</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Profile Header Section */}
        <div 
          className="rounded-2xl shadow-sm p-6 mb-6 relative overflow-hidden"
          style={{
            backgroundImage: 'url("https://cdn-public.notjustanalytics.com/homepage/background.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 "></div>
          <div className="relative z-10">
          <div className="flex items-start space-x-6">
            {/* Profile Picture */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                    <span>VASU</span>
                  </h1>
                  <p className="text-white-600 mt-1">
                    Last updated: <span className="font-bold text-black">{new Date().toLocaleString('en-US', { 
                      hour: 'numeric', 
                      minute: '2-digit', 
                      hour12: true
                    })}</span>
                  </p>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>

              {/* Statistics */}
              <div className="flex space-x-8 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 transition-all duration-300">
                    {followersCount.toLocaleString()}
                  </div>
                  <div className="text-sm text-white-600">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 transition-all duration-300">
                    {followingsCount.toLocaleString()}
                  </div>
                  <div className="text-sm text-white-600">Followings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 transition-all duration-300">
                    {postsCount.toLocaleString()}
                  </div>
                  <div className="text-sm text-white-600">Posts</div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Stories Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 relative overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{
             backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.9
            }}
          ></div>
          <div className="relative z-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Stories</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
            {storyUsers.map((user, index) => (
              <div key={user.id} className="flex-shrink-0 text-center">
                <div 
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 p-1 mx-auto mb-2 cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => openStory(index)}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-0.5">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-600 truncate w-16">{user.name}</p>
              </div>
            ))}
          </div>
          </div>
        </div>

        {/* Secret Stalkers Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6 relative overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{
             
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.9
            }}
          ></div>
          <div className="relative z-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Secret Stalkers</h2>
          <div className="space-y-3">
            {displayStalkers.map((stalker) => (
              <div key={stalker.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="relative">
                  <img
                    src={stalker.image}
                    alt={stalker.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {!stalker.isUnlocked && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                      <LockClosedIcon className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">{stalker.name}</h3>
                      <p className="text-sm text-gray-600">{stalker.username}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {stalker.isUnlocked ? (
                        <span className="text-purple-600 text-sm font-medium">{stalker.status}</span>
                      ) : (
                        <button className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors">
                          Unlock Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Discover More Button */}
          {!showMoreStalkers && (
            <div className="mt-6 text-center">
              <button 
                onClick={() => setShowMoreStalkers(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Discover More
              </button>
            </div>
          )}
          </div>
        </div>
      </div>

      {/* Story Viewer Modal */}
      {isStoryOpen && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <div className="relative w-full h-full max-w-md mx-auto">
            {/* Progress Bars */}
            <div className="absolute top-4 left-4 right-4 z-10">
              <div className="flex space-x-1">
                {storyUsers[currentUserIndex].stories.map((_, index) => (
                  <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-white rounded-full transition-all duration-100 ${
                        index < currentStoryIndex ? 'w-full' : 
                        index === currentStoryIndex ? 'w-full' : 'w-0'
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

            {/* Close Button */}
            <button
              onClick={closeStory}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {/* User Info */}
            <div className="absolute top-16 left-4 z-10 flex items-center space-x-3">
              <img
                src={storyUsers[currentUserIndex].image}
                alt={storyUsers[currentUserIndex].name}
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <span className="text-white font-semibold">{storyUsers[currentUserIndex].name}</span>
            </div>

            {/* Story Content */}
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={storyUsers[currentUserIndex].stories[currentStoryIndex].image}
                alt="Story"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Navigation Areas */}
            <div className="absolute inset-0 flex">
              {/* Left area - Previous story/user */}
              <div 
                className="w-1/2 h-full cursor-pointer"
                onTouchStart={(e) => {
                  e.preventDefault()
                  const startX = e.touches[0].clientX
                  const startY = e.touches[0].clientY
                  let hasMoved = false
                  
                  const handleTouchMove = () => {
                    hasMoved = true
                  }
                  
                  const handleTouchEnd = (e: TouchEvent) => {
                    const endX = e.changedTouches[0].clientX
                    const endY = e.changedTouches[0].clientY
                    const deltaX = endX - startX
                    const deltaY = endY - startY
                    
                    // If it's a swipe, handle swipe, otherwise handle tap
                    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                      handleSwipe('right') // Swipe right = previous
                    } else if (!hasMoved) {
                      handleTap('left') // Tap left = previous story
                    }
                    
                    document.removeEventListener('touchend', handleTouchEnd)
                    document.removeEventListener('touchmove', handleTouchMove)
                  }
                  
                  document.addEventListener('touchend', handleTouchEnd)
                  document.addEventListener('touchmove', handleTouchMove)
                }}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  // Only handle click on desktop (no touch events)
                  if (!('ontouchstart' in window)) {
                    handleTap('left')
                  }
                }}
              />
              {/* Right area - Next story/user */}
              <div 
                className="w-1/2 h-full cursor-pointer"
                onTouchStart={(e) => {
                  e.preventDefault()
                  const startX = e.touches[0].clientX
                  const startY = e.touches[0].clientY
                  let hasMoved = false
                  
                  const handleTouchMove = () => {
                    hasMoved = true
                  }
                  
                  const handleTouchEnd = (e: TouchEvent) => {
                    const endX = e.changedTouches[0].clientX
                    const endY = e.changedTouches[0].clientY
                    const deltaX = endX - startX
                    const deltaY = endY - startY
                    
                    // If it's a swipe, handle swipe, otherwise handle tap
                    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                      handleSwipe('left') // Swipe left = next
                    } else if (!hasMoved) {
                      handleTap('right') // Tap right = next story
                    }
                    
                    document.removeEventListener('touchend', handleTouchEnd)
                    document.removeEventListener('touchmove', handleTouchMove)
                  }
                  
                  document.addEventListener('touchend', handleTouchEnd)
                  document.addEventListener('touchmove', handleTouchMove)
                }}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  // Only handle click on desktop (no touch events)
                  if (!('ontouchstart' in window)) {
                    handleTap('right')
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
