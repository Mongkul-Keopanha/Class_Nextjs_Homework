// import Navbar from "@/src/components/ui/Navbar"; 
// import Footer from "@/src/components/ui/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // ប្តូរពី <html> និង <body> មកត្រឹម <div> បែបនេះ
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      <main className="grow">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}