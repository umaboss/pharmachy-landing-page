'use client'

import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-40 animate-fade-in">
      <Button
        size="lg"
        className="bg-gradient-primary hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full"
        asChild
      >
        <Link href="/contact-us">
          <Calendar className="w-5 h-5 mr-2" />
          Book Demo
        </Link>
      </Button>
    </div>
  );
};

export default FloatingCTA;
