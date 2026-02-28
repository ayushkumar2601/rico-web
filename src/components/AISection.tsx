import { Section, FadeIn } from './ui/Section';
import { Bot, Cpu, Network, Brain } from 'lucide-react';

export function AISection() {
  return (
    <Section id="ai">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <FadeIn className="order-2 md:order-1">
          <div className="relative">
            <div className="absolute inset-0 bg-neon-cyan/20 blur-[80px] rounded-full opacity-20" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="bg-cyber-dark border border-white/10 p-6 rounded-xl">
                <Bot className="text-neon-cyan mb-4" size={32} />
                <h4 className="text-white font-bold mb-2">Endpoint Classification</h4>
                <p className="text-xs text-slate-400">Automatically identifies PII, Auth, and Financial endpoints.</p>
              </div>
              <div className="bg-cyber-dark border border-white/10 p-6 rounded-xl mt-8">
                <Cpu className="text-neon-teal mb-4" size={32} />
                <h4 className="text-white font-bold mb-2">Smart Planning</h4>
                <p className="text-xs text-slate-400">Generates context-aware attack payloads dynamically.</p>
              </div>
              <div className="bg-cyber-dark border border-white/10 p-6 rounded-xl">
                <Network className="text-purple-400 mb-4" size={32} />
                <h4 className="text-white font-bold mb-2">Heuristic Fallback</h4>
                <p className="text-xs text-slate-400">Traditional scanning methods when AI confidence is low.</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="order-1 md:order-2" delay={0.2}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-6">
            <Brain size={12} /> Powered by LLMs
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Intelligence at the Core
          </h2>
          <p className="text-slate-400 text-lg mb-6 leading-relaxed">
            RICO doesn't just fuzz random data. It understands your API structure. 
            By leveraging Large Language Models (Groq/OpenAI), it infers business logic 
            and attempts sophisticated attacks that traditional scanners miss.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-slate-300">
              <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
              Context-aware payload generation
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
              Business logic vulnerability detection
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
              False positive reduction via reasoning
            </li>
          </ul>
        </FadeIn>
      </div>
    </Section>
  );
}
