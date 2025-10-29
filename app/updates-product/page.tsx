import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Updates from "@/app/pages/Updates";

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Updates />
      <Footer />
    </div>
  );
}
