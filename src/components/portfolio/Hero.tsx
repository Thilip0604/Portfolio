import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-background relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
      <div className="absolute top-10 md:top-20 left-5 md:left-10 w-48 md:w-72 h-48 md:h-72 bg-blue-glow rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-64 md:w-96 h-64 md:h-96 bg-primary rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Main heading with glow effect */}
           {/* <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 animate-slide-up px-4">
             Hi,I'm<span className="bg-gradient-primary bg-clip-text text-transparent">Thilip K</span>
           </h1> */}

           <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-primarytracking-tight animate-slide-up px-2 ">
             Hi,I'm<span className="bg-gradient-primary bg-clip-text text-transparent"> Thilip K</span>
           </h1><br />
          
          {/* Subtitle with typing effect */}
           <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up px-4" style={{ animationDelay: '0.2s' }}>
             <span className="text-primary font-semibold">Passionate Fresher </span> & 
             <span className="text-accent font-semibold"> Eager to Learn New Tech</span>
           </div>
          
          {/* Description */}
           <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto mb-12 animate-slide-up px-4" style={{ animationDelay: '0.4s' }}>
             Passionate about creating innovative web solutions with modern technologies. 
             Transforming ideas into beautiful, functional applications.
           </p><br />
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <br />
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Scroll indicator */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-primary cursor-pointer" onClick={() => scrollToSection('about')} />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;