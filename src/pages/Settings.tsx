import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Bell, Globe, User, Shield, CreditCard, Save } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { cn } from '../utils/cn';

export default function Settings() {
  const [darkMode, setDarkMode] = useLocalStorage('finsight-dark-mode', true);
  const [notifications, setNotifications] = useLocalStorage('finsight-notifications', true);
  const [currency, setCurrency] = useLocalStorage('finsight-currency', 'USD');

  return (
    <div className="max-w-[800px] mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <Helmet>
        <title>Settings | FinSight AI</title>
      </Helmet>

      {/* Header */}
      <div>
        <h1 className="text-3xl font-black tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-1 text-sm font-medium">Manage your application preferences and security.</p>
      </div>

      <div className="space-y-6">
        
        {/* Appearance Section */}
        <section className="bg-card border border-border/50 rounded-[2rem] p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-primary/10 text-primary">
              <Sun size={20} />
            </div>
            <h2 className="text-lg font-bold tracking-tight">Appearance</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold">Dark Mode</p>
                <p className="text-xs text-muted-foreground mt-0.5 font-medium">Use dark theme across the dashboard.</p>
              </div>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={cn(
                  "w-12 h-6 rounded-full transition-colors relative",
                  darkMode ? "bg-primary" : "bg-accent"
                )}
              >
                <div className={cn(
                  "absolute top-1 w-4 h-4 rounded-full bg-white transition-all shadow-sm",
                  darkMode ? "left-7" : "left-1"
                )} />
              </button>
            </div>
          </div>
        </section>

        {/* Notifications Section */}
        <section className="bg-card border border-border/50 rounded-[2rem] p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500">
              <Bell size={20} />
            </div>
            <h2 className="text-lg font-bold tracking-tight">Notifications</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold">Push Notifications</p>
                <p className="text-xs text-muted-foreground mt-0.5 font-medium">Get alerts for large transactions and insights.</p>
              </div>
              <button 
                onClick={() => setNotifications(!notifications)}
                className={cn(
                  "w-12 h-6 rounded-full transition-colors relative",
                  notifications ? "bg-emerald-500" : "bg-accent"
                )}
              >
                <div className={cn(
                  "absolute top-1 w-4 h-4 rounded-full bg-white transition-all shadow-sm",
                  notifications ? "left-7" : "left-1"
                )} />
              </button>
            </div>
          </div>
        </section>

        {/* Localization Section */}
        <section className="bg-card border border-border/50 rounded-[2rem] p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500">
              <Globe size={20} />
            </div>
            <h2 className="text-lg font-bold tracking-tight">Localization</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold">Primary Currency</p>
                <p className="text-xs text-muted-foreground mt-0.5 font-medium">Used for all balance calculations.</p>
              </div>
              <select 
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-accent/50 border-none rounded-xl py-2 px-4 text-xs font-bold focus:ring-1 focus:ring-primary/20 outline-none cursor-pointer"
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="INR">INR (₹)</option>
              </select>
            </div>
          </div>
        </section>

        {/* Security Section (Static/Mock) */}
        <section className="bg-card border border-border/50 rounded-[2rem] p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-zinc-500/10 text-zinc-500">
              <Shield size={20} />
            </div>
            <h2 className="text-lg font-bold tracking-tight">Account & Security</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-xl bg-accent text-muted-foreground group-hover:text-foreground transition-colors">
                  <User size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold">Profile Details</p>
                  <p className="text-xs text-muted-foreground mt-0.5 font-medium">Alex Rivera • alex@example.com</p>
                </div>
              </div>
              <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">Edit</button>
            </div>

            <div className="h-[1px] bg-border/50" />

            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-xl bg-accent text-muted-foreground group-hover:text-foreground transition-colors">
                  <CreditCard size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold">Billing Method</p>
                  <p className="text-xs text-muted-foreground mt-0.5 font-medium">Pro Plan • Visa •••• 4242</p>
                </div>
              </div>
              <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">Update</button>
            </div>
          </div>
        </section>

        {/* Save Button */}
        <div className="pt-4">
          <button className="w-full py-4 bg-primary text-primary-foreground rounded-2xl text-sm font-bold shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
            <Save size={18} />
            Save Changes
          </button>
          <p className="text-center text-[10px] text-muted-foreground mt-4 font-medium uppercase tracking-widest">Settings are persisted locally in your browser.</p>
        </div>
      </div>
    </div>
  );
}
