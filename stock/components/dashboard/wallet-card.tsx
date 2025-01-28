'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Wallet } from 'lucide-react';
import { WalletData } from '@/lib/types';
import { useRouter } from 'next/navigation';

export function WalletCard() {
  const router = useRouter();
  const [wallet] = useState<WalletData>({
    balance: 250000.00,
    currency: 'INR'
  });

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wallet className="h-5 w-5" /> Wallet Balance
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Available Balance</p>
            <p className="text-3xl sm:text-4xl font-bold text-primary">
              ₹{wallet.balance.toLocaleString('en-IN')}
            </p>
          </div>
          <Button
            onClick={() => router.push('/dashboard/funds/add')}
            className="gap-2 w-full sm:w-auto whitespace-nowrap bg-primary hover:bg-primary/90"
          >
            <Plus className="h-4 w-4" /> Add Funds
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}