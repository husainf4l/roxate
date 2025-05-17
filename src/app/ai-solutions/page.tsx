"use client";

import { useInView } from "react-intersection-observer";
import { SolutionCard } from "@/components/solutions/SolutionCard";

const solutions = [
  {
    title: "AI Agents & Automation",
    description:
      "Intelligent AI agents that streamline operations by automating complex tasks, making decisions, and continuously learning from interactions.",
    features: [
      "Natural Language Understanding",
      "Contextual Decision Making",
      "Process Automation",
      "Adaptive Learning",
      "Real-time Response",
      "Multi-agent Coordination",
    ],
    imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
  {
    title: "Intelligent Process Optimization",
    description:
      "Advanced AI systems that analyze workflows, identify inefficiencies, and implement smart optimizations for maximum operational efficiency.",
    features: [
      "Real-time Process Analysis",
      "Predictive Optimization",
      "Automated Workflow Adjustment",
      "Performance Monitoring",
      "Resource Allocation",
      "Cost Reduction Strategies",
    ],
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    title: "Custom ML Solutions",
    description:
      "Bespoke machine learning models designed to address specific business challenges and unlock new opportunities in your industry.",
    features: [
      "Custom Model Architecture",
      "Data Pipeline Development",
      "Model Training & Validation",
      "Performance Optimization",
      "Scalable Deployment",
      "Continuous Learning",
    ],
    imageSrc: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  {
    title: "AI-Powered Analytics",
    description:
      "Transform raw data into actionable insights with our advanced analytics solutions powered by artificial intelligence.",
    features: [
      "Predictive Analytics",
      "Pattern Recognition",
      "Anomaly Detection",
      "Trend Analysis",
      "Visual Analytics",
      "Real-time Reporting",
    ],
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
];

export default function AISolutions() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-24 sm:py-32">
      <div className="container">
        <div className="max-w-2xl">
          <h1 className="heading-2 mb-6">AI Solutions</h1>
          <p className="paragraph mb-6">
            We specialize in developing cutting-edge AI solutions that transform
            businesses across the Middle East. Our expertise lies in creating
            intelligent systems that adapt to your specific needs and drive
            measurable results.
          </p>
          <p className="paragraph">
            Whether you&apos;re looking to automate processes, optimize
            operations, or gain deeper insights from your data, our AI solutions
            are designed to scale with your business and deliver long-term
            value.
          </p>
        </div>

        <div ref={ref} className="mt-16 space-y-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.title}
              {...solution}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
