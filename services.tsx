import { createFileRoute } from "@tanstack/react-router";
import { 
  FiLayers, 
  FiCpu, 
  FiZap, 
  FiShare2, 
  FiSettings, 
  FiTarget, 
  FiCheckCircle 
} from "react-icons/fi";

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

function ServicesPage() {
  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* PAGE HEADING */}
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-7xl font-bold text-primary mb-6 leading-tight">
            Modern Technology Solutions <br /> 
            <span className="text-accent">For Growing Businesses</span>
          </h1>
          <p className="text-primary/60 text-lg max-w-2xl mx-auto">
            We provide specialized engineering and strategic consulting to help modern enterprises automate, scale, and innovate.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          
          {/* 1. CUSTOM SAAS DEVELOPMENT */}
          <div className="p-8 md:p-12 rounded-[3rem] bg-white border border-primary/5 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-blue-50 text-blue-600"><FiLayers size={32} /></div>
                  <h2 className="text-3xl font-bold text-primary">Custom SaaS Development</h2>
                </div>
                <p className="text-primary/70 text-lg mb-8">
                  We develop scalable SaaS applications tailored to your operations, customers, and business workflows.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-primary/40 mb-4">Key Benefits</h4>
                    <ul className="space-y-3">
                      {["Multi-user systems", "Subscription-ready architecture", "Scalable backend systems", "Secure authentication"].map(item => (
                        <li key={item} className="flex items-center gap-2 text-primary/80 font-medium">
                          <FiCheckCircle className="text-accent" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-primary/40 mb-4">Use Cases</h4>
                    <div className="flex flex-wrap gap-2">
                      {["CRM Platforms", "ERP Systems", "Client Portals", "Internal Dashboards"].map(tag => (
                        <span key={tag} className="px-4 py-1.5 rounded-full bg-secondary text-primary/60 text-xs font-bold uppercase">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 bg-secondary/30 rounded-4xl p-8 flex flex-col justify-center">
                <h4 className="font-bold text-primary mb-4">Technologies</h4>
                <p className="text-accent font-bold text-lg">React, TypeScript, FastAPI, PostgreSQL</p>
              </div>
            </div>
          </div>

          {/* 2. WORKFLOW AUTOMATION & 3. AI SOLUTIONS (Grid Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* WORKFLOW AUTOMATION */}
            <div className="p-10 rounded-[3rem] bg-white border border-primary/5 shadow-sm">
              <div className="p-4 rounded-2xl bg-purple-50 text-purple-600 w-fit mb-6"><FiSettings size={32} /></div>
              <h2 className="text-2xl font-bold text-primary mb-4">Workflow Automation</h2>
              <p className="text-primary/70 mb-8">Automate repetitive business processes using intelligent workflow systems.</p>
              <h4 className="font-bold text-sm uppercase tracking-widest text-primary/40 mb-4">Benefits</h4>
              <ul className="space-y-3">
                {["Reduced operational costs", "Faster execution", "Improved efficiency", "Fewer human errors"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-primary/80 font-medium">
                    <FiCheckCircle className="text-accent" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* AI-POWERED SOLUTIONS */}
            <div className="p-10 rounded-[3rem] bg-white border border-primary/5 shadow-sm">
              <div className="p-4 rounded-2xl bg-green-50 text-green-600 w-fit mb-6"><FiCpu size={32} /></div>
              <h2 className="text-2xl font-bold text-primary mb-4">AI-Powered Solutions</h2>
              <p className="text-primary/70 mb-8">Integrate AI into customer support, analytics, operations, and internal business systems.</p>
              <h4 className="font-bold text-sm uppercase tracking-widest text-primary/40 mb-4">Solutions</h4>
              <div className="grid grid-cols-2 gap-3">
                {["AI Chatbots", "AI Workflow Assistants", "Document Automation", "Smart Recommendations"].map(item => (
                  <div key={item} className="text-sm font-bold text-primary/70 bg-secondary/50 px-4 py-2 rounded-xl">{item}</div>
                ))}
              </div>
            </div>
          </div>

          {/* 4. API INTEGRATIONS & 5. MVP DEVELOPMENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* API INTEGRATIONS */}
            <div className="p-10 rounded-[3rem] bg-white border border-primary/5 shadow-sm">
              <div className="p-4 rounded-2xl bg-orange-50 text-orange-600 w-fit mb-6"><FiShare2 size={32} /></div>
              <h2 className="text-2xl font-bold text-primary mb-4">API Integrations</h2>
              <p className="text-primary/70 mb-8">Connect multiple systems into one unified business ecosystem.</p>
              <h4 className="font-bold text-sm uppercase tracking-widest text-primary/40 mb-4">Integrations</h4>
              <div className="flex flex-wrap gap-2">
                {["Payment Gateways", "CRMs", "ERP Systems", "Analytics Platforms"].map(item => (
                  <span key={item} className="px-3 py-1 bg-secondary text-primary/60 rounded-lg text-xs font-bold uppercase">{item}</span>
                ))}
              </div>
            </div>

            {/* MVP DEVELOPMENT */}
            <div className="p-10 rounded-[3rem] bg-accent text-white shadow-xl shadow-accent/10">
              <div className="p-4 rounded-2xl bg-white/20 text-white w-fit mb-6"><FiZap size={32} /></div>
              <h2 className="text-2xl font-bold mb-4">MVP Development</h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Launch your startup idea quickly with scalable MVP architecture. We build robust foundations that are ready for the next round of funding.
              </p>
              <button className="w-full py-4 bg-white text-accent font-bold rounded-2xl hover:bg-secondary transition-colors">Start Building</button>
            </div>
          </div>

          {/* 6. CONSULTING SERVICES */}
          <div className="p-10 md:p-12 rounded-[3rem] bg-primary text-white text-center">
            <div className="p-4 rounded-2xl bg-white/10 text-white w-fit mx-auto mb-6"><FiTarget size={32} /></div>
            <h2 className="text-3xl font-bold mb-4">Consulting Services</h2>
            <p className="text-secondary/60 text-lg max-w-2xl mx-auto">
              Technology consulting focused on digital transformation and scalable software strategy. Let our experts guide your next big architectural decision.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}