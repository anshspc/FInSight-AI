import React from 'react';
import { Helmet } from 'react-helmet-async';
import TransactionsTable from '../components/dashboard/TransactionsTable';
import { Download, Filter, Plus } from 'lucide-react';

// Reusing the same table component from the dashboard for consistency and faster development.
export default function Transactions() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <Helmet>
        <title>Transactions | FinSight AI</title>
      </Helmet>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black tracking-tight">Transaction History</h1>
          <p className="text-muted-foreground mt-1 text-sm font-medium">Search and export your complete transaction logs.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-accent/50 hover:bg-accent text-sm font-bold transition-all border border-border/50">
            <Download size={18} />
            Export
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-bold shadow-xl shadow-primary/20 transition-all active:scale-95">
            <Plus size={18} />
            Add New
          </button>
        </div>
      </div>

      {/* Transactions Table */}
      <TransactionsTable />
    </div>
  );
}
