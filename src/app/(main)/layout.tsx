import NavbarComponent from "@/src/components/ui/NavbarComponent";
import FooterComponent from "@/src/components/ui/FooterComponent";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">

      <NavbarComponent />
      
      <main className="grow">{children}</main>

      <FooterComponent />
      
    </div>
  );
}