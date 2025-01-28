'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';
import { StockCard } from './stock-card';
import { useStocks } from '@/hooks/use-stocks';

export function MarketOverview() {
  const { stocks, loading } = useStocks();

  if (loading) {
    return <div className="animate-pulse space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-16 bg-secondary/50 rounded-lg" />
      ))}
    </div>;
  }

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" /> Market Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {stocks.map((stock) => (
          <StockCard key={stock.symbol} stock={stock} />
        ))}
      </CardContent>
    </Card>
  );
}