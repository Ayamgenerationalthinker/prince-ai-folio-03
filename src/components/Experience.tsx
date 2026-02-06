import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, BookOpen, Globe, Award, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Research Assistant",
      organization: "GCTU Graduate School",
      period: "2023 - Present",
      type: "Academic",
      icon: GraduationCap,
      description: "Conducting research on distributed systems, AI applications, and software engineering methodologies. Contributing to academic publications and feasibility studies.",
      achievements: [
        "Led feasibility study for Pharmacy Management System",
        "Presented research on mutual exclusion algorithms",
        "Mentored undergraduate students in research methodology"
      ]
    },
    {
      title: "Teaching & Mentoring",
      organization: "GCTU & Community",
      period: "2022 - Present",
      type: "Education",
      icon: Users,
      description: "Teaching computer science fundamentals, automata theory, OOP, and emerging technologies to students and community members.",
      achievements: [
        "Tutored 50+ students in Automata Theory and OOP",
        "Developed curriculum for digital skills training",
        "Created educational content for AGT TECH platform"
      ]
    },
    {
      title: "Content Creator & Educator",
      organization: "AGT TECH / Coach_AGT",
      period: "2021 - Present",
      type: "Digital",
      icon: Globe,
      description: "Creating educational content on technology, AI, and digital entrepreneurship through YouTube and TikTok platforms.",
      achievements: [
        "Built educational content library on AI and tech",
        "Trained community members in affiliate marketing",
        "Developed prompt engineering tutorials"
      ]
    },
    {
      title: "Community Volunteer",
      organization: "African Youth International Forum",
      period: "2022 - Present",
      type: "Volunteer",
      icon: Award,
      description: "Contributing to youth development initiatives and promoting technology adoption in underserved communities.",
      achievements: [
        "Organized tech awareness programs in Bubuashie",
        "Facilitated 'Come with Your Piano' music program",
        "Supported CodePunter community initiatives"
      ]
    }
  ];

  const researchInterests = [
    "Artificial Intelligence & Machine Learning",
    "Human-Centered Computing",
    "Distributed Systems & Cloud Computing",
    "Software Engineering Methodologies",
    "AI for Education and Social Impact",
    "Digital Skills Development"
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Academic": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Education": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Digital": return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "Volunteer": return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="experience" className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Experience & Research
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient-animate">Journey</span> in Tech & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From research and teaching to community impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Experience Timeline */}
          <div className="lg:col-span-2 space-y-4">
            {experiences.map((exp, index) => (
              <Card key={index} className="project-card">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <exp.icon className="w-5 h-5 text-primary" />
                    </div>
                    
                    <div className="flex-grow min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold">{exp.title}</h3>
                          <p className="text-sm text-muted-foreground">{exp.organization}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1 sm:mt-0">
                          <Badge variant="outline" className={`text-xs ${getTypeColor(exp.type)}`}>
                            {exp.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed line-clamp-2">
                        {exp.description}
                      </p>
                      
                      <ul className="space-y-1">
                        {exp.achievements.slice(0, 2).map((achievement, achIndex) => (
                          <li key={achIndex} className="text-xs text-muted-foreground flex items-start">
                            <span className="w-1 h-1 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Research Interests Sidebar */}
          <div className="space-y-4">
            <Card className="project-card">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Research Interests</h3>
                </div>
                <div className="space-y-2">
                  {researchInterests.map((interest, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground leading-relaxed">
                        {interest}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardContent className="p-5 text-center">
                <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-sm">Future Goals</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Pursuing a Ph.D. in AI research with focus on applications for social good and education across Africa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};