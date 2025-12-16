'use client'

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Play } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      type: "text",
      quote: "Zapeera transformed how we manage our 12 retail locations. The multi-branch feature is a game-changer!",
      author: "Sarah Johnson",
      position: "CEO, RetailMax",
      rating: 5,
    },
    {
      type: "video",
      quote: "The analytics dashboard gave us insights we never had before. Sales increased by 35% in 3 months.",
      author: "Michael Chen",
      position: "Owner, TechCorp Electronics",
      rating: 5,
      videoThumb: true,
    },
    {
      type: "text",
      quote: "Best investment we made for our pharmacy chain. Inventory tracking is flawless and saves us hours daily.",
      author: "Dr. Emily Rodriguez",
      position: "Pharmacist, PharmaCare",
      rating: 5,
    },
    {
      type: "text",
      quote: "The POS system is incredibly fast and reliable. Our checkout times decreased by 40%. Highly recommend!",
      author: "David Kumar",
      position: "Manager, QuickMart",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center max-w-3xl mx-auto  md:mb-16 mb-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-montserrat">
            Loved by Thousands
          </h2>
          <p className="text-lg text-muted-foreground">
            See what business owners are saying about Zapeera
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Left Navigation Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 rounded-full hidden md:flex bg-white shadow-lg hover:shadow-xl"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          {/* Testimonial Card */}
          <Card className="p-8 lg:p-12 border-2 border-border relative">
            <div className="flex flex-col items-center text-center">
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Video thumbnail or quote */}
              {testimonials[currentIndex].type === "video" && (
                <div className="relative w-full max-w-md h-48 bg-muted rounded-xl mb-6 flex items-center justify-center group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-xl" />
                </div>
              )}

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-semibold text-lg">{testimonials[currentIndex].author}</p>
                <p className="text-muted-foreground">{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </Card>

          {/* Right Navigation Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 rounded-full hidden md:flex bg-white shadow-lg hover:shadow-xl"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots indicator and mobile buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full md:hidden"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full md:hidden"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
