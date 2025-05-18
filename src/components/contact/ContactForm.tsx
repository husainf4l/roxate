"use client";

import { useState } from "react";
import Link from "next/link";

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "submitted" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setStatus("submitted");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-primary-900"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="name"
          required
          className="mt-2 block w-full rounded-lg border border-primary-200 px-4 py-2 text-primary-900 placeholder-primary-400 focus:border-accent-500 focus:ring-accent-500"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-primary-900"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          required
          className="mt-2 block w-full rounded-lg border border-primary-200 px-4 py-2 text-primary-900 placeholder-primary-400 focus:border-accent-500 focus:ring-accent-500"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-primary-900"
        >
          Company
        </label>
        <input
          type="text"
          name="company"
          id="company"
          autoComplete="organization"
          required
          className="mt-2 block w-full rounded-lg border border-primary-200 px-4 py-2 text-primary-900 placeholder-primary-400 focus:border-accent-500 focus:ring-accent-500"
          placeholder="Your company"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-primary-900"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-2 block w-full rounded-lg border border-primary-200 px-4 py-2 text-primary-900 placeholder-primary-400 focus:border-accent-500 focus:ring-accent-500"
          placeholder="How can we help you?"
        />
      </div>

      <div className="mt-4">
        <div className="flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="whatsapp-opt-in"
              name="whatsapp-opt-in"
              type="checkbox"
              className="h-4 w-4 rounded border-primary-300 text-accent-600 focus:ring-accent-500"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="whatsapp-opt-in" className="text-primary-600">
              I agree to be contacted via WhatsApp for updates and support from
              Roxate.
            </label>
            <p className="text-primary-500 mt-1">
              See our{" "}
              <Link
                href="/privacy-policy"
                className="text-accent-600 hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              for how we handle your data.
            </p>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "submitted" && (
        <p className="text-sm text-green-600">
          Thanks for your message! We&apos;ll be in touch soon.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
