import { motion } from 'framer-motion'
import Logo from './Logo'

function PrivacyPolicy({ onBack }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background gradient */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #220020 0%, #560000 100%)'
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-start px-4 sm:px-6 py-6 sm:py-8 md:py-12">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="pt-5 pb-2.5"
        >
          <Logo />
        </motion.div>
        
        <div className="w-full max-w-3xl space-y-6 text-left px-4 sm:px-6 md:px-8 py-8">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={onBack}
            className="font-satoshi text-cream/80 hover:text-cream text-sm underline mb-4"
          >
            ← Back
          </motion.button>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="font-roundo text-cream text-2xl md:text-3xl font-bold mb-6"
          >
            Privacy Policy
          </motion.h1>

          {/* Last Updated */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-satoshi text-cream/70 text-xs mb-8"
          >
            Last Updated: January 2026
          </motion.p>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="legal-page font-satoshi text-cream/90 text-sm md:text-base leading-relaxed space-y-6"
          >
            <section>
              <h2 className="font-roundo text-cream text-lg md:text-xl font-semibold mb-3">1. Introduction</h2>
              <p>
                Moli Pty Ltd ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you provide your email address to join our waitlist for cardzzz.
              </p>
              <p>
                We are based in Cape Town, South Africa, and comply with the Protection of Personal Information Act (POPIA) and the General Data Protection Regulation (GDPR).
              </p>
            </section>

            <section>
              <h2 className="font-roundo text-cream text-lg md:text-xl font-semibold mb-3">2. Information We Collect</h2>
              <p>
                We collect the following personal information:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>Email address (required to join the waitlist)</li>
                <li>IP address and browser information (automatically collected)</li>
                <li>Date and time of submission</li>
              </ul>
            </section>

            <section>
              <h2 className="font-roundo text-cream text-lg md:text-xl font-semibold mb-3">3. How We Use Your Information</h2>
              <p>We use your email address to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>Notify you when cardzzz launches</li>
                <li>Send you updates about our product</li>
                <li>Provide early access opportunities</li>
              </ul>
              <p className="mt-3">
                We do not sell, rent, or share your personal information with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="font-roundo text-cream text-lg md:text-xl font-semibold mb-3">4. Legal Basis for Processing (GDPR)</h2>
              <p>
                We process your personal data based on your consent when you voluntarily provide your email address. You may withdraw your consent at any time by unsubscribing from our emails.
              </p>
            </section>

            <section>
              <h2 className="font-roundo text-cream text-lg md:text-xl font-semibold mb-3">5. Your Rights</h2>
              <p>Under POPIA and GDPR, you have the right to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, contact us at: <a href="mailto:privacy@moli.co.za" className="underline text-cream hover:text-cream/80">privacy@moli.co.za</a>
              </p>
            </section>

            <section>
              <h2 className="font-roundo text-cream text-lg md:text-xl font-semibold mb-3">6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="font-roundo text-cream text-lg md:text-xl font-semibold mb-3">7. Data Retention</h2>
              <p>
                We retain your email address until you unsubscribe or request deletion. You may unsubscribe at any time using the link in our emails.
              </p>
            </section>

            <section>
              <h2 className="font-roundo text-cream text-lg md:text-xl font-semibold mb-3">8. International Transfers</h2>
              <p>
                Your data is stored securely and may be processed outside South Africa. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="font-roundo text-cream text-lg md:text-xl font-semibold mb-3">9. Children's Privacy</h2>
              <p>
                Our service is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="font-roundo text-cream text-lg md:text-xl font-semibold mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="font-roundo text-cream text-lg md:text-xl font-semibold mb-3">11. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <p className="mt-2">
                <strong>Moli Pty Ltd</strong><br />
                Cape Town, South Africa<br />
                Email: <a href="mailto:privacy@moli.co.za" className="underline text-cream hover:text-cream/80">privacy@moli.co.za</a>
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
