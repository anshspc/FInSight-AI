import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Wallet, Target, CreditCard, ArrowUpRight, ArrowDownRight, Eye, EyeOff } from 'lucide-react';

interface CardProps {
  title: string;
  amount: string;
  change: string;
  isPositive: boolean;
  icon: React.ElementType;
  color: string;
  index: number;
}

const Card: React.FC<CardProps> = ({ title, amount, change, isPositive, icon: Icon, color, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-card p-6 rounded-3xl border border-border/50 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <Icon size={80} />
    </div>
    
    <div className="flex justify-between items-start mb-6">
      <div className={`p-3 rounded-2xl bg-${color}/10 text-${color} shadow-inner`}>
        <Icon size={24} />
      </div>
      <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
        isPositive ? 'bg-emerald-500/10 text-emerald-500' : 'bg-destructive/10 text-destructive'
      }`}>
        {isPositive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
        {change}
      </div>
    </div>
    
    <div className="relative z-10">
      <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest">{title}</p>
      <div className="flex items-baseline gap-2 mt-2">
        <h3 className="text-3xl font-bold tracking-tight">{amount}</h3>
      </div>
      
      <div className="mt-4 flex items-center gap-2">
        <div className="flex-1 h-1 bg-accent/50 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: isPositive ? '70%' : '40%' }}
            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
            className={`h-full bg-${color} rounded-full`}
          />
        </div>
        <span className="text-[10px] font-medium text-muted-foreground">Target: 85%</span>
      </div>
    </div>
  </motion.div>
);

const SummaryCards = () => {
  // Using local state to toggle balance visibility for better privacy during demos
  const [showBalance, setShowBalance] = React.useState(true);

  const cards = [
    { title: 'Total Net Worth', amount: showBalance ? '$124,592.00' : '••••••', change: '+12.5%', isPositive: true, icon: Wallet, color: 'primary' },
    { title: 'Monthly Spending', amount: showBalance ? '$3,240.50' : '••••••', change: '-2.4%', isPositive: true, icon: CreditCard, color: 'destructive' },
    { title: 'Total Savings', amount: showBalance ? '$45,200.00' : '••••••', change: '+8.2%', isPositive: true, icon: Target, color: 'emerald-500' },
    { title: 'Investment Port.', amount: showBalance ? '$76,151.50' : '••••••', change: '+14.1%', isPositive: true, icon: TrendingUp, color: 'blue-500' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-2">
        <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
          Financial Overview
          <button 
            onClick={() => setShowBalance(!showBalance)}
            className="p-1 hover:bg-accent rounded-md transition-colors text-muted-foreground"
          >
            {showBalance ? <Eye size={14} /> : <EyeOff size={14} />}
          </button>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Card key={index} {...card} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SummaryCards;
