"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const industries = [
  {
    name: "Healthcare",
    description:
      "AI-powered diagnostics, patient care optimization, and healthcare management solutions.",
    icon: (props: React.ComponentProps<"svg">) => (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    ),
  },
  {
    name: "Finance",
    description:
      "Intelligent risk assessment, fraud detection, and automated financial operations.",
    icon: (props: React.ComponentProps<"svg">) => (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
  {
    name: "Logistics",
    description:
      "Supply chain optimization, route planning, and inventory management solutions.",
    icon: (props: React.ComponentProps<"svg">) => (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
        />
      </svg>
    ),
  },
  {
    name: "Manufacturing",
    description:
      "Predictive maintenance, quality control, and production optimization.",
    icon: (props: React.ComponentProps<"svg">) => (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
        />
      </svg>
    ),
  },
  {
    name: "Retail",
    description:
      "Personalized customer experiences, inventory forecasting, and smart pricing strategies.",
    icon: (props: React.ComponentProps<"svg">) => (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 3 1.5 1.5 2.25-.75a3.037 3.037 0 0 1 1.5-.75V1.5M13.5 1.5V3a3.037 3.037 0 0 1 1.5.75l2.25.75 1.5-1.5M21.75 3v4.5a3.037 3.037 0 0 1-.75 1.5l-.75 2.25.75 1.5M21.75 21l-1.5-1.5-2.25.75a3.037 3.037 0 0 1-1.5.75V23.5M10.5 23.5V22a3.037 3.037 0 0 1-1.5-.75l-2.25-.75-1.5 1.5M2.25 21v-4.5a3.037 3.037 0 0 1 .75-1.5l.75-2.25-.75-1.5M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
  {
    name: "Energy",
    description:
      "Smart grid management, consumption forecasting, and efficiency optimization.",
    icon: (props: React.ComponentProps<"svg">) => (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
        />
      </svg>
    ),
  },
];

export function Industries() {
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
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h2 className="heading-2 mb-6">Industries We Serve</h2>
          <p className="paragraph">
            Our AI solutions are tailored for diverse industries across the
            Middle East, helping businesses adapt and thrive in the digital age.
          </p>
        </motion.div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="relative p-6 bg-white rounded-2xl shadow-sm ring-1 ring-primary-900/5"
            >
              <div className="flex items-start gap-4">
                <industry.icon className="h-6 w-6 text-accent-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-primary-600">{industry.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
