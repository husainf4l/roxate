"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

const navigation = [
  { name: "Home", href: "/" },
  { name: "AI Solutions", href: "/ai-solutions" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary-100">
      <nav className="container h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary-900">
          Roxate
        </Link>

        <ul className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent-600",
                  pathname === item.href
                    ? "text-accent-600"
                    : "text-primary-600"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className="btn-primary">
          Get Started
        </Link>
      </nav>
    </header>
  );
}
