import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Zap, Bell, ArrowRight, Lightbulb, ShieldCheck, Target } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { cn } from '../utils/cn';

const RECOMMENDATIONS = [
  {
    title: 'High-Interest Optimization',
    description: 'Your current checking account earns 0.01% APY. Moving $10,000 to a 4.5% High-Yield Savings Account could earn you an extra $450 this year.',
    icon: Zap,
    color: 'amber-500',
    type: 'Actionable',
  },
  {
    title: 'Tax-Loss Harvesting',
    description: 'You have unrealized losses in your TSLA position. Harvesting these could offset up to $3,000 of your taxable income this year.',
    icon: Target,
    color: 'blue-500',
    type: 'Strategy',
  },
  {
    title: 'Subscription Audit',
    description: 'We detected a 20% increase in recurring entertainment costs. You have 3 streaming services with zero activity in the last 60 days.',
    icon: Bell,
    color: 'rose-500',
    type: 'Alert',
  }
];

export default function Insights() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <Helmet>
        <title>Insights | FinSight AI</title>
      </Helmet>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-2 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <Sparkles size={20} />
            </div>
            <span className="text-xs font-black text-primary uppercase tracking-widest">AI Intelligence</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight">Financial Insights</h1>
          <p className="text-muted-foreground mt-1 text-sm font-medium">Data-driven recommendations to optimize your net worth.</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Deep Dive Recommendations */}
        <div className="lg:col-span-7 space-y-8">
          <div className="px-2 flex items-center justify-between">
            <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Priority Recommendations</h2>
            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">3 New Insights</span>
          </div>
          
          <div className="space-y-6">
            {RECOMMENDATIONS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border/50 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group"
              >
                <div className="flex items-start gap-6">
                  <div className={cn(
                    "p-4 rounded-2xl bg-accent/50 shrink-0 group-hover:scale-110 transition-transform duration-500",
                    `text-${item.color}`
                  )}>
                    <item.icon size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1 block">{item.type}</span>
                      <button className="p-2 hover:bg-accent rounded-xl text-muted-foreground hover:text-primary transition-all">
                        <ArrowRight size={18} />
                      </button>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed font-medium">
                      {item.description}
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <button className="px-5 py-2 bg-primary text-primary-foreground text-xs font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                        Apply Now
                      </button>
                      <button className="px-5 py-2 text-xs font-bold text-muted-foreground hover:text-foreground transition-all">
                        Ignore
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Trends & Savings */}
        <div className="lg:col-span-5 space-y-10">
          
          {/* Trends Card */}
          <section className="space-y-6">
            <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-widest px-2">Spending Trends</h2>
            <div className="bg-card border border-border/50 rounded-[2rem] p-8 shadow-sm">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-500">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Food & Dining is up 14%</p>
                    <p className="text-xs text-muted-foreground mt-1 font-medium">You spent $120 more on DoorDash than your average monthly spend.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500">
                    <Target size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Savings Rate: 22%</p>
                    <p className="text-xs text-muted-foreground mt-1 font-medium">You've maintained a 20%+ savings rate for 4 consecutive months. Well done!</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500">
                    <Lightbulb size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Utility Switch Opportunity</p>
                    <p className="text-xs text-muted-foreground mt-1 font-medium">Switching your energy provider to "GreenFlow" could save you $15/mo.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Savings Challenge */}
          <section className="space-y-6">
            <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-widest px-2">Active Challenges</h2>
            <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <ShieldCheck size={20} className="text-indigo-200" />
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-100">Financial Security</span>
              </div>
              
              <h4 className="text-xl font-bold relative z-10">6-Month Emergency Fund</h4>
              <p className="text-white/70 text-sm mt-2 leading-relaxed relative z-10">You're currently at 4.2 months of coverage. Adding $850 more this month will reach your 5-month milestone.</p>
              
              <div className="mt-8 relative z-10">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2">
                  <span>Progress</span>
                  <span>72%</span>
                </div>
                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{ width: '72%' }}></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
