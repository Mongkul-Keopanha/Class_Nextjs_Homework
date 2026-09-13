
import "./globals.css"; // នេះជាចំណុចសំខាន់បំផុតដែលធ្វើឱ្យ CSS ដំណើរការ!

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