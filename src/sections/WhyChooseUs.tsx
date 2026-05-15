import { FiCheckCircle } from "react-icons/fi";

const reasons = [
  { title: "Tailored Architecture", description: "Every system is built specifically for your business requirements." },
  { title: "Scalable Infrastructure", description: "Future-ready applications designed for performance and growth." },
  { title: "Automation Focused", description: "We optimize business operations through intelligent automation." },
  { title: "Modern Tech Stack", description: "Using React, TypeScript, FastAPI, PostgreSQL, and cloud-native architecture." },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold uppercase tracking-widest text-xs mb-4">Value Proposition</h2>
          <h3 className="text-3xl md:text-5xl font-bold">Why Businesses Choose Mureveon Systems</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r) => (
            <div key={r.title} className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <FiCheckCircle className="text-accent mb-6" size={28} />
              <h4 className="text-xl font-bold mb-4">{r.title}</h4>
              <p className="text-secondary/60 text-sm leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}