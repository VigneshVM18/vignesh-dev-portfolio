
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
    title: "Property Find - Real Estate Platform",
    description: "Modern, fully responsive real estate website with interactive UI elements, property search, and filter functionality. Features dynamic property cards and smooth navigation.",
    image: project1,
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
    category: "Web Application",
    period: "Feb 2023 - Present"
  },
  {
    id: 2,
    title: "Employee Timesheet Tracker",
    description: "Web-based timesheet tracker for internal HR management with data visualization, reporting features, and performance analytics using Chart.js.",
    image: project2,
    technologies: ["Bootstrap", "CSS Grid", "JavaScript", "Chart.js"],
    category: "HR Management",
    period: "Jan 2022 - Feb 2023"
  },
  {
    id: 3,
    title: "Interactive Property Details",
    description: "Dynamic property showcase with image galleries, feature highlights, contact forms, and client-side routing for seamless user experience.",
    image: project3,
    technologies: ["React Router", "React State", "JavaScript", "Modal Components"],
    category: "Frontend UI",
    period: "2023"
  },
  {
    id: 4,
    title: "Responsive Real Estate UI",
    description: "Pixel-perfect responsive design implementation ensuring optimal experience across all devices with modern CSS Grid and Flexbox layouts.",
    image: project4,
    technologies: ["CSS3", "HTML5", "Responsive Design", "Cross-browser"],
    category: "UI Development",
    period: "2023"
  },
  {
    id: 5,
    title: "Data Visualization Dashboard",
    description: "Advanced employee productivity analytics with interactive charts, export functionality, and real-time data integration for management insights.",
    image: project5,
    technologies: ["SQL Server", "Chart.js", "JavaScript", "Data Analysis"],
    category: "Analytics",
    period: "2022-2023"
  },
  {
    id: 6,
    title: "Component-Based Architecture",
    description: "Scalable front-end solutions with reusable React components, state management, and optimized performance for large-scale applications.",
    image: project6,
    technologies: ["React.js", "Component Design", "State Management", "Performance"],
    category: "Architecture",
    period: "2022-Present"
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
              FRONT-END PROJECTS
            </span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing real-world projects and professional experience in front-end development, 
            from responsive web applications to data visualization solutions.
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

                {/* Period Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-glass backdrop-blur-sm text-xs font-medium text-neon-purple border border-neon-purple/30 rounded-full">
                    {project.period}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-orbitron text-xl font-bold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="font-inter text-muted-foreground mb-4 leading-relaxed text-sm">
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
