
import { Code, Globe, Smartphone, Zap } from 'lucide-react';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string 
}) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-900/30 rounded-lg p-6 hover:purple-glow transition-all duration-300">
      <div className="p-4 bg-purple-900/20 rounded-lg inline-block mb-4">
        <Icon className="h-6 w-6 text-purple-400" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Our Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer a full range of web development services to bring your vision to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={Globe}
            title="Business Websites"
            description="Professional websites that establish your online presence and help grow your customer base."
          />
          <ServiceCard
            icon={Smartphone}
            title="Mobile Responsive"
            description="Websites that look and function perfectly on all devices - from desktops to smartphones."
          />
          <ServiceCard
            icon={Code}
            title="Custom Development"
            description="Tailored solutions with custom functionality to meet your specific business needs."
          />
          <ServiceCard
            icon={Zap}
            title="E-commerce Stores"
            description="Feature-rich online stores that make selling your products easy and efficient."
          />
          <ServiceCard
            icon={Globe}
            title="SEO Optimization"
            description="We optimize your website to rank higher in search engines and drive more traffic."
          />
          <ServiceCard
            icon={Zap}
            title="Maintenance & Support"
            description="Ongoing support to keep your website secure, updated, and performing optimally."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
