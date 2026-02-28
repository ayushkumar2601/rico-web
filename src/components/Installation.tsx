import { Section, FadeIn } from './ui/Section';
import { Terminal } from './ui/Terminal';

export function Installation() {
  return (
    <Section>
      <FadeIn>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get Started in Seconds</h2>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-teal rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <Terminal 
              className="relative bg-cyber-black"
              command="pip install rico-cli && rico init"
              output={
                <span className="text-slate-500">
                  Initializing RICO configuration... Done.<br/>
                  Ready to scan.
                </span>
              }
            />
          </div>
          <div className="mt-8 flex items-center justify-center gap-4 text-slate-400 text-sm">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              Python 3.8+
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              Windows / Mac / Linux
            </span>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
