"use client";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Container from "../ui/container";

const HeroSection = () => {

  return (
    <section className="relative min-h-[90vh] pt-[40px] sm:min-h-screen flex flex-col items-center overflow-hidden bg-gradient-to-br from-[#26D2C6]/10 via-white to-[#1C22AA]/10">
      {/* Subtle texture background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.03)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      
      {/* Soft gradient effects in corners */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#29CDCF]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1947C4]/8 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10" size="xl" padding="none">
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <div className="flex flex-col items-center justify-center pt-16  sm:pt-20  md:pt-24  lg:pt-24 xl:pt-24 2xl:pt-28 ">
            {/* Centered Content */}
            <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-12">
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold leading-tight tracking-tight text-gray-900 font-montserrat mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6">
                Run Your Entire Business in One Platform
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-montserrat font-normal mb-6 sm:mb-7 md:mb-8 lg:mb-8 xl:mb-8">
                POS, inventory, multi-branch management, and real-time analytics—all unified. 
                Trusted by <span className="font-semibold text-gray-900">5,000+ businesses</span> across Pakistan.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#29CDCF] to-[#1947C4] hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-lg px-6 sm:px-8 md:px-8 lg:px-8 xl:px-8 2xl:px-10 py-5 sm:py-6 md:py-6 lg:py-6 xl:py-6 2xl:py-7 rounded-full font-semibold"
                  asChild
                >
                  <Link href="/contact-us">
                    Start Free Trial
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white border-2 border-gray-300 hover:border-[#1947C4] hover:text-white hover:bg-gradient-to-r hover:from-[#29CDCF] hover:to-[#1947C4] text-gray-700 text-sm sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-lg px-6 sm:px-8 md:px-8 lg:px-8 xl:px-8 2xl:px-10 py-5 sm:py-6 md:py-6 lg:py-6 xl:py-6 2xl:py-7 rounded-full font-semibold shadow-sm hover:shadow-lg transition-all duration-300"
                  asChild
                >
                  <Link href="/about-us">
                    How It Works
                  </Link>
                </Button>
              </div>
            </div>

            {/* Dashboard Image */}
            <div className="w-full max-w-4xl xl:max-w-5xl mx-auto mt-4 sm:mt-6 md:mt-8 lg:mt-8 xl:mt-8">
              <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
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
