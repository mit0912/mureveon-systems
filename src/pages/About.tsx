import {
  FiTarget,
  FiEye,
  FiZap,
  FiCpu,
  FiShield,
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";

const stats = [
  { label: "Automation Workflows", value: "20+" },
  { label: "SaaS Concepts Delivered", value: "10+" },
  { label: "Client Satisfaction", value: "99%" },
  { label: "Modern Architecture", value: "Scale" },
];

const coreValues = [
  "Innovation First",
  "Scalable Thinking",
  "Transparent Communication",
  "Long-Term Partnerships",
  "Performance Driven Development",
];

const technologies = [
  "React & TypeScript",
  "FastAPI & Python",
  "PostgreSQL",
  "Cloud Infrastructure",
  "AI Automation Systems",
];

export default function AboutPage() {
  return (
    <div className="bg-background pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* HERO SECTION */}
        <section className="mb-24 max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold leading-[1.1] text-primary md:text-7xl">
            Engineering Scalable <br />
            <span className="text-accent">Digital Systems</span> <br />
            For Modern Businesses
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-primary/60">
            We bridge the gap between complex business challenges and
            high-performance technological solutions.
          </p>
        </section>

        {/* MISSION & VISION */}
        <section className="mb-32 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="rounded-[3rem] border border-primary/5 bg-white p-10 shadow-sm">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FiTarget size={24} />
            </div>
            <h2 className="mb-4 text-2xl font-bold text-primary">Our Mission</h2>
            <p className="text-lg leading-relaxed text-primary/70">
              To help businesses scale faster through custom software,
              automation, and modern digital infrastructure.
            </p>
          </div>

          <div className="rounded-[3rem] border border-primary/5 bg-white p-10 shadow-sm">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <FiEye size={24} />
            </div>
            <h2 className="mb-4 text-2xl font-bold text-primary">Our Vision</h2>
            <p className="text-lg leading-relaxed text-primary/70">
              To become a leading technology partner for startups and
              enterprises adopting intelligent business systems.
            </p>
          </div>
        </section>

        {/* STATISTICS */}
        <section className="mb-32 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl bg-primary p-8 text-center">
              <div className="mb-2 text-3xl font-bold text-white md:text-4xl">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-secondary/40">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* CORE VALUES */}
        <section className="mb-32">
          <h2 className="mb-12 text-3xl font-bold text-primary">Core Values</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {coreValues.map((value) => (
              <div key={value} className="flex flex-col items-center gap-4 rounded-2xl border border-primary/5 bg-white p-6 text-center">
                <FiCheckCircle className="text-accent" size={24} />
                <span className="text-sm font-bold leading-tight text-primary/80">{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNOLOGY EXPERTISE */}
        <section className="rounded-[4rem] bg-secondary/30 p-12 md:p-20">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-bold text-primary md:text-5xl">Technology Expertise</h2>
              <p className="mb-10 text-lg text-primary/60">
                We utilize a modern tech stack that ensures your system is fast,
                secure, and ready for future growth.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech) => (
                  <div key={tech} className="flex items-center gap-3 font-bold text-primary/70">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="flex aspect-square items-center justify-center rounded-[3rem] border border-primary/5 bg-white p-12 shadow-2xl">
                <div className="grid w-full grid-cols-2 gap-8">
                  <div className="flex flex-col items-center gap-2 rounded-2xl bg-blue-50 p-6 text-blue-600">
                    <FiZap size={32} />
                    <span className="text-xs font-black">FAST</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-2xl bg-green-50 p-6 text-green-600">
                    <FiCpu size={32} />
                    <span className="text-xs font-black">INTELLIGENT</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-2xl bg-orange-50 p-6 text-orange-600">
                    <FiShield size={32} />
                    <span className="text-xs font-black">SECURE</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-2xl bg-purple-50 p-6 text-purple-600">
                    <FiTrendingUp size={32} />
                    <span className="text-xs font-black">SCALABLE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}