import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Brain } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about", isSection: true },
    { name: "Projects", href: "#projects", isSection: true },
    { name: "Experience", href: "#experience", isSection: true },
    { name: "Blog", href: "/blog", isSection: false },
    { name: "Contact", href: "#contact", isSection: true },
  ];

  const handleNavClick = (item: { href: string; isSection: boolean }) => {
    if (item.isSection) {
      if (isHomePage) {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/" + item.href);
      }
    } else {
      navigate(item.href);
    }
    setIsOpen(false);
  };

  const handleContactClick = () => {
    if (isHomePage) {
      const element = document.querySelector("#contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#contact");
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg">Prince Fiebor</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
            <ThemeToggle />
            <Button 
              size="sm" 
              className="glow-effect"
              onClick={handleContactClick}
            >
              Let's Connect
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <ThemeToggle />
                <Button 
                  size="sm" 
                  className="flex-1 ml-4"
                  onClick={handleContactClick}
                >
                  Let's Connect
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};