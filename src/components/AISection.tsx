import { Section, FadeIn } from './ui/Section';
import { Bot, Cpu, Network, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

export function AISection() {
  return (
    <Section id="ai">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <FadeIn className="order-2 md:order-1">
          <div className="relative">
            <div className="absolute inset-0 bg-neon-cyan/20 blur-[80px] rounded-full opacity-20" />
            <div className="relative grid grid-cols-2 grid-rows-2 gap-4">
              <motion.div 
                whileHover={{ 
                  y: -6,
                  borderColor: 'rgba(204, 255, 0, 0.4)'
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group bg-cyber-dark border border-white/10 p-6 rounded-xl self-start relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <motion.div whileHover={{ rotate: 5, scale: 1.1 }} className="relative inline-block">
                  <Bot className="text-neon-cyan mb-4" size={32} />
                </motion.div>
                <h4 className="text-white font-bold mb-2 relative z-10">Endpoint Classification</h4>
                <p className="text-xs text-slate-400 relative z-10">Automatically identifies PII, Auth, and Financial endpoints.</p>
              </motion.div>
              <motion.div 
                whileHover={{ 
                  y: -6,
                  borderColor: 'rgba(204, 255, 0, 0.4)'
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group bg-cyber-dark border border-white/10 p-6 rounded-xl row-span-2 self-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <motion.div whileHover={{ rotate: 5, scale: 1.1 }} className="relative inline-block">
                  <Cpu className="text-neon-teal mb-4" size={32} />
                </motion.div>
                <h4 className="text-white font-bold mb-2 relative z-10">Smart Planning</h4>
                <p className="text-xs text-slate-400 relative z-10">Generates context-aware attack payloads dynamically.</p>
              </motion.div>
              <motion.div 
                whileHover={{ 
                  y: -6,
                  borderColor: 'rgba(204, 255, 0, 0.4)'
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group bg-cyber-dark border border-white/10 p-6 rounded-xl self-end relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <motion.div whileHover={{ rotate: 5, scale: 1.1 }} className="relative inline-block">
                  <Network className="text-purple-400 mb-4" size={32} />
                </motion.div>
                <h4 className="text-white font-bold mb-2 relative z-10">Heuristic Fallback</h4>
                <p className="text-xs text-slate-400 relative z-10">Traditional scanning methods when AI confidence is low.</p>
              </motion.div>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="order-1 md:order-2" delay={0.2}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-xs font-mono mb-6">
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
