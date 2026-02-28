import { Terminal as TerminalIcon, Copy, Check } from 'lucide-react';
import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalProps {
  command?: string;
  output?: string | ReactNode;
  title?: string;
  className?: string;
  typingSpeed?: number;
  startDelay?: number;
}

export function Terminal({ 
  command = "", 
  output, 
  title = "bash", 
  className = "",
  typingSpeed = 40,
  startDelay = 1000
}: TerminalProps) {
  const [displayedCommand, setDisplayedCommand] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showOutput, setShowOutput] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Typing animation
  useEffect(() => {
    if (!hasStarted) return;

    let currentIndex = 0;
    const typeChar = () => {
      if (currentIndex < command.length) {
        setDisplayedCommand(command.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeChar, typingSpeed + Math.random() * 20); // Add slight randomness
      } else {
        // Typing finished
        setTimeout(() => setShowOutput(true), 500);
      }
    };

    const timeout = setTimeout(typeChar, startDelay);
    return () => clearTimeout(timeout);
  }, [command, typingSpeed, startDelay, hasStarted]);

  // Cursor blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    if (command) {
      navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setHasStarted(true)}
      className={`rounded-xl overflow-hidden border border-white/10 bg-[#0A0E17] shadow-2xl ${className}`}
    >
      <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
          </div>
          <div className="ml-3 text-xs font-mono text-slate-500 flex items-center gap-1.5">
            <TerminalIcon size={12} />
            {title}
          </div>
        </div>
        {command && (
          <div className="relative">
            <button 
              onClick={handleCopy}
              className="text-slate-500 hover:text-white transition-colors p-1 rounded hover:bg-white/10"
            >
              {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
            </button>
            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full right-0 mt-2 px-2 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs rounded whitespace-nowrap backdrop-blur-md"
                >
                  Copied ✓
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
      <div className="px-6 py-4 font-mono text-sm overflow-x-auto min-h-[120px]">
        <div className="flex gap-2 mb-2 text-slate-300">
          <span className="text-neon-cyan select-none">$</span>
          <span className="whitespace-pre-wrap">
            {displayedCommand}
            {showCursor && <span className="inline-block w-2 h-4 bg-neon-cyan ml-1 align-middle" />}
          </span>
        </div>
        
        <AnimatePresence>
          {showOutput && output && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-slate-400 whitespace-pre-wrap leading-relaxed"
            >
              {output}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
