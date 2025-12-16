'use client'

import Image from "next/image";
import Container from "../ui/container";

const SolutionsSection = () => {

  const solutions = [
    {
      title: "Inventory Management",
      description: "track stock levels in real-time and manage your suppliers, and automate purchasing.",
      image: "/images/Retail POS.jpeg",
    },
    {
      title: "Point of Sale",
      description: "Process sales, manage customers, and streamline your business operations with ease.",
      image: "/images/business.webp",
    },
    {
      title: "Reports & Analytics",
      description: "Get insights into your business performance and make data-driven decisions.",
      image: "/images/staff.jpeg",
    },
    {
      title: "Employee Management",
      description: "Manage your team, track their performance, and streamline your business operations.",
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
                className="bg-white h-full rounded-2xl p-3 border border-gray-200 hover:border-[#1947C4]/50 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full h-32 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-1">
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