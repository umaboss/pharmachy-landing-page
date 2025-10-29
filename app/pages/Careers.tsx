'use client'

import type { Metadata } from 'next';
import FloatingCTA from "@/app/components/FloatingCTA";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import Loading from "../components/ui/loading";
// import { useToast } from "@/app/components/ui/use-toast";

export const metadata: Metadata = {
  title: 'Careers - Join the Zapeera Team',
  description: 'Join Zapeera and help transform businesses worldwide. Explore career opportunities in software development, sales, marketing, and customer success.',
  keywords: [
    'zapeera careers',
    'business software jobs',
    'tech careers',
    'software development jobs',
    'sales careers',
    'marketing jobs',
    'customer success careers'
  ],
  openGraph: {
    title: 'Careers - Join the Zapeera Team',
    description: 'Join Zapeera and help transform businesses worldwide. Explore career opportunities in software development, sales, marketing, and customer success.',
    url: 'https://zapeera.com/careers',
    images: ['/og-careers.jpg'],
  },
  alternates: {
    canonical: 'https://zapeera.com/careers',
  },
};
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";

const Careers = () => {
  // const { toast } = useToast();

  const openPositions = [
    {
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Join our engineering team to build beautiful, performant user interfaces using React and TypeScript.",
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Help shape the future of business management software with your creative vision and user-centered design approach.",
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      description: "Be the voice of our customers and help them achieve success with Zapeera's platform.",
    },
    {
      title: "Backend Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Build scalable, reliable backend systems that power thousands of businesses worldwide.",
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Drive growth and brand awareness through innovative marketing strategies and campaigns.",
    },
    {
      title: "Sales Development Representative",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      description: "Connect with potential customers and help them discover how Zapeera can transform their business.",
    },
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted! We'll review your application and get back to you soon.");
    // toast({
    //   title: "Application submitted!",
    //   description: "We'll review your application and get back to you soon.",
    // });
  };

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
                Join Our{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Amazing Team
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Help us build the future of business management. We're looking for talented individuals who are passionate about making a difference.
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Zapeera?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { title: "Competitive Salary", desc: "Industry-leading compensation packages" },
                { title: "Remote-First", desc: "Work from anywhere in the world" },
                { title: "Health Benefits", desc: "Comprehensive health, dental, and vision" },
                { title: "Learning Budget", desc: "Annual budget for courses and conferences" },
                { title: "Flexible Hours", desc: "Work when you're most productive" },
                { title: "Stock Options", desc: "Be an owner, not just an employee" },
                { title: "Paid Time Off", desc: "Generous PTO and holidays" },
                { title: "Great Culture", desc: "Collaborative and inclusive environment" },
              ].map((benefit, index) => (
                <Card key={index} className="p-6 text-center border-2 border-border hover:border-primary/50 transition-all">
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Open Positions</h2>
            
            <div className="max-w-5xl mx-auto space-y-6">
              {openPositions.map((position, index) => (
                <Card key={index} className="p-6 lg:p-8 border-2 border-border hover:border-primary/50 transition-all animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{position.title}</h3>
                      <p className="text-muted-foreground mb-4">{position.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Briefcase className="w-4 h-4" />
                          {position.department}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </div>
                      </div>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-gradient-primary hover:opacity-90 group">
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>Apply for {position.title}</DialogTitle>
                        </DialogHeader>
                        
                        <form onSubmit={handleApply} className="space-y-6 mt-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                                First Name *
                              </label>
                              <Input id="firstName" required />
                            </div>
                            <div>
                              <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                                Last Name *
                              </label>
                              <Input id="lastName" required />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                              Email Address *
                            </label>
                            <Input id="email" type="email" required />
                          </div>

                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium mb-2">
                              Phone Number *
                            </label>
                            <Input id="phone" type="tel" required />
                          </div>

                          <div>
                            <label htmlFor="linkedin" className="block text-sm font-medium mb-2">
                              LinkedIn Profile
                            </label>
                            <Input id="linkedin" placeholder="https://linkedin.com/in/yourprofile" />
                          </div>

                          <div>
                            <label htmlFor="portfolio" className="block text-sm font-medium mb-2">
                              Portfolio / Website
                            </label>
                            <Input id="portfolio" placeholder="https://yourportfolio.com" />
                          </div>

                          <div>
                            <label htmlFor="resume" className="block text-sm font-medium mb-2">
                              Resume / CV *
                            </label>
                            <Input id="resume" type="file" accept=".pdf,.doc,.docx" required />
                          </div>

                          <div>
                            <label htmlFor="coverLetter" className="block text-sm font-medium mb-2">
                              Cover Letter
                            </label>
                            <Textarea
                              id="coverLetter"
                              placeholder="Tell us why you'd be a great fit for this role..."
                              className="min-h-[120px]"
                            />
                          </div>

                          <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:opacity-90">
                            Submit Application
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't see the right role?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Send General Application
            </Button>
          </div>
        </section>
        </main>
      </div>
    </Loading>
  );
};

export default Careers;
