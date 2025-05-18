"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function PrivacyPolicy() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-24 sm:py-32">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="heading-2 mb-6">Privacy Policy</h1>
          <p className="paragraph mb-12">
            At ROXATE LTD, we take your privacy seriously. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you visit our website or use our services.
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="heading-3 mb-4">Information We Collect</h2>
              <p className="paragraph mb-4">
                We may collect personal information that you voluntarily provide
                to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Contact us through our website or by email</li>
                <li>Submit information through our contact forms</li>
                <li>Apply for employment opportunities</li>
                <li>Register for events or webinars</li>
                <li>Subscribe to newsletters or updates</li>
              </ul>
              <p className="paragraph mt-4">
                The personal information we may collect includes your name,
                email address, phone number, company name, job title, and any
                other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">How We Use Your Information</h2>
              <p className="paragraph mb-4">
                We may use the information we collect for various purposes,
                including to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Provide, operate, and maintain our services</li>
                <li>Respond to your inquiries and fulfill your requests</li>
                <li>Process and evaluate job applications</li>
                <li>
                  Send you administrative information, such as updates or
                  changes to our terms, conditions, and policies
                </li>
                <li>
                  Send you marketing communications, newsletters, and other
                  information that may be of interest to you
                </li>
                <li>Improve our website and services</li>
                <li>Analyze usage patterns and trends</li>
                <li>Protect against fraud and unauthorized transactions</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 mb-4">Third-Party Service Providers</h2>
              <p className="paragraph mb-4">
                We may share your information with third-party service providers
                who perform services on our behalf, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>WhatsApp Business - for client communication</li>
                <li>ElevenLabs - for voice synthesis services</li>
                <li>Google Analytics - for website analytics</li>
                <li>CRM systems - for managing customer relationships</li>
                <li>
                  Email service providers - for sending newsletters and
                  communications
                </li>
              </ul>
              <p className="paragraph mt-4">
                These third parties have access to your personal information
                only to perform these tasks on our behalf and are obligated not
                to disclose or use it for any other purpose.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">Data Retention</h2>
              <p className="paragraph">
                We will only keep your personal information for as long as it is
                necessary for the purposes set out in this Privacy Policy,
                unless a longer retention period is required or permitted by
                law.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">Your Data Protection Rights</h2>
              <p className="paragraph mb-4">
                Under the General Data Protection Regulation (GDPR), you have
                the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>
                  The right to access - You have the right to request copies of
                  your personal data.
                </li>
                <li>
                  The right to rectification - You have the right to request
                  that we correct any information you believe is inaccurate or
                  complete information you believe is incomplete.
                </li>
                <li>
                  The right to erasure - You have the right to request that we
                  erase your personal data, under certain conditions.
                </li>
                <li>
                  The right to restrict processing - You have the right to
                  request that we restrict the processing of your personal data,
                  under certain conditions.
                </li>
                <li>
                  The right to object to processing - You have the right to
                  object to our processing of your personal data, under certain
                  conditions.
                </li>
                <li>
                  The right to data portability - You have the right to request
                  that we transfer the data we have collected to another
                  organization, or directly to you, under certain conditions.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 mb-4">How to Exercise Your Rights</h2>
              <p className="paragraph">
                If you would like to exercise any of these rights, please
                contact us at privacy@roxate.com. We will respond to your
                request within 30 days. You will not have to pay a fee to access
                your personal data or to exercise any of your other rights.
                However, we may charge a reasonable fee if your request is
                clearly unfounded, repetitive, or excessive.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">Changes to This Privacy Policy</h2>
              <p className="paragraph">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the effective date. You are advised to
                review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">Contact Us</h2>
              <p className="paragraph">
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <div className="mt-4 space-y-1 text-slate-600">
                <p>Email: privacy@roxate.com</p>
                <p>Phone: +447822015226</p>
                <p>
                  Address: 71-75 Shelton Street, Covent Garden, London, United
                  Kingdom, WC2H 9JQ
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 text-sm text-slate-500">
            <p>Last Updated: May 19, 2025</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
