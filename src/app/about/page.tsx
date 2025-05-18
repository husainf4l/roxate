"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "AI Agent Development",
    description:
      "Custom AI agents for automating complex business processes and enhancing decision-making.",
    icon: (props: React.ComponentProps<"svg">) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      </svg>
    ),
  },
  {
    title: "Process Automation",
    description:
      "End-to-end automation solutions that streamline operations and reduce manual workload.",
    icon: (props: React.ComponentProps<"svg">) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "HR Systems",
    description:
      "AI-powered HR solutions for recruitment, employee engagement, and performance management.",
    icon: (props: React.ComponentProps<"svg">) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    title: "ISO-Ready AI Solutions",
    description:
      "Enterprise-grade AI systems built to comply with international standards and regulations.",
    icon: (props: React.ComponentProps<"svg">) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

const clientTypes = [
  {
    type: "Banks & Financial Institutions",
    description:
      "Secure AI solutions for risk assessment, fraud detection, and customer service automation.",
  },
  {
    type: "Enterprise Organizations",
    description:
      "Comprehensive AI systems that scale across departments and integrate with existing infrastructure.",
  },
  {
    type: "SMEs in MENA Region",
    description:
      "Affordable, localized AI solutions designed specifically for the Middle Eastern market.",
  },
];

const stats = [
  { label: "Client Satisfaction", value: "98%" },
  { label: "Regional Presence", value: "7 Countries" },
];

const values = [
  {
    title: "Innovation",
    description:
      "Continuously pushing boundaries in AI technology and implementation.",
  },
  {
    title: "Excellence",
    description:
      "Delivering high-quality solutions that exceed client expectations.",
  },
  {
    title: "Partnership",
    description:
      "Building long-term relationships with clients across the Middle East.",
  },
  {
    title: "Integrity",
    description: "Operating with transparency, ethics, and accountability.",
  },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-24 sm:py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12">
          <div>
            <h1 className="heading-2 mb-6">About Roxate</h1>
            <div className="space-y-6 text-primary-600">
              <p>
                Founded in the UK and deeply rooted in the Middle East, Roxate
                is a leading force in AI implementation and process
                optimization. We bridge the gap between cutting-edge technology
                and practical business solutions.
              </p>
              <p>
                Our team of experts combines global expertise with local
                insight, enabling us to deliver solutions that are both
                innovative and culturally attuned to the Middle Eastern market.
              </p>
            </div>

            <dl className="mt-16 grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5 }}
                  className="flex flex-col"
                >
                  <dt className="text-base text-primary-600">{stat.label}</dt>
                  <dd className="text-4xl font-bold tracking-tight text-accent-600">
                    {stat.value}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>

          <div className="relative h-[400px] lg:h-full">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c"
              alt="Roxate office"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div ref={ref} className="mt-32">
          <h2 className="heading-2 mb-16 text-center">Our Values</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 bg-white rounded-2xl shadow-sm ring-1 ring-primary-900/5"
              >
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-primary-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-32">
          <h2 className="heading-2 mb-16 text-center">Our Services</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 bg-white rounded-2xl shadow-sm ring-1 ring-primary-900/5"
              >
                <div className="mb-4">
                  <service.icon className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-primary-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-32">
          <h2 className="heading-2 mb-16 text-center">Our Clients</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {clientTypes.map((client, index) => (
              <motion.div
                key={client.type}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 bg-white rounded-2xl shadow-sm ring-1 ring-primary-900/5"
              >
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  {client.type}
                </h3>
                <p className="text-primary-600">{client.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-32">
          <div className="bg-accent-50 rounded-2xl p-8 md:p-12">
            <h2 className="heading-3 mb-6">
              Ready to transform your business?
            </h2>
            <p className="text-lg text-primary-600 mb-8">
              Contact us today to discuss how our AI solutions can address your
              unique challenges.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
