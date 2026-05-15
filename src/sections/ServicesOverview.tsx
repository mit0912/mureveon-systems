import { FiLayers, FiCpu, FiShare2, FiGrid, FiZap, FiSearch } from "react-icons/fi";
import { Link } from "@tanstack/react-router";

const services = [
  { title: "SaaS Product Development", description: "Build scalable SaaS platforms with modern frontend and backend architecture.", icon: FiLayers },
  { title: "AI Workflow Solutions", description: "Integrate AI-powered automation into business operations for efficiency and decision-making.", icon: FiCpu },
  { title: "API Integrations", description: "Connect CRMs, ERPs, payment systems, and third-party tools seamlessly.", icon: FiShare2 },
  { title: "Internal Business Tools", description: "Custom dashboards, admin panels, and operational systems built for your workflows.", icon: FiGrid },
  { title: "MVP Development", description: "Launch startup ideas faster with production-ready MVP architecture.", icon: FiZap },
  { title: "Technical Consulting", description: "Get expert guidance on scaling software infrastructure and business systems.", icon: FiSearch },
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold uppercase tracking-widest text-xs mb-4">Core Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary">Enterprise Solutions Designed For Scale</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="p-10 rounded-[2.5rem] bg-white border border-primary/5 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors mb-6">
                <s.icon size={24} />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">{s.title}</h4>
              <p className="text-primary/60 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}