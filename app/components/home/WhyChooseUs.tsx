import { Zap, Lock, Headphones, TrendingUp, Globe, Award } from "lucide-react";
import Container from "../ui/container";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built for speed with optimized performance that keeps your business running smoothly even during peak hours.",
    },
    {
      icon: Lock,
      title: "Bank-Level Security", 
      description: "Your data is protected with enterprise-grade encryption and regular security audits to ensure complete safety.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our dedicated support team is always available to help you succeed, whenever you need assistance.",
    },
    {
      icon: TrendingUp,
      title: "Scale with Ease",
      description: "Whether you have 1 location or 100, Zapeera grows with your business without any performance compromise.",
    },
    {
      icon: Globe,
      title: "Access Anywhere",
      description: "Cloud-based platform accessible from any device, allowing you to manage your business on the go.",
    },
    {
      icon: Award,
      title: "Industry Leader",
      description: "Trusted by thousands of businesses worldwide with proven track record of driving growth and efficiency.",
    },
  ];

  return (
    <section className="relative overflow-hidden ">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
     <Container size="full" padding="none">
     <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto md:mb-16 mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Built for
            <span className="block text-[#0C2C8A]">
              Modern Business
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every feature designed with your growth in mind
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group"
            >
              {/* Main Card */}
              <div className="relative bg-card rounded-2xl p-8 border border-border/50 transition-all duration-300 hover:shadow-lg">
                {/* Icon with Background */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Container> 
     
    </section>
  );
};

export default WhyChooseUs;