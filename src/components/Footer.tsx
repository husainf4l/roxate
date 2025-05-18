import Link from "next/link";
import Image from "next/image";

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
    {
      name: "Twitter",
      href: "#",
      icon: (props: React.ComponentProps<"svg">) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
  contact: [
    { label: "Phone", value: "+44 20 1234 5678" },
    { label: "Email", value: "contact@roxate.com" },
    { 
      label: "Address", 
      value: "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom" 
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
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/roxate-logo.png" 
                alt="Roxate Logo" 
                width={40} 
                height={40} 
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-white">Roxate</span>
            </Link>
            <div className="space-y-2">
              <p className="text-primary-300 text-sm font-medium">
                Roxate Ltd.
              </p>
              <p className="text-primary-300 text-sm">
                AI Consulting & Implementation Company
              </p>
              <p className="text-primary-300 text-sm">
                UK Registered Company No. 12345678
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
          <p className="text-base text-primary-400 xl:text-center">
            &copy; {new Date().getFullYear()} Roxate Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
