import { FiMessageSquare } from "react-icons/fi";

const testimonials = [
  { text: "Mureveon Systems streamlined our internal workflow and reduced manual operations by 60%." },
  { text: "Their SaaS architecture helped us scale confidently without rebuilding our platform." },
  { text: "Professional team with strong technical expertise and business understanding." },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-16">Trusted By Growing Businesses</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="p-10 rounded-[3rem] bg-secondary/30 relative">
              <FiMessageSquare className="text-accent/20 absolute top-6 left-6" size={40} />
              <p className="text-primary/70 font-medium italic relative z-10 leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}