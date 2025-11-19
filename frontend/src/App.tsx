import { useState, useEffect } from 'react';
import Header from './components/Header';
import FloatingEmojis from './components/FloatingEmojis';
import CountdownOverlay from './components/CountdownOverlay';
import HeroCard from './components/HeroCard';
import PortraitCard from './components/PortraitCard';
import NicknamesCard from './components/NicknamesCard';
import AboutCard from './components/AboutCard';
import MemoriesSection from './components/MemoriesSection';
import LetterSection from './components/LetterSection';
import HundredReasonsSection from './components/HundredReasonsSection';
import PromiseSection from './components/PromiseSection';
import BucketListSection from './components/BucketListSection';
import HourlyMessageCard from './components/HourlyMessageCard';
import UnlockSurprise from './components/UnlockSurprise';
import Footer from './components/Footer';
import AdvancedCakeGame from './components/AdvancedCakeGame';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  const [showMainContent, setShowMainContent] = useState(false);
  const [showGame, setShowGame] = useState(false);
  
  // Enable scroll-reveal animations
  useScrollReveal();

  // Listen for game open event
  useEffect(() => {
    const handleOpenGame = () => setShowGame(true);
    window.addEventListener('openBirthdayGame', handleOpenGame);
    return () => window.removeEventListener('openBirthdayGame', handleOpenGame);
  }, []);

  return (
    <>
      <CountdownOverlay onComplete={() => setShowMainContent(true)} />
      <FloatingEmojis />
      
      {/* Advanced Birthday Cake Game with Plate Placement */}
      {showGame && <AdvancedCakeGame onClose={() => setShowGame(false)} />}
      
      <div className={`transition-opacity duration-1000 ${showMainContent ? 'opacity-100' : 'opacity-0'}`}>
        <Header />
        
        <main className="container mx-auto px-4 md:px-8 lg:px-12 py-8 relative z-10 max-w-7xl">
          {/* Hero Section - Full Width for Better Visual Impact */}
          <div className="mb-8">
            <HeroCard />
          </div>

          {/* Portrait Card - Centered with max width for better aesthetics */}
          <div className="mb-12 max-w-md mx-auto">
            <PortraitCard />
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Nicknames Card - spans full width */}
            <div className="md:col-span-2 lg:col-span-3">
              <NicknamesCard />
            </div>
            
            {/* About Card - spans 2 columns */}
            <div className="md:col-span-2">
              <AboutCard />
            </div>
            
            {/* Hourly Message Card */}
            <div>
              <HourlyMessageCard />
            </div>
          </div>

          {/* Memories Section */}
          <div className="mb-12">
            <MemoriesSection />
          </div>

          {/* Letter Section */}
          <div className="mb-12">
            <LetterSection />
          </div>

          {/* 100 Reasons I Love You Section - NEW FEATURE 2 */}
          <div className="mb-12">
            <HundredReasonsSection />
          </div>

          {/* Promise Section */}
          <div className="mb-12">
            <PromiseSection />
          </div>

          {/* Our Future Together Bucket List - NEW FEATURE 4 */}
          <div className="mb-12">
            <BucketListSection />
          </div>

          {/* Unlock Surprise Section - ENHANCED FEATURE 5 */}
          <UnlockSurprise />
        </main>
      </div>
      
      {/* Footer - outside main container for full-width */}
      {showMainContent && <Footer />}
    </>
  );
}

export default App;

