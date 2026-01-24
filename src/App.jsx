import { useState } from 'react'
import { motion } from 'framer-motion'
import Logo from './components/Logo'
import LiquidBlobs from './components/LiquidBlobs'
import EmailForm from './components/EmailForm'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleBack = () => {
    setCurrentPage('home')
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={handleBack} />
  }

  if (currentPage === 'terms') {
    return <TermsOfService onBack={handleBack} />
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background gradient */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #220020 0%, #560000 100%)'
        }}
      />
      
      {/* Liquid blobs */}
      <LiquidBlobs />
      
      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 py-6 sm:py-8 md:py-12">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="pt-5 pb-2.5"
        >
          <Logo />
        </motion.div>
        
        <div className="w-full max-w-lg space-y-4 sm:space-y-5 md:space-y-6 text-center px-2 sm:px-0">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="font-roundo text-cream"
          >
            <p className="text-lg md:text-xl tagline-text">
              <span className="font-bold text-[18px]">digital dream-cards</span>{' '}
              <span className="font-semibold">✦</span>{' '}
              <span className="font-satoshi font-normal text-sm tagline-date">Dropping Feb '26</span>
            </p>
          </motion.div>
          
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="font-satoshi text-cream/90"
          >
            <p className="text-xs sm:text-xs md:text-sm leading-relaxed px-2 sm:px-4">
              In a sea of message bubbles and expiring stories, don't let your cutest moments get buried. Send them a link they won't see coming - with a card they'll never forget.
            </p>
          </motion.div>
          
          {/* Email Form */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            <EmailForm 
              onNavigateToPrivacy={() => setCurrentPage('privacy')}
              onNavigateToTerms={() => setCurrentPage('terms')}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default App
