import { Section, FadeIn } from './ui/Section';
import { ArrowRight } from 'lucide-react';

const steps = [
  { id: "01", title: "Parse", desc: "Read OpenAPI Spec" },
  { id: "02", title: "Classify", desc: "Identify Endpoints" },
  { id: "03", title: "Attack", desc: "Inject Payloads" },
  { id: "04", title: "Detect", desc: "Analyze Responses" },
  { id: "05", title: "Report", desc: "Generate HTML" },
];

export function Pipeline() {
  return (
    <Section id="pipeline" className="border-y border-white/5 py-32 md:py-40">
      <div className="relative mb-14">
        <div className="hidden md:block relative w-3/5 mx-auto h-32">
          <span className="absolute inset-0 flex items-center justify-center text-[110px] font-black uppercase tracking-[0.22em] text-white/[0.08] select-none pointer-events-none z-0 leading-none">
            Operations
          </span>
          <h2 className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold uppercase tracking-[0.22em] text-neon-cyan z-10 leading-none">
            How Rico Works
          </h2>
        </div>

        <div className="md:hidden text-center">
          <h2 className="text-10xl font-bold uppercase tracking-[0.18em] text-neon-cyan">How Rico Works</h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 relative">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col md:flex-row items-center w-full md:w-auto">
            <FadeIn delay={i * 0.1} className="relative z-10 w-full md:w-auto">
              <div className="flex flex-col items-center text-center p-6 rounded-xl border border-white/10 bg-cyber-dark min-w-[160px] hover:border-neon-cyan/50 transition-colors">
                <span className="text-xs font-mono text-neon-cyan mb-2">{step.id}</span>
                <h4 className="text-lg font-bold text-white mb-1">{step.title}</h4>
                <p className="text-xs text-slate-500 uppercase tracking-wider">{step.desc}</p>
              </div>
            </FadeIn>
            
            {i < steps.length - 1 && (
              <div className="hidden md:flex items-center justify-center w-12 text-slate-600">
                <ArrowRight size={20} />
              </div>
            )}
            {i < steps.length - 1 && (
              <div className="md:hidden py-4 text-slate-600">
                <ArrowRight size={20} className="rotate-90" />
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
