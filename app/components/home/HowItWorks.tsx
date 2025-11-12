import { UserPlus, Settings, Rocket, TrendingUp } from "lucide-react";
import Container from "../ui/container";

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

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-8 lg:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Get Started in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-secondary">
              4 Simple Steps
            </span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            From signup to success, we've made it incredibly easy to transform your business.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center"
            >
              {/* Step Number and Icon Combined */}
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <div className="mb-2">
                <span className="text-sm font-medium text-primary mr-2">{index + 1}.</span>
                <h3 className="text-lg font-semibold inline">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;