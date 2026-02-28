import { Section, FadeIn } from './ui/Section';
import { Github, Linkedin } from 'lucide-react';

export function About() {
  return (
    <Section className="border-t border-white/5">
      <FadeIn>
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-neon-cyan to-blue-600 p-[2px] mb-6">
            <div className="w-full h-full rounded-full bg-cyber-black flex items-center justify-center overflow-hidden">
               {/* Placeholder for Avatar */}
               <span className="text-2xl font-bold text-white">AK</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Built by Ayush Kumar</h2>
          <p className="text-slate-400 mb-6">
            ECE student passionate about cybersecurity and AI tools. 
            Building the next generation of automated security infrastructure.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="p-2 text-slate-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="p-2 text-slate-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
