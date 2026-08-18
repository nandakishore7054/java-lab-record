import { useState, useEffect, type FC } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Week1 from './pages/Week1';
import Week2 from './pages/Week2';
import Week3 from './pages/Week3';
import Week4 from './pages/Week4';
import Week5 from './pages/Week5';
import Week6 from './pages/Week6';

const PAGES: Record<string, FC<{ onNavigate?: (page: string) => void }>> = {
  home: Home as FC<{ onNavigate?: (page: string) => void }>,
  week1: Week1,
  week2: Week2,
  week3: Week3,
  week4: Week4,
  week5: Week5,
  week6: Week6,
};

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = (page: string) => {
    setActivePage(page);
    setSidebarOpen(false);
    // Scroll the main content container to top
    const mainEl = document.getElementById('main-content-container');
    if (mainEl) {
      mainEl.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Close mobile drawer on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const PageComponent = PAGES[activePage] || Home;

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-slate-50 text-slate-900">
      {/* Top Fixed Header */}
      <Header
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main App Body with Fixed Sidebar and Independent Scroll Content */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Fixed Desktop Sidebar & Mobile Drawer */}
        <Sidebar
          activePage={activePage}
          onNavigate={navigate}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Scrollable Main Record Area */}
        <main
          id="main-content-container"
          className="flex-1 h-full overflow-y-auto bg-slate-50 focus:outline-none"
          tabIndex={-1}
        >
          <PageComponent onNavigate={navigate} />
        </main>
      </div>
    </div>
  );
}
