import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, Globe, GraduationCap, Users } from "lucide-react";

export const About = () => {
  const skills = [
    { name: "Python", level: 90, icon: Code },
    { name: "JavaScript", level: 85, icon: Code },
    { name: "AI/ML", level: 80, icon: Brain },
    { name: "Research", level: 85, icon: GraduationCap },
    { name: "Teaching", level: 90, icon: Users },
    { name: "Web Development", level: 85, icon: Globe },
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: "Computer Science Student",
      description: "Undergraduate at GCTU, Ghana, specializing in AI and software engineering."
    },
    {
      icon: Brain,
      title: "AI Research Enthusiast",
      description: "Aspiring Ph.D. candidate with focus on AI for social good and innovation."
    },
    {
      icon: Users,
      title: "Teacher & Mentor",
      description: "Sharing knowledge through classes, tutorials, and community engagement."
    },
    {
      icon: Globe,
      title: "Global Impact Vision",
      description: "Leveraging computer science to create impactful solutions for communities worldwide."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building the <span className="text-gradient-animate">Future</span> with AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I am a passionate Computer Science student with a vision to leverage technology 
            for creating meaningful impact in communities and driving global innovation.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image Section */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
              <img 
                src="/lovable-uploads/57a613ff-8ee2-4b8c-9e91-aca0b106aada.png" 
                alt="Prince Fiebor working on his laptop in a modern workspace"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
          </div>

          {/* Story Section */}
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-2xl font-semibold mb-4 text-gradient-animate">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My fascination with technology started late, but it was discovering the potential 
                of Artificial Intelligence that truly ignited my passion. As an undergraduate at 
                GCTU, I've dedicated myself to understanding how AI can solve real-world problems.
              </p>
              <p>
                Beyond academics, I'm deeply involved in teaching and community work—from tutoring 
                fellow students in automata theory and OOP to sharing digital skills through my 
                AGT TECH platform. I believe knowledge grows when shared.
              </p>
              <p>
                My ultimate goal is to pursue a Ph.D. in AI research, focusing on applications 
                that can drive positive social change and educational innovation across Africa and beyond.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Skills & Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="group p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary/50 rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-primary/20"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="project-card group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};