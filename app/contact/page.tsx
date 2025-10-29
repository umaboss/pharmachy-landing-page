import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Contact from "@/app/pages/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Contact />
      <Footer />
    </div>
  );
}
