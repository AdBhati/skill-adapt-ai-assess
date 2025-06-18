
import { Building2, GraduationCap, TrendingUp } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Building2,
      title: "HR Teams",
      subtitle: "Streamlined Hiring",
      description: "Transform your recruitment process with adaptive, bias-resistant assessments that reveal true candidate potential beyond traditional screening methods.",
      benefits: [
        "Reduce time-to-hire by 40%",
        "Eliminate unconscious bias",
        "Identify top performers accurately",
        "Scalable across all roles"
      ],
      color: "blue"
    },
    {
      icon: GraduationCap,
      title: "EdTech Platforms",
      subtitle: "Personalized Learning",
      description: "Deliver truly personalized learning experiences that adapt in real-time to student performance and learning patterns.",
      benefits: [
        "Improve learning outcomes by 60%",
        "Personalized difficulty progression",
        "Real-time performance insights",
        "Engaging adaptive content"
      ],
      color: "purple"
    },
    {
      icon: TrendingUp,
      title: "Enterprises",
      subtitle: "Employee Upskilling",
      description: "Upskill your workforce with intelligent, data-driven evaluations that identify skill gaps and create targeted development paths.",
      benefits: [
        "Identify skill gaps precisely",
        "Create targeted training programs",
        "Track skill development progress",
        "Optimize training ROI"
      ],
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        gradient: "from-blue-500 to-cyan-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        text: "text-blue-400"
      },
      purple: {
        gradient: "from-purple-500 to-pink-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        text: "text-purple-400"
      },
      indigo: {
        gradient: "from-indigo-500 to-blue-500",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20",
        text: "text-indigo-400"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Who is it <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">for</span>?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            AdaptoIQ is designed to revolutionize assessment and learning across diverse industries and use cases
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const colors = getColorClasses(useCase.color);
            return (
              <div
                key={index}
                className="group relative bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-500 transform hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${colors.gradient} p-4 mb-6 transform group-hover:rotate-12 transition-transform duration-300`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{useCase.title}</h3>
                  <p className={`text-lg font-semibold ${colors.text} mb-4`}>{useCase.subtitle}</p>
                  <p className="text-slate-300 leading-relaxed">{useCase.description}</p>
                </div>
                
                <div className="space-y-3">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient}`}></div>
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300"
                     style={{backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`}}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
