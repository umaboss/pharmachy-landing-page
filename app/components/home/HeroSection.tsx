"use client";
import { useState, useEffect, useMemo } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Container from "../ui/container";

const HeroSection = () => {

  // Image slider
  const images = useMemo(() => [
    "/images/pr.png",
    "/images/admin.png",
    "/images/POS.png",
  ], []);

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10" size="full" padding="none">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center py-20 sm:py-24 lg:py-32">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">All-in-One Business Solution</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Run Your Business
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary">
                  Smarter & Faster
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Manage sales, inventory, staff, and reports — all in one smart dashboard built to
                grow with your business.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 group text-base px-8 py-6"
                asChild
              >
                <Link href="/contact-us">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-border hover:border-primary/50 text-base px-8 py-6"
                asChild
              >
                <Link href="/about-us" className="flex items-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Stats or Features */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">5,000+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Active Businesses</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">99.9%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative lg:h-[700px] h-[450px] sm:h-[550px] flex items-center justify-center w-full">
            {/* Main Image with Fade Transition */}
            <div className="relative w-full h-full">
              {images.map((img, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    i === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={img}
                      alt={`Business Management Solution ${i + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                      priority={i === 0}
                      quality={90}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Image Indicator Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === currentImage
                      ? "w-8 h-2 bg-primary"
                      : "w-2 h-2 bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
