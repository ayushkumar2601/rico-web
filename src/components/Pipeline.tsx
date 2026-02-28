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
    <Section id="pipeline" className="border-y border-white/5 bg-white/[0.02] py-32 md:py-40">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold">How RICO Works</h2>
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
