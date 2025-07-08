
import { ExternalLink, Eye, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern shopping experience with React, TypeScript, and seamless payment integration.",
    image: project1,
    technologies: ["React", "TypeScript", "Stripe", "Tailwind CSS"],
    category: "Web App"
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Real-time data visualization dashboard with interactive charts and responsive design.",
    image: project2,
    technologies: ["Next.js", "Chart.js", "React Query", "Framer Motion"],
    category: "Dashboard"
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description: "Secure banking interface with biometric authentication and smooth animations.",
    image: project3,
    technologies: ["React Native", "Redux", "Expo", "TypeScript"],
    category: "Mobile"
  },
  {
    id: 4,
    title: "SaaS Landing Page",
    description: "High-converting landing page with modern design and optimized performance.",
    image: project4,
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "MDX"],
    category: "Website"
  },
  {
    id: 5,
    title: "Task Management Tool",
    description: "Collaborative workspace with real-time updates and intuitive drag-and-drop interface.",
    image: project5,
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
    category: "Web App"
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "Interactive developer portfolio with 3D elements and smooth scroll animations.",
    image: project6,
    technologies: ["React", "Three.js", "GSAP", "Vite"],
    category: "Portfolio"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              FEATURED PROJECTS
            </span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work spanning web applications, mobile apps, 
            and interactive experiences across various industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group bg-card border-border hover:border-neon-cyan transition-all duration-500 hover:shadow-glow-primary overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="bg-neon-cyan text-primary-foreground hover:bg-neon-cyan/90"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-primary-foreground"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-glass backdrop-blur-sm text-xs font-semibold text-neon-cyan border border-neon-cyan/30 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-orbitron text-xl font-bold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="font-inter text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-muted text-xs font-medium text-muted-foreground rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
