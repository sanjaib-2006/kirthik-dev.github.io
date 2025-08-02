
import { Header } from "@/components/shared/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/shared/Footer";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { GeometricBackground } from "@/components/shared/GeometricBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <CustomCursor />
      <GeometricBackground />
      <Header />
      
      <main className="relative z-10">
        <Hero />
        <div className="diagonal-transition">
          <About />
        </div>
        <Skills />
        <div className="diagonal-transition">
          <Experience />
        </div>
        <Projects />
        <div className="diagonal-transition">
          <Education />
        </div>
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
