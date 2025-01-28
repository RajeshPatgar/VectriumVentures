'use client';

import { Transaction } from '@/lib/types/history';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/lib/utils/format';

interface TransactionTableProps {
  transactions: Transaction[];
}

export function TransactionTable({ transactions }: TransactionTableProps) {
  return (
    <>
      {/* Mobile View */}
      <div className="space-y-4 md:hidden">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="p-4 rounded-lg bg-secondary/50 border border-white/10 space-y-3"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">ID</p>
                <p className="font-medium">{transaction.id}</p>
              </div>
              <Badge variant={transaction.type === 'DEPOSIT' ? 'default' : 'secondary'}>
                {transaction.type}
              </Badge>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Amount</p>
                <p className="font-medium">₹{formatCurrency(transaction.amount)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date</p>
                <p>{new Date(transaction.date).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block rounded-md border border-white/10">
        <Table>
          <TableHeader>
            <TableRow className="border-white/10">
              <TableHead>ID</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id} className="border-white/10">
                <TableCell className="font-medium">{transaction.id}</TableCell>
                <TableCell className="text-right">₹{formatCurrency(transaction.amount)}</TableCell>
                <TableCell>
                  <Badge variant={transaction.type === 'DEPOSIT' ? 'default' : 'secondary'}>
                    {transaction.type}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  {new Date(transaction.date).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}