import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, ShoppingBag, Plane, Home, AlertCircle, TrendingDown, Plus } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { cn } from '../utils/cn';

const BUDGETS_DATA = [
  {
    id: 1,
    category: 'Food & Dining',
    spent: 850,
    limit: 1000,
    icon: Utensils,
    color: 'amber-500',
  },
  {
    id: 2,
    category: 'Shopping',
    spent: 1240,
    limit: 1200,
    icon: ShoppingBag,
    color: 'rose-500',
  },
  {
    id: 3,
    category: 'Travel',
    spent: 300,
    limit: 1500,
    icon: Plane,
    color: 'blue-500',
  },
  {
    id: 4,
    category: 'Housing',
    spent: 2400,
    limit: 2400,
    icon: Home,
    color: 'indigo-500',
  },
];

// TODO: Connect this to a real backend to fetch dynamic category limits
export default function Budgets() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Helmet>
        <title>Budgets | FinSight AI</title>
      </Helmet>

      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black tracking-tight">Monthly Budgets</h1>
          <p className="text-muted-foreground mt-1 text-sm font-medium">Track your spending against your monthly goals.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-bold shadow-xl shadow-primary/20 transition-all active:scale-95">
          <Plus size={18} />
          Create Budget
        </button>
      </div>

      {/* Budget Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BUDGETS_DATA.map((budget, index) => {
          const percentage = Math.min((budget.spent / budget.limit) * 100, 100);
          const isOver = budget.spent > budget.limit;

          return (
            <motion.div
              key={budget.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border/50 rounded-[2rem] p-8 shadow-sm group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "p-4 rounded-2xl bg-accent/50 group-hover:scale-110 transition-transform duration-500",
                    `text-${budget.color}`
                  )}>
                    <budget.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight">{budget.category}</h3>
                    <p className="text-xs text-muted-foreground font-medium">Monthly Target</p>
                  </div>
                </div>
                {isOver && (
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rose-500/10 text-rose-500 animate-pulse">
                    <AlertCircle size={12} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Over Budget</span>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.15em]">Total Spent</p>
                    <p className="text-3xl font-black tracking-tight mt-1">
                      ${budget.spent.toLocaleString()}
                      <span className="text-sm font-bold text-muted-foreground ml-2">/ ${budget.limit.toLocaleString()}</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-muted-foreground">{percentage.toFixed(0)}% Used</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-3 bg-accent/50 rounded-full overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className={cn(
                      "h-full rounded-full transition-all duration-1000",
                      isOver ? "bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.3)]" : "bg-primary"
                    )}
                  />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingDown size={14} className="text-emerald-500" />
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Spending is down 12% vs last month</span>
                </div>
                <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">
                  Breakdown
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Insight Section */}
      <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-[2.5rem] border border-border/50 shadow-xl relative overflow-hidden group">
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all"></div>
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center text-white shadow-inner">
            <AlertCircle size={32} />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-white text-xl font-bold">Budget Health Optimization</h4>
            <p className="text-white/60 text-sm mt-1">Based on your current trajectory, you will exceed your Shopping budget by $140 this month. Consider deferring non-essential purchases to next month.</p>
          </div>
          <button className="px-8 py-3 bg-white text-zinc-900 rounded-2xl text-sm font-bold hover:bg-zinc-100 transition-all active:scale-95 whitespace-nowrap">
            Auto-Adjust
          </button>
        </div>
      </div>
    </div>
  );
}
