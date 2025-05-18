"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Terms() {
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
          <h1 className="heading-2 mb-6">Terms of Use</h1>
          <p className="paragraph mb-12">
            Please read these terms of use carefully before using the services
            offered by Roxate Ltd.
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="heading-3 mb-4">1. Acceptance of Terms</h2>
              <p className="paragraph">
                By accessing or using our website or services, you agree to be
                bound by these Terms of Use and all applicable laws and
                regulations. If you do not agree with any of these terms, you
                are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">2. Use of Services</h2>
              <p className="paragraph mb-4">
                Our services are intended for legitimate business purposes. You
                agree not to use our services for any illegal or unauthorized
                purpose.
              </p>
              <p className="paragraph">
                You agree not to use our AI technology to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-2">
                <li>Generate harmful, offensive, or misleading content</li>
                <li>Impersonate individuals or entities</li>
                <li>
                  Engage in activities that violate privacy or intellectual
                  property rights
                </li>
                <li>Automate decision-making in ways that could cause harm</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 mb-4">3. Intellectual Property</h2>
              <p className="paragraph">
                All content included on this website, such as text, graphics,
                logos, images, as well as the compilation thereof, and any
                software used on the website, is the property of Roxate Ltd. or
                its suppliers and protected by copyright and intellectual
                property laws.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">4. Limitation of Liability</h2>
              <p className="paragraph">
                Roxate Ltd. shall not be liable for any direct, indirect,
                incidental, special, consequential or exemplary damages,
                including but not limited to, damages for loss of profits,
                goodwill, use, data or other intangible losses resulting from
                the use or the inability to use the service.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">5. Communication</h2>
              <p className="paragraph">
                By providing your contact information and opting in to receive
                communications, you consent to receive electronic communications
                from us, including via email and WhatsApp. You can opt out of
                these communications at any time by contacting us or using the
                unsubscribe methods provided.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">6. Changes to Terms</h2>
              <p className="paragraph">
                Roxate Ltd. reserves the right to modify these terms at any
                time. We will notify users of any changes by updating the date
                at the bottom of this page. It is your responsibility to check
                these terms periodically for changes.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">7. Governing Law</h2>
              <p className="paragraph">
                These terms shall be governed and construed in accordance with
                the laws of the United Kingdom, without regard to its conflict
                of law provisions.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">8. Contact Information</h2>
              <p className="paragraph">
                If you have any questions about these Terms, please contact us
                at:
              </p>
              <div className="mt-4 space-y-1 text-slate-600">
                <p>Email: legal@roxate.com</p>
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
