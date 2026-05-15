import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { 
  FiMail, 
  FiPhone, 
  FiClock, 
  FiSend, 
  FiCheckCircle 
} from "react-icons/fi";

export const Route = createFileRoute("/contact" as any)({
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const submitInquiry = useMutation(api.inquiries.submitInquiry);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    try {
      await submitInquiry({
        fullName: formData.get("fullName") as string,
        companyName: formData.get("companyName") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        serviceInterest: formData.get("serviceInterest") as string,
        projectDescription: formData.get("projectDescription") as string,
        budgetRange: formData.get("budgetRange") as string,
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Failed to submit inquiry:", error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-48 pb-32 flex flex-col items-center justify-center text-center px-6 bg-background">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-8 animate-bounce">
          <FiCheckCircle size={40} />
        </div>
        <h1 className="text-4xl font-bold text-primary mb-4">Inquiry Received</h1>
        <p className="text-primary/60 text-lg max-w-md mx-auto mb-10">
          Thank you for reaching out! Our team will review your project details and get back to you within 24 hours.
        </p>
        <button 
          onClick={() => window.location.href = "/"}
          className="px-8 py-3 bg-primary text-white rounded-full font-bold"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* LEFT SIDE: CONTENT & INFO */}
          <div>
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight">
                Start Your Digital <br />
                <span className="text-accent">Transformation Journey</span>
              </h1>
              <p className="text-lg text-primary/60 mb-12 leading-relaxed">
                Tell us about your project, workflow challenges, or SaaS idea. Our team will help you build the right solution.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-primary/5 flex items-center justify-center text-accent">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-primary/40 uppercase tracking-widest">Email Us</div>
                    <div className="text-xl font-bold text-primary">hello@mureveon.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-primary/5 flex items-center justify-center text-accent">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-primary/40 uppercase tracking-widest">Phone</div>
                    <div className="text-xl font-bold text-primary">+91 90000 00000</div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-primary/5 flex items-center justify-center text-accent">
                    <FiClock size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-primary/40 uppercase tracking-widest">Availability</div>
                    <div className="text-lg font-bold text-primary leading-tight">
                      Monday – Saturday <br />
                      <span className="text-primary/50 text-sm font-medium">10 AM – 7 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: FORM */}
          <div className="bg-white rounded-[3rem] border border-primary/5 p-8 md:p-12 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary/40 uppercase ml-2">Full Name</label>
                  <input required name="fullName" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-secondary/30 border border-transparent focus:bg-white focus:border-accent transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary/40 uppercase ml-2">Company Name</label>
                  <input required name="companyName" placeholder="Acme Inc." className="w-full px-6 py-4 rounded-2xl bg-secondary/30 border border-transparent focus:bg-white focus:border-accent transition-all outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary/40 uppercase ml-2">Email Address</label>
                  <input required type="email" name="email" placeholder="john@company.com" className="w-full px-6 py-4 rounded-2xl bg-secondary/30 border border-transparent focus:bg-white focus:border-accent transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary/40 uppercase ml-2">Phone Number</label>
                  <input required name="phone" placeholder="+91 90000 00000" className="w-full px-6 py-4 rounded-2xl bg-secondary/30 border border-transparent focus:bg-white focus:border-accent transition-all outline-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-primary/40 uppercase ml-2">Service Interested In</label>
                <select name="serviceInterest" className="w-full px-6 py-4 rounded-2xl bg-secondary/30 border border-transparent focus:bg-white focus:border-accent transition-all outline-none appearance-none">
                  <option>Custom SaaS Development</option>
                  <option>Workflow Automation</option>
                  <option>AI Solutions</option>
                  <option>API Integrations</option>
                  <option>MVP Development</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-primary/40 uppercase ml-2">Budget Range</label>
                <select name="budgetRange" className="w-full px-6 py-4 rounded-2xl bg-secondary/30 border border-transparent focus:bg-white focus:border-accent transition-all outline-none appearance-none">
                  <option>$5k - $15k</option>
                  <option>$15k - $50k</option>
                  <option>$50k - $100k</option>
                  <option>$100k+</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-primary/40 uppercase ml-2">Project Description</label>
                <textarea required name="projectDescription" rows={4} placeholder="Describe your project, workflow or SaaS idea..." className="w-full px-6 py-4 rounded-2xl bg-secondary/30 border border-transparent focus:bg-white focus:border-accent transition-all outline-none resize-none"></textarea>
              </div>

              <button 
                disabled={loading} 
                type="submit" 
                className="w-full py-5 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all shadow-lg active:scale-[0.98]"
              >
                {loading ? "Sending..." : "Send Inquiry"} <FiSend size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}