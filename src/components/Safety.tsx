import { Section, FadeIn } from './ui/Section';
import { ShieldCheck, GlobeLock, Activity, FileKey } from 'lucide-react';

export function Safety() {
  return (
    <Section id="safety">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Built for Safety</h2>
        <p className="text-slate-400">Security tools should never become the security risk.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: ShieldCheck, title: "Authorized Only", desc: "Verifies ownership before scanning external domains." },
          { icon: GlobeLock, title: "Domain Allowlist", desc: "Strictly scoped to prevent out-of-scope testing." },
          { icon: Activity, title: "Rate Limiting", desc: "Built-in throttling to prevent DoS on your services." },
          { icon: FileKey, title: "Audit Logging", desc: "Every request and response is logged for review." }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="text-center p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors">
              <div className="inline-flex p-3 rounded-lg bg-neon-cyan/10 text-neon-cyan mb-4">
                <item.icon size={24} />
              </div>
              <h3 className="text-white font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
