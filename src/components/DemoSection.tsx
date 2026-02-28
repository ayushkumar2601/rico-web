import { Section, FadeIn } from './ui/Section';
import { Terminal } from './ui/Terminal';

export function DemoSection() {
  return (
    <Section id="demo">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Powerful CLI for <br />
            <span className="text-neon-cyan">Modern Developers</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            RICO is designed to fit into your existing workflow. No complex GUIs, 
            just simple, powerful commands that do exactly what you expect.
          </p>
          
          <div className="space-y-6">
            {[
              { cmd: "rico parse", desc: "Validate and inspect your API definition" },
              { cmd: "rico attack", desc: "Run targeted security tests against endpoints" },
              { cmd: "rico report", desc: "Export findings to share with your team" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="mt-1 w-2 h-2 rounded-full bg-neon-cyan group-hover:scale-150 transition-transform" />
                <div>
                  <code className="text-neon-cyan font-mono text-sm bg-neon-cyan/10 px-2 py-1 rounded group-hover:bg-neon-cyan/20 transition-colors">
                    {item.cmd}
                  </code>
                  <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Terminal 
            title="rico-cli — zsh — 80x24"
            command="rico attack --spec demo.yaml --url http://localhost:3000 --ai"
            typingSpeed={30}
            startDelay={500}
            output={
              <div className="space-y-1">
                <div className="flex justify-between text-slate-400">
                  <span>Target: http://localhost:3000</span>
                  <span>Spec: demo.yaml</span>
                </div>
                <div className="h-px bg-white/10 my-2" />
                
                <div className="grid grid-cols-[1fr_auto] gap-4">
                  <span className="text-white">GET /api/users</span>
                  <span className="text-green-500">SAFE</span>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-4">
                  <span className="text-white">POST /api/login</span>
                  <span className="text-green-500">SAFE</span>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-4">
                  <span className="text-white">GET /api/admin/config</span>
                  <span className="text-red-500 font-bold">VULNERABLE [IDOR]</span>
                </div>
                <div className="pl-4 text-xs text-slate-500 font-mono border-l border-red-500/30 ml-1">
                  Payload: ?user_id=1 OR 1=1<br/>
                  Response: 200 OK (Admin Data Leaked)
                </div>
                
                <div className="grid grid-cols-[1fr_auto] gap-4 mt-2">
                  <span className="text-white">PUT /api/profile</span>
                  <span className="text-yellow-500">WARNING [Rate Limit]</span>
                </div>
                
                <div className="mt-4 pt-2 border-t border-white/10 text-neon-cyan">
                  ➜ Scan Complete: 1 High, 1 Medium, 12 Passed
                </div>
              </div>
            }
          />
        </FadeIn>
      </div>
    </Section>
  );
}
