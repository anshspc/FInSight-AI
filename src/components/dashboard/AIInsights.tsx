import React from 'react';
import { Sparkles, ArrowRight, Lightbulb, ShieldAlert, Zap, TrendingUp, Bell } from 'lucide-react';

const AIInsights = () => {
  const insights = [
    {
      title: 'Subscription Cleanup',
      description: 'We found 2 duplicate subscriptions. Canceling "DesignWeekly" could save you $24/mo.',
      icon: Bell,
      color: 'text-amber-500',
      bg: 'bg-amber-500/10',
      cta: 'Review Now',
    },
    {
      title: 'Cash Optimization',
      description: 'Transfer $5,000 from your checking to your HYSA to earn an extra $18/mo in interest.',
      icon: Zap,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
      cta: 'Transfer',
    },
    {
      title: 'Portfolio Balance',
      description: 'Your tech exposure is at 45%. Consider diversifying into emerging markets.',
      icon: TrendingUp,
      color: 'text-indigo-500',
      bg: 'bg-indigo-500/10',
      cta: 'Diversify',
    }
  ];

  return (
    <div className="bg-card p-8 rounded-[2rem] border border-border/50 shadow-sm flex flex-col h-full relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/10 transition-colors"></div>
      
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
            <Sparkles size={20} />
          </div>
          <h3 className="text-xl font-bold tracking-tight">Financial Insights</h3>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-accent text-muted-foreground">
          <span className="text-[10px] font-bold uppercase tracking-widest">v1.2</span>
        </div>
      </div>

      <div className="space-y-6 flex-1 relative z-10">
        {insights.map((insight, index) => (
          <div key={index} className="group/item cursor-pointer">
            <div className="flex items-start gap-4 p-2 -m-2 rounded-2xl hover:bg-accent/30 transition-all duration-300">
              <div className={`p-3 rounded-2xl ${insight.bg} ${insight.color} shrink-0 shadow-inner group-hover/item:scale-110 transition-transform`}>
                <insight.icon size={20} />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold flex items-center justify-between">
                  {insight.title}
                  <span className="text-[10px] text-primary font-bold opacity-0 group-hover/item:opacity-100 transition-opacity uppercase tracking-widest">{insight.cta}</span>
                </h4>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                  {insight.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-10 py-4 text-sm font-bold text-primary-foreground bg-primary rounded-[1.25rem] shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all relative z-10">
        View All Insights
      </button>
      
      <p className="text-[10px] text-center text-muted-foreground/60 mt-4 relative z-10 font-medium">
        Insights based on transaction history from the last 30 days.
      </p>
    </div>
  );
};

export default AIInsights;
