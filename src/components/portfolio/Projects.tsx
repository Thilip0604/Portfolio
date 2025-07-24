import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ExpenseTracker App",
      description: "A full-stack Web-App with React frontend and Flask backend. Features user Add,Update,Delete their Details.",
      technologies: ["React", "Flask", "SQLite", "Python"],
      category: "",
      status: "Completed",
      code:"https://github.com/Thilip0604/ExpenseApp.git"
    },
    {
      id: 2,
      title: "Unveils the Furture of Vehicle Pricing using ML",
      description: "A machine learning web app that predicts the resale price of vehicles based on features like model, year, fuel type, and mileage. It includes a trained model and a Flask-based frontend interface.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      category: "",
      status: ""
    },
    {
      id: 3,
      title: "Dyscalculia Detection AI App",
      description: "An AI-powered cognitive assessment tool that generates math questions based on age and gender to detect signs of dyscalculia. It uses Gemini via LangChain for question generation and analysis, and stores results in ChromaDB",
      technologies: ["Streamlit", "Gemini via LangChain", "Python"],
      category: "",
      status: "Completed"
    },
    {
      id: 4,
      title: "Calculator Web App", 
      description: "A basic arithmetic calculator built using HTML, CSS, and JavaScript that supports standard operations like addition, subtraction, multiplication, and division. It features a clean UI and responds to button-based input dynamically",
      technologies: ["HTML", "CSS", "Vanilla JS"],
      category: "",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-foreground/70 text-base md:text-lg mt-6 max-w-2xl mx-auto px-4">
            Showcasing my latest work and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="bg-gradient-card backdrop-blur-sm border-border/20 hover:shadow-glow transition-all duration-500 hover:scale-105 group overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-4 md:p-6">
                {/* Project header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-3 group-hover:animate-pulse-glow">
                      <Code2 className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-sm text-primary font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  {/* <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> */}
                    {/* <span className="text-xs text-green-500 font-medium">{project.status}</span> */}
                  {/* </div> */}
                </div>

                {/* Project description */}
                <p className="text-foreground/80 leading-relaxed mb-6 text-sm md:text-base">
                  {project.description}
                </p>

                {/* Technologies used */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                  <Button 
                    size="sm" 
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300 flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Additional projects section */}
        {/* <div className="text-center mt-16"> */}
          {/* <p className="text-foreground/60 mb-6">
            Want to see more of my work?
          </p> */}
          {/* <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button> */}
        </div>
      {/* </div> */}
    </section>
  );
};

export default Projects;