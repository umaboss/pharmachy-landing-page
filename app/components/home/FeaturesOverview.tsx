'use client'

import Image from "next/image";
import Container from "../ui/container";

const FeaturesOverview = () => {
  
  const features = [
    {
      title: "Multiple Business Management",
      description: "Effortlessly manage multiple businesses from a single, unified dashboard.",
      image: "/images/multibranch.jpeg",
    },
    {
      title: "Multi-Branch Management",
      description: "Coordinate and monitor operations across all your locations in real-time.",
      image: "/feature/Branch Menagement.webp",
    },
    {
      title: "Staff Management",
      description: "Organize your team with comprehensive employee management tools.",
      image: "/images/staff.jpeg",
    },
    {
      title: "Inventory Management & Tracking",
      description: "Keep perfect track of your stock levels with intelligent inventory management.",
      image: "/images/inventory.jpeg",
    },
    {
      title: "Advanced POS Management",
      description: "Lightning-fast point-of-sale system that works online and offline.",
      image: "/images/Retail POS.jpeg",
    },
    {
      title: "Smart Billing & Invoicing",
      description: "Generate professional invoices and receipts instantly.",
      image: "/images/smart_invoice.jpeg",
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-[rgb(250,251,251)] gradient-to-br from-[#26D2C6]/10 via-white to-[#1C22AA]/10">
      <Container size="xl" padding="none">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Header */}
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-[48px] font-bold text-gray-900 mb-4 lg:mb-6 font-montserrat">
                Core Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essential tools that power your business growth
            </p>
          </div>

          {/* Features Grid - 3 Columns Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-4 hover:border-[#1947C4]/50 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturesOverview;
