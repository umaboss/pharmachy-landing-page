'use client'

import { Store, UtensilsCrossed, Scissors, Wrench } from "lucide-react";
import Container from "../ui/container";

const SolutionsSection = () => {

  const solutions = [
    {
      icon: Store,
      title: "Retail",
      description: "Manage inventory, process sales, and connect with customers seamlessly.",
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurant",
      description: "Handle orders, manage tables, and streamline kitchen operations with ease.",
    },
    {
      icon: Scissors,
      title: "Salon",
      description: "Book appointments, manage clients, and process payments all in one place.",
    },
    {
      icon: Wrench,
      title: "Services",
      description: "Schedule jobs, send invoices, and manage your mobile workforce efficiently.",
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <Container size="xl" padding="none">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Header */}
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
              Solutions Tailored for Your Industry
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Zapeera is versatile enough to power any business. Discover features built just for you.
            </p>
          </div>
      
          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#1947C4]/50 hover:shadow-md transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-[#29CDCF]/20 flex items-center justify-center mb-4">
                  <solution.icon className="w-8 h-8 text-[#1947C4]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SolutionsSection;