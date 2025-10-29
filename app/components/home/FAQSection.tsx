'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import Container from "@/app/components/ui/container";
import { Search, MessageCircle } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const faqs = [
    // Billing Questions (6)
    {
      question: "How long is the free trial?",
      answer: "We offer a 14-day free trial with full access to all features. No credit card required to start. You can cancel anytime during the trial period without any charges.",
      category: "billing"
    },
    {
      question: "Can I switch plans later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and we'll prorate any differences.",
      category: "billing"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual subscriptions. Enterprise customers can also arrange custom payment terms.",
      category: "billing"
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees! All our plans include free setup and onboarding. Professional and Enterprise plans include dedicated support to help you get started quickly.",
      category: "billing"
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with our service, contact our support team for a full refund.",
      category: "billing"
    },
    {
      question: "Can I get a discount for annual billing?",
      answer: "Yes! Annual subscriptions come with a 20% discount compared to monthly billing. Enterprise customers can also negotiate custom pricing for multi-year contracts.",
      category: "billing"
    },
    
    // Features Questions (6)
    {
      question: "Can I use Zapeera offline?",
      answer: "Yes! Our POS system works offline and automatically syncs all data when your internet connection is restored. You'll never lose a sale due to connectivity issues.",
      category: "features"
    },
    {
      question: "Can I export my data?",
      answer: "Yes, you can export all your data at any time in multiple formats (CSV, Excel, PDF). Your data is always yours, and we make it easy to access and transfer.",
      category: "features"
    },
    {
      question: "Does Zapeera support multiple branches?",
      answer: "Yes! Zapeera is designed for multi-branch businesses. You can manage inventory, staff, and reports across all your locations from a single dashboard.",
      category: "features"
    },
    {
      question: "Can I customize the POS interface?",
      answer: "Absolutely! You can customize the POS interface with your branding, adjust layouts, and configure workflows to match your business needs.",
      category: "features"
    },
    {
      question: "Does Zapeera integrate with other software?",
      answer: "Yes! Zapeera integrates with popular accounting software, payment processors, and e-commerce platforms. We also offer API access for custom integrations.",
      category: "features"
    },
    {
      question: "Can I manage inventory across multiple locations?",
      answer: "Yes! Our inventory management system allows you to track stock levels, transfer items between branches, and set up automated reorder points across all locations.",
      category: "features"
    },
    
    // Security Questions (6)
    {
      question: "Is my data secure?",
      answer: "Yes! We use bank-level encryption (AES-256) to protect your data. All information is stored in secure data centers with regular backups and 99.9% uptime guarantee.",
      category: "security"
    },
    {
      question: "How do you protect customer payment information?",
      answer: "We are PCI DSS compliant and never store credit card information. All payments are processed through secure, encrypted connections with industry-leading security standards.",
      category: "security"
    },
    {
      question: "Can I control user access permissions?",
      answer: "Yes! You can set up role-based access controls, limit what each user can see and do, and track all user activities with detailed audit logs.",
      category: "security"
    },
    {
      question: "Do you have data backup and recovery?",
      answer: "Yes! We perform automated daily backups with 30-day retention. Your data is replicated across multiple secure data centers for maximum protection.",
      category: "security"
    },
    {
      question: "Is Zapeera GDPR compliant?",
      answer: "Yes! Zapeera is fully GDPR compliant. We provide data processing agreements, right to deletion, and all necessary tools to meet European data protection requirements.",
      category: "security"
    },
    {
      question: "How do you handle data breaches?",
      answer: "We have a comprehensive incident response plan. In the unlikely event of a breach, we'll notify affected customers within 24 hours and provide full transparency about the incident.",
      category: "security"
    },
    
    // Support Questions (6)
    {
      question: "Do you offer training for new users?",
      answer: "Yes, we provide comprehensive onboarding training, video tutorials, and documentation. Professional and Enterprise plans also include personalized training sessions with our team.",
      category: "support"
    },
    {
      question: "What support channels do you offer?",
      answer: "We offer email support, live chat, phone support, and a comprehensive knowledge base. Enterprise customers get dedicated account managers and priority support.",
      category: "support"
    },
    {
      question: "How quickly do you respond to support requests?",
      answer: "We respond to support requests within 2 hours during business hours. Enterprise customers get priority support with 1-hour response times and dedicated account managers.",
      category: "support"
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Yes! Our Enterprise plan includes 24/7 support with dedicated account managers. Professional plan users get extended support hours, and all plans include emergency support.",
      category: "support"
    },
    {
      question: "Can I get help with data migration?",
      answer: "Yes! We provide free data migration assistance for new customers. Our team will help you import data from your existing system and ensure everything is set up correctly.",
      category: "support"
    },
    {
      question: "Do you offer custom training sessions?",
      answer: "Yes! Professional and Enterprise customers can schedule custom training sessions for their team. We also offer on-site training for Enterprise customers.",
      category: "support"
    },
  ];

  const categories = [
    { id: "all", name: "All Questions", count: faqs.length },
    { id: "billing", name: "Billing", count: faqs.filter(f => f.category === "billing").length },
    { id: "features", name: "Features", count: faqs.filter(f => f.category === "features").length },
    { id: "security", name: "Security", count: faqs.filter(f => f.category === "security").length },
    { id: "support", name: "Support", count: faqs.filter(f => f.category === "support").length },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="relative overflow-hidden bg-white">
      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Frequently Asked{" "}
            <span className="text-[#0C2C8A]">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Zapeera. Can't find what you're looking for? 
            <span className="text-[#0C2C8A] font-medium"> Contact our support team.</span>
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-[#0C2C8A] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-[#0C2C8A]/10 hover:text-[#0C2C8A]"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {filteredFaqs.length > 0 ? (
            <div className="max-h-[360px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/30">
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="group border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <AccordionTrigger className="p-6 text-left hover:no-underline">
                    <div className="flex items-start gap-4 w-full">
                      <div className="w-3 h-3 rounded-full bg-[#0C2C8A] mt-2 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#0C2C8A] transition-colors">
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-6 pb-6 bg-white">
                    <div className="pl-7 border-l-2 border-[#0C2C8A]/20">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600">
                          💡 <span className="font-medium">Need more help?</span> Contact our support team for personalized assistance.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                ))}
              </Accordion>
            </div>
          ) : (
            <div className="text-center  bg-white rounded-2xl border border-gray-200">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No questions found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button 
                onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}
                className="bg-[#0C2C8A] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#09206a] transition-all"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
