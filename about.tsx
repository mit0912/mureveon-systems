import { createFileRoute } from "@tanstack/react-router";
import { 
  FiTarget, 
  FiEye, 
  FiZap, 
  FiCpu, 
  FiShield, 
  FiUsers, 
  FiTrendingUp,
  FiCheckCircle
} from "react-icons/fi";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADING SECTION */}
        <div className="max-w-4xl mb-24">
          <h1 className="text-4xl md:text-7xl font-bold text-primary mb-8 leading-[1.1]">
            Engineering Scalable <br />
            <span className="text-accent">Digital Systems</span> <br />
            For Modern Businesses
          </h1>
          <p className="text-xl text-primary/60 leading-relaxed max-w-2xl">
            We bridge the gap between complex business challenges and high-performance technological solutions.
          </p>
        </div>

        {/* MISSION & VISION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="p-10 rounded-[3rem] bg-white border border-primary/5 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
              <FiTarget size={24} />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-primary/70 text-lg leading-relaxed">
              To help businesses scale faster through custom software, automation, and modern digital infrastructure.
            </p>
          </div>
          <div className="p-10 rounded-[3rem] bg-white border border-primary/5 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
              <FiEye size={24} />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
            <p className="text-primary/70 text-lg leading-relaxed">
              To become a leading technology partner for startups and enterprises adopting intelligent business systems.
            </p>
          </div>
        </div>

        {/* STATISTICS SECTION */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {[
            { label: "Automation Workflows", value: "20+" },
            { label: "SaaS Concepts Delivered", value: "10+" },
            { label: "Client Satisfaction", value: "99%" },
            { label: "Modern Architecture", value: "Scale" },
          ].map((stat) => (
            <div key={stat.label} className="p-8 rounded-3xl bg-primary text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-xs font-bold text-secondary/40 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CORE VALUES */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-primary mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "Innovation First",
              "Scalable Thinking",
              "Transparent Communication",
              "Long-Term Partnerships",
              "Performance Driven Development"
            ].map((value) => (
              <div key={value} className="p-6 rounded-2xl bg-white border border-primary/5 text-center flex flex-col items-center gap-4">
                <FiCheckCircle className="text-accent" size={24} />
                <span className="font-bold text-primary/80 text-sm leading-tight">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TECHNOLOGY EXPERTISE */}
        <div className="bg-secondary/30 rounded-[4rem] p-12 md:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8">Technology Expertise</h2>
              <p className="text-primary/60 text-lg mb-10">
                We utilize a modern tech stack that ensures your system is fast, secure, and ready for future growth.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "React & TypeScript",
                  "FastAPI & Python",
                  "PostgreSQL",
                  "Cloud Infrastructure",
                  "AI Automation Systems"
                ].map((tech) => (
                  <div key={tech} className="flex items-center gap-3 font-bold text-primary/70">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white rounded-[3rem] border border-primary/5 shadow-2xl flex items-center justify-center p-12">
                 <div className="grid grid-cols-2 gap-8 w-full">
                    <div className="p-6 rounded-2xl bg-blue-50 text-blue-600 flex flex-col items-center gap-2">
                       <FiZap size={32} />
                       <span className="text-xs font-black">FAST</span>
                    </div>
                    <div className="p-6 rounded-2xl bg-green-50 text-green-600 flex flex-col items-center gap-2">
                       <FiCpu size={32} />
                       <span className="text-xs font-black">INTELLECTUAL</span>
                    </div>
                    <div className="p-6 rounded-2xl bg-orange-50 text-orange-600 flex flex-col items-center gap-2">
                       <FiShield size={32} />
                       <span className="text-xs font-black">SECURE</span>
                    </div>
                    <div className="p-6 rounded-2xl bg-purple-50 text-purple-600 flex flex-col items-center gap-2">
                       <FiTrendingUp size={32} />
                       <span className="text-xs font-black">SCALABLE</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}