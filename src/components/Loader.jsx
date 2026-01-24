import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const phrases = [
  'changing the way love is communicated...',
  'creating cards from dreams...',
  'rendering love at its finest...'
]

function Loader({ onComplete }) {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [isExiting, setIsExiting] = useState(false)
  const phraseIntervalRef = useRef(null)
  const checkReadyIntervalRef = useRef(null)

  useEffect(() => {
    let mounted = true

    // Check if site is ready
    const checkSiteReady = () => {
      // Check if fonts are loaded
      const fontsReady = document.fonts?.status === 'loaded' || 
                        (document.fonts?.check('1em Roundo') && document.fonts?.check('1em Satoshi'))
      
      // Check if root content is rendered
      const rootReady = document.getElementById('root')?.children.length > 0
      
      return fontsReady && rootReady
    }

    // Minimum display time to show at least first phrase
    const minDisplayTime = 1500
    const startTime = Date.now()

    // Check for readiness periodically
    checkReadyIntervalRef.current = setInterval(() => {
      if (!mounted || isExiting) return
      
      const elapsed = Date.now() - startTime
      
      // Only exit after minimum time and when site is ready
      if (elapsed >= minDisplayTime && checkSiteReady()) {
        // Site is ready, exit immediately
        if (phraseIntervalRef.current) {
          clearInterval(phraseIntervalRef.current)
        }
        clearInterval(checkReadyIntervalRef.current)
        setIsExiting(true)
        setTimeout(() => {
          onComplete()
        }, 800)
      }
    }, 100)

    // Cycle through phrases (will be interrupted if site loads early)
    phraseIntervalRef.current = setInterval(() => {
      if (!mounted || isExiting) return
      
      setCurrentPhrase((prev) => {
        if (prev < phrases.length - 1) {
          return prev + 1
        } else {
          // After last phrase, exit if not already exiting
          if (!isExiting) {
            clearInterval(phraseIntervalRef.current)
            setIsExiting(true)
            setTimeout(() => {
              onComplete()
            }, 800)
          }
          return prev
        }
      })
    }, 2000)

    return () => {
      mounted = false
      if (phraseIntervalRef.current) clearInterval(phraseIntervalRef.current)
      if (checkReadyIntervalRef.current) clearInterval(checkReadyIntervalRef.current)
    }
  }, [isExiting, onComplete])

  return (
    <motion.div
      id="loader-overlay"
      initial={{ opacity: 1 }}
      animate={isExiting ? { opacity: 0, y: '-100%' } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        background: 'linear-gradient(180deg, #220020 0%, #560000 100%)'
      }}
    >
      <div className="text-center px-4">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentPhrase}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="font-roundo text-cream lowercase font-medium text-base sm:text-lg md:text-xl"
          >
            {phrases[currentPhrase]}
          </motion.h1>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default Loader
