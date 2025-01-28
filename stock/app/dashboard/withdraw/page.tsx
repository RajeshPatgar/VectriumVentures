'use client';

import { WithdrawForm } from '@/components/funds/withdraw-form';

export default function WithdrawPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Withdraw Funds</h1>
      <WithdrawForm />
    </div>
  );
}