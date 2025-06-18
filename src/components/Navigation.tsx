
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AdaptoIQ
              </h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('features')}
                className="text-slate-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('use-cases')}
                className="text-slate-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Use Cases
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-slate-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/98 border-t border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('features')}
                className="text-slate-300 hover:text-blue-400 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('use-cases')}
                className="text-slate-300 hover:text-blue-400 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Use Cases
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-slate-300 hover:text-blue-400 block px-3 py-2 text-base font-medium w-full text-left"
              >
                About
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
