'use client'

import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import Container from "../ui/container";

const AboutSection = () => {
  return (
    <section className=" relative overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="/images/admin.png"
              alt="About Zapeera"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-secondary">
                  Zapeera
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Zapeera is a leading unified business management platform designed to transform how businesses operate. We provide comprehensive solutions that streamline operations, boost productivity, and drive growth.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Trusted by 5,000+ Businesses</h3>
                  <p className="text-sm text-muted-foreground">Serving businesses across Pakistan and beyond with reliable, scalable solutions.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Industry-Leading Technology</h3>
                  <p className="text-sm text-muted-foreground">Built with cutting-edge technology to ensure performance, security, and scalability.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Comprehensive Solutions</h3>
                  <p className="text-sm text-muted-foreground">From POS systems to inventory management, we offer everything your business needs in one platform.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all duration-300 rounded-lg"
                asChild
              >
                <Link href="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;

