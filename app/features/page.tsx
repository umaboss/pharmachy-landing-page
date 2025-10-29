import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Features from "@/app/pages/Features";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Features />
      <Footer />
    </div>
  );
}
