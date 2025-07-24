const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="container mx-auto px-6 lg:px-24 xl:px-40">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <div>
          <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-12 shadow-card border border-border/20 hover:shadow-glow transition-all duration-300">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4"></h3>
              <p className="text-foreground/80 text-base md:text-lg leading-relaxed text-left">
                I’m Thilip K, a Computer Science Engineering recent 2025 passedout Fresher from Kongunadu College of Engineering and Technology, Trichy, with a CGPA of 7.8.
                I find joy in building things that work beautifully and serve a purpose — whether it’s solving a real-world problem or enhancing user experience.
                My journey has been shaped by curiosity, persistence, and a genuine love for learning beyond textbooks.
                I believe great software comes from understanding people as much as technology.
                Each project I take on is not just code — it’s a reflection of growth, purpose, and passion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;