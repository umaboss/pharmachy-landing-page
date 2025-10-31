"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Container from "../ui/container";

const HeroSection = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const solutions = useMemo(() => [
    "POS Systems",
    "Inventory ",
    "Multi-User",
    "Analytics",
    "Multi-Branch ",
  ], []);

  const typewriterEffect = useCallback(() => {
    const fullText = solutions[index];
    const speed = isDeleting ? 80 : 140;

    const timeout = setTimeout(() => {
      if (!isDeleting && text.length < fullText.length) {
        setText(fullText.slice(0, text.length + 1));
      } else if (isDeleting && text.length > 0) {
        setText(fullText.slice(0, text.length - 1));
      } else if (!isDeleting && text.length === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && text.length === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % solutions.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, solutions]);

  useEffect(() => {
    return typewriterEffect();
  }, [typewriterEffect]);

  // 👇 Image Carousel Setup
  const images = useMemo(() => [
    "/images/pr.png", // POS Systems
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=600&fit=crop&crop=center", // Inventory Management
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&h=600&fit=crop&crop=center", // Team Management
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&h=600&fit=crop&crop=center", // Business Analytics
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000&h=600&fit=crop&crop=center", // Business Dashboard
  ], []);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  const getPosition = useCallback((index: number) => {
    const diff = (index - current + images.length) % images.length;
    if (diff === 0) return "z-30 scale-110 opacity-100";
    if (diff === 1) return "translate-x-1/3 z-20 scale-90 opacity-70";
    if (diff === images.length - 1) return "-translate-x-1/3 z-20 scale-90 opacity-70";
    return "opacity-0 scale-75";
  }, [current, images.length]);

  return (
    <Container>
      <section className="flex flex-col lg:flex-row items-center gap-[60px] justify-between  bg-white overflow-hidden  pt-12 sm:pt-[120px]">
        {/* LEFT SIDE */}
        <div className="w-full md:pt-[0px] pt-[50px] lg:w-1/2 text-center lg:text-left z-10 mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4l md:text-5xl lg:text-6xl font-bold leading-tight mb-3 sm:mb-4">
            Umair Brand <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {text}
            </span>
            <span className="ml-1 text-primary animate-pulse">|</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
            Manage sales, inventory, staff, and reports — all in one smart dashboard built to
            grow with your business.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start mb-4 sm:mb-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Link href="/contact">Start Free Trial</Link>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          <Button
            size="lg"
            variant="outline"
            className="group border-2  border-border hover:border-primary/50"
          >
            <Link href="/about" className="flex items-center"> 
              <Play className="w-5 h-5 mr-2" />
              Learn More
            </Link>
          </Button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center pb-[100px] pt-[30px] relative">
          <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-xl h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] flex items-center justify-center">
            {images.map((img, i) => (
              <div
                key={i}
                className={`absolute transition-all duration-700 ease-in-out rounded-2xl shadow-2xl w-[80%] sm:w-[70%] h-full overflow-hidden ${getPosition(i)}`}
              >
                <Image
                  src={img}
                  alt={`${solutions[i % solutions.length]} - Business Management Solution`}
                  fill
                  className="object-contain rounded-2xl"
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 70vw, 50vw"
                  priority={i === 0}
                  loading={i === 0 ? "eager" : "lazy"}
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
