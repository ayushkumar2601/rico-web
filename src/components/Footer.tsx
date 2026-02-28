import { ArrowRight, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/10 bg-cyber-black relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon-cyan/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
          Secure your APIs before <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-teal">
            attackers do.
          </span>
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-slate-200 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
            Install Now <ArrowRight size={20} />
          </button>
          <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
            <Github size={20} /> Star on GitHub
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-sm text-slate-500">
          <div>
            &copy; 2025 RICO Security. MIT License.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
