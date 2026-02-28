import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { Pipeline } from './components/Pipeline';
import { DemoSection } from './components/DemoSection';
import { ReportPreview } from './components/ReportPreview';
import { AISection } from './components/AISection';
import { CICD } from './components/CICD';
import { Safety } from './components/Safety';
import { Installation } from './components/Installation';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { useRef, useEffect } from 'react';

export default function App() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.left = `${e.clientX - 160}px`;
          glowRef.current.style.top = `${e.clientY - 160}px`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <main className="bg-cyber-black min-h-screen text-slate-300 selection:bg-neon-cyan/30 relative overflow-hidden">
      {/* Mouse-following glow effect */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed w-80 h-80 rounded-full bg-gradient-to-r from-neon-cyan via-green-500 to-transparent opacity-12 blur-2xl"
        style={{
          zIndex: 9999,
          willChange: 'transform',
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ProblemSolution />
        <Features />
        <Pipeline />
        <DemoSection />
        <ReportPreview />
        <AISection />
        <CICD />
        <Safety />
        <Installation />
        <Footer />
      </div>
    </main>
  );
}
