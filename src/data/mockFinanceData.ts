export interface Transaction {
  id: string;
  name: string;
  category: string;
  amount: number;
  date: string;
  status: 'Completed' | 'Pending';
}

export interface PortfolioAsset {
  id: string;
  name: string;
  type: string; // 'Stocks', 'Crypto', 'Bonds', etc.
  sector: string; // 'Technology', 'Healthcare', etc.
  value: number;
  allocation: number; // percentage
}

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: '1', name: 'Apple Store', category: 'Technology', amount: -1299.00, date: '2024-05-12', status: 'Completed' },
  { id: '2', name: 'Starbucks', category: 'Food & Drink', amount: -12.50, date: '2024-05-11', status: 'Completed' },
  { id: '3', name: 'Monthly Rent', category: 'Housing', amount: -2400.00, date: '2024-05-01', status: 'Pending' },
  { id: '4', name: 'Uber Trip', category: 'Transport', amount: -42.00, date: '2024-04-28', status: 'Completed' },
  { id: '5', name: 'Amazon Prime', category: 'Shopping', amount: -14.99, date: '2024-04-25', status: 'Completed' },
  { id: '6', name: 'Netflix', category: 'Subscriptions', amount: -15.99, date: '2024-05-05', status: 'Completed' },
  { id: '7', name: 'Spotify', category: 'Subscriptions', amount: -9.99, date: '2024-05-05', status: 'Completed' },
  { id: '8', name: 'Whole Foods', category: 'Groceries', amount: -156.20, date: '2024-05-10', status: 'Completed' },
  { id: '9', name: 'Zomato Order', category: 'Food & Drink', amount: -45.00, date: '2024-05-08', status: 'Completed' },
  { id: '10', name: 'Gym Membership', category: 'Health', amount: -50.00, date: '2024-05-01', status: 'Completed' },
];

export const MOCK_PORTFOLIO: PortfolioAsset[] = [
  { id: 'p1', name: 'Apple Inc.', type: 'Stocks', sector: 'Technology', value: 45000, allocation: 45 },
  { id: 'p2', name: 'Microsoft Corp.', type: 'Stocks', sector: 'Technology', value: 15000, allocation: 15 },
  { id: 'p3', name: 'Bitcoin', type: 'Crypto', sector: 'Finance', value: 20000, allocation: 20 },
  { id: 'p4', name: 'Treasury Bonds', type: 'Bonds', sector: 'Government', value: 20000, allocation: 20 },
];
