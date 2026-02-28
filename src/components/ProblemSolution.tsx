import { Section, FadeIn } from './ui/Section';
import { ShieldAlert, Zap, FileJson, Brain, Lock, Terminal as TerminalIcon } from 'lucide-react';

export function ProblemSolution() {
  return (
    <Section className="relative">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Problem */}
        <FadeIn>
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500 to-red-500/20 opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-xl -z-0" />
            <div className="p-8 rounded-2xl bg-red-500/5 border border-red-500/10 relative transition-all duration-300 z-10">
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
          </div>
        </FadeIn>

        {/* Solution */}
        <FadeIn delay={0.2}>
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500 to-green-500/20 opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-xl -z-0" />
            <div className="p-8 rounded-2xl bg-neon-cyan/5 border border-neon-cyan/20 relative transition-all duration-300 z-10">
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
          </div>
        </FadeIn>

      </div>
    </Section>
  );
}
