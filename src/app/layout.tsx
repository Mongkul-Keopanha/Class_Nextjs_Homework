import { Metadata } from "next";
import "./globals.css"; // នេះជាចំណុចសំខាន់បំផុតដែលធ្វើឱ្យ CSS ដំណើរការ!

export const metaData : Metadata = {
  title: {
    template: '%s | Online Store',
    default: 'Online Store'
  },
  keywords: "Skirt for women, Trouser for men, Kid clothes, E-commerce, Products, Selling products",
  description: "This site is the best platform for selling products in E-commerce modern website for Cambodian people.",
  openGraph: {
    title: 'Online Store',
    description: "This site is the best platform for selling products in E-commerce modern website for Cambodian people.",
    images: ['/online_store.png'],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* antialiased ជួយឱ្យអក្សរម៉ត់ច្បាស់ល្អ */}
      <body className="min-h-screen antialiased bg-background text-foreground" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}