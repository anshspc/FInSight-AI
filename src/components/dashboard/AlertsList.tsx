import React from 'react';
import { AlertCircle, CheckCircle2, Info, X, BellOff } from 'lucide-react';
import { EmptyState } from '../ui/EmptyState';

const AlertsList = () => {
  const alerts = [
    {
      id: 1,
      type: 'warning',
      title: 'Low Balance Alert',
      message: 'Your Main Savings account is below your $1,000 threshold.',
      icon: AlertCircle,
      color: 'text-amber-500',
      border: 'border-amber-500/20',
      bg: 'bg-amber-500/5'
    },
    {
      id: 2,
      type: 'success',
      title: 'Savings Goal Reached!',
      message: "You've successfully reached your 'Europe Trip' goal of $5,000.",
      icon: CheckCircle2,
      color: 'text-emerald-500',
      border: 'border-emerald-500/20',
      bg: 'bg-emerald-500/5'
    },
    {
      id: 3,
      type: 'info',
      title: 'New Feature',
      message: 'Crypto tracking is now available! Link your wallets to see them in your net worth.',
      icon: Info,
      color: 'text-blue-500',
      border: 'border-blue-500/20',
      bg: 'bg-blue-500/5'
    }
  ];

  if (alerts.length === 0) {
    return (
      <EmptyState 
        icon={BellOff}
        title="All caught up!"
        description="You have no priority alerts at the moment. We'll notify you if anything needs your attention."
        className="py-10"
      />
    );
  }

  return (
    <div className="space-y-3">
      {alerts.map((alert) => (
        <div 
          key={alert.id} 
          className={`relative p-4 rounded-xl border ${alert.border} ${alert.bg} flex gap-4 items-start group animate-in fade-in slide-in-from-right-4 duration-500`}
        >
          <div className={`${alert.color} shrink-0`}>
            <alert.icon size={20} />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold">{alert.title}</h4>
            <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
              {alert.message}
            </p>
          </div>
          <button className="text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default AlertsList;
