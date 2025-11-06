import { UserPlus, Settings, Rocket, TrendingUp } from "lucide-react";
import Container from "../ui/container";
import Link from "next/link";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your account in less than 2 minutes. No credit card required for trial.",
  },
  {
    icon: Settings,
    title: "Configure",
    description: "Set up your business details, add branches, and customize your workflow.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Start processing sales, managing inventory, and running your business.",
  },
  {
    icon: TrendingUp,
    title: "Keep Growing",
    description: "Scale seamlessly with AI-powered insights and automated workflows.",
  },
];

const StepCard = ({ step, index, isLast }: { step: typeof steps[number]; index: number; isLast: boolean }) => (
  <div
    className="relative animate-fade-in"
    style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
  >
    {/* Connector line (only for large screens and if not last step) */}
    {!isLast && (
      <div className="hidden lg:block absolute top-8 left-[108%] w-[93%] h-0.5 bg-gradient-to-r from-primary to-transparent -translate-x-1/2" />
    )}

    <div className="text-center lg:text-left">
      {/* Mobile View - Single Row Layout */}
      <div className="lg:hidden flex items-start gap-4 mb-4 p-4 bg-card rounded-xl border border-border">
        {/* Step number */}
        <div
          className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 
            text-primary font-bold text-base shadow-sm border border-primary/20"
          aria-label={`Step ${index + 1}`}
        >
          {index + 1}
        </div>

        {/* Content Container */}
        <div className="flex-1">
          {/* Icon and Title Row */}
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-8 h-8 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center flex-shrink-0"
              aria-hidden="true"
            >
              <step.icon className="w-4 h-4 text-primary" />
            </div>
            <h3 className="text-base font-semibold text-left flex-1">{step.title}</h3>
          </div>
          
          {/* Description */}
          <p className="text-muted-foreground text-xs text-left leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>

      {/* Desktop View - Original Layout */}
      <div className="hidden lg:block text-center px-2 sm:px-4">
        {/* Step number */}
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 
            text-primary font-bold text-2xl mb-6 shadow-sm border border-primary/20"
          aria-label={`Step ${index + 1}`}
        >
          {index + 1}
        </div>

        {/* Icon */}
        <div
          className="w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center mx-auto mb-4"
          aria-hidden="true"
        >
          <step.icon className="w-8 h-8 text-primary" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
        <p className="text-muted-foreground text-sm">{step.description}</p>
      </div>
    </div>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="  ">
     <Container>
     <div className="">
        {/* Section Heading */}
        <header className="text-center  mx-auto mb-8 lg:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <Link href="/contact">Get Started in{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              4 Simple Steps
            </span>
            </Link>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
            From signup to success, we've made it incredibly easy to transform your business.
          </p>
        </header>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
     </Container>
    </section>
  );
};

export default HowItWorks;