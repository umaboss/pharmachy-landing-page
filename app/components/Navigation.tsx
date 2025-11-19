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
  const [solutionsTimeout, setSolutionsTimeout] = useState<NodeJS.Timeout | null>(null);
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

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (solutionsTimeout) {
        clearTimeout(solutionsTimeout);
      }
    };
  }, [solutionsTimeout]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const handleSolutionsMouseEnter = () => {
    if (solutionsTimeout) {
      clearTimeout(solutionsTimeout);
    }
    setIsSolutionsHovered(true);
  };

  const handleSolutionsMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsSolutionsHovered(false);
    }, 150); // Small delay to allow mouse movement to dropdown
    setSolutionsTimeout(timeout);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Solutions", path: "/solutions" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blogs", path: "/blogs" },
    { name: "Updates", path: "/product-update" },
    { name: "About Us", path: "/about-us" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <Container size="full" padding="none">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group gap-2 sm:gap-2.5">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 transition-transform group-hover:scale-110 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Zapeera Logo"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 32px, (max-width: 1024px) 40px, 48px"
                priority
              />
            </div>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Zapeera
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              link.name === "Solutions" ? (
                <div 
                  key={link.path}
                  className="relative group"
                  onMouseEnter={handleSolutionsMouseEnter}
                  onMouseLeave={handleSolutionsMouseLeave}
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
                    <div className="absolute top-full left-0 pt-2 z-50" onMouseEnter={handleSolutionsMouseEnter} onMouseLeave={handleSolutionsMouseLeave}>
                      <div className="w-64 bg-background border border-border rounded-lg shadow-lg py-2 animate-fade-in">
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
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            {/* <Button variant="ghost" size="sm">
              Sign In
            </Button> */}
            <Button size="sm" className="bg-gradient-primary hover:opacity-90 whitespace-nowrap" asChild>
              <Link href="/contact-us">Start Free Trial</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2 flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

      </div>
      </Container>
    </nav>

    {/* Mobile Menu - Outside nav to avoid z-index issues */}
    {isMobileMenuOpen && (
      <div 
        className="lg:hidden fixed top-14 sm:top-16 left-0 right-0 bottom-0 bg-white dark:bg-background z-[100] overflow-y-auto shadow-2xl"
      >
        <div 
          className="w-full min-h-full bg-white dark:bg-background animate-fade-in"
          style={{ 
            paddingTop: '1.5rem',
            paddingBottom: '2rem'
          }}
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col gap-3 sm:gap-4">
                {navLinks.map((link) => (
                  link.name === "Solutions" ? (
                    <div key={link.path} className="w-full">
                      <div className={`text-base sm:text-lg font-semibold mb-3 px-2 sm:px-4 py-2 ${
                        pathname === link.path || pathname?.startsWith("/solutions/")
                          ? "text-primary dark:text-primary"
                          : "text-gray-900 dark:text-foreground"
                      }`}>
                        {link.name}
                      </div>
                      <div className="flex flex-col gap-1.5 sm:gap-2 ml-4 sm:ml-6">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.slug}
                            href={`/solutions/${solution.slug}`}
                            prefetch={true}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base transition-all duration-200 rounded-lg ${
                              pathname === `/solutions/${solution.slug}`
                                ? "text-primary bg-primary/10 font-semibold dark:text-primary dark:bg-primary/20"
                                : "text-gray-700 dark:text-foreground hover:text-primary hover:bg-gray-100 dark:hover:bg-muted"
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
                      className={`px-2 sm:px-4 py-3 sm:py-3.5 text-base sm:text-lg font-semibold transition-all duration-200 rounded-lg ${
                        pathname === link.path
                          ? "text-primary bg-primary/10 border-l-4 border-primary dark:text-primary dark:bg-primary/20"
                          : "text-gray-900 dark:text-foreground hover:text-primary hover:bg-gray-100 dark:hover:bg-muted"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )
                ))}
                
                {/* Mobile CTA Buttons */}
                <div className="px-2 sm:px-4 pt-4 sm:pt-6 mt-4 border-t border-border flex flex-col gap-3">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full text-base sm:text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Button>
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:opacity-90 text-base sm:text-lg"
                    asChild
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/contact-us" className="w-full">Start Free Trial</Link>
                  </Button>
                </div>
                
                {/* Additional Info */}
                <div className="px-2 sm:px-4 pt-4 sm:pt-6 text-center pb-6">
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-muted-foreground">
                    Trusted by 5,000+ businesses worldwide
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default Navigation;