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
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <main className="bg-cyber-black min-h-screen text-slate-300 selection:bg-neon-cyan/30">
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
      <About />
      <Footer />
    </main>
  );
}
