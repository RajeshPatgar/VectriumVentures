'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TransactionTable } from '@/components/history/transaction-table';
import { History } from 'lucide-react';

export default function HistoryPage() {
  const transactionHistory = {
    transactions: [
      {
        id: 'T001',
        amount: 25000,
        date: '2024-03-20',
        type: 'DEPOSIT',
      },
      {
        id: 'T002',
        amount: 10000,
        date: '2024-03-19',
        type: 'WITHDRAWAL',
      },
      {
        id: 'T003',
        amount: 50000,
        date: '2024-03-18',
        type: 'DEPOSIT',
      },
    ],
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Transaction History</h1>
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5" /> Transaction History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TransactionTable transactions={transactionHistory.transactions} />
        </CardContent>
      </Card>
    </div>
  );
}
