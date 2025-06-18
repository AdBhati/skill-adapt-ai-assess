
import { Code, Database, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Backed by <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Engineering</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Built by experienced backend engineers with extensive backgrounds in EdTech and large-scale analytics. 
            AdaptoIQ was born from the real-world challenges we faced building systems to understand student 
            performance deeply and accurately.
          </p>
        </div>
        
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Technical Excellence at Scale
              </h3>
              <div className="space-y-4 text-slate-300">
                <p className="leading-relaxed">
                  Our founding team brings together deep expertise in machine learning, psychometrics, 
                  and distributed systems architecture. We're building assessment platforms 
                  designed to serve millions of users with sub-second response times.
                </p>
                <p className="leading-relaxed">
                  AdaptoIQ leverages cutting-edge Item Response Theory (IRT) models combined with 
                  modern AI techniques to deliver assessments that are not just adaptive, but 
                  genuinely intelligent and predictive.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 p-3 flex-shrink-0">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Scalable Architecture</h4>
                  <p className="text-slate-300">Designed for cloud-native infrastructure supporting millions of concurrent assessments</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-3 flex-shrink-0">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">AI-First Approach</h4>
                  <p className="text-slate-300">Advanced machine learning models continuously improve assessment accuracy</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 p-3 flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Research-Backed</h4>
                  <p className="text-slate-300">Validated psychometric models with published research backing our methodologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
