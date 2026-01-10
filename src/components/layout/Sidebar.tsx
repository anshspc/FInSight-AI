import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Wallet, 
  PieChart, 
  TrendingUp, 
  CreditCard, 
  Bell, 
  Settings, 
  LogOut,
  Zap,
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import { cn } from '../../utils/cn';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/' },
    { icon: Wallet, label: 'Accounts', path: '/accounts' },
    { icon: CreditCard, label: 'Transactions', path: '/transactions' },
    { icon: PieChart, label: 'Budgets', path: '/budget' },
    { icon: TrendingUp, label: 'Investments', path: '/investments' },
    { icon: Bell, label: 'Insights', path: '/insights' },
  ];

  return (
    <aside className="w-72 border-r border-border/50 bg-card hidden lg:flex flex-col h-screen sticky top-0 z-50">
      <div className="p-8 flex items-center gap-4">
        <div className="w-12 h-12 rounded-[1.25rem] bg-primary flex items-center justify-center text-primary-foreground shadow-xl shadow-primary/25 rotate-3 hover:rotate-0 transition-transform duration-300">
          <Zap size={26} fill="currentColor" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tight leading-none text-foreground">FinSight AI</span>
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Dashboard</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4" aria-label="Main Navigation">
        <p className="px-4 text-[10px] font-bold text-muted-foreground/60 uppercase tracking-[0.2em] mb-4">Main Menu</p>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            aria-label={`Navigate to ${item.label}`}
            className={({ isActive }) => cn(
              "group flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300",
              isActive 
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]" 
                : "text-muted-foreground hover:bg-accent hover:text-foreground"
            )}
          >
            {({ isActive }) => (
              <>
                <div className="flex items-center gap-3">
                  <item.icon size={20} className={cn("transition-transform duration-300 group-hover:scale-110")} aria-hidden="true" />
                  {item.label}
                  {item.label === 'Insights' && (
                    <span className="ml-1 px-1.5 py-0.5 rounded-md bg-emerald-500 text-[8px] font-black text-white uppercase tracking-tighter shadow-sm shadow-emerald-500/20">NEW</span>
                  )}
                </div>
                <ChevronRight size={14} className={cn("opacity-0 transition-all duration-300", isActive ? "opacity-100 translate-x-0" : "group-hover:opacity-50 -translate-x-2 group-hover:translate-x-0")} aria-hidden="true" />
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-6 mt-auto">
        <div className="bg-zinc-900 dark:bg-zinc-800 p-6 rounded-2xl text-zinc-100 shadow-xl relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors"></div>
          <h4 className="text-sm font-bold relative z-10">Pro Plan</h4>
          <p className="text-[10px] opacity-60 mt-1 relative z-10 font-medium line-clamp-2">Get deep portfolio analytics and smart alerts.</p>
          <button className="w-full mt-4 py-2 bg-white text-zinc-900 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-zinc-100 transition-all relative z-10">
            Learn More
          </button>
        </div>
        
        <div className="mt-8 space-y-1">
          <NavLink
            to="/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-muted-foreground hover:bg-accent hover:text-foreground transition-all"
          >
            <Settings size={18} />
            Settings
          </NavLink>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-destructive hover:bg-destructive/10 transition-all text-left">
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
