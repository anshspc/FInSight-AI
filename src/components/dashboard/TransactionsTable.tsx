import React, { useMemo } from 'react';
import { ShoppingCart, Coffee, Home, Car, Smartphone, ArrowUpRight, Inbox } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';
import { EmptyState } from '../ui/EmptyState';

const TRANSACTIONS_DATA = [
  { id: 1, name: 'Apple Store', category: 'Technology', date: '12 May, 2024', amount: -1299.00, status: 'Completed', icon: Smartphone, color: 'bg-zinc-100 dark:bg-zinc-800' },
  { id: 2, name: 'Starbucks', category: 'Food & Drink', date: '11 May, 2024', amount: -12.50, status: 'Completed', icon: Coffee, color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600' },
  { id: 3, name: 'Monthly Rent', category: 'Housing', date: '01 May, 2024', amount: -2400.00, status: 'Pending', icon: Home, color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600' },
  { id: 4, name: 'Uber Trip', category: 'Transport', date: '28 Apr, 2024', amount: -42.00, status: 'Completed', icon: Car, color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600' },
  { id: 5, name: 'Amazon Prime', category: 'Shopping', date: '25 Apr, 2024', amount: -14.99, status: 'Completed', icon: ShoppingCart, color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600' },
];

interface TransactionItem {
  id: number;
  name: string;
  category: string;
  date: string;
  amount: number;
  status: string;
  icon: any;
  color: string;
}

const TransactionRow = React.memo(({ t }: { t: TransactionItem }) => (
  <tr className="hover:bg-accent/10 transition-all group cursor-pointer">
    <td className="px-8 py-6">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-2xl ${t.color} flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300`}>
          <t.icon size={22} />
        </div>
        <div>
          <p className="text-sm font-bold tracking-tight group-hover:text-primary transition-colors">{t.name}</p>
          <div className="flex items-center gap-1.5 mt-1">
            <div className={`w-1.5 h-1.5 rounded-full ${t.status === 'Completed' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></div>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{t.status}</p>
          </div>
        </div>
      </div>
    </td>
    <td className="px-8 py-6">
      <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-accent/50 text-accent-foreground border border-border/50 uppercase tracking-wider whitespace-nowrap">
        {t.category}
      </span>
    </td>
    <td className="px-8 py-6">
      <p className="text-xs font-semibold text-muted-foreground">{t.date}</p>
    </td>
    <td className="px-8 py-6">
      <p className={`text-sm font-bold tracking-tight ${t.amount < 0 ? 'text-foreground' : 'text-emerald-500'}`}>
        {t.amount < 0 ? '-' : '+'}${Math.abs(t.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
      </p>
    </td>
    <td className="px-8 py-6 text-right">
      <button className="p-2.5 hover:bg-primary/10 hover:text-primary rounded-xl transition-all opacity-0 group-hover:opacity-100">
        <ArrowUpRight size={18} />
      </button>
    </td>
  </tr>
));

const TransactionsTable = () => {
  const { debouncedQuery, setSearchQuery } = useSearch();

  const filteredTransactions = useMemo(() => {
    return TRANSACTIONS_DATA.filter(t => 
      t.name.toLowerCase().includes(debouncedQuery.toLowerCase()) || 
      t.category.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [debouncedQuery]);

  return (
    <div className="bg-card rounded-[2.5rem] border border-border/50 shadow-sm overflow-hidden flex flex-col">
      <div className="p-8 border-b border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold tracking-tight">Transactions</h3>
          <p className="text-sm text-muted-foreground mt-1">Manage your recent activity</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-xs font-bold px-4 py-2 bg-accent/50 hover:bg-accent rounded-xl transition-all border border-border/50">Export CSV</button>
        </div>
      </div>

      <div className="overflow-x-auto">
        {filteredTransactions.length > 0 ? (
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] bg-accent/20">
                <th className="px-8 py-4">Beneficiary</th>
                <th className="px-8 py-4">Category</th>
                <th className="px-8 py-4">Date</th>
                <th className="px-8 py-4">Amount</th>
                <th className="px-8 py-4 text-right">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              {filteredTransactions.map((t) => (
                <TransactionRow key={t.id} t={t} />
              ))}
            </tbody>
          </table>
        ) : (
          <EmptyState 
            icon={Inbox}
            title="No transactions found"
            description={`We couldn't find any results for "${debouncedQuery}". Try adjusting your search term or filters.`}
            action={{
              label: "Clear Search",
              onClick: () => setSearchQuery('')
            }}
          />
        )}
      </div>
      
      <div className="p-6 border-t border-border/30 flex items-center justify-center">
        <button className="text-xs font-bold text-primary hover:underline uppercase tracking-widest">
          Load More History
        </button>
      </div>
    </div>
  );
};

export default TransactionsTable;
