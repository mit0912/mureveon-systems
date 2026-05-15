import { Link } from "@tanstack/react-router";
import { FiArrowRight } from "react-icons/fi";

export function CTA() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto rounded-[4rem] bg-primary p-12 md:p-20 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-8">Let’s Build Your Business Software Solution</h2>
          <p className="text-secondary/60 text-lg mb-12 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your software, automation, or SaaS development requirements.
          </p>
          <Link to="/contact">
            <button className="px-10 py-5 bg-white text-primary rounded-full font-bold flex items-center gap-3 mx-auto hover:bg-secondary transition-all">
              Schedule Consultation <FiArrowRight size={22} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}