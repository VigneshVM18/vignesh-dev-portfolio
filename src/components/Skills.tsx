
import { 
  Code, 
  Palette, 
  Zap, 
  Layers, 
  Smartphone, 
  Database,
  Globe,
  Monitor,
  Gamepad2,
  Wrench
} from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["React", "TypeScript", "Next.js", "Vue.js"],
    color: "neon-cyan"
  },
  {
    title: "Styling",
    icon: Palette,
    skills: ["Tailwind CSS", "Styled Components", "SCSS", "CSS3"],
    color: "neon-purple"
  },
  {
    title: "Build Tools",
    icon: Zap,
    skills: ["Vite", "Webpack", "Rollup", "Parcel"],
    color: "neon-blue"
  },
  {
    title: "State Management",
    icon: Layers,
    skills: ["Redux", "Zustand", "React Query", "Context API"],
    color: "neon-cyan"
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "PWA", "Responsive Design", "Touch UI"],
    color: "neon-purple"
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "Express", "GraphQL", "REST APIs"],
    color: "neon-blue"
  }
];

const additionalSkills = [
  { name: "UI/UX Design", level: 85 },
  { name: "Performance Optimization", level: 92 },
  { name: "Testing & QA", level: 78 },
  { name: "Project Management", level: 88 }
];

export const Skills = () => {
  return (
    <section className="py-20 bg-muted/20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              SKILLS & EXPERTISE
            </span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning the entire web development stack, 
            from design to deployment and optimization.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className="group p-6 bg-card border border-border rounded-lg hover:border-neon-cyan transition-all duration-500 hover:shadow-glow-primary animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-${category.color}/10 border border-${category.color}/20 mr-4`}>
                    <IconComponent className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className="font-orbitron text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="px-3 py-2 bg-muted/50 text-sm font-medium text-foreground rounded border border-border/50 hover:border-neon-cyan/50 transition-colors duration-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills with Progress Bars */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-orbitron text-2xl font-bold text-center mb-8 text-foreground">
            Additional Competencies
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalSkills.map((skill, index) => (
              <div 
                key={skill.name}
                className="animate-slide-up"
                style={{ animationDelay: `${(index + 6) * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-inter font-medium text-foreground">
                    {skill.name}
                  </span>
                  <span className="font-inter text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-primary transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${(index + 6) * 0.2}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
