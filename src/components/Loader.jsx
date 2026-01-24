import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const phrases = [
  'changing the way love is communicated...',
  'creating cards from dreams...',
  'rendering love at its finest...'
]

function Loader({ onComplete }) {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Cycle through phrases
    const phraseInterval = setInterval(() => {
      setCurrentPhrase((prev) => {
        if (prev < phrases.length - 1) {
          return prev + 1
        } else {
          // After last phrase, start exit animation
          clearInterval(phraseInterval)
          setIsExiting(true)
          // Wait for exit animation, then call onComplete
          setTimeout(() => {
            onComplete()
          }, 800) // Match exit animation duration
          return prev
        }
      })
    }, 2000) // Each phrase shows for 2s, total ~6s

    return () => clearInterval(phraseInterval)
  }, []) // Remove dependencies to prevent re-runs

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
            className="font-roundo text-cream lowercase font-medium text-xl sm:text-2xl md:text-3xl"
          >
            {phrases[currentPhrase]}
          </motion.h1>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default Loader
