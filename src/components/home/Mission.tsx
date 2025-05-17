"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    name: "Strategic AI Integration",
    description:
      "We seamlessly integrate AI solutions that align with your business objectives and enhance operational efficiency.",
  },
  {
    name: "Regional Expertise",
    description:
      "Deep understanding of Middle Eastern business landscape and requirements, ensuring culturally-aware implementations.",
  },
  {
    name: "Custom Solutions",
    description:
      "Tailored AI models and solutions designed specifically for your industry and business needs.",
  },
  {
    name: "Continuous Innovation",
    description:
      "Staying ahead of technological advancements to provide cutting-edge solutions for our clients.",
  },
];

export function Mission() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-24 sm:py-32 bg-primary-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h2 className="heading-2 mb-6">Our Mission</h2>
          <p className="paragraph">
            Empowering businesses across the Middle East with innovative AI
            solutions that drive digital transformation and sustainable growth.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="relative p-6 bg-white rounded-2xl shadow-sm ring-1 ring-primary-900/5"
            >
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                {feature.name}
              </h3>
              <p className="text-primary-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
