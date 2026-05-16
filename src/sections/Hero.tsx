// import { Link } from "@tanstack/react-router";

import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckCircle, FiPlay } from "react-icons/fi";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-in fade-in slide-in-from-bottom-5 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
            Next-Gen Business Solutions
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-primary leading-[1.1] mb-6">
            Building Custom SaaS & <br />
            <span className="gradient-text text-accent">Intelligent Automation</span>
          </h1>
          <p className="text-lg text-primary/70 mb-10 max-w-xl leading-relaxed">
            Mureveon Systems helps startups and enterprises streamline operations, automate repetitive workflows, and launch scalable SaaS products using modern technologies and AI-powered systems.
          </p>
      
      <div className="flex flex-wrap gap-4 mb-12">
  <Link to="/contact">
    <button className="px-8 py-4 bg-primary text-white rounded-full font-bold flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-lg active:scale-95">
      Book Free Consultation <FiArrowRight size={20} />
    </button>
  </Link>
  <Link to="/contact"> {/* Changed from /services to /contact */}
    <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all">
      Explore Services
    </button>
  </Link>
</div>

          <div className="grid grid-cols-2 gap-4 border-t border-primary/5 pt-8">
            {[
              "AI Workflow Automation",
              "Custom SaaS Platforms",
              "Enterprise Process Optimization",
              "Scalable Cloud Architecture"
            ].map(item => (
              <div key={item} className="flex items-center gap-2 text-sm font-bold text-primary/60">
                <FiCheckCircle className="text-accent" /> {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-in fade-in zoom-in-95 duration-1000 delay-200">
          <div className="relative rounded-[3rem] overflow-hidden border border-primary/5 shadow-2xl bg-white aspect-square flex items-center justify-center p-8 group">
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-accent/5" />
            <div className="relative z-10 w-full h-full border border-dashed border-primary/10 rounded-[2rem] flex flex-col items-center justify-center text-center p-8">
               <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-accent mb-6">
                  <FiPlay size={32} fill="currentColor" />
               </div>
               <div className="space-y-4">
                  {["React + FastAPI Architecture", "PostgreSQL Ready", "Enterprise Grade Solutions", "Automation First Approach"].map((badge, i) => (
                    <div key={i} className="px-4 py-2 bg-white rounded-xl shadow-sm border border-primary/5 text-xs font-bold text-primary/50 uppercase tracking-widest">
                      {badge}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}