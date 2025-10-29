'use client'

import { memo, useCallback, useState } from 'react';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Card } from "@/app/components/ui/card";
import Container from "../components/ui/container";
import Loading from "../components/ui/loading";
import StructuredData from "@/app/components/StructuredData";
// import { useToast } from "@/app/components/ui/use-toast";

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch with Zapeera',
  description: 'Contact Zapeera for business management solutions. Get support, schedule a demo, or start your free trial. Our team is here to help your business grow.',
  keywords: [
    'contact zapeera',
    'business management support',
    'schedule demo',
    'zapeera support',
    'business software contact',
    'POS system support',
    'inventory management help'
  ],
  openGraph: {
    title: 'Contact Us - Get in Touch with Zapeera',
    description: 'Contact Zapeera for business management solutions. Get support, schedule a demo, or start your free trial.',
    url: 'https://zapeera.com/contact',
    images: ['/og-contact.jpg'],
  },
  alternates: {
    canonical: 'https://zapeera.com/contact',
  },
};

const Contact = memo(() => {
  // const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert("Message sent! We'll get back to you as soon as possible.");
    setIsSubmitting(false);
    
    // toast({
    //   title: "Message sent!",
    //   description: "We'll get back to you as soon as possible.",
    // });
  }, []);

  return (
    <>
      <StructuredData type="Organization" data={{}} />
      <Loading>
        <div className="min-h-screen bg-background">

        <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Get in{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Have a question or need help? We're here for you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 lg:py-32">
         <Container>
         <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="text-muted-foreground mb-8">
                    Choose your preferred way to reach us, and we'll respond within 24 hours.
                  </p>
                </div>

                <Card className="p-6 border-2 border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground mb-2">Our team is here to help</p>
                      <a href="mailto:support@zapeera.com" className="text-primary hover:underline">
                        support@zapeera.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-sm text-muted-foreground mb-2">Mon-Fri from 8am to 5pm</p>
                      <a href="tel:+11234567890" className="text-primary hover:underline">
                        +1 (123) 456-7890
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Live Chat</h3>
                      <p className="text-sm text-muted-foreground mb-2">Available 24/7</p>
                      <button className="text-primary hover:underline">
                        Start a conversation
                      </button>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office</h3>
                      <p className="text-sm text-muted-foreground">
                        123 Business Street<br />
                        San Francisco, CA 94102<br />
                        United States
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-8 lg:p-12 border-2 border-border">
                  <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (123) 456-7890"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        placeholder="How can we help?"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-[150px]"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-primary hover:opacity-90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      We'll get back to you within 24 hours
                    </p>
                  </form>
                </Card>
              </div>
            </div>
          </div>
         </Container>
        </section>
        </main>
      </div>
    </Loading>
    </>
  );
});

Contact.displayName = 'Contact';

export default Contact;
