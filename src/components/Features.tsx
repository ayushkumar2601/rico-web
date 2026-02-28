import { Section, FadeIn } from './ui/Section';
import { 
  FileCode, 
  Shield, 
  BrainCircuit, 
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
  { icon: FileCode, title: "OpenAPI Parser", desc: "Instantly ingest and validate Swagger/OpenAPI 3.0+ specs." },
  { icon: Shield, title: "Automated Attacks", desc: "Launch SQLi, XSS, and IDOR injection vectors automatically." },
  { icon: BrainCircuit, title: "AI Classification", desc: "Smartly categorize endpoints to tailor attack strategies." },
  { icon: Terminal, title: "Rich CLI Output", desc: "Beautiful, readable terminal output with progress tracking." },
  { icon: FileText, title: "HTML Reports", desc: "Generate executive-ready HTML & Markdown security reports." },
  { icon: Key, title: "Auth Support", desc: "Handles Bearer tokens, API keys, and OAuth flows seamlessly." },
  { icon: Zap, title: "Async Testing", desc: "High-performance asynchronous HTTP engine for speed." },
  { icon: Play, title: "Playwright", desc: "Browser-based testing for complex authentication flows." },
  { icon: GitBranch, title: "CI/CD Ready", desc: "Native integration for GitHub Actions and GitLab CI." },
  { icon: Globe, title: "Domain Control", desc: "Strict domain allowlisting and rate limiting for safety." },
];

export function Features() {
  return (
    <Section id="features">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to secure APIs</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
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
