"use client";

import { useState } from "react";
import { Zap, Lock, Headphones, TrendingUp, Globe, Award, Shield, Clock, BarChart, Users } from "lucide-react";
import Container from "../ui/container";

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState("Performance");

  const tabContent = {
    Performance: {
      title: "Lightning-Fast Performance",
      description: "Experience unmatched speed and efficiency with our optimized platform designed to handle high-volume operations seamlessly.",
      features: [
        {
          icon: Zap,
          title: "Lightning Fast",
          description: "Built for speed with optimized performance that keeps your business running smoothly even during peak hours.",
        },
        {
          icon: Clock,
          title: "Real-Time Sync",
          description: "Instant data synchronization across all your locations and devices for up-to-the-minute accuracy.",
        },
        {
          icon: BarChart,
          title: "Advanced Analytics",
          description: "Get instant insights with powerful reporting tools that help you make data-driven decisions faster.",
        },
        {
          icon: TrendingUp,
          title: "Scale with Ease",
          description: "Whether you have 1 location or 100, Zapeera grows with your business without any performance compromise.",
        },
      ],
    },
    Security: {
      title: "Enterprise-Grade Security",
      description: "Your business data is protected with bank-level security measures and compliance standards to ensure complete peace of mind.",
      features: [
        {
          icon: Lock,
          title: "Bank-Level Security", 
          description: "Your data is protected with enterprise-grade encryption and regular security audits to ensure complete safety.",
        },
        {
          icon: Shield,
          title: "Data Protection",
          description: "Advanced security protocols and regular backups ensure your critical business data is always safe and recoverable.",
        },
        {
          icon: Users,
          title: "Role-Based Access",
          description: "Control who sees what with granular permission settings that protect sensitive information.",
        },
        {
          icon: Award,
          title: "Compliance Ready",
          description: "Meet industry standards and regulations with built-in compliance features for your peace of mind.",
        },
      ],
    },
    Support: {
      title: "24/7 Expert Support",
      description: "Get the help you need whenever you need it with our dedicated support team committed to your success.",
      features: [
        {
          icon: Headphones,
          title: "24/7 Support",
          description: "Our dedicated support team is always available to help you succeed, whenever you need assistance.",
        },
        {
          icon: Globe,
          title: "Access Anywhere",
          description: "Cloud-based platform accessible from any device, allowing you to manage your business on the go.",
        },
        {
          icon: Users,
          title: "Expert Guidance",
          description: "Get personalized assistance from our team of experts who understand your business needs.",
        },
        {
          icon: Award,
          title: "Industry Leader",
          description: "Trusted by thousands of businesses worldwide with proven track record of driving growth and efficiency.",
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 lg:mb-8">
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

          {/* Features Grid - Horizontal Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {activeContent.features.map((feature, index) => {
              const stepNumber = String(index + 1).padStart(2, '0');
              return (
                <div 
                  key={index} 
                  className="group relative p-[2px] rounded-[250px] bg-gray-200 hover:bg-gradient-to-r hover:from-[#29CDCF] hover:to-[#1947C4] transition-all duration-300"
                >
                  <div className="flex items-center justify-center flex-col py-[40px] px-8 lg:py-[60px] lg:px-10 bg-white rounded-[250px] h-full">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-[#1947C4] group-hover:text-[#1947C4]" strokeWidth={2} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl text-center lg:text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-center lg:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;