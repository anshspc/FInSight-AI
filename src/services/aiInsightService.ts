import { Transaction, PortfolioAsset } from '../data/mockFinanceData';
import * as financeService from './financeService';

export interface AIInsight {
  id: string;
  type: 'opportunity' | 'warning' | 'alert';
  title: string;
  description: string;
  category: string;
}

export const generateInsights = (transactions: Transaction[], portfolio: PortfolioAsset[]): AIInsight[] => {
  // TODO: Connect this to a real LLM/OpenAI endpoint later. 
  // Currently using mock logic to simulate agentic behavior.
  const insights: AIInsight[] = [];

  // 1. Sector Exposure Insight
  const techExposure = financeService.calculateSectorExposure(portfolio, 'Technology');
  if (techExposure > 40) {
    insights.push({
      id: 'ins_1',
      type: 'warning',
      title: 'High Sector Exposure',
      description: `Your tech exposure has reached ${techExposure}% of your portfolio. Consider diversifying into defensive sectors.`,
      category: 'Investments',
    });
  }

  // 2. Savings Insight (Subscriptions)
  const potentialSavings = financeService.findPotentialSavings(transactions);
  if (potentialSavings > 0) {
    insights.push({
      id: 'ins_2',
      type: 'opportunity',
      title: 'Subscription Optimization',
      description: `You could save ₹${potentialSavings.toLocaleString()} annually by auditing duplicate or unused subscriptions.`,
      category: 'Savings',
    });
  }

  // 3. Spending Trend Insight
  const foodTrend = financeService.getSpendingTrend(transactions, 'Food & Drink');
  if (foodTrend > 15) {
    insights.push({
      id: 'ins_3',
      type: 'alert',
      title: 'Spending Surge detected',
      description: `Your dining expenses are ${foodTrend}% higher than last month. Setting a budget could help control this.`,
      category: 'Budgeting',
    });
  }

  // 4. Emergency Fund Insight
  insights.push({
    id: 'ins_4',
    type: 'opportunity',
    title: 'Idle Cash Alert',
    description: 'We detected ₹50,000 sitting in your checking account. Moving this to a HYSA could earn you ₹3,500/year.',
    category: 'Cash Management',
  });

  return insights;
};
