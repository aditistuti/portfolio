import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-playfair font-bold text-gray-900">Aarav Mehta</a>
          
          <div className="hidden md:flex space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#certifications">Certifications</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#achievements">Achievements</NavLink>
            <NavLink href="#resume">Resume</NavLink>
          </div>
          
          <div className="md:hidden">
            <button 
              className="text-gray-700 focus:outline-none" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink href="#about" onClick={handleNavLinkClick}>About</NavLink>
            <NavLink href="#skills" onClick={handleNavLinkClick}>Skills</NavLink>
            <NavLink href="#projects" onClick={handleNavLinkClick}>Projects</NavLink>
            <NavLink href="#certifications" onClick={handleNavLinkClick}>Certifications</NavLink>
            <NavLink href="#experience" onClick={handleNavLinkClick}>Experience</NavLink>
            <NavLink href="#achievements" onClick={handleNavLinkClick}>Achievements</NavLink>
            <NavLink href="#resume" onClick={handleNavLinkClick}>Resume</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => {
  return (
    <a 
      href={href} 
      className="text-gray-700 hover:text-gray-900 hover:font-semibold transition-colors"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Navbar;
