import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Brain, Database, Users, TrendingUp } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "AI Customer Support Chatbot (FUTURE_ML_O3)",
      description: "Advanced AI-powered customer support chatbot using natural language processing and machine learning to provide intelligent, context-aware responses for enhanced customer service experiences.",
      icon: Brain,
      tags: ["AI/ML", "Python", "NLP", "TensorFlow", "Flask"],
      category: "AI Project",
      status: "Completed",
      links: {
        github: "https://github.com/Ayamgenerationalthinker/FUTURE_ML_O3",
        demo: "#"
      }
    },
    {
      title: "Stock Price Prediction System (FUTURE_ML_O2)",
      description: "Machine learning model for predicting stock prices using historical data analysis, technical indicators, and deep learning algorithms to forecast market trends.",
      icon: TrendingUp,
      tags: ["Python", "Machine Learning", "LSTM", "Pandas", "Matplotlib"],
      category: "AI Project",
      status: "Completed",
      links: {
        github: "https://github.com/Ayamgenerationalthinker/FUTURE_ML_O2",
        demo: "#"
      }
    },
    {
      title: "Sales Forecasting Model (FUTURE_ML_O1)",
      description: "Predictive analytics system for sales forecasting using time series analysis and machine learning to help businesses make data-driven decisions.",
      icon: Database,
      tags: ["Python", "Time Series", "Scikit-learn", "Data Analysis"],
      category: "AI Project",
      status: "Completed",
      links: {
        github: "https://github.com/Ayamgenerationalthinker/FUTURE_ML_O1",
        demo: "#"
      }
    },
    {
      title: "Mahogany Wellness Pathways",
      description: "Comprehensive health and wellness platform providing personalized wellness tracking, health recommendations, and community support for holistic well-being.",
      icon: Users,
      tags: ["React", "Node.js", "Health Tech", "MongoDB"],
      category: "Web Development",
      status: "In Development",
      links: {
        github: "https://github.com/Ayamgenerationalthinker/mahogany-wellness-pathways",
        demo: "#"
      }
    },
    {
      title: "AGT TECH - AI Education Platform",
      description: "Empowering Africa with AI Education, Community & Tech Solutions. A comprehensive platform training 500+ Africans in AI skills with 95% success rate.",
      icon: Brain,
      tags: ["React", "AI Education", "Community", "Next.js", "Tailwind CSS"],
      category: "Education Platform",
      status: "Live",
      links: {
        demo: "https://agt-tech-qyn4.vercel.app/",
        github: "#"
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "In Development": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Published": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Live": return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "Ongoing": return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-16 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Projects & Research
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Building <span className="text-gradient-animate">Tomorrow's</span> Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A showcase of my work in AI, software engineering, and research.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="project-card group h-full">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${getStatusColor(project.status)}`}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg mb-1">{project.title}</CardTitle>
                <Badge variant="secondary" className="w-fit text-xs">
                  {project.category}
                </Badge>
              </CardHeader>
              
              <CardContent className="flex flex-col flex-grow pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-grow line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs px-2 py-0">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs px-2 py-0">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto">
                  {project.links.github && project.links.github !== "#" && (
                    <Button variant="outline" size="sm" className="flex-1 h-8 text-xs" onClick={() => window.open(project.links.github, '_blank')}>
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  )}
                  {project.links.demo && project.links.demo !== "#" && (
                    <Button variant="outline" size="sm" className="flex-1 h-8 text-xs" onClick={() => window.open(project.links.demo, '_blank')}>
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <Button size="default" className="glow-effect" onClick={() => window.open('https://github.com/Ayamgenerationalthinker', '_blank')}>
            <Github className="w-4 h-4 mr-2" />
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};
