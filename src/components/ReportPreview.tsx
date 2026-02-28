import { Section, FadeIn } from './ui/Section';
import { AlertTriangle, Brain, ChevronDown, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export function ReportPreview() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  return (
    <Section className="bg-gradient-to-b from-transparent to-cyber-dark/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Professional Security Reports</h2>
        <p className="text-slate-400">Generate audit-ready HTML reports with a single command.</p>
      </div>

      <FadeIn>
        <div className="max-w-5xl mx-auto rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0F172A]">
          {/* Fake Browser Header */}
          <div className="bg-slate-900 px-4 py-3 flex items-center gap-4 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 bg-slate-800 rounded px-3 py-1 text-xs text-slate-400 font-mono text-center">
              file:///Users/dev/reports/rico-scan-2025.html
            </div>
          </div>

          {/* Report Content */}
          <div className="p-8">
            <div className="flex justify-between items-start mb-8 border-b border-white/5 pb-6">
              <div>
                <h1 className="text-2xl font-bold text-white mb-1">RICO Security Scan Report</h1>
                <p className="text-slate-400 text-sm">Target: api.example.com • Date: Oct 24, 2025</p>
              </div>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500">2</div>
                  <div className="text-xs text-slate-500 uppercase">High</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500">4</div>
                  <div className="text-xs text-slate-500 uppercase">Med</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">28</div>
                  <div className="text-xs text-slate-500 uppercase">Pass</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="col-span-2 space-y-4">
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <AlertTriangle size={16} className="text-red-500" />
                  Critical Findings
                </h3>
                
                {/* Interactive Vulnerability Card 1 */}
                <motion.div 
                  layout
                  onClick={() => setExpandedRow(expandedRow === 1 ? null : 1)}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${expandedRow === 1 ? 'bg-red-500/10 border-red-500/30' : 'bg-red-500/5 border-red-500/20 hover:bg-red-500/10'}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-red-400 font-mono text-sm font-bold">SQL Injection</span>
                      <motion.div animate={{ rotate: expandedRow === 1 ? 180 : 0 }}>
                        <ChevronDown size={14} className="text-red-400" />
                      </motion.div>
                    </div>
                    <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded">HIGH</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-3">
                    Endpoint <code className="text-slate-300">/api/products</code> is vulnerable to SQL injection via the <code className="text-slate-300">category</code> parameter.
                  </p>
                  <AnimatePresence>
                    {expandedRow === 1 && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-black/30 rounded p-2 font-mono text-xs text-slate-300 mt-2 border border-white/5">
                          <div className="text-slate-500 mb-1"># Payload</div>
                          ' OR '1'='1
                          <div className="text-slate-500 mt-2 mb-1"># Remediation</div>
                          Use parameterized queries or prepared statements.
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Interactive Vulnerability Card 2 */}
                <motion.div 
                  layout
                  onClick={() => setExpandedRow(expandedRow === 2 ? null : 2)}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${expandedRow === 2 ? 'bg-yellow-500/10 border-yellow-500/30' : 'bg-yellow-500/5 border-yellow-500/20 hover:bg-yellow-500/10'}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400 font-mono text-sm font-bold">Missing Rate Limiting</span>
                      <motion.div animate={{ rotate: expandedRow === 2 ? 180 : 0 }}>
                        <ChevronDown size={14} className="text-yellow-400" />
                      </motion.div>
                    </div>
                    <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded">MED</span>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Endpoint <code className="text-slate-300">/api/login</code> allows unlimited attempts.
                  </p>
                  <AnimatePresence>
                    {expandedRow === 2 && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-black/30 rounded p-2 font-mono text-xs text-slate-300 mt-2 border border-white/5">
                           <div className="text-slate-500 mb-1"># Recommendation</div>
                           Implement token bucket algorithm or use Redis for rate limiting.
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 rounded-lg p-6 border border-white/5 h-fit"
              >
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Brain size={16} className="text-neon-cyan" />
                  AI Analysis
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  RICO AI detected a pattern of insecure direct object references (IDOR) across user-facing endpoints. 
                </p>
                <div className="text-xs text-slate-500 font-mono p-3 bg-black/20 rounded border border-white/5">
                  <div className="flex items-center gap-2 mb-2 text-neon-cyan">
                    <ShieldAlert size={12} />
                    <span>AI Confidence: 98%</span>
                  </div>
                  Recommendation: Implement strict ownership checks in middleware.
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
