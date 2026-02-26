import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import PreLoader from './components/PreLoader'; 
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SkillSection from './components/SkillSection';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PreLoader />;
  }
  return (
    <div className="bg-slate-950 min-h-screen w-full relative overflow-x-hidden">
       <Header />
       <main>
         <HeroSection />
         <SkillSection />
       </main>
    </div>
  );
}

export default App