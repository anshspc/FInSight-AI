import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Download, Wallet, Filter, Calendar, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Components
import SummaryCards from '../components/dashboard/SummaryCards';
import SpendingChart from '../components/dashboard/SpendingChart';
import AIInsights from '../components/dashboard/AIInsights';
import TransactionsTable from '../components/dashboard/TransactionsTable';
import AlertsList from '../components/dashboard/AlertsList';
import ConnectBankModal from '../components/dashboard/ConnectBankModal';

// Main container for the dashboard view. Keeping the max-width constrained for better readability on large monitors.
export default function Dashboard() {
  // Local state for the bank connection modal - using local state here to keep it simple 
  // since we don't need this globally yet.
  const [showBankModal, setShowBankModal] = useState(false);

  return (
    <>
      <Helmet>
        <title>Dashboard | FinSight AI Modern Finance</title>
        <meta name="description" content="Overview of your personal finances, AI-powered insights, and real-time transaction tracking." />
      </Helmet>
      
      <div className="max-w-[1600px] mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500 pb-20">
        
        {/* Welcome & Action Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded-md bg-accent text-muted-foreground text-[10px] font-bold uppercase tracking-wider">Free Plan</span>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase tracking-wider">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                Connected
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
              <p className="text-muted-foreground mt-1 text-sm font-medium">
                Welcome back, Alex. Your account status is <span className="text-emerald-500 font-bold">Healthy</span>.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-accent/50 hover:bg-accent text-sm font-bold transition-all border border-border/50">
              <Filter size={18} />
              Filters
            </button>
            <button 
              onClick={() => setShowBankModal(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-bold shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
            >
              <Wallet size={18} />
              Connect Bank
            </button>
          </div>
        </div>

        {/* Financial KPIs */}
        <SummaryCards />

        {/* Analytic Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          
          {/* Left: Interactive Spending Charts & History */}
          <div className="xl:col-span-8 space-y-8">
            <div className="h-[500px]">
              <SpendingChart />
            </div>
            <TransactionsTable />
          </div>

          {/* Right: AI Intelligence & Critical Alerts */}
          <div className="xl:col-span-4 space-y-8">
            <AIInsights />
            
            <div className="bg-card p-8 rounded-[2.5rem] border border-border/50 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold tracking-tight">Priority Alerts</h3>
                <span className="px-2 py-1 rounded-lg bg-destructive/10 text-destructive text-[10px] font-bold">3 New</span>
              </div>
              <AlertsList />
            </div>

            {/* Visual Progress / Health Widget */}
            <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all"></div>
              
              <div className="flex items-center justify-between relative z-10">
                <h4 className="font-bold">FinHealth Score</h4>
                <div className="p-2 bg-white/20 rounded-xl">
                  <TrendingUp size={20} />
                </div>
              </div>
              
              <div className="flex items-end gap-3 my-6 relative z-10">
                <span className="text-6xl font-black tracking-tighter">84</span>
                <div className="flex flex-col pb-2">
                  <span className="text-emerald-300 text-xs font-bold">+3.2%</span>
                  <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">vs last month</span>
                </div>
              </div>
              
              <div className="w-full bg-white/20 h-2 rounded-full mb-6 relative z-10">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '84%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-white h-full rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                />
              </div>
              
              <p className="text-sm text-white/80 leading-relaxed relative z-10">
                Your credit utilization is down. Keep your spending under $3.5k to hit your 90 goal.
              </p>
              
              <button className="w-full mt-8 py-3.5 bg-white text-indigo-600 rounded-2xl text-sm font-bold hover:bg-zinc-50 transition-all shadow-lg active:scale-95">
                View Breakdown
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Global Bank Connection UI */}
      <ConnectBankModal 
        isOpen={showBankModal} 
        onClose={() => setShowBankModal(false)} 
      />
    </>
  );
}
