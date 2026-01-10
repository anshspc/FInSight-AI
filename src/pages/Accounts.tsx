import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Landmark, CreditCard, ArrowRight, Plus, ShieldCheck, RefreshCcw } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { cn } from '../utils/cn';

const ACCOUNTS_DATA = [
  {
    id: 1,
    bankName: 'Chase Bank',
    type: 'Checking',
    accountNumber: '•••• 4242',
    balance: 12450.00,
    lastSynced: '2 mins ago',
    color: 'blue-600',
    icon: Landmark,
  },
  {
    id: 2,
    bankName: 'American Express',
    type: 'Credit Card',
    accountNumber: '•••• 1005',
    balance: -3240.50,
    lastSynced: '1 hour ago',
    color: 'blue-400',
    icon: CreditCard,
  },
  {
    id: 3,
    bankName: 'Vanguard',
    type: 'Brokerage',
    accountNumber: '•••• 8821',
    balance: 76151.50,
    lastSynced: 'Today, 9:41 AM',
    color: 'red-600',
    icon: Wallet,
  },
];

// Simple lightweight Accounts page for the assignment scope. 
// Using mock data for now, but structured so we can swap it with a real API later.
export default function Accounts() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Helmet>
        <title>Accounts | FinSight AI</title>
      </Helmet>

      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black tracking-tight">Connected Accounts</h1>
          <p className="text-muted-foreground mt-1 text-sm font-medium">Manage your linked financial institutions and balances.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-bold shadow-xl shadow-primary/20 transition-all active:scale-95">
          <Plus size={18} />
          Add Account
        </button>
      </div>

      {/* Accounts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ACCOUNTS_DATA.map((account, index) => (
          <motion.div
            key={account.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-card border border-border/50 rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
          >
            {/* Background Accent */}
            <div className={cn(
              "absolute -right-4 -top-4 w-24 h-24 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity",
              `bg-${account.color}`
            )} />

            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className={cn(
                "p-3 rounded-2xl bg-accent/50 text-foreground group-hover:scale-110 transition-transform duration-500"
              )}>
                <account.icon size={24} />
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-500">
                <ShieldCheck size={12} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Verified</span>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-lg font-bold tracking-tight">{account.bankName}</h3>
              <p className="text-xs text-muted-foreground font-medium mt-0.5">{account.type} • {account.accountNumber}</p>
              
              <div className="mt-8">
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.15em]">Current Balance</p>
                <p className={cn(
                  "text-3xl font-black tracking-tight mt-1",
                  account.balance < 0 ? "text-destructive" : "text-foreground"
                )}>
                  ${Math.abs(account.balance).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/30 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2 text-muted-foreground/60">
                <RefreshCcw size={12} className="group-hover:rotate-180 transition-transform duration-1000" />
                <span className="text-[10px] font-bold uppercase tracking-widest">{account.lastSynced}</span>
              </div>
              <button className="p-2 hover:bg-accent rounded-xl text-muted-foreground hover:text-primary transition-all">
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        ))}

        {/* Empty/Add Slot */}
        <div className="border-2 border-dashed border-border/50 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center group hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer">
          <div className="p-4 rounded-full bg-accent/50 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all mb-4">
            <Plus size={24} />
          </div>
          <p className="text-sm font-bold text-muted-foreground group-hover:text-foreground">Link New Institution</p>
          <p className="text-[10px] text-muted-foreground/60 mt-1 font-medium">Supports Plaid & MX</p>
        </div>
      </div>

      {/* Security Banner */}
      <div className="bg-accent/30 border border-border/50 rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
        <div className="p-3 rounded-2xl bg-background shadow-sm text-emerald-500">
          <ShieldCheck size={24} />
        </div>
        <div>
          <p className="text-sm font-bold">Your data is secured with AES-256 encryption</p>
          <p className="text-xs text-muted-foreground mt-0.5">FinSight AI never stores your login credentials. Access is read-only via secure tokens.</p>
        </div>
        <button className="sm:ml-auto text-xs font-bold text-primary hover:underline uppercase tracking-widest">
          Security Settings
        </button>
      </div>
    </div>
  );
}
