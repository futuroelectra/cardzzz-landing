import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// SheetDB API endpoint
// Ensure your Google Sheet has a column named "email" (case-sensitive)
// Optional: Add a "timestamp" column for tracking submission times
const API_ENDPOINT = 'https://sheetdb.io/api/v1/a5si29f7xe2n8'

function EmailForm({ onNavigateToPrivacy, onNavigateToTerms }) {
  const [email, setEmail] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const buttonRef = useRef(null)

  // Magnetic hover effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 300 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return
    
    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    
    // Magnetic pull effect - stronger when closer
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)
    const maxDistance = 150
    const strength = Math.max(0, 1 - distance / maxDistance)
    
    x.set(distanceX * strength * 0.3)
    y.set(distanceY * strength * 0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(value)
  }

  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
    setIsValid(validateEmail(value))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isValid || isLoading) return

    setIsLoading(true)
    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: email.trim().toLowerCase(),
          timestamp: new Date().toISOString()
        }),
      })

      // Log response for debugging
      const responseData = await response.json()
      console.log('SheetDB Response:', responseData)

      if (response.ok) {
        // Check if SheetDB returned success
        if (responseData.created === 1 || responseData.id) {
          setIsSuccess(true)
          setEmail('')
          setIsValid(false)
        } else {
          // Handle duplicate entry or other SheetDB responses
          if (responseData.error) {
            console.warn('SheetDB Warning:', responseData.error)
            // Still show success if it's a duplicate (email already exists)
            if (responseData.error.includes('duplicate') || responseData.error.includes('already')) {
              setIsSuccess(true)
              setEmail('')
              setIsValid(false)
            } else {
              throw new Error(responseData.error || 'Submission failed')
            }
          } else {
            // Assume success if response is ok but no clear success indicator
            setIsSuccess(true)
            setEmail('')
            setIsValid(false)
          }
        }
      } else {
        // Handle HTTP errors
        const errorText = responseData?.error || `HTTP ${response.status}: ${response.statusText}`
        console.error('SheetDB Error:', errorText)
        throw new Error(errorText)
      }
    } catch (error) {
      console.error('Error submitting email:', error)
      // More user-friendly error messages
      let errorMessage = 'Something went wrong. Please try again.'
      if (error.message) {
        if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
          errorMessage = 'Network error. Please check your connection and try again.'
        } else if (error.message.includes('HTTP')) {
          errorMessage = 'Server error. Please try again in a moment.'
        } else {
          errorMessage = error.message
        }
      }
      alert(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="font-roundo text-cream text-xl md:text-2xl py-8"
      >
        Thank you for joining the waitlist.
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      {/* Email Input with Apple Glass Morphism Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="glass-input-container"
      >
        <input
          type="email"
          id="email-input"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          className="glass-input w-full px-4 py-3 md:px-6 md:py-4 rounded-[24px] md:rounded-[30px] font-roundo text-sm md:text-base text-cream placeholder:text-[#8C8C8C] focus:outline-none"
        />
      </motion.div>

      {/* Dynamic Button */}
      <motion.button
        ref={buttonRef}
        type="submit"
        disabled={!isValid || isLoading}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          x: xSpring,
          y: ySpring,
        }}
        className={`w-full py-3 md:py-4 rounded-2xl font-roundo font-bold text-lg md:text-[20px] transition-all duration-500 ${
          isValid
            ? 'animated-gradient-button'
            : 'bg-[#FFFADC] text-[#560000]'
        } ${isLoading ? 'opacity-70 cursor-wait' : 'cursor-pointer'}`}
        whileHover={isValid ? { scale: 1.02 } : {}}
        whileTap={isValid ? { scale: 0.98 } : {}}
      >
        {isValid ? (
          <>
            <span className="button-text-hidden">{isLoading ? 'Submitting...' : 'join the waitlist'}</span>
            <div className="wrapper">
              <span className="button-text">{isLoading ? 'Submitting...' : 'join the waitlist'}</span>
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
              <div className="circle circle-4"></div>
              <div className="circle circle-5"></div>
              <div className="circle circle-6"></div>
              <div className="circle circle-7"></div>
              <div className="circle circle-8"></div>
              <div className="circle circle-9"></div>
              <div className="circle circle-10"></div>
              <div className="circle circle-11"></div>
              <div className="circle circle-12"></div>
            </div>
          </>
        ) : (
          <span className="button-text-inactive">{isLoading ? 'Submitting...' : 'join the waitlist'}</span>
        )}
      </motion.button>

      {/* Legal Disclaimer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="font-satoshi text-cream/70 text-[8px] sm:text-[8px] md:text-[10px] leading-relaxed px-2 sm:px-4"
      >
        By submitting your email you acknowledge that you have read and agreed to our{' '}
        <button 
          type="button"
          onClick={onNavigateToPrivacy}
          className="underline text-cream/90 hover:text-cream/80 transition-colors"
        >
          privacy policy
        </button>{' '}
        and{' '}
        <button 
          type="button"
          onClick={onNavigateToTerms}
          className="underline text-cream/90 hover:text-cream/80 transition-colors"
        >
          terms of service
        </button>
        .
      </motion.p>
    </form>
  )
}

export default EmailForm
