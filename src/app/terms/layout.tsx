import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Roxate",
  description:
    "Terms of Use for Roxate Ltd. Learn about our service terms and conditions.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
