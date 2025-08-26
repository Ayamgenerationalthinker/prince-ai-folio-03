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
    <section id="contact" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient-animate">Connect</span> & Collaborate
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're interested in research collaboration, have a project idea, 
            or just want to discuss the future of AI—I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="project-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
                <form 
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        name="name"
                        placeholder="Your full name" 
                        className="bg-background/50"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        placeholder="your.email@example.com" 
                        className="bg-background/50"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject"
                      placeholder="What's this about?" 
                      className="bg-background/50"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Tell me about your project, collaboration idea, or question..."
                      rows={6}
                      className="bg-background/50"
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full glow-effect" disabled={isSubmitting}>
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-6 h-fit">
            {/* Direct Contact */}
            <Card className="project-card h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <info.icon className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            className="text-muted-foreground text-sm hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="project-card h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Follow My Work</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-start gap-3 p-3 rounded-lg bg-background/30 hover:bg-background/50 transition-colors group"
                    >
                      <social.icon className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-medium text-sm">{social.name}</p>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          {social.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Availability Status */}
            <Card className="project-card h-full">
              <CardContent className="p-6 text-center flex flex-col justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-3 animate-pulse" />
                <h3 className="font-semibold mb-2">Currently Available</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Open to research collaborations, internship opportunities, 
                  and meaningful project partnerships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-background/10" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to build something amazing together?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Whether it's research, development, or education—let's explore how we can 
              create positive impact through technology.
            </p>
            <Button variant="secondary" size="lg" className="px-8 py-3">
              <Mail className="w-5 h-5 mr-2" />
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};