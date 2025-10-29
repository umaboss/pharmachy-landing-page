import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Solutions from "@/app/pages/Solutions";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Solutions />
      <Footer />
    </div>
  );
}
