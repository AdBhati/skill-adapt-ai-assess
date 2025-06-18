
import { Brain, Zap, Users, BarChart3, Shield, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Real-time Adaptivity",
      description: "Every question adapts to user performance using Item Response Theory (IRT) and advanced AI algorithms.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Sparkles,
      title: "AI-generated Questions", 
      description: "Personalized quizzes generated dynamically based on skill level and learning objectives.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Multiple Use Cases",
      description: "Ideal for hiring assessments, employee upskilling, and personalized learning paths.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "No Manual Setup",
      description: "Let our AI handle all assessment creation — no question bank management needed.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Shield,
      title: "Bias-Resistant",
      description: "Advanced algorithms minimize assessment bias for fair and accurate evaluations.",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: BarChart3,
      title: "Deep Analytics",
      description: "Comprehensive insights into performance patterns and skill development trajectories.",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AdaptoIQ</span>?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Revolutionary assessment technology that understands and adapts to each individual's unique learning journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"
                   style={{backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`}}></div>
              
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 mb-6 transform group-hover:rotate-6 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
