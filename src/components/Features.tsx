import { Section, FadeIn } from './ui/Section';
import { 
  ScanSearch,
  ShieldAlert,
  Radar,
  FileCode, 
  Shield, 
  BrainCircuit, 
  Lightbulb,
  FileJson,
  Database,
  Sparkles,
  ShieldCheck,
  Terminal, 
  FileText, 
  Key, 
  Zap, 
  Play, 
  GitBranch, 
  Globe 
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: ScanSearch, title: "OpenAPI Scan Control", desc: "Parse OpenAPI specs and orchestrate parse, attack, and report workflows from a single CLI." },
  { icon: ShieldAlert, title: "Automated API Attacks", desc: "Execute IDOR, Missing Auth, and SQLi tests per endpoint with live HTTP probing." },
  { icon: Radar, title: "Unified Detection Engine", desc: "Analyze responses for status, timing, and SQL error signals with consistent confidence scoring." },
  { icon: BrainCircuit, title: "AI Endpoint Classification", desc: "Classify endpoints and dynamically select attack sets using LLM or heuristic fallback." },
  { icon: Lightbulb, title: "Attack Decision Insights", desc: "Attach concise reasoning to each attack selection for transparent, explainable scan output." },
  { icon: FileJson, title: "Post-Scan Intelligence", desc: "Prioritize findings, map exploit chains, and generate remediation strategy with structured JSON output." },
  { icon: Database, title: "Snowflake Security Storage", desc: "Persist scans, payload attempts, and vulnerabilities in Snowflake for historical analysis." },
  { icon: Sparkles, title: "Adaptive Payload Engine", desc: "Generate improved payloads using historical success data combined with AI-driven strategies." },
  { icon: ShieldCheck, title: "Deterministic Risk Gating", desc: "Normalize findings into severity scores and enforce configurable fail thresholds in pipelines." },
  { icon: GitBranch, title: "CI/CD Enforcement", desc: "Run scans on push or PR, upload artifacts, and block merges on critical findings." },
];  

export function Features() {
  return (
    <Section id="features">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything you need to secure APIs</h2>
        <p className="text-neon-cyan max-w-2xl mx-auto">
          Built for developers and security engineers who demand power and precision.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {features.map((feature, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <motion.div 
              whileHover={{ 
                y: -6,
                borderColor: 'rgba(204, 255, 0, 0.6)',
                backgroundColor: 'rgba(255, 255, 255, 0.07)'
              }}
              transition={{ duration: 0.2 }}
              className="group p-6 rounded-xl bg-white/5 border border-neon-cyan/20 h-full relative overflow-hidden"
            >
              {/* Gradient Shimmer on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="w-12 h-12 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center mb-4 relative z-10"
              >
                <feature.icon className="text-neon-cyan" size={24} />
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-2 relative z-10">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed relative z-10">{feature.desc}</p>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
