'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Container from "./ui/container";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsHovered, setIsSolutionsHovered] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const solutions = [
    {
      title: "Retail",
      description: "Complete retail management with multi-branch sync",
      slug: "retail"
    },
    {
      title: "Pharmacy",
      description: "Specialized pharmacy management with medication tracking",
      slug: "pharmacy"
    },
    {
      title: "Restaurant",
      description: "Manage menus, kitchen orders, and tables",
      slug: "restaurant"
    },
    {
      title: "Wholesale",
      description: "Bulk order processing and flexible pricing",
      slug: "wholesale"
    },
    {
      title: "Departmental Store",
      description: "Multi-category management and promotions",
      slug: "departmental-store"
    },
    {
      title: "Distribution",
      description: "Comprehensive distribution and logistics",
      slug: "distribution"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu open hone par body scroll disable karo
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Solutions", path: "/solutions" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blogs", path: "/blogs" },
    { name: "Updates", path: "/updates-product" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <Container>
      <div className="">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-12 h-12 transition-transform group-hover:scale-110">
              <Image
                src="/logo.png"
                alt="Zapeera Logo"
                fill
                className="object-contain"
                sizes="48px"
                priority
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Zapeera
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.name === "Solutions" ? (
                <div 
                  key={link.path}
                  className="relative group"
                  onMouseEnter={() => setIsSolutionsHovered(true)}
                  onMouseLeave={() => setIsSolutionsHovered(false)}
                >
                  <Link
                    href={link.path}
                    prefetch={true}
                    className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                      pathname === link.path || pathname?.startsWith("/solutions/")
                        ? "text-primary"
                        : "text-foreground/70"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {isSolutionsHovered && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50 animate-fade-in">
                      {solutions.map((solution) => (
                        <Link
                          key={solution.slug}
                          href={`/solutions/${solution.slug}`}
                          className="block px-4 py-2 hover:bg-muted transition-colors"
                          prefetch={true}
                        >
                          <div className="font-medium text-sm text-foreground">{solution.title}</div>
                          <div className="text-xs text-muted-foreground line-clamp-1">{solution.description}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  href={link.path}
                  prefetch={true}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === link.path
                      ? "text-primary"
                      : "text-foreground/70"
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {/* <Button variant="ghost" size="sm">
              Sign In
            </Button> */}
            <Button size="sm" className="bg-gradient-primary hover:opacity-90">
              <Link href="/contact">Start Free Trial</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Fixed Background */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed top-16 left-0 right-0 bottom-0 bg-background/95 backdrop-blur-md z-40 animate-fade-in">
            <div className="container mx-auto px-4 py-6 h-full overflow-y-auto">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  link.name === "Solutions" ? (
                    <div key={link.path} className="px-4 py-3">
                      <div className={`text-base font-medium mb-2 ${
                        pathname === link.path || pathname?.startsWith("/solutions/")
                          ? "text-primary"
                          : "text-foreground/80"
                      }`}>
                        {link.name}
                      </div>
                      <div className="flex flex-col gap-2 ml-2">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.slug}
                            href={`/solutions/${solution.slug}`}
                            prefetch={true}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`px-4 py-2 text-sm transition-all duration-200 hover:bg-muted rounded-lg ${
                              pathname === `/solutions/${solution.slug}`
                                ? "text-primary bg-primary/10"
                                : "text-foreground/70 hover:text-primary"
                            }`}
                          >
                            {solution.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.path}
                      href={link.path}
                      prefetch={true}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-4 py-3 text-base font-medium transition-all duration-200 hover:bg-muted rounded-lg ${
                        pathname === link.path
                          ? "text-primary bg-primary/10 border-l-4 border-primary"
                          : "text-foreground/80 hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )
                ))}
                
                {/* Mobile CTA Buttons */}
                <div className="px-4 pt-6 mt-4 border-t border-border flex flex-col gap-3">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Button>
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:opacity-90"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/contact">Start Free Trial</Link>
                  </Button>
                </div>
                
                {/* Additional Info */}
                <div className="px-4 pt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Trusted by 5,000+ businesses worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </Container>

    </nav>
  );
};

export default Navigation;