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
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Experience & Research
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient-animate">Journey</span> in Tech & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From research and teaching to community impact—each experience has shaped 
            my understanding of technology's potential to transform lives.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2 space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="project-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <exp.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                          <p className="text-muted-foreground">{exp.organization}</p>
                        </div>
                        <div className="flex flex-col sm:items-end gap-2 mt-2 sm:mt-0">
                          <Badge variant="outline" className={getTypeColor(exp.type)}>
                            {exp.type}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Research Interests Sidebar */}
          <div className="space-y-6">
            <Card className="project-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Research Interests</h3>
                </div>
                <div className="space-y-3">
                  {researchInterests.map((interest, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {interest}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Future Goals</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pursuing a Ph.D. in AI research with focus on applications for social good, 
                  education, and community development across Africa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};