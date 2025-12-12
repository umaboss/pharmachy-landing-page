import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="relative  overflow-hidden py-12 lg:py-16 bg-white">
      {/* Background gradient */}
      <div className="absolute " />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Simplify Your Business?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already growing smarter with Zapeera. Start your free 14-day trial today—no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button size="lg" className="bg-gradient-to-r from-[#29CDCF] to-[#1947C4] hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full font-semibold group" asChild>
              <Link href="/contact-us">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white border-2 border-gray-300  hover:text-white hover:bg-gradient-to-r hover:from-[#29CDCF] hover:to-[#1947C4] text-gray-700 rounded-full font-semibold shadow-sm hover:shadow-lg transition-all duration-300" asChild>
              <Link href="/contact-us">Schedule a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
