'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-200 via-pink-200 to-blue-200"></div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex">
        {/* Left Side - Broken Heart Illustration */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="relative max-w-md w-full">
            <Image
              src="https://ollya.codexcoder.com/static/media/404.149d7b98001a8aca61a1.jpg"
              alt="Broken Heart Illustration"
              width={400}
              height={400}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Side - 404 Text */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gradient-to-b from-blue-100 to-blue-200">
          <div className="text-center max-w-lg">
            {/* 404 Numbers */}
            <div className="mb-8">
              <h1 className="text-8xl md:text-9xl font-bold leading-none">
                <span className="text-blue-800 drop-shadow-lg">4</span>
                <span className="text-pink-500 drop-shadow-lg">0</span>
                <span className="text-blue-800 drop-shadow-lg">4</span>
              </h1>
            </div>

            {/* Main Error Message */}
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
                Ops! This Page Not Found
              </h2>
            </div>

            {/* Detailed Message */}
            <div className="mb-8">
              <p className="text-xl text-gray-600 leading-relaxed">
                We are Really Sorry But the Page you Requested is Missing :(
              </p>
            </div>

            {/* Go Back Button - Centered */}
            <div className="flex justify-center">
              <Link
                href="/"
                className="inline-block px-8 py-4 bg-pink-300 hover:bg-pink-400 text-gray-800 font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Go Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-pink-300/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-300/30 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-300/30 rounded-full blur-lg"></div>
    </div>
  )
}
