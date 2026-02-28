import { Section, FadeIn } from './ui/Section';
import { ShieldCheck, GlobeLock, Activity, FileKey } from 'lucide-react';
import { motion } from 'framer-motion';

export function Safety() {
  return (
    <Section id="safety">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4">Built for Safety</h2>
        <p className="text-neon-cyan">Security tools should never become the security risk.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: ShieldCheck, title: "Authorized Only", desc: "Verifies ownership before scanning external domains." },
          { icon: GlobeLock, title: "Domain Allowlist", desc: "Strictly scoped to prevent out-of-scope testing." },
          { icon: Activity, title: "Rate Limiting", desc: "Built-in throttling to prevent DoS on your services." },
          { icon: FileKey, title: "Audit Logging", desc: "Every request and response is logged for review." }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <motion.div 
              whileHover={{ 
                y: -6,
                borderColor: 'rgba(204, 255, 0, 0.4)'
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group text-center p-6 rounded-xl bg-white/[0.02] border border-white/5 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.1 }} 
                className="inline-flex p-3 rounded-lg bg-neon-cyan/10 text-neon-cyan mb-4 relative z-10"
              >
                <item.icon size={24} />
              </motion.div>
              <h3 className="text-white font-bold mb-2 relative z-10">{item.title}</h3>
              <p className="text-sm text-slate-400 relative z-10">{item.desc}</p>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
