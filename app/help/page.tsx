'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeftIcon, EnvelopeIcon, PhoneIcon, ChatBubbleLeftRightIcon, QuestionMarkCircleIcon, ExclamationTriangleIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function Help() {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFeedback(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setIsSubmitting(false)
      setFeedback({ name: '', email: '', subject: '', message: '' })
    }, 2000)
  }

  const faqs = [
    {
      question: "How do I get started with Instalker?",
      answer: "Simply click the 'Start Now' button on our homepage, and you'll be guided through a quick setup process to connect your Instagram account securely."
    },
    {
      question: "Is my data safe and private?",
      answer: "Absolutely! We use end-to-end encryption and never store your Instagram password. Your data is completely secure and private."
    },
    {
      question: "What analytics features are available?",
      answer: "We provide real-time follower tracking, engagement analytics, post performance metrics, audience demographics, and much more."
    },
    {
      question: "How accurate is the data?",
      answer: "Our data accuracy is 99.9% thanks to our advanced algorithms and real-time data processing systems."
    },
    {
      question: "Can I track multiple Instagram accounts?",
      answer: "Yes! You can track multiple Instagram accounts from a single dashboard for comprehensive analytics management."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Currently, we offer a web-based platform that works perfectly on mobile browsers. A dedicated mobile app is in development."
    }
  ]

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url("/images/362515982-60684b68-1925-4550-8efd-51a1509fc953.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Light overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
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
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link 
                href="/"
                className="flex items-center text-white/90 hover:text-white transition-colors"
              >
                <ArrowLeftIcon className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </div>
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">Instalker</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/about" className="text-white/90 hover:text-white transition-colors">About</Link>
              <Link href="/help" className="text-white/90 hover:text-white transition-colors">Help</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Help & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Support</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            We're here to help you succeed. Find answers to common questions or get in touch with our support team.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 rounded-2xl p-8 border border-gray-600/50 backdrop-blur-sm text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-blue-500/5 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <EnvelopeIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Email Support</h3>
              <p className="text-gray-200 mb-4">Get help via email</p>
              <a 
                href="mailto:instalker@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                instalker@gmail.com
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 rounded-2xl p-8 border border-gray-600/50 backdrop-blur-sm text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-transparent to-green-500/5 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Live Chat</h3>
              <p className="text-gray-200 mb-4">Chat with our team</p>
              <span className="text-green-400 font-medium">Available 24/7</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 rounded-2xl p-8 border border-gray-600/50 backdrop-blur-sm text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-purple-500/5 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <PhoneIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Phone Support</h3>
              <p className="text-gray-200 mb-4">Call us directly</p>
              <span className="text-purple-400 font-medium">Mon-Fri 9AM-6PM</span>
            </div>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 rounded-3xl shadow-2xl p-8 md:p-12 mb-16 border border-gray-600/50 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 via-transparent to-gray-500/5 rounded-3xl"></div>
          <div className="absolute top-4 right-4 w-32 h-32 bg-gray-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-gray-300/15 rounded-full blur-xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Send Us Feedback</h2>
            <p className="text-lg text-gray-200 mb-8 text-center max-w-2xl mx-auto">
              We value your feedback! Help us improve Instalker by sharing your thoughts, suggestions, or reporting any issues.
            </p>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircleIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                <p className="text-gray-200 mb-6">Your feedback has been sent successfully. We'll get back to you soon!</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={feedback.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={feedback.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={feedback.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Question</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Feature Request</option>
                    <option value="billing">Billing Issue</option>
                    <option value="technical">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={feedback.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-2xl hover:shadow-2xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Feedback'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 rounded-2xl p-6 border border-gray-600/50 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <QuestionMarkCircleIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-200 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Help Section */}
        <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-900/90 rounded-3xl shadow-2xl p-8 md:p-12 mb-16 border border-gray-600/50 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 via-transparent to-gray-500/5 rounded-3xl"></div>
          <div className="absolute top-4 right-4 w-32 h-32 bg-gray-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-gray-300/15 rounded-full blur-xl"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is always ready to help you succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:instalker@gmail.com"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-2xl hover:shadow-2xl transform hover:-translate-y-0.5"
              >
                <EnvelopeIcon className="w-5 h-5 mr-2" />
                Email Support
              </a>
              
              <Link
                href="/"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-2xl hover:shadow-2xl transform hover:-translate-y-0.5"
              >
                <ArrowLeftIcon className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer 
        className="border-t border-gray-200 relative mt-16"
        style={{
          backgroundImage: 'url("https://cdn-public.notjustanalytics.com/homepage/background.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-white">
            <p>&copy; 2024 Instalker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
