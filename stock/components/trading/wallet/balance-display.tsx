'use client';

import { formatCurrency } from '@/lib/utils/format';
import { WalletData } from '@/lib/types';

interface BalanceDisplayProps {
  wallet: WalletData;
}

export function BalanceDisplay({ wallet }: BalanceDisplayProps) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">Available Balance</p>
      <p className="text-3xl sm:text-4xl font-bold text-primary">
        ₹{formatCurrency(wallet.balance)}
      </p>
    </div>
  );
}