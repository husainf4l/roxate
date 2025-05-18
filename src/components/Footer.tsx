import Link from "next/link";

const navigation = {
  solutions: [
    { name: "AI Agents", href: "/ai-solutions#agents" },
    { name: "Process Optimization", href: "/ai-solutions#optimization" },
    { name: "Custom ML Models", href: "/ai-solutions#models" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Use", href: "/terms" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "#",
      icon: (props: React.ComponentProps<"svg">) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
  contact: [
    { label: "Phone", value: "+447822015226" },
    { label: "Email", value: "info@roxate.com" },
    {
      label: "Address",
      value:
        "71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ",
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-primary-300 text-sm font-medium">ROXATE LTD</p>
              <p className="text-primary-300 text-sm">
                AI Consulting & Implementation Company
              </p>
              <p className="text-primary-300 text-sm">
                UK Registered Company No. 16232608
              </p>
            </div>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-primary-400 hover:text-primary-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-200">
                  Solutions
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-primary-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-200">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-primary-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-200">
                Contact Us
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.contact.map((item) => (
                  <li key={item.label} className="text-primary-300">
                    <div className="flex flex-col">
                      <span className="font-medium">{item.label}:</span>
                      <span>{item.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-700 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-base text-primary-400">
              &copy; {new Date().getFullYear()} ROXATE LTD. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex items-center">
              <span className="text-sm text-primary-400 mr-2">Secure site</span>
              <svg
                className="h-5 w-5 text-green-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
