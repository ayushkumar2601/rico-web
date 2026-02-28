import { motion } from 'framer-motion';
import { Terminal } from './ui/Terminal';
import { ArrowRight, Github, Play } from 'lucide-react';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-neon-cyan/10 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-neon-teal/5 blur-[100px] rounded-full" 
        />
      </div>

      <div className="container mx-auto px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-xs font-mono mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
                </span>
                v1.0.0 Now Available
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-white inline-block"
                >
                  RICO
                </motion.span>
                <span className="text-neon-cyan">.</span>
                <br />
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500"
                >
                  AI-Powered API Security
                </motion.span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Parse OpenAPI specs. Run deterministic vulnerability tests.
                Generate CVSS-scored reports with enforceable risk control. <br></br>
                AI-guided attack planning with Snowflake exploit intelligence.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
              >
                <Button variant="primary" icon={<ArrowRight size={18} />}>
                  Install via PyPI
                </Button>
                <a href="https://github.com/ayushkumar2601/rico-term" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" icon={<Github size={18} />}>
                    GitHub
                  </Button>
                </a>
                <Button variant="ghost" icon={<Play size={18} />}>
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Terminal Preview */}
          <motion.div 
            className="flex-1 w-full max-w-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Terminal 
              title="user@dev:~/projects/api-security"
              command="pip install rico-cli && rico report --spec api.yaml --ai"
              startDelay={1500}
              output={
                <>
                  <span className="text-green-400">✔ RICO installed successfully (v1.0.0)</span>
                  <br /><br />
                  <span className="text-blue-400">ℹ Parsing OpenAPI spec...</span>
                  <br />
                  <span className="text-slate-500">  Found 12 endpoints, 4 auth schemes</span>
                  <br />
                  <span className="text-blue-400">ℹ Analyzing attack surface with AI...</span>
                  <br />
                  <span className="text-slate-500">  Generating 142 test cases...</span>
                  <br />
                  <span className="text-yellow-400">⚠ Vulnerability Detected: IDOR on /users/&#123;id&#125;</span>
                  <br />
                  <span className="text-red-400">✖ Vulnerability Detected: SQL Injection on /search</span>
                  <br />
                  <span className="text-green-400">✔ Report generated: ./rico-report.html</span>
                </>
              }
              className="border-neon-cyan/30 shadow-[0_0_50px_-12px_rgba(255,140,0,0.2)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
