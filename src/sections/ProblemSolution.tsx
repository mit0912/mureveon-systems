import { FiZap, FiSettings, FiSearch } from "react-icons/fi";

const solutions = [
  {
    title: "Custom SaaS Development",
    description: "Tailor-made platforms built specifically for your business operations, workflows, and customer requirements.",
    icon: FiZap,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Workflow Automation",
    description: "Reduce repetitive manual tasks with automation systems that improve speed, accuracy, and scalability.",
    icon: FiSettings,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Technology Consulting",
    description: "Strategic technical consulting to help businesses choose the right architecture, integrations, and digital transformation roadmap.",
    icon: FiSearch,
    color: "bg-green-50 text-green-600",
  },
];

export function ProblemSolution() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-5">
          <h2 className="text-accent font-bold tracking-widest uppercase text-xs mb-4">The Challenge</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Most Businesses Waste Time <br /> Managing Inefficient Software
          </h3>
          <p className="text-primary/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Generic tools often fail to adapt to growing business needs. Manual operations, disconnected systems, and repetitive tasks slow down productivity and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="p-10 rounded-[2.5rem] border border-primary/5 bg-background hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${solution.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <solution.icon size={28} />
              </div>
              <h4 className="text-2xl font-bold text-primary mb-4">{solution.title}</h4>
              <p className="text-primary/60 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}