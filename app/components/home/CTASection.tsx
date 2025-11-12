import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="  relative overflow-hidden pb-[80px]">
      {/* Background gradient */}
      <div className="absolute " />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Simplify Your Business?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already growing smarter with Zapeera. Start your free 14-day trial today—no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 group" asChild>
              <Link href="/contact-us">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact-us">Schedule a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
