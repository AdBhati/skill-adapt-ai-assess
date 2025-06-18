
import { Brain, Zap, Target } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🚀 Launching Soon
            </span>
          </div>
          
          <div className="flex justify-center space-x-4 mb-8">
            <div className="p-3 rounded-full bg-blue-500/20 backdrop-blur-sm animate-pulse">
              <Brain className="w-8 h-8 text-blue-400" />
            </div>
            <div className="p-3 rounded-full bg-purple-500/20 backdrop-blur-sm animate-pulse delay-100">
              <Zap className="w-8 h-8 text-purple-400" />
            </div>
            <div className="p-3 rounded-full bg-indigo-500/20 backdrop-blur-sm animate-pulse delay-200">
              <Target className="w-8 h-8 text-indigo-400" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              AdaptoIQ
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Smart, adaptive skill assessments powered by AI. Dynamically tailors each test based on 
            real-time performance, giving you the clearest picture of your candidate's or learner's true capabilities.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
          <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">AI-Powered</div>
                <p className="text-slate-300">Dynamic question generation based on performance</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">Real-time</div>
                <p className="text-slate-300">Adaptive difficulty using advanced IRT algorithms</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-indigo-400 mb-2">Zero Setup</div>
                <p className="text-slate-300">No manual question banks required</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
