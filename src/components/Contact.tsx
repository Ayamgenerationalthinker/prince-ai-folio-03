import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, Youtube, MessageCircle, Send, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mblknrkr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Ayamgenerationalthinker",
      description: "View my code repositories and open source contributions"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/prince-kojo-ofosu-fiebor-48917a268/",
      description: "Connect with me professionally and see my career journey"
    },
    {
      name: "Instagram (AGT_TECH_)",
      icon: MessageCircle,
      url: "https://www.instagram.com/agt_tech_/",
      description: "Behind-the-scenes content and tech inspiration"
    },
    {
      name: "TikTok (Coach_AGT)",
      icon: MessageCircle,
      url: "#",
      description: "Quick tech tips and motivational content"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "princefiebor10@gmail.com",
      href: "mailto:princefiebor10@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Accra, Ghana",
      href: null
    },
    {
      icon: Phone,
      label: "Available for",
      value: "Research Collaborations, Opportunities",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-16 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-gradient-animate">Connect</span> & Collaborate
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Interested in research collaboration or have a project idea? Let's talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="project-card h-full">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Send me a message</h3>
                <form 
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label htmlFor="name" className="text-sm">Name</Label>
                      <Input 
                        id="name" 
                        name="name"
                        placeholder="Your full name" 
                        className="bg-background/50 h-9"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="email" className="text-sm">Email</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        placeholder="your.email@example.com" 
                        className="bg-background/50 h-9"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label htmlFor="subject" className="text-sm">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject"
                      placeholder="What's this about?" 
                      className="bg-background/50 h-9"
                      required
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <Label htmlFor="message" className="text-sm">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Tell me about your project or idea..."
                      rows={4}
                      className="bg-background/50"
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="default" className="w-full glow-effect" disabled={isSubmitting}>
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-4">
            {/* Direct Contact */}
            <Card className="project-card">
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <info.icon className="w-4 h-4 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-xs">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            className="text-muted-foreground text-xs hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-xs">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="project-card">
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold mb-3">Follow My Work</h3>
                <div className="space-y-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center gap-2 p-2 rounded-lg bg-background/30 hover:bg-background/50 transition-colors group"
                    >
                      <social.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Availability Status */}
            <Card className="project-card">
              <CardContent className="p-5 text-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mb-2 animate-pulse" />
                <h3 className="font-semibold text-sm mb-1">Currently Available</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Open to research collaborations and project partnerships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10 p-6 rounded-xl bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-background/10" />
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-2">
              Ready to build something amazing?
            </h3>
            <p className="text-white/80 mb-4 text-sm max-w-xl mx-auto">
              Let's explore how we can create positive impact through technology.
            </p>
            <Button variant="secondary" size="default">
              <Mail className="w-4 h-4 mr-2" />
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};