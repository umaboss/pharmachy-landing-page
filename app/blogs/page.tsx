import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Blog from "@/app/pages/Blog";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Blog />
      <Footer />
    </div>
  );
}

