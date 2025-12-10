'use client'

import { Check } from "lucide-react";
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
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <Container size="xl" padding="none">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Header */}
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
              Core Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential tools that power your business growth
            </p>
          </div>

          {/* Features Grid - 3 Columns Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:border-[#1947C4]/50 hover:shadow-md transition-all duration-300"
              >
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-2.5">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#1947C4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#1947C4]" />
                      </div>
                      <span className="text-sm text-gray-600 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturesOverview;
