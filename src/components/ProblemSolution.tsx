import { Section, FadeIn } from './ui/Section';
import { ShieldAlert, Zap, FileJson, Brain, Lock, Terminal as TerminalIcon } from 'lucide-react';

export function ProblemSolution() {
  return (
    <Section className="relative">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Problem */}
        <FadeIn>
          <div className="p-8 rounded-2xl bg-red-500/5 border border-red-500/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldAlert size={120} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 text-sm">!</span>
              The Problem
            </h3>
            <ul className="space-y-4">
              {[
                "API security testing is manual & slow",
                "IDOR and SQLi vulnerabilities often missed",
                "No automation for OpenAPI specifications",
                "Security bottlenecks in CI/CD pipelines"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400">
                  <span className="text-red-500 mt-1">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Solution */}
        <FadeIn delay={0.2}>
          <div className="p-8 rounded-2xl bg-neon-cyan/5 border border-neon-cyan/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap size={120} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan text-sm">✓</span>
              The RICO Solution
            </h3>
            <ul className="space-y-4">
              {[
                { text: "Auto-parse OpenAPI specs instantly", icon: FileJson },
                { text: "Smart attack engine with AI planning", icon: Brain },
                { text: "Automated vulnerability detection", icon: Lock },
                { text: "Seamless CI/CD integration", icon: TerminalIcon }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <span className="text-neon-cyan mt-1">
                    <item.icon size={16} />
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

      </div>
    </Section>
  );
}
