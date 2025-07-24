import { Card } from "@/components/ui/card";
import { Code, Database, Globe, Terminal, GitBranch, Bot, Braces, Zap } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <Globe className="w-12 h-12" />, color: "text-primary" },
    { name: "CSS", icon: <Braces className="w-12 h-12" />, color: "text-blue-glow" },
    { name: "JavaScript", icon: <Code className="w-12 h-12" />, color: "text-accent" },
    { name: "React", icon: <Zap className="w-12 h-12" />, color: "text-blue-deep" },
    { name: "Python", icon: <Terminal className="w-12 h-12" />, color: "text-primary" },
    { name: "Flask", icon: <Database className="w-12 h-12" />, color: "text-blue-glow" },
    { name: "Git", icon: <GitBranch className="w-12 h-12" />, color: "text-accent" },
    { name: "SQL", icon: <Database className="w-12 h-12" />, color: "text-blue-deep" },
    { name: "VS Code", icon: <Code className="w-12 h-12" />, color: "text-primary" },
    { name: "ChatGPT", icon: <Bot className="w-12 h-12" />, color: "text-blue-glow" }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
            What I <span className="bg-gradient-primary bg-clip-text text-transparent">Do</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-foreground/70 text-base md:text-xl mt-6 max-w-2xl mx-auto font-light px-4">
            Passionate about creating digital experiences with cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto px-4">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-gradient-card backdrop-blur-sm border border-border/20 rounded-2xl p-4 md:p-6 lg:p-8 hover:shadow-glow transition-all duration-500 hover:scale-110 hover:rotate-2 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-2 md:space-y-4">
                <div className={`${skill.color} group-hover:animate-pulse-glow transition-all duration-300 group-hover:scale-125`}>
                  {skill.icon}
                </div>
                <h3 className="text-sm md:text-base lg:text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;