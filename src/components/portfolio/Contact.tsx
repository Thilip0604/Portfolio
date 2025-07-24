import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';



const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (in real app, integrate with email service)
    // try {
    //   // Here you would integrate with services like EmailJS, Formspree, or your own backend
    //   await new Promise(resolve => setTimeout(resolve, 2000));
      
    //   toast({
    //     title: "Message Sent!",
    //     description: "Thank you for your message. I'll get back to you soon!",
    //   });

    //   setFormData({
    //     name: "",
    //     email: "",
    //     subject: "",
    //     message: ""
    //   });
    // } catch (error) {
    //   toast({
    //     title: "Error",
    //     description: "Failed to send message. Please try again.",
    //     variant: "destructive"
    //   });
    // } finally {
    //   setIsSubmitting(false);
    // }

    try {
  await emailjs.send(
    'service_gu5ansq',      // Replace with your EmailJS service ID
    'template_sq65ul8',     // Replace with your EmailJS template ID
    formData,               // This matches your template variables
    'm80BspNBAOdpHOAsB'          // Replace with your EmailJS public key (user ID)
  );

  toast({
    title: "Message Sent!",
    description: "Thank you for your message. I'll get back to you soon!",
  });

  setFormData({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
} catch (error) {
  toast({
    title: "Error",
    description: "Failed to send message. Please try again.",
    variant: "destructive"
  });
} finally {
  setIsSubmitting(false);
}
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "kthilip0604@gmail.com",
      action: "mailto:kthilip0604@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 6380916627",
      action: "tel:+91XXXXXXXXXX"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Trichy,TamilNadu",
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/thilipk"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn", 
      url: "https://linkedin.com/in/thilipk"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-foreground/70 text-base md:text-lg mt-6 max-w-2xl mx-auto px-4">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-card backdrop-blur-sm border-border/20 p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, creative projects, 
                or just having a chat about technology and development.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                      <div className="text-primary-foreground">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-foreground font-medium">{info.title}</h4>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-primary hover:text-accent transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-foreground/70">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              {/* <div className="mt-8 pt-8 border-t border-border/20">
                <h4 className="text-foreground font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-110"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div> */}
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-gradient-card backdrop-blur-sm border-border/20 p-6 md:p-8 hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-foreground font-medium mb-2 block">
                      Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-muted/30 border-border/20 focus:border-primary transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-foreground font-medium mb-2 block">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-muted/30 border-border/20 focus:border-primary transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-foreground font-medium mb-2 block">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-muted/30 border-border/20 focus:border-primary transition-colors duration-300"
                    placeholder="Project discussion, collaboration, etc."
                  />
                </div>

                <div>
                  <label className="text-foreground font-medium mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-muted/30 border-border/20 focus:border-primary transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;