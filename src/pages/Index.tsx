
import Hero from "../components/Hero";
import Features from "../components/Features";
import UseCases from "../components/UseCases";
import About from "../components/About";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      <Hero />
      <Features />
      <UseCases />
      <About />
      
      <div className="text-center py-16 px-4 border-t border-slate-800">
        <p className="text-slate-400">
          © 2025 AdaptoIQ. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Index;
