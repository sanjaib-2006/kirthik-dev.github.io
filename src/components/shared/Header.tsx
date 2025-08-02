
import { Link } from "react-scroll";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const navLinks = [
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "experience", label: "Experience" },
  { to: "projects", label: "Projects" },
  { to: "education", label: "Education" },
  { to: "contact", label: "Contact" },
];

const NavLinks = ({ onLinkClick }: { onLinkClick?: () => void }) => (
  <>
    {navLinks.map((link) => (
      <Link
        key={link.to}
        to={link.to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="cursor-pointer text-foreground/70 hover:text-foreground transition-all duration-300 font-medium hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-primary after:transition-all after:duration-300 hover:after:w-full"
        activeClass="text-primary"
        onClick={onLinkClick}
      >
        {link.label}
      </Link>
    ))}
  </>
);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="glass-nav rounded-full px-8 py-4 animate-morphism">
        <div className="flex items-center justify-between">
          <div className="w-8"></div> {/* Spacer for balance */}
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </nav>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="glass-card rounded-full hover:scale-110 transition-all duration-300">
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="glass-card border-l border-white/10">
                  <nav className="flex flex-col space-y-8 mt-16">
                    <NavLinks onLinkClick={() => setIsOpen(false)} />
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
