
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Elegance Boutique",
    category: "E-commerce",
    imageUrl: "https://i.imgur.com/IvwJHNZ.jpg",
    description: "A luxury fashion store with seamless shopping experience."
  },
  {
    id: 2,
    title: "TechSolutions Inc",
    category: "Business",
    imageUrl: "https://i.imgur.com/y7CTG76.jpg",
    description: "Corporate website for a leading IT solutions provider."
  },
  {
    id: 3,
    title: "FoodDelivery App",
    category: "App",
    imageUrl: "https://i.imgur.com/4rN16hJ.jpg",
    description: "A responsive web app for online food ordering."
  },
  {
    id: 4,
    title: "Travel Explorer",
    category: "Travel",
    imageUrl: "https://i.imgur.com/lzHZ7vj.jpg",
    description: "Adventure travel blog with interactive maps."
  }
];

const PortfolioSection = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase());
  
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Our Recent Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Check out some of our latest projects and see what we can do for you
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <Button 
              variant={filter === 'all' ? "default" : "outline"} 
              className={filter === 'all' ? "bg-primary" : "border-gray-700 text-gray-300"}
              onClick={() => setFilter('all')}
            >
              All Projects
            </Button>
            <Button 
              variant={filter === 'e-commerce' ? "default" : "outline"} 
              className={filter === 'e-commerce' ? "bg-primary" : "border-gray-700 text-gray-300"}
              onClick={() => setFilter('e-commerce')}
            >
              E-commerce
            </Button>
            <Button 
              variant={filter === 'business' ? "default" : "outline"} 
              className={filter === 'business' ? "bg-primary" : "border-gray-700 text-gray-300"}
              onClick={() => setFilter('business')}
            >
              Business
            </Button>
            <Button 
              variant={filter === 'app' ? "default" : "outline"} 
              className={filter === 'app' ? "bg-primary" : "border-gray-700 text-gray-300"}
              onClick={() => setFilter('app')}
            >
              Apps
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg border border-purple-900/30 hover:purple-glow transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-purple-600 text-white text-xs rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-purple-500 text-purple-400 hover:bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  View Project
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90 purple-glow">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
