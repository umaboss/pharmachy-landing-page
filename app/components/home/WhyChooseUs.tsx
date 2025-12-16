"use client";

import { useState } from "react";
import Image from "next/image";
import { Zap, Lock, Headphones, TrendingUp, Globe, Award, Shield, Clock, BarChart, Users } from "lucide-react";
import Container from "../ui/container";

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState("Performance");

  const tabContent = {
    Performance: {
      title: "Lightning-Fast Performance",
      description: "Experience unmatched speed and efficiency with our optimized platform.",
      image: "/images/performance.jpeg",
      features: [
        {
          icon: Zap,
          title: "Lightning Fast",
          description: "Built for speed with optimized performance.",
        },
        {
          icon: Clock,
          title: "Real-Time Sync",
          description: "Instant data synchronization across all locations.",
        },
        {
          icon: BarChart,
          title: "Advanced Analytics",
          description: "Get instant insights with powerful reporting tools.",
        },
        {
          icon: TrendingUp,
          title: "Scale with Ease",
          description: "Grows with your business without performance compromise.",
        },
      ],
    },
    Security: {
      title: "Enterprise-Grade Security",
      description: "Your business data is protected with bank-level security measures.",
      image: "/images/security.jpeg",
      features: [
        {
          icon: Lock,
          title: "Bank-Level Security", 
          description: "Enterprise-grade encryption and regular security audits.",
        },
        {
          icon: Shield,
          title: "Data Protection",
          description: "Advanced security protocols and regular backups.",
        },
        {
          icon: Users,
          title: "Role-Based Access",
          description: "Control who sees what with granular permissions.",
        },
        {
          icon: Award,
          title: "Compliance Ready",
          description: "Meet industry standards with built-in compliance.",
        },
      ],
    },
    Support: {
      title: "24/7 Expert Support",
      description: "Get the help you need whenever you need it with our dedicated team.",
      image: "/images/support.jpeg",
      features: [
        {
          icon: Headphones,
          title: "24/7 Support",
          description: "Always available to help you succeed.",
        },
        {
          icon: Globe,
          title: "Access Anywhere",
          description: "Cloud-based platform accessible from any device.",
        },
        {
          icon: Users,
          title: "Expert Guidance",
          description: "Personalized assistance from our team of experts.",
        },
        {
          icon: Award,
          title: "Industry Leader",
          description: "Trusted by thousands of businesses worldwide.",
        },
      ],
    },
  };

  const tabs = [
    { id: "Performance", label: "Performance" },
    { id: "Security", label: "Security" },
    { id: "Support", label: "Support" },
  ];

  const activeContent = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section className="relative overflow-hidden py-12 lg:py-16 bg-white">
      <Container size="xl" padding="none">
        <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Header */}
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-[48px] font-bold text-gray-900 mb-6 lg:mb-8 font-montserrat">
              Built for Modern Business
            </h2>
            
            {/* Tab Navigation */}
            <div className="flex justify-center gap-8 lg:gap-10 mb-10 lg:mb-12">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-lg font-medium transition-colors pb-2 relative ${
                    activeTab === tab.id
                      ? "text-[#1947C4]"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1947C4]"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content with Image Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-4">
              {/* Title */}
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                {activeContent.title}
              </h3>
              
              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed">
                {activeContent.description}
              </p>

              {/* Features Grid - 2x2 */}
              <div className="grid grid-cols-2 gap-6 mt-6">
                {activeContent.features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-0"
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-lg bg-[#1947C4]/10 flex items-center justify-center mb-2">
                      <feature.icon className="w-5 h-5 text-[#1947C4]" strokeWidth={2} />
                    </div>
                    
                    {/* Title */}
                    <h4 className="text-sm font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src={activeContent.image}
                alt={activeContent.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;