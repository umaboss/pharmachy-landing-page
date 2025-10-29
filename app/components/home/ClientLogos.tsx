import React from "react";

const ClientLogos = () => {
  const industries = [
    { label: "Pharmacy", logo: "/pharmacy.svg" },
    { label: "Hotels", logo: "/hotle3.svg" },
    { label: "Wholesaler", logo: "/store.png" },
    { label: "Wholesaler", logo: "/store2.png" },
    { label: "Retail", logo: "/hotle.jpg" },
    { label: "Grocery", logo: "/htle.webp" },
    { label: "Restaurants", logo: "/phar2.png" },
    { label: "Logistics", logo: "/phr.png" },
    { label: "Clinics", logo: "/phar.png" },
  ];

  return (
    <section className="py-12 border-y border-border bg-muted/20">
      <div className="">
        <p className="text-center text-sm text-muted-foreground mb-8 font-medium tracking-wide">
          TRUSTED BY LEADING BUSINESSES
        </p>

        <div className="relative overflow-hidden group">
          <div className="flex gap-8 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[...industries, ...industries].map(({ label, logo }, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[180px] h-20 px-6 bg-white rounded-lg border border-gray-200 shadow-sm flex-shrink-0"
              >
                <img
                  src={logo}
                  alt={`${label} logo`}
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
