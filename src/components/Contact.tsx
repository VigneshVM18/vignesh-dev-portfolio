
import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "vmvignesh.dev@outlook.com",
    href: "mailto:vmvignesh.dev@outlook.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8608358233",
    href: "tel:+918608358233"
  },
  {
    icon: MapPin,
    label: "Location", 
    value: "Chennai, India",
    href: "#"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
    color: "hover:text-neon-cyan"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vmvigneshdev",
    color: "hover:text-neon-blue"
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com",
    color: "hover:text-neon-purple"
  }
];

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Vignesh VM'
      };

      await emailjs.send(
        'service_1774l0a',    // Service ID
        'template_3l6mnqg',   // Template ID
        templateParams,
        'jGMh4QAOO3FnRqLX_'   // Public Key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              CONTACT ME
            </span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next front-end project? Let's connect and build 
            something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="font-orbitron text-2xl font-bold mb-6 text-foreground">
                  Let's Connect
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={item.label} className="flex items-center space-x-4 group">
                        <div className="p-3 bg-glass border border-border rounded-lg group-hover:border-neon-cyan transition-colors duration-300">
                          <IconComponent className="w-5 h-5 text-neon-cyan" />
                        </div>
                        <div>
                          <p className="font-inter text-sm text-muted-foreground">
                            {item.label}
                          </p>
                          <a 
                            href={item.href}
                            className="font-inter font-medium text-foreground hover:text-neon-cyan transition-colors duration-300"
                          >
                            {item.value}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-orbitron text-lg font-bold mb-4 text-foreground">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-glass border border-border rounded-lg transition-all duration-300 hover:border-neon-cyan hover:shadow-glow-primary ${social.color}`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-card border-border animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <h3 className="font-orbitron text-2xl font-bold mb-6 text-foreground">
                  Send Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-inter text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-colors duration-300 text-foreground"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block font-inter text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-colors duration-300 text-foreground"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block font-inter text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-colors duration-300 text-foreground"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-inter text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-colors duration-300 text-foreground"
                      placeholder="Project Collaboration"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-inter text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-colors duration-300 text-foreground resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-primary hover:shadow-glow-primary text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
