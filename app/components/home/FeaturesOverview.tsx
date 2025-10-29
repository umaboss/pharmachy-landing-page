'use client'

import {
  Building2,
  Users,
  Package,
  ShoppingCart,
  FileText,
  BarChart3,
  GitBranch,
  Warehouse,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation";

const FeaturesOverview = () => {
  const router = useRouter();
  
  const features = [
    { icon: Building2, title: "Business Management", description: "Manage multiple businesses with ease" },
    { icon: GitBranch, title: "Branch Management", description: "Coordinate across all locations" },
    { icon: Users, title: "Staff Management", description: "Role-based team organization" },
    { icon: Warehouse, title: "Inventory Tracking", description: "Real-time stock monitoring" },
    { icon: ShoppingCart, title: "POS Management", description: "Fast sales transactions" },
    { icon: FileText, title: "Smart Billing", description: "Professional invoices instantly" },
  ];

  return (
    <section className=" relative overflow-hidden">
      {/* Background Circles */}
      <div className="" />
      <div className="" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16"> {/* reduced mb from 20 to 16 */}
          <h2 className="text-4xl text-center flex items-center justify-center gap-[16px] md:text-5xl lg:text-5xl font-bold mb-3"> {/* reduced mb */}
            Core
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Capabilities
            </span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground mt-1"> {/* reduced size and margin */}
            Essential tools that power your business growth
          </p>
        </div>

        {/* Circular Feature Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 lg:w-48 lg:h-48 bg-gray-400/20 rounded-full flex items-center justify-center z-2" />

          {/* Feature Circles */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group flex justify-center">
                <div className="w-48 z-10 h-48 lg:w-56 lg:h-56 md:rounded-full rounded-[20px] bg-card border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 flex flex-col items-center justify-center p-4 lg:p-6 text-center group-hover:scale-105 group-hover:bg-card/80">
                  {/* Icon */}
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2 lg:mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                    <feature.icon className="w-6 h-6 lg:w-7 lg:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm lg:text-base font-semibold text-card-foreground leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
     
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14"> {/* reduced mt from 16 to 14 */}
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-full px-8 lg:px-12 py-4 lg:py-6 text-sm lg:text-base"
            onClick={() => router.push('/features')}
          >
            Discover All Features
            <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;
