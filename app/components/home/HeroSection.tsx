"use client";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Container from "../ui/container";

const HeroSection = () => {

  return (
    <section className="relative min-h-screen flex mt-[100px] flex-col items-center overflow-hidden bg-white">
      {/* Subtle texture background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.03)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      
      {/* Soft gradient effects in corners */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#29CDCF]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1947C4]/8 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10" size="xl" padding="none">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col items-center justify-center pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
            {/* Centered Content */}
            <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-900 font-poppins mb-6 lg:mb-8">
                Run Your Entire Business in One Platform
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans font-normal mb-8 lg:mb-10">
                POS, inventory, multi-branch management, and real-time analytics—all unified. 
                Trusted by <span className="font-semibold text-gray-900">5,000+ businesses</span> across Pakistan.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#29CDCF] to-[#1947C4] hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-full font-semibold"
                  asChild
                >
                  <Link href="/contact-us">
                    Start Free Trial
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white border-2 border-gray-300 hover:border-[#1947C4] hover:text-white hover:bg-gradient-to-r hover:from-[#29CDCF] hover:to-[#1947C4] text-gray-700 text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-full font-semibold shadow-sm hover:shadow-lg transition-all duration-300"
                  asChild
                >
                  <Link href="/about-us">
                    How It Works
                  </Link>
                </Button>
              </div>
            </div>

            {/* Dashboard Image */}
            <div className="w-full max-w-5xl mx-auto">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/dashboard.png" 
                  alt="Dashboard Preview" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
