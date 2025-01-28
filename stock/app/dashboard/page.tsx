'use client';

import { MarketOverview } from '@/components/trading/market/market-overview';
import { WalletCard } from '@/components/dashboard/wallet-card';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* <div className="lg:col-span-8">
          <MarketOverview />
        </div> */}
        <div className="lg:col-span-6">
          <WalletCard />
        </div>
      </div>
    </div>
  );
}