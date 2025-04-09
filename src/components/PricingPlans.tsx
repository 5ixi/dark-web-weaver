
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useState } from 'react';

type PlanFeature = {
  name: string;
  included: boolean;
};

type Plan = {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  buttonText: string;
  popular?: boolean;
};

const PricingPlans = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans: Plan[] = [
    {
      name: "Basic",
      price: "£20",
      description: "Perfect for small businesses just getting started",
      features: [
        { name: "5 Page Website", included: true },
        { name: "Mobile Responsive", included: true },
        { name: "Contact Form", included: true },
        { name: "Basic SEO Setup", included: true },
        { name: "1 Revision", included: true },
        { name: "Social Media Integration", included: false },
        { name: "E-commerce Functionality", included: false },
        { name: "Custom Features", included: false },
      ],
      buttonText: "Choose Basic",
    },
    {
      name: "Professional",
      price: "£30",
      description: "Ideal for established businesses looking to grow",
      features: [
        { name: "10 Page Website", included: true },
        { name: "Mobile Responsive", included: true },
        { name: "Contact Form", included: true },
        { name: "Advanced SEO Setup", included: true },
        { name: "3 Revisions", included: true },
        { name: "Social Media Integration", included: true },
        { name: "E-commerce Functionality", included: false },
        { name: "Custom Features", included: false },
      ],
      buttonText: "Choose Professional",
      popular: true,
    },
    {
      name: "Premium",
      price: "£40",
      description: "For businesses that need a comprehensive online solution",
      features: [
        { name: "Unlimited Pages", included: true },
        { name: "Mobile Responsive", included: true },
        { name: "Contact Form", included: true },
        { name: "Advanced SEO Setup", included: true },
        { name: "Unlimited Revisions", included: true },
        { name: "Social Media Integration", included: true },
        { name: "E-commerce Functionality", included: true },
        { name: "Custom Features", included: true },
      ],
      buttonText: "Choose Premium",
    },
  ];

  const handlePlanSelect = (planName: string) => {
    if (email.trim() === "") {
      toast({
        title: "Email Required",
        description: "Please enter your email before selecting a plan",
        variant: "destructive",
      });
      return;
    }
    
    setSelectedPlan(planName);
    toast({
      title: "Thank you for your interest!",
      description: `We'll contact you soon about the ${planName} plan.`,
    });
  };

  return (
    <section id="pricing" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Simple, Transparent Pricing</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect package for your business needs
          </p>
        </div>
        
        <div className="mb-10 max-w-md mx-auto">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
            Enter your email to see our offers
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-purple-700/50 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative rounded-lg overflow-hidden border ${
                plan.popular 
                  ? "border-purple-500 purple-glow" 
                  : "border-gray-800"
              } bg-gradient-to-b from-gray-900 to-black`}
            >
              {plan.popular && (
                <div className="absolute top-0 inset-x-0 text-xs text-center py-1 bg-purple-600 text-white font-semibold">
                  MOST POPULAR
                </div>
              )}
              <div className="p-6 pt-8">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-extrabold">{plan.price}</span>
                  <span className="text-gray-400 ml-1">/ one-time</span>
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className={`mr-2 mt-1 ${feature.included ? "text-purple-500" : "text-gray-700"}`}>
                        <Check size={16} />
                      </span>
                      <span className={feature.included ? "text-gray-300" : "text-gray-600"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? "bg-purple-600 hover:bg-purple-700 text-white" 
                      : "bg-gray-800 hover:bg-gray-700 text-white"
                  }`}
                  onClick={() => handlePlanSelect(plan.name)}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>All plans include free hosting setup and 30 days of support</p>
          <p className="mt-2">Need a custom solution? <a href="#contact" className="text-purple-400 hover:text-purple-300 underline">Contact us</a> for a tailored quote.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
