'use client'

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import Container from "../ui/container";

const SolutionsSection = () => {

  const solutions = [
    {
      image: "/store.png",
      title: "Retail",
      description: "Complete retail management with multi-branch sync, fast POS, and real-time analytics.",
      features: ["Multi-branch Sync", "Fast POS", "Real-time Analytics"]
    },
    {
      image: "/phar.png",
      title: "Pharmacy",
      description: "Specialized pharmacy management with medication tracking, batch management, and compliance tools.",
      features: ["Medication Tracking", "Batch Management", "Compliance Tools"]
    },
    {
      image: "/hotle.jpg",
      title: "Restaurant",
      description: "Manage menus, kitchen orders, tables, and track food costs with our restaurant solution.",
      features: ["Menu Management", "Kitchen Orders", "Table Management"]
    },
    {
      image: "/store2.png",
      title: "Wholesale",
      description: "Bulk order processing, flexible pricing, customer portals, and credit management.",
      features: ["Bulk Order Processing", "Flexible Pricing", "Customer Portals"]
    },
    {
      image: "/phar2.png",
      title: "Departmental Store",
      description: "Multi-category management, synchronized counters, promotions, and barcode integration.",
      features: ["Multi-category Management", "Synchronized Counters", "Promotions"]
    },
    {
      image: "/pr.png",
      title: "Distribution",
      description: "Comprehensive distribution management with inventory tracking and logistics optimization.",
      features: ["Inventory Tracking", "Logistics Optimization", "Route Planning"]
    },
  ];

  return (
    <section className="pt-20 lg:pt-32 relative overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Solutions for Every{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-secondary">
              Business Type
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-specific tools tailored to solve your unique business challenges and streamline operations.
          </p>
        </div>
      
        {/* All Solutions in One Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Pharmacy Section - First Card */}
          <Link
            href="/solutions/pharmacy"
            className="block h-full"
          >
            <Card className="group relative overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card h-full flex flex-col">
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden bg-muted">
                <Image
                  src="/phar.png"
                  alt="Pharmacy"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Pharmacy
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                  Specialized pharmacy management with medication tracking, batch management, and compliance tools.
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {["Medication Tracking", "Batch Management", "Compliance Tools"].map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all mt-auto">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </div>
              </div>
            </Card>
          </Link>

          {/* Other Solutions - 3 Cards */}
          {solutions.filter(solution => solution.title !== 'Pharmacy').slice(0, 3).map((solution, index) => (
            <Link
              key={index}
              href={`/solutions/${solution.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="block h-full"
            >
              <Card className="group relative overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card h-full flex flex-col">
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden bg-muted">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all mt-auto">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SolutionsSection;