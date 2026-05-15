import { FiHeart, FiDollarSign, FiHome, FiTruck, FiBookOpen, FiShoppingBag } from "react-icons/fi";

const industries = [
  { name: "Healthcare", icon: FiHeart },
  { name: "Finance", icon: FiDollarSign },
  { name: "Real Estate", icon: FiHome },
  { name: "Logistics", icon: FiTruck },
  { name: "Education", icon: FiBookOpen },
  { name: "E-commerce", icon: FiShoppingBag },
];

export function Industries() {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-primary">Industries We Empower</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {industries.map((ind) => (
            <div key={ind.name} className="flex flex-col items-center p-8 bg-white rounded-3xl border border-primary/5 group">
              <ind.icon size={32} className="text-primary/30 group-hover:text-accent mb-4 transition-colors" />
              <span className="font-bold text-sm text-primary/80">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}