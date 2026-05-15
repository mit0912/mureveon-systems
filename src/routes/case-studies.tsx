import { createFileRoute } from "@tanstack/react-router";
import { FiArrowRight, FiCheckCircle, FiPieChart, FiCpu, FiLayout } from "react-icons/fi";

export const Route = createFileRoute("/case-studies" as any)({
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* PAGE HEADING */}
        <div className="max-w-3xl mb-24 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h1 className="text-4xl md:text-7xl font-bold text-primary mb-8 leading-tight">
            Real Solutions Built For <br />
            <span className="text-accent">Business Growth</span>
          </h1>
          <p className="text-xl text-primary/60 leading-relaxed">
            Explore how we've helped businesses transform through custom technology, automation, and scalable architecture.
          </p>
        </div>

        <div className="space-y-20">
          
          {/* CASE STUDY 1: ORDER MANAGEMENT */}
          <div className="bg-white rounded-[3rem] border border-primary/5 shadow-sm overflow-hidden flex flex-col lg:flex-row hover:shadow-xl transition-all duration-500">
            <div className="lg:w-2/5 bg-blue-50 p-12 flex items-center justify-center relative overflow-hidden">
               <FiPieChart className="text-blue-100 absolute -bottom-10 -right-10 w-64 h-64 rotate-12" />
               <div className="relative z-10 w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center shadow-2xl">
                  <FiCpu size={40} />
               </div>
            </div>
            
            <div className="lg:w-3/5 p-10 md:p-16">
              <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-xs font-bold uppercase tracking-widest mb-6">
                Automation Dashboard
              </div>
              <h2 className="text-3xl font-bold text-primary mb-10">Centralized Order Management</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h4 className="font-bold text-primary/40 uppercase text-xs tracking-widest mb-4">The Problem</h4>
                  <p className="text-primary/70 leading-relaxed">Manual order management caused delays and inefficiencies, leading to high operational costs.</p>
                </div>
                <div>
                  <h4 className="font-bold text-primary/40 uppercase text-xs tracking-widest mb-4">The Solution</h4>
                  <p className="text-primary/70 leading-relaxed">Built a centralized automation dashboard with integrated APIs for real-time tracking.</p>
                </div>
              </div>

              <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <h4 className="font-bold text-primary/40 uppercase text-xs tracking-widest mb-4">Results</h4>
                  <div className="flex flex-wrap gap-4">
                    {["65% Faster Operations", "Reduced Manual Work", "Centralized Reporting"].map(result => (
                      <div key={result} className="flex items-center gap-2 font-bold text-green-600">
                        <FiCheckCircle /> {result}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-primary/40 uppercase text-xs tracking-widest mb-4">Technologies</h4>
                  <p className="font-bold text-primary/70">React, PostgreSQL, FastAPI</p>
                </div>
              </div>
            </div>
          </div>

          {/* CASE STUDY 2: ONBOARDING SYSTEM */}
          <div className="bg-white rounded-[3rem] border border-primary/5 shadow-sm overflow-hidden flex flex-col lg:flex-row hover:shadow-xl transition-all duration-500">
            <div className="lg:w-2/5 bg-purple-50 p-12 flex items-center justify-center relative overflow-hidden">
               <FiLayout className="text-purple-100 absolute -bottom-10 -right-10 w-64 h-64 rotate-12" />
               <div className="relative z-10 w-20 h-20 bg-purple-600 text-white rounded-3xl flex items-center justify-center shadow-2xl">
                  <FiArrowRight size={40} />
               </div>
            </div>
            
            <div className="lg:w-3/5 p-10 md:p-16">
              <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-xs font-bold uppercase tracking-widest mb-6">
                SaaS Workflow
              </div>
              <h2 className="text-3xl font-bold text-primary mb-10">Fragmented Client Onboarding</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h4 className="font-bold text-primary/40 uppercase text-xs tracking-widest mb-4">The Problem</h4>
                  <p className="text-primary/70 leading-relaxed">Client onboarding process was fragmented across multiple tools, causing data loss and slow starts.</p>
                </div>
                <div>
                  <h4 className="font-bold text-primary/40 uppercase text-xs tracking-widest mb-4">The Solution</h4>
                  <p className="text-primary/70 leading-relaxed">Developed a unified SaaS onboarding workflow system with built-in automation steps.</p>
                </div>
              </div>

              <div className="pt-8 border-t border-primary/5">
                <h4 className="font-bold text-primary/40 uppercase text-xs tracking-widest mb-4">Results</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                   <div className="p-4 rounded-2xl bg-secondary/30 border border-primary/5 text-center font-bold text-primary/70">
                      Improved Speed
                   </div>
                   <div className="p-4 rounded-2xl bg-secondary/30 border border-primary/5 text-center font-bold text-primary/70">
                      Customer Tracking
                   </div>
                   <div className="p-4 rounded-2xl bg-secondary/30 border border-primary/5 text-center font-bold text-primary/70">
                      Reduced Complexity
                   </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-32 text-center">
          <h3 className="text-2xl font-bold text-primary mb-6">Want to see more details?</h3>
          <p className="text-primary/60 mb-10">We can provide detailed documentation for specific industry solutions upon request.</p>
          <button className="px-10 py-4 bg-primary text-white rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg active:scale-95">
            Book a Technical Review
          </button>
        </div>

      </div>
    </div>
  );
}