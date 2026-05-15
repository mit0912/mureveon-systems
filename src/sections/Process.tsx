const steps = [
  { n: "01", t: "Discovery & Requirement Analysis" },
  { n: "02", t: "Strategic Planning" },
  { n: "03", t: "UI/UX Design" },
  { n: "04", t: "Agile Development" },
  { n: "05", t: "Deployment & Support" },
];

export function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-3xl md:text-5xl font-bold text-primary">Our Development Workflow</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="relative text-center">
              <div className="text-6xl font-black text-accent/10 mb-4">{s.n}</div>
              <h4 className="text-lg font-bold text-primary px-4">{s.t}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}