"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "Successful Projects", value: "200+" },
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
      </div>
    </div>
  );
}
