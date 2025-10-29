'use client';

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import Link from "next/link";
import { Switch } from "@/app/components/ui/switch";
import Container from "../ui/container";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses just getting started",
      monthlyPrice: 5000,
      yearlyPrice: 50000,
      tier: "Basic",
      features: [
        "1 Business",
        "1 Branch",
        "1 Manager Account",
        "1 Cashier Account",
        "Basic Reports & Analytics",
        "Staff Management",
        "Role-based Access",
        "24/7 Support",
        "Point of Sale (POS)",
      ],
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with multiple locations",
      monthlyPrice: 20000,
      yearlyPrice: 200000,
      tier: "Standard",
      features: [
        "1 Business",
        "5 Branches",
        "5 Manager Accounts",
        "5 Cashier Accounts",
        "Advanced Reports & Analytics",
        "Multi-branch Reports",
        "Staff Management",
        "Role-based Access",
        "24/7 Support",
        "Point of Sale (POS)",
      ],
      popular: true,
    },
    {
      name: "Business",
      description: "For businesses with multiple operations",
      monthlyPrice: 100000,
      yearlyPrice: 1000000,
      tier: "Business",
      features: [
        "3 Businesses",
        "5 Branches per Business",
        "5 Manager Accounts per Branch",
        "5 Cashier Accounts per Branch",
        "Advanced Reports & Analytics",
        "Multi-branch Reports",
        "Staff Management",
        "Role-based Access",
        "24/7 Support",
        "Point of Sale (POS)",
      ],
      popular: false,
    },
  ];

  return (
    <section className="">
     <Container>
     <div className="">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple,{" "}
            <span className="text-[#0C2C8A]">Transparent Pricing</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-[80px] gap-4">
            <span className={`text-sm ${!isYearly ? "font-semibold text-black" : "text-gray-500"}`}>
              Monthly
            </span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span className={`text-sm ${isYearly ? "font-semibold text-black" : "text-gray-500"}`}>
              Yearly
              <span className="ml-2 text-xs text-[#0C2C8A]">(Save 17%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 shadow-md hover:shadow-xl ${
                plan.popular
                  ? "border-2 border-[#0C2C8A] scale-105"
                  : "border border-gray-200"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-[#0C2C8A] text-white px-4 py-1 rounded-full text-sm font-medium shadow">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{plan.description}</p>

                {plan.monthlyPrice ? (
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">
                      Rs {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-500">
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                ) : (
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">Custom</span>
                  </div>
                )}
              </div>

              {/* Button */}
              <Button
                className={`w-full mb-6 py-3 rounded-lg text-white font-semibold transition-all ${
                  plan.popular
                    ? "bg-[#0C2C8A] hover:bg-[#0a256f]"
                    : "bg-gray-100 hover:bg-gray-200 text-black"
                }`}
              >
                {plan.monthlyPrice ? <Link href="/contact">Start Free Trial</Link> : <Link href="/contact">Contact Sales</Link>}
              </Button>

              {/* Features List */}
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0C2C8A]/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-[#0C2C8A]" />
                    </div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
     </Container>
    </section>
  );
};

export default PricingSection;
