import { motion } from 'framer-motion'
import Logo from './Logo'

function TermsOfService({ onBack }) {
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
            Terms of Service
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
              <h2 className="font-roundo text-cream text-lg md:text-xl font-semibold mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing or using the cardzzz waitlist service provided by Moli Pty Ltd ("we", "us", "our"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.
              </p>
              <p>
                We are a company registered in South Africa, operating from Cape Town.
              </p>
            </section>

            <section>
              <h2 className="font-roundo text-cream text-lg md:text-xl font-semibold mb-3">2. Description of Service</h2>
              <p>
                cardzzz is a digital card service currently in development. By joining our waitlist, you will receive notifications about product launches, updates, and early access opportunities.
              </p>
            </section>

            <section>
              <h2 className="font-roundo text-cream text-lg md:text-xl font-semibold mb-3">3. Eligibility</h2>
              <p>
                You must be at least 18 years old to use this service. By joining the waitlist, you represent and warrant that you are of legal age and have the capacity to enter into this agreement.
              </p>
            </section>

            <section>
              <h2 className="font-roundo text-cream text-lg md:text-xl font-semibold mb-3">4. User Accounts and Information</h2>
              <p>
                To join the waitlist, you must provide a valid email address. You are responsible for:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>Providing accurate and complete information</li>
                <li>Maintaining the security of your email account</li>
                <li>All activities that occur under your email address</li>
              </ul>
            </section>

            <section>
              <h2 className="font-roundo text-cream text-lg md:text-xl font-semibold mb-3">5. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>Use the service for any illegal purpose</li>
                <li>Provide false or misleading information</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the service</li>
                <li>Use automated systems to submit multiple entries</li>
              </ul>
            </section>

            <section>
              <h2 className="font-roundo text-cream text-lg md:text-xl font-semibold mb-3">6. Intellectual Property</h2>
              <p>
                All content, features, and functionality of the cardzzz service, including but not limited to text, graphics, logos, and software, are the exclusive property of Moli Pty Ltd and are protected by copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="font-roundo text-cream text-lg md:text-xl font-semibold mb-3">7. Privacy</h2>
              <p>
                Your use of the service is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="font-roundo text-cream text-lg md:text-xl font-semibold mb-3">8. Service Availability</h2>
              <p>
                We reserve the right to modify, suspend, or discontinue the waitlist service at any time without prior notice. We do not guarantee that the service will be available at all times or that access will be uninterrupted.
              </p>
            </section>

            <section>
              <h2 className="font-roundo text-cream text-lg md:text-xl font-semibold mb-3">9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Moli Pty Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="font-roundo text-cream text-lg md:text-xl font-semibold mb-3">10. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Moli Pty Ltd, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of your use of the service or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="font-roundo text-cream text-lg md:text-xl font-semibold mb-3">11. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of South Africa. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of South Africa.
              </p>
            </section>

            <section>
              <h2 className="font-roundo text-cream text-lg md:text-xl font-semibold mb-3">12. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the updated terms on this page and updating the "Last Updated" date. Your continued use of the service after such changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="font-roundo text-cream text-lg md:text-xl font-semibold mb-3">13. Severability</h2>
              <p>
                If any provision of these Terms of Service is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="font-roundo text-cream text-lg md:text-xl font-semibold mb-3">14. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <p className="mt-2">
                <strong>Moli Pty Ltd</strong><br />
                Cape Town, South Africa<br />
                Email: <a href="mailto:legal@moli.co.za" className="underline text-cream hover:text-cream/80">legal@moli.co.za</a>
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService
