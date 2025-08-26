import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Rocket, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profile-picture.jpg";

export const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Ayamgenerationalthinker", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/prince-kojo-ofosu-fiebor-48917a268/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:princefiebor10@gmail.com", label: "Email" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Status Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
            <Brain className="w-4 h-4 mr-2" />
            Available for Opportunities
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block">Prince</span>
            <span className="text-gradient-animate block">Fiebor</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Computer Science Student & Aspiring AI Researcher
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Exploring the intersection of AI, research, and real-world impact. 
            Building intelligent systems that drive innovation globally.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="px-8 py-3 text-lg glow-effect" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              <Code className="w-5 h-5 mr-2" />
              View My Work
            </Button>
            <Button variant="secondary" size="lg" className="px-8 py-3 text-lg" onClick={() => window.open('mailto:princefiebor10@gmail.com', '_blank')}>
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2 hover:text-primary transition-colors">
              <Brain className="w-6 h-6" />
              <span className="hidden sm:inline">AI/ML</span>
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors">
              <Code className="w-6 h-6" />
              <span className="hidden sm:inline">Software Engineering</span>
            </div>
            <div className="flex items-center gap-2 hover:text-accent transition-colors">
              <Rocket className="w-6 h-6" />
              <span className="hidden sm:inline">Research</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300 glow-effect"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};