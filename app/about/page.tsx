import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import About from "@/app/pages/About";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <About />
      <Footer />
    </div>
  );
}
