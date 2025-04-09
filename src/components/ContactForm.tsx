
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Send } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    services: 'General Inquiry'
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        message: '',
        services: 'General Inquiry'
      });
      setLoading(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a question or ready to start your project? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-purple-900/30">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-purple-400">contact@webcraft.com</p>
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p>(123) 456-7890</p>
              </div>
              <div>
                <p className="font-semibold">Address</p>
                <p>123 Web Street, Digital City, 90210</p>
              </div>
              <div>
                <p className="font-semibold">Hours</p>
                <p>Monday - Friday: 9am - 5pm</p>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 border border-purple-700/50 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border border-purple-700/50 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="services" className="block mb-1 text-sm font-medium text-gray-300">
                Service Interested In
              </label>
              <select
                id="services"
                name="services"
                className="w-full p-3 border border-purple-700/50 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={formData.services}
                onChange={handleChange}
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Business Website">Business Website</option>
                <option value="E-commerce Website">E-commerce Website</option>
                <option value="Custom Development">Custom Development</option>
                <option value="SEO Services">SEO Services</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full p-3 border border-purple-700/50 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 purple-glow"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
              {!loading && <Send className="ml-2 h-4 w-4" />}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
