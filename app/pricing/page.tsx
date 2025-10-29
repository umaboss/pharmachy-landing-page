import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Pricing from "@/app/pages/Pricing";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Pricing />
      <Footer />
    </div>
  );
}
