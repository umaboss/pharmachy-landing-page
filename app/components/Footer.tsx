"use client";
import { useState } from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import Container from "./ui/container";

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const footerLinks = {
    Product: [
      { name: "Features", path: "/features" },
      { name: "Solutions", path: "/solutions" },
      { name: "Pricing", path: "/pricing" },
    ],
    Company: [
      { name: "About", path: "/about" },
      { name: "Careers", path: "/careers" },
      { name: "Contact", path: "/contact" },
    ],
    Resources: [
      { name: "Blog", path: "/blog" },
      { name: "Help Center", path: "tel:+923131670125" },
      { name: "API Docs", path: "/updates" },
    ],
    Legal: [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Service", path: "/terms-of-service" },
      { name: "Cookie Policy", path: "/cookie-policy" },
    ],
  };

  const toggleDropdown = (category: string) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
     <Container>
     <div className=" py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                Z
              </div>
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Zapeera
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 text-sm">
              The all-in-one business management and POS solution. Built to help businesses grow smarter and faster.
            </p>
            <div className="flex gap-4">
              <a href="https://web.facebook.com/profile.php?id=61582397802995" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/zapeera/" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/zapeera.official/" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Desktop Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="hidden lg:block">
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.path.startsWith('tel:') ? (
                      <a
                        href={link.path}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.path}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Mobile Dropdown Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:hidden">
              {/* Dropdown Header */}
              <button
                onClick={() => toggleDropdown(category)}
                className="flex items-center justify-between w-full py-3 border-b border-border"
              >
                <h3 className="font-semibold text-left">{category}</h3>
                {openDropdown === category ? (
                  <ChevronUp className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                )}
              </button>

              {/* Dropdown Content */}
              {openDropdown === category && (
                <ul className="space-y-3 py-3 animate-fade-in">
                  {links.map((link) => (
                    <li key={link.name}>
                      {link.path.startsWith('tel:') ? (
                        <a
                          href={link.path}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          href={link.path}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border hidden md:flex flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Zapeera. All rights reserved .
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Trusted by 5,000+ businesses worldwide</span>
          </div>
        </div>
        {/* Mobile Bottom Bar - No Border */}
        <div className="mt-8 pt-8 flex md:hidden flex-col justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Zapeera. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Trusted by 5,000+ businesses worldwide</span>
          </div>
        </div>
      </div>
     </Container>
    </footer>
  );
};

export default Footer;