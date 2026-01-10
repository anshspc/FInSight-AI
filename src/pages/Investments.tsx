import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, LayoutGrid, BarChart3, PieChart, ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { cn } from '../utils/cn';

const INVESTMENTS_DATA = {
  stocks: [
    { name: 'Apple Inc.', symbol: 'AAPL', value: 12450.25, gain: 12.5, isPositive: true },
    { name: 'Tesla, Inc.', symbol: 'TSLA', value: 5840.10, gain: -4.2, isPositive: false },
    { name: 'Nvidia Corp.', symbol: 'NVDA', value: 8900.50, gain: 28.4, isPositive: true },
  ],
  funds: [
    { name: 'Vanguard S&P 500', symbol: 'VOO', value: 45200.00, gain: 8.2, isPositive: true },
    { name: 'Fidelity Nasdaq', symbol: 'FNILX', value: 12150.00, gain: 11.4, isPositive: true },
  ],
  crypto: [
    { name: 'Bitcoin', symbol: 'BTC', value: 24500.00, gain: 45.2, isPositive: true },
    { name: 'Ethereum', symbol: 'ETH', value: 8400.00, gain: -2.1, isPositive: false },
  ]
};

export default function Investments() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Helmet>
        <title>Investments | FinSight AI</title>
      </Helmet>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black tracking-tight">Portfolio Analysis</h1>
          <p className="text-muted-foreground mt-1 text-sm font-medium">Track your assets across stocks, funds, and digital currencies.</p>
        </div>
        <div className="flex bg-accent/30 p-1 rounded-2xl border border-border/50">
          <button className="px-5 py-2 text-xs font-bold rounded-xl bg-card shadow-sm flex items-center gap-2">
            <LayoutGrid size={14} /> Overview
          </button>
          <button className="px-5 py-2 text-xs font-medium text-muted-foreground hover:text-foreground flex items-center gap-2">
            <Activity size={14} /> Performance
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { label: 'Total Invested', value: '$117,440.85', change: '+14.2%', icon: BarChart3, color: 'primary' },
          { label: 'Annual Returns', value: '$12,450.12', change: '+8.1%', icon: TrendingUp, color: 'emerald-500' },
          { label: 'Asset Groups', value: '3 Major', change: 'Diversified', icon: PieChart, color: 'blue-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-card border border-border/50 p-6 rounded-3xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className={cn("p-2 rounded-xl bg-accent/50", `text-${stat.color}`)}>
                <stat.icon size={20} />
              </div>
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</span>
            </div>
            <div className="flex items-end justify-between">
              <h3 className="text-2xl font-bold tracking-tight">{stat.value}</h3>
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest bg-emerald-500/10 px-2 py-1 rounded-lg">
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Stocks Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Individual Stocks</h2>
            <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">Trade</button>
          </div>
          <div className="space-y-4">
            {INVESTMENTS_DATA.stocks.map((stock, i) => (
              <div key={i} className="bg-card border border-border/50 rounded-2xl p-5 hover:border-primary/50 transition-all group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/50 flex items-center justify-center font-bold text-xs">
                      {stock.symbol[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold">{stock.name}</p>
                      <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">{stock.symbol}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">${stock.value.toLocaleString()}</p>
                    <div className={cn(
                      "flex items-center justify-end gap-1 text-[10px] font-bold uppercase tracking-widest mt-0.5",
                      stock.isPositive ? "text-emerald-500" : "text-rose-500"
                    )}>
                      {stock.isPositive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                      {stock.isPositive ? '+' : ''}{stock.gain}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Crypto & Funds Section */}
        <div className="space-y-10">
          <section className="space-y-6">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Crypto Allocation</h2>
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest bg-amber-500/10 px-2 py-1 rounded-lg">High Risk</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {INVESTMENTS_DATA.crypto.map((asset, i) => (
                <div key={i} className="bg-card border border-border/50 rounded-2xl p-5 flex flex-col items-center text-center hover:bg-accent/30 transition-all">
                  <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center text-xl mb-3">
                    {asset.symbol === 'BTC' ? '₿' : 'Ξ'}
                  </div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{asset.name}</p>
                  <p className="text-lg font-bold mt-1">${asset.value.toLocaleString()}</p>
                  <div className={cn(
                    "text-[10px] font-black uppercase tracking-widest mt-2",
                    asset.isPositive ? "text-emerald-500" : "text-rose-500"
                  )}>
                    {asset.isPositive ? '+' : ''}{asset.gain}%
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="px-2">
              <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Mutual Funds & ETFs</h2>
            </div>
            <div className="bg-card border border-border/50 rounded-[2rem] overflow-hidden">
              {INVESTMENTS_DATA.funds.map((fund, i) => (
                <div key={i} className="p-6 flex items-center justify-between border-b border-border/50 last:border-0 hover:bg-accent/20 transition-all">
                  <div>
                    <p className="text-sm font-bold">{fund.name}</p>
                    <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest mt-0.5">{fund.symbol} • Retirement</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">${fund.value.toLocaleString()}</p>
                    <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mt-0.5">+{fund.gain}% YTD</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
