
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient">Transform</span> Your Online Presence
            </h1>
            <p className="text-lg text-gray-300 md:pr-10">
              We craft stunning, high-performing websites that elevate your brand and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-primary hover:bg-primary/90 purple-glow animate-pulse-glow text-white px-6">
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-900/20">
                View Our Work
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-purple-800"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-800 to-black"></div>
              </div>
              <p>Trusted by 100+ businesses</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-700/20 rounded-lg blur-3xl"></div>
              <div className="relative bg-black/40 backdrop-blur border border-purple-500/30 rounded-lg p-6 purple-glow animate-float">
                <div className="w-full h-72 bg-gradient-to-br from-gray-900 to-black rounded overflow-hidden">
                  <div className="w-full h-8 bg-gray-800 flex gap-2 items-center px-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="w-40 h-4 bg-gray-700 rounded-full ml-4"></div>
                  </div>
                  <div className="p-4">
                    <div className="h-8 w-32 bg-purple-600/40 rounded mb-4"></div>
                    <div className="h-4 w-full bg-gray-700/50 rounded mb-2"></div>
                    <div className="h-4 w-full bg-gray-700/50 rounded mb-2"></div>
                    <div className="h-4 w-3/4 bg-gray-700/50 rounded mb-6"></div>
                    <div className="h-20 w-full bg-gray-800/50 rounded mb-4"></div>
                    <div className="h-8 w-28 bg-purple-600/70 rounded"></div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center purple-glow">
                  <span className="text-white font-bold">New</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
