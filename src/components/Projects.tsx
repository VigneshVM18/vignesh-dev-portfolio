import { ExternalLink, Eye } from 'lucide-react';
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
    title: "Cyberpunk Cityscape",
    description: "Futuristic urban environment with dynamic neon lighting and atmospheric effects.",
    image: project1,
    technologies: ["Blender", "Substance Painter", "Unreal Engine"],
    category: "Environment"
  },
  {
    id: 2,
    title: "Mechanical Guardian",
    description: "High-detail robot character with intricate mechanical components and texturing.",
    image: project2,
    technologies: ["ZBrush", "Maya", "Arnold"],
    category: "Character"
  },
  {
    id: 3,
    title: "Tech Product Visualization",
    description: "Commercial product render showcasing sleek design and premium materials.",
    image: project3,
    technologies: ["Cinema 4D", "Octane", "Photoshop"],
    category: "Product"
  },
  {
    id: 4,
    title: "Modern Architecture",
    description: "Contemporary building design with emphasis on light, space, and materials.",
    image: project4,
    technologies: ["3ds Max", "V-Ray", "AutoCAD"],
    category: "Architecture"
  },
  {
    id: 5,
    title: "Fantasy Creature",
    description: "Mythical being design with detailed organic textures and magical elements.",
    image: project5,
    technologies: ["ZBrush", "Blender", "Substance Designer"],
    category: "Character"
  },
  {
    id: 6,
    title: "Motion Graphics",
    description: "Dynamic abstract animation with flowing geometric patterns and energy effects.",
    image: project6,
    technologies: ["After Effects", "Cinema 4D", "Redshift"],
    category: "Animation"
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
            A showcase of my latest work spanning character design, environment art, 
            and technical visualization across various industries.
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
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
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