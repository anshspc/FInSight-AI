import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Filter, ChevronDown, Download } from 'lucide-react';

// Mock data for the cash flow analysis - budget values are static for demo purposes
// TODO: Fetch dynamic targets from user settings API
const data = [
  { name: 'Mon', spending: 400, budget: 500 },
  { name: 'Tue', spending: 300, budget: 500 },
  { name: 'Wed', spending: 600, budget: 500 },
  { name: 'Thu', spending: 450, budget: 500 },
  { name: 'Fri', spending: 800, budget: 700 },
  { name: 'Sat', spending: 950, budget: 800 },
  { name: 'Sun', spending: 700, budget: 600 },
];

const SpendingChart = () => {
  return (
    <div className="bg-card p-6 md:p-8 rounded-[2rem] border border-border/50 shadow-sm h-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h3 className="text-xl font-bold tracking-tight">Cash Flow Analysis</h3>
          <p className="text-sm text-muted-foreground mt-1">Your weekly spending velocity</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex bg-accent/30 p-1 rounded-xl">
            <button className="px-3 py-1.5 text-xs font-bold rounded-lg bg-card shadow-sm">Week</button>
            <button className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground">Month</button>
          </div>
          <button className="p-2 hover:bg-accent rounded-xl border border-border/50 text-muted-foreground transition-colors">
            <Download size={18} />
          </button>
        </div>
      </div>
      
      <div className="flex-1 w-full min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.15}/>
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.5} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11, fontWeight: 500 }} 
              dy={15}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11, fontWeight: 500 }} 
            />
            <Tooltip 
              cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 1, strokeDasharray: '4 4' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="glass p-3 rounded-2xl border border-border/50 shadow-xl">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{payload[0].payload.name}</p>
                      <p className="text-sm font-bold mt-1 text-primary">${payload[0].value}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area 
              type="monotone" 
              dataKey="budget" 
              stroke="hsl(var(--muted-foreground))" 
              strokeWidth={2}
              strokeDasharray="5 5"
              fillOpacity={0} 
              fill="transparent" 
              animationDuration={1500}
            />
            <Area 
              type="monotone" 
              dataKey="spending" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#chartGradient)" 
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-xs font-medium text-muted-foreground">Current Spending</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <span className="text-xs font-medium text-muted-foreground">Budget Limit</span>
          </div>
        </div>
        <button className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
          Full Report <ChevronDown size={14} />
        </button>
      </div>
    </div>
  );
};

export default SpendingChart;
