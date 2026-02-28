import { Section, FadeIn } from './ui/Section';
import { Terminal } from './ui/Terminal';
import { Github } from 'lucide-react';

export function CICD() {
  return (
    <Section className="bg-white/[0.02] border-y border-white/5">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <Github size={48} className="text-neon-cyan" />
            <h2 className="text-5xl font-bold">CI/CD Integration</h2>
          </div>
          <p className="text-slate-400 text-lg mb-8">
            Block vulnerabilities before they reach production. RICO integrates natively 
            with GitHub Actions, GitLab CI, and Jenkins.
          </p>
          <div className="flex flex-col gap-4">
            <div className="p-4 rounded-lg bg-white/5 border-l-2 border-green-500">
              <h4 className="text-white font-bold text-sm mb-1">Pass/Fail Gates</h4>
              <p className="text-slate-400 text-xs">Fail the build if High/Critical vulnerabilities are found.</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border-l-2 border-blue-500">
              <h4 className="text-white font-bold text-sm mb-1">Artifact Upload</h4>
              <p className="text-slate-400 text-xs">Automatically upload HTML reports as build artifacts.</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Terminal 
            title=".github/workflows/security.yml"
            output={
              <div className="text-xs md:text-sm">
                <span className="text-purple-400">name:</span> <span className="text-green-400">API Security Scan</span>
                <br/>
                <span className="text-purple-400">on:</span> <span className="text-green-400">[push, pull_request]</span>
                <br/><br/>
                <span className="text-purple-400">jobs:</span>
                <br/>
                <span className="text-purple-400">  rico-scan:</span>
                <br/>
                <span className="text-purple-400">    runs-on:</span> <span className="text-green-400">ubuntu-latest</span>
                <br/>
                <span className="text-purple-400">    steps:</span>
                <br/>
                <span className="text-slate-500">      - uses: actions/checkout@v3</span>
                <br/>
                <span className="text-slate-500">      - name: Install RICO</span>
                <br/>
                <span className="text-blue-400">        run:</span> <span className="text-yellow-300">pip install rico-cli</span>
                <br/>
                <span className="text-slate-500">      - name: Run Scan</span>
                <br/>
                <span className="text-blue-400">        run:</span> <span className="text-yellow-300">|</span>
                <br/>
                <span className="text-yellow-300">          rico report \</span>
                <br/>
                <span className="text-yellow-300">            --spec api.yaml \</span>
                <br/>
                <span className="text-yellow-300">            --url $API_URL \</span>
                <br/>
                <span className="text-yellow-300">            --fail-on high</span>
              </div>
            }
          />
        </FadeIn>
      </div>
    </Section>
  );
}
