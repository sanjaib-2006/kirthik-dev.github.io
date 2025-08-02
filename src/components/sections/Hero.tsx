
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative grid h-screen place-items-center overflow-hidden"
    >
      <div className="absolute inset-0 animated-gradient opacity-60" />
      <div className="absolute inset-0 bg-background/20" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full blur-sm animate-float" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-secondary/20 rounded-full blur-sm animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent/40 rounded-full blur-sm animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium text-foreground/80">
            <Sparkles className="w-4 h-4 text-primary" />
            Available for new opportunities
          </div>
          
          <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 animate-fade-in-up">
            <span className="block text-white">
              Kirthik B
            </span>
          </h1>
          
          <div className="space-y-4 animate-fade-in-up text-center" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-white">
              Data Engineer & AI Engineer
            </p>
            <p className="text-lg md:text-xl text-primary font-semibold">
              Engineering Data, Crafting Intelligence
            </p>
          </div>
          
          <div className="mt-8 h-16 md:h-12 animate-fade-in-up text-center" style={{ animationDelay: '0.4s' }}>
            <TypeAnimation
              sequence={[
                "Crafting scalable ETL pipelines with Python & PySpark.",
                3000,
                "Engineering real-time data ingestion & quality frameworks.",
                3000,
                "Developing AI-powered multi-agent systems with LangGraph.",
                3000,
              ]}
              wrapper="div"
              speed={50}
              repeat={Infinity}
              className="text-base md:text-lg text-white/80 leading-relaxed"
            />
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link to="projects" smooth={true} offset={-70} duration={500}>
              <Button size="lg" className="gradient-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25">
                View My Work
              </Button>
            </Link>
            <Link to="contact" smooth={true} offset={-70} duration={500}>
              <Button variant="outline" size="lg" className="glass-card border-white/20 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <Button
          variant="ghost"
          size="icon"
          className="animate-bounce h-12 w-12 rounded-full glass-card hover:scale-110 transition-all duration-300"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </Link>
    </section>
  );
}
