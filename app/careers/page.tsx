import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Careers from "@/app/pages/Careers";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Careers />
      <Footer />
    </div>
  );
}
