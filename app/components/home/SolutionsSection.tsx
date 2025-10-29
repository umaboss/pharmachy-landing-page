'use client'

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Container from "../ui/container";

const SolutionsSection = () => {
  const router = useRouter();

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
    <section className=" relative lg:pt-[100px] pt-[50px] overflow-hidden">
      <Container>
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Solutions for Every{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-secondary animate-gradient bg-[length:200%_auto]">
              Business Type
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-specific tools tailored to solve your unique business challenges and streamline operations.
          </p>
        </div>
      
      <div className="hmm flex flex-col md:gap-40 gap-10">
          {/* Pharmacy Section */}
          <div className="">
          <div className="mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    For Pharmacies
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The world of Zapeera Care, leading medical billing software in Pakistan integrated with EMR/EHR at its best. We streamline your practice for efficiency, profit, and better care.
                  </p>
                </div>
                
                {/* Features List */}
                <div className="space-y-4">
                  {["Over 5,000 deployments across the country", "Premium experience for 300,000 + patients", "Web & mobile based solutions"].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <div className="pt-4">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-lg px-8 py-3 text-base font-medium"
                    onClick={() => router.push('/solutions/pharmacy')}
                  >
                    VIEW DETAILS
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
              
              {/* Right Content - Visual Element */}
              <div className="">
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-xl">Z</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-card-foreground mb-2">
                        Zapeera Care
                      </h3>
                      <p className="text-muted-foreground">
                        Leading medical billing software integrated with POS System and EMR/EHR at its best.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <div className="text-2xl font-bold text-primary">5K+</div>
                        <div className="text-sm text-muted-foreground">Deployments</div>
                      </div>
                      <div className="text-center p-4 bg-secondary/5 rounded-lg">
                        <div className="text-2xl font-bold text-secondary">300K+</div>
                        <div className="text-sm text-muted-foreground">Patients</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Enhanced Solutions Grid - Show only 3 (excluding Pharmacy) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {solutions.filter(solution => solution.title !== 'Pharmacy').slice(0, 3).map((solution, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-700 cursor-pointer bg-background hover:shadow-2xl animate-fade-in-up backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => router.push(`/solutions/${solution.title.toLowerCase().replace(/\s+/g, '-')}`)}
              >
                {/* Animated gradient background that fades in on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:via-blue-500/5 group-hover:to-secondary/5 transition-all duration-1000" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1500" />
              
              {/* Content Section */}
              <div className="relative z-10 p-6">
                {/* Title with Icon-like Design */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
                    <span>{solution.title}</span>
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full transform group-hover:scale-x-150 transition-transform duration-300" />
                </div>

                {/* Image with Modern Frame */}
                <div className="relative w-full h-56 mb-6 rounded-2xl overflow-hidden border border-border/50 group-hover:border-primary/30 transition-colors duration-300">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Description with better typography */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-base line-clamp-2">
                  {solution.description}
                </p>

                {/* Features as Dots + Labels */}
                <div className="mb-6 space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 group-hover:gap-4 transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA with Modern Design */}
                <div className="pt-6 border-t border-border/50 group-hover:border-primary/30 transition-colors duration-300">
                  <div className="flex items-center justify-between group">
                    <span className="text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      View Details
                    </span>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                      <ArrowRight className="w-5 h-5 text-primary group-hover:text-primary-foreground group-hover:translate-x-0.5 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Corner accent on hover */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/20 group-hover:to-secondary/20 rounded-bl-full transition-all duration-700" />
            </Card>
          ))}
        </div>
      </div>

      
      </Container>
    </section>
  );
};

export default SolutionsSection;