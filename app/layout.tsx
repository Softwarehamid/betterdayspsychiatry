import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Better Days Psychiatry in St. Cloud, MN | Psychiatry, Therapy & Medication Management",
  description:
    "Better Days Psychiatry provides psychiatric care, therapy, counseling, ADHD treatment, anxiety treatment, depression treatment, and medication management in St. Cloud, MN.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
