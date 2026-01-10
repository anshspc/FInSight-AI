import { Transaction, PortfolioAsset } from '../data/mockFinanceData';

export const calculateSectorExposure = (portfolio: PortfolioAsset[], sector: string): number => {
  return portfolio
    .filter((asset) => asset.sector === sector)
    .reduce((sum, asset) => sum + asset.allocation, 0);
};

export const calculateCategorySpending = (transactions: Transaction[], category: string): number => {
  return Math.abs(
    transactions
      .filter((t) => t.category === category)
      .reduce((sum, t) => sum + t.amount, 0)
  );
};

export const findPotentialSavings = (transactions: Transaction[]): number => {
  const subscriptions = transactions.filter((t) => t.category === 'Subscriptions');
  // Logic to find potential savings, e.g., duplicate or high-cost subscriptions
  return subscriptions.length > 2 ? 2500 : 0; // Mock logic
};

export const getSpendingTrend = (transactions: Transaction[], category: string): number => {
  // Logic to compare current month vs last month spending
  // Mock trend for now
  const trends: Record<string, number> = {
    'Food & Drink': 22,
    'Technology': 14,
    'Transport': -5,
  };
  return trends[category] || 0;
};
