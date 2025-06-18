
import Hero from "../components/Hero";
import Features from "../components/Features";
import UseCases from "../components/UseCases";
import About from "../components/About";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      <Hero />
      <Features />
      <UseCases />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
