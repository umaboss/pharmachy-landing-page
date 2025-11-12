'use client'

import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/container";

const FeaturesOverview = () => {
  
  const features = [
    {
      title: "Multiple Business Management",
      description: "Effortlessly manage multiple businesses from a single, unified dashboard.",
      benefits: [
        "Consolidated view of all business operations",
        "Switch between businesses with one click",
        "Separate accounting and reporting per business",
        "Individual branding for each business",
      ],
      image: "/images/business.webp",
    },
    {
      title: "Multi-Branch Management",
      description: "Coordinate and monitor operations across all your locations in real-time.",
      benefits: [
        "Centralized control with branch autonomy",
        "Real-time sync across all locations",
        "Branch-specific performance tracking",
        "Inter-branch inventory transfers",
      ],
      image: "/feature/Branch Menagement.webp",
    },
    {
      title: "Staff Management",
      description: "Organize your team with comprehensive employee management tools.",
      benefits: [
        "Role-based access control",
        "Time tracking and attendance",
        "Performance analytics per employee",
        "Shift scheduling and management",
      ],
      image: "/feature/Staff Menagement.webp",
    },
    {
      title: "Inventory Management & Tracking",
      description: "Keep perfect track of your stock levels with intelligent inventory management.",
      benefits: [
        "Real-time stock level monitoring",
        "Automated low-stock alerts",
        "Batch and serial number tracking",
        "Supplier management",
      ],
      image: "/feature/Inventory Management.webp",
    },
    {
      title: "Advanced POS Management",
      description: "Lightning-fast point-of-sale system that works online and offline.",
      benefits: [
        "Quick checkout process",
        "Multiple payment methods",
        "Offline mode with auto-sync",
        "Customer display integration",
      ],
      image: "/feature/POS.webp",
    },
    {
      title: "Smart Billing & Invoicing",
      description: "Generate professional invoices and receipts instantly.",
      benefits: [
        "Customizable invoice templates",
        "Automated recurring billing",
        "Tax calculation and compliance",
        "Email and SMS invoice delivery",
      ],
      image: "/feature/Smart Billing & Invoicing.webp",
    },
  ];

  return (
    <section className=" relative overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Core{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-secondary">
              Capabilities
            </span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Essential tools that power your business growth
          </p>
        </div>

        {/* Features Grid - 3 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              <div className="flex flex-col h-full">
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden bg-muted">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {feature.description}
                  </p>

                  {/* Benefits - Full List */}
                  <ul className="space-y-2 flex-grow">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                        <span className="text-xs text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all duration-300 rounded-lg px-8 py-6"
            asChild
          >
            <Link href="/features">
              More Features
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturesOverview;
