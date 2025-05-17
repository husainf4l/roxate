"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface SolutionCardProps {
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  index: number;
  inView: boolean;
}

export function SolutionCard({
  title,
  description,
  features,
  imageSrc,
  index,
  inView,
}: SolutionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col lg:flex-row gap-8 items-center p-8 bg-white rounded-2xl shadow-sm ring-1 ring-primary-900/5"
    >
      <div className="flex-1 space-y-4">
        <h3 className="text-2xl font-bold text-primary-900">{title}</h3>
        <p className="text-primary-600">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-primary-600">
              <svg
                className="h-5 w-5 flex-shrink-0 text-accent-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full lg:w-1/3 aspect-video relative rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </motion.div>
  );
}
