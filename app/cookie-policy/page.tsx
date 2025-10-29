import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Container from "@/app/components/ui/container";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-32">
        <Container>
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Cookie
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {" "}Policy
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Learn about how we use cookies to enhance your experience and protect your privacy on our website.
            </p>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-12">
                <section className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    What Are Cookies
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Cookies are small text files that are placed on your computer or mobile device when you 
                    visit our website. They are widely used to make websites work more efficiently and to 
                    provide information to website owners.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    How We Use Cookies
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    We use cookies to enhance your experience on our website, analyze site traffic, and 
                    personalize content. Cookies help us understand how you use our services so we can 
                    improve them.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Types of Cookies We Use
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Essential Cookies</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        These cookies are necessary for the website to function properly. They enable basic 
                        functions like page navigation and access to secure areas of the website.
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Analytics Cookies</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        These cookies help us understand how visitors interact with our website by collecting 
                        and reporting information anonymously.
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Functional Cookies</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        These cookies enable the website to provide enhanced functionality and personalization. 
                        They may be set by us or by third party providers.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    Managing Cookies
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    You can control and/or delete cookies as you wish. You can delete all cookies that are 
                    already on your computer and you can set most browsers to prevent them from being placed. 
                    If you do this, however, you may have to manually adjust some preferences every time you 
                    visit a site and some services and functionalities may not work.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">5</span>
                    Third-Party Cookies
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Some cookies on our website are set by third-party services. These may include analytics 
                    services, advertising networks, and social media platforms. We do not control these cookies 
                    and you should check the relevant third-party website for more information.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">6</span>
                    Updates to This Policy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    We may update this Cookie Policy from time to time. We will notify you of any changes by 
                    posting the new Cookie Policy on this page and updating the "Last updated" date.
                  </p>
                </section>

                <section className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">7</span>
                    Contact Us
                  </h2>
                  <div className="text-muted-foreground leading-relaxed text-lg space-y-4">
                    <p>If you have any questions about our use of cookies, please contact us at:</p>
                    <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                      <p><strong>Email:</strong> privacy@zapeera.com</p>
                      <p><strong>Phone:</strong> +92 313 1670125</p>
                    </div>
                  </div>
                </section>

                <div className="text-center bg-muted/30 rounded-xl p-6">
                  <p className="text-sm text-muted-foreground">
                    Last updated: December 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
}
