import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-bold tracking-tight mb-4 inline-block">
            MUREVEON<span className="text-accent text-3xl leading-none">.</span>
          </Link>
          <p className="text-secondary/70 max-w-xs mt-4">
            Building custom SaaS and intelligent automation solutions for modern businesses worldwide.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-6">Services</h4>
          <ul className="space-y-4 text-secondary/60">
            <li><Link to="/services" className="hover:text-accent transition-colors">SaaS Development</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Workflow Automation</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">AI Solutions</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Consulting</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-6">Company</h4>
          <ul className="space-y-4 text-secondary/60">
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            <li><Link to="/" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-6">Newsletter</h4>
          <p className="text-secondary/60 mb-4">Stay updated with the latest in SaaS and Automation.</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="bg-white/5 border border-white/10 rounded-full px-4 py-2 flex-1 focus:outline-none focus:border-accent"
            />
            <button className="bg-accent text-white rounded-full px-6 py-2 font-medium hover:bg-opacity-90 transition-all">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-secondary/40 text-sm">
        <p>© {new Date().getFullYear()} Mureveon Systems. All rights reserved.</p>
      </div>
    </footer>
  );
}
