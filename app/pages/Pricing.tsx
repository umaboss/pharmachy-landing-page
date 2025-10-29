'use client'

import { memo, useState, useCallback, useMemo } from "react";
import type { Metadata } from 'next';
import FloatingCTA from "@/app/components/FloatingCTA";
import { Check, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Switch } from "@/app/components/ui/switch";
import Container from "../components/ui/container";
import Loading from "../components/ui/loading";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Pricing - Affordable Business Management Plans',
  description: 'Choose the perfect Zapeera plan for your business. Transparent pricing with 14-day free trial. Starter, Professional, and Enterprise plans available.',
  keywords: [
    'business management pricing',
    'POS system pricing',
    'inventory management cost',
    'business software plans',
    'zapeera pricing',
    'affordable business management',
    'free trial business software'
  ],
  openGraph: {
    title: 'Pricing - Affordable Business Management Plans',
    description: 'Choose the perfect Zapeera plan for your business. Transparent pricing with 14-day free trial.',
    url: 'https://zapeera.com/pricing',
    images: ['/og-pricing.jpg'],
  },
  alternates: {
    canonical: 'https://zapeera.com/pricing',
  },
};

const Pricing = memo(() => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = useCallback((checked: boolean) => {
    setIsYearly(checked);
  }, []);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses just getting started",
      monthlyPrice: 5000,
      yearlyPrice: 50000,
      tier: "Basic",
      features: {
        "Business": "1",
        "Branches": "1",
        "Manager Accounts": "1",
        "Cashier Accounts": "1",
        "Reports & Analytics": "Basic",
        "Multi-branch Reports": false,
        "Staff Management": true,
        "Role-based Access": true,
        "24/7 Support": true,
        "Point of Sale (POS)": true,
      },
      featureList: [
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
      extraFeatures: {
        "Point of Sale (POS)": "✓",
        "Inventory Management": "✓",
        "Medical/Non Medical Products": "✓",
        "Product Batching": "✓",
        "Expiry Date Tracking": "✓",
        "Stock Management": "✓",
        "Low Stock Alerts": "✓",
        "Supplier Management": "✓",
        "Manufacturer Management": "✓",
        "Shelf Management": "✓",
        "Purchase Orders": "✓",
        "Refunds & Returns": "✓",
        "Inventory Reports": "Basic",
        "Customer Reports": "Basic",
        "Profit & Loss Reports": "Basic",
        "Sales Analytics": "Basic",
        "Real-time Dashboard": "✓",
        "Branch Performance": false,
        "Export Data": "Basic",
        "Staff Management": "Basic",
        "Role-based Access": "Basic",
        "Branch Management": false,
        "Company Management": false,
        "Shift Management": false,
        "Advanced Analytics": false,
        "Custom Reports": false,
        "Data Backup": "Basic",
        "Security Features": "Basic",
        "Audit Logs": "Basic",
        "Offline Mode": false,
        "Data Import/Export": false,
        "24/7 Support": false,
        "Dedicated Account Manager": false,
        "Custom Development": false,
        "White-label Solution": false,
        "Training & Onboarding": "Basic",
        "Documentation": "Basic",
      },
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with multiple locations",
      monthlyPrice: 20000,
      yearlyPrice: 200000,
      popular: true,
      tier: "Standard",
      features: {
        "Business": "1",
        "Branches": "5",
        "Manager Accounts": "5",
        "Cashier Accounts": "5",
        "Reports & Analytics": "Advanced",
        "Multi-branch Reports": true,
        "Staff Management": true,
        "Role-based Access": true,
        "24/7 Support": true,
        "Point of Sale (POS)": true,
      },
      featureList: [
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
      extraFeatures: {
        "Point of Sale (POS)": "✓",
        "Inventory Management": "✓",
        "Medical/Non Medical Products": "✓",
        "Product Batching": "✓",
        "Expiry Date Tracking": "✓",
        "Stock Management": "✓",
        "Low Stock Alerts": "✓",
        "Supplier Management": "✓",
        "Manufacturer Management": "✓",
        "Shelf Management": "✓",
        "Purchase Orders": "✓",
        "Refunds & Returns": "✓",
        "Inventory Reports": "Advanced",
        "Customer Reports": "Advanced",
        "Profit & Loss Reports": "Advanced",
        "Sales Analytics": "Advanced",
        "Real-time Dashboard": "✓",
        "Branch Performance": "Advanced",
        "Export Data": "Advanced",
        "Staff Management": "Advanced",
        "Role-based Access": "Advanced",
        "Branch Management": "✓",
        "Company Management": "✓",
        "Shift Management": "✓",
        "Advanced Analytics": "✓",
        "Custom Reports": "✓",
        "Data Backup": "Advanced",
        "Security Features": "Advanced",
        "Audit Logs": "Advanced",
        "Offline Mode": "✓",
        "Data Import/Export": "Advanced",
        "24/7 Support": "✓",
        "Dedicated Account Manager": false,
        "Custom Development": false,
        "White-label Solution": false,
        "Training & Onboarding": "Advanced",
        "Documentation": "Advanced",
      },
    },
    {
      name: "Business",
      description: "For businesses with multiple operations",
      monthlyPrice: 100000,
      yearlyPrice: 1000000,
      tier: "Business",
      features: {
        "Business": "3",
        "Branches": "5/Business",
        "Manager Accounts": "5/Branch",
        "Cashier Accounts": "5/Branch",
        "Reports & Analytics": "Advanced",
        "Multi-branch Reports": true,
        "Staff Management": true,
        "Role-based Access": true,
        "24/7 Support": true,
        "Point of Sale (POS)": true,
      },
      featureList: [
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
      extraFeatures: {
        "Point of Sale (POS)": "✓",
        "Inventory Management": "✓",
        "Medical/Non Medical Products": "✓",
        "Product Batching": "✓",
        "Expiry Date Tracking": "✓",
        "Stock Management": "✓",
        "Low Stock Alerts": "✓",
        "Supplier Management": "✓",
        "Manufacturer Management": "✓",
        "Shelf Management": "✓",
        "Purchase Orders": "✓",
        "Refunds & Returns": "✓",
        "Inventory Reports": "Advanced",
        "Customer Reports": "Advanced",
        "Profit & Loss Reports": "Advanced",
        "Sales Analytics": "Advanced",
        "Real-time Dashboard": "✓",
        "Branch Performance": "Advanced",
        "Export Data": "Advanced",
        "Staff Management": "Advanced",
        "Role-based Access": "Advanced",
        "Branch Management": "✓",
        "Company Management": "✓",
        "Shift Management": "✓",
        "Advanced Analytics": "✓",
        "Custom Reports": "✓",
        "Data Backup": "Advanced",
        "Security Features": "Advanced",
        "Audit Logs": "Advanced",
        "Offline Mode": "✓",
        "Data Import/Export": "Advanced",
        "24/7 Support": "✓",
        "Dedicated Account Manager": "✓",
        "Custom Development": "✓",
        "White-label Solution": "✓",
        "Training & Onboarding": "Advanced",
        "Documentation": "Advanced",
      },
      popular: false,
    },
    // {
    //   name: "Enterprise",
    //   monthlyPrice: null,
    //   yearlyPrice: null,
    //   tier: "Enterprise",
    //   features: {
    //     "Business": "Unlimited",
    //     "Branches": "Unlimited",
    //     "Manager Accounts": "Unlimited",
    //     "Cashier Accounts": "Unlimited",
    //     "Reports & Analytics": "Advanced",
    //     "Multi-branch Reports": true,
    //     "Staff Management": true,
    //     "Role-based Access": true,
    //     "24/7 Support": true,
    //     "Point of Sale (POS)": true,
    //   },
    // },
  ];

  const allFeatures = useMemo(() => Object.keys(plans[0].features), [plans]);
  const extraFeaturesList = plans[0].extraFeatures ? Object.keys(plans[0].extraFeatures) : [];

  return (
    <Loading>
      <div className="min-h-screen bg-background">
        <FloatingCTA />

        <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Simple{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Transparent Pricing
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Choose the plan that's right for your business. All plans include a 14-day free trial.
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4">
                <span className={`text-sm ${!isYearly ? "font-semibold" : "text-muted-foreground"}`}>
                  Monthly
                </span>
                <Switch checked={isYearly} onCheckedChange={handleToggle} />
                <span className={`text-sm ${isYearly ? "font-semibold" : "text-muted-foreground"}`}>
                  Yearly
                  <span className="ml-2 text-xs text-primary">(Save 17%)</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 lg:py-32">
          <Container>
            <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative p-6 ${
                    plan.popular
                      ? "border-2 border-primary shadow-xl"
                      : "border border-border"
                  } transition-all duration-300 hover:shadow-lg`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    {plan.description && (
                      <p className="text-sm text-muted-foreground mb-3">{plan.description}</p>
                    )}

                    {plan.monthlyPrice ? (
                      <div className="mb-2">
                        <span className="text-3xl font-bold">
                          Rs {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          /{isYearly ? "year" : "month"}
                        </span>
                      </div>
                    ) : (
                      <div className="mb-2">
                        <span className="text-3xl font-bold">Custom</span>
                      </div>
                    )}
                  </div>

                  <Button
                    size="sm"
                    className={`w-full mb-4 ${
                      plan.popular
                        ? "bg-gradient-primary hover:opacity-90"
                        : "bg-muted hover:bg-muted/80 text-foreground"
                    }`}
                  >
                    {plan.monthlyPrice ? <Link href="/contact">Start Free Trial</Link> : <Link href="/contact">Contact Sales</Link>}
                  </Button>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {plan.featureList?.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Feature Comparison</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="text-left p-3 font-semibold">Features</th>
                      {plans.map((plan, index) => (
                        <th key={index} className="p-3 text-center font-semibold text-sm">
                          {plan.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {allFeatures.map((feature, featureIndex) => (
                      <tr key={featureIndex} className="border-b border-border hover:bg-muted/30">
                        <td className="p-3 font-medium text-sm">{feature}</td>
                        {plans.map((plan, planIndex) => (
                          <td key={planIndex} className="p-3 text-center">
                            {typeof (plan.features as any)[feature] === "boolean" ? (
                              (plan.features as any)[feature] ? (
                                <Check className="w-4 h-4 text-primary mx-auto" />
                              ) : (
                                <X className="w-4 h-4 text-muted-foreground mx-auto" />
                              )
                            ) : (
                              <span className="text-xs font-medium">{(plan.features as any)[feature]}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Extra Features Table */}
            <div className="max-w-7xl mx-auto mt-20">
              <h2 className="text-3xl font-bold mb-8 text-center">Extra Features</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="text-left p-3 font-semibold">Features</th>
                      {plans.map((plan, index) => (
                        <th key={index} className="p-3 text-center font-semibold text-sm">
                          {plan.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {extraFeaturesList.map((feature, featureIndex) => (
                      <tr key={featureIndex} className="border-b border-border hover:bg-muted/30">
                        <td className="p-3 font-medium text-sm">{feature}</td>
                        {plans.map((plan, planIndex) => (
                          <td key={planIndex} className="p-3 text-center">
                            {typeof (plan.extraFeatures as any)?.[feature] === "boolean" ? (
                              (plan.extraFeatures as any)?.[feature] ? (
                                <Check className="w-4 h-4 text-primary mx-auto" />
                              ) : (
                                <X className="w-4 h-4 text-muted-foreground mx-auto" />
                              )
                            ) : typeof (plan.extraFeatures as any)?.[feature] === "string" && (plan.extraFeatures as any)?.[feature] === "✓" ? (
                              <Check className="w-4 h-4 text-primary mx-auto" />
                            ) : typeof (plan.extraFeatures as any)?.[feature] === "string" && (plan.extraFeatures as any)?.[feature] === "✗" ? (
                              <X className="w-4 h-4 text-muted-foreground mx-auto" />
                            ) : (
                              <span className="text-xs font-medium">{(plan.extraFeatures as any)?.[feature]}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          </Container>
        </section>

        {/* FAQ Preview */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Still have questions?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Check out our FAQ section or contact our sales team for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="outline">
                View FAQs
              </Button>
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
        </main>
      </div>
    </Loading>
  );
});

Pricing.displayName = 'Pricing';

export default Pricing;
