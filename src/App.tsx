import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import { useLocalStorage } from './hooks/useLocalStorage';

// Lazy loading pages to keep the initial bundle small
const Dashboard = lazy(() => import('./pages/Dashboard').then(module => ({ default: module.default })));
const Accounts = lazy(() => import('./pages/Accounts').then(module => ({ default: module.default })));
const Transactions = lazy(() => import('./pages/Transactions').then(module => ({ default: module.default })));
const Budgets = lazy(() => import('./pages/Budgets').then(module => ({ default: module.default })));
const Investments = lazy(() => import('./pages/Investments').then(module => ({ default: module.default })));
const Insights = lazy(() => import('./pages/Insights').then(module => ({ default: module.default })));
const Settings = lazy(() => import('./pages/Settings').then(module => ({ default: module.default })));

const LoadingFallback = () => (
  <div className="flex-1 flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  // Using custom hook for theme persistence - default to dark mode for the premium feel
  const [darkMode, setDarkMode] = useLocalStorage('finsight-dark-mode', true);

  useEffect(() => {
    // Synchronize the 'dark' class with the user's preference stored in localStorage
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground flex transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/budget" element={<Budgets />} />
              <Route path="/investments" element={<Investments />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/settings" element={<Settings />} />
              {/* Future routes can be added here */}
            </Routes>
          </Suspense>
        </main>
      </div>
    </div>
  );
}

export default App;
