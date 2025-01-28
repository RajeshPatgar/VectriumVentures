'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StockData } from '@/lib/types';
import { ArrowUpIcon, ArrowDownIcon, TrendingUp } from 'lucide-react';

const DUMMY_STOCKS: StockData[] = [
  { symbol: 'RELIANCE', lastPrice: 2456.75, change: 23.45, changePercent: 0.96 },
  { symbol: 'TCS', lastPrice: 3567.80, change: -15.20, changePercent: -0.42 },
  { symbol: 'HDFC', lastPrice: 1678.90, change: 45.30, changePercent: 2.77 },
  { symbol: 'INFY', lastPrice: 1456.35, change: -8.75, changePercent: -0.60 },
  { symbol: 'ICICI', lastPrice: 945.60, change: 12.85, changePercent: 1.38 },
];

export function StockList() {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        setStocks(DUMMY_STOCKS);
        setError(null);
      } catch (err) {
        setError('Unable to fetch stock data');
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
    const interval = setInterval(fetchStocks, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div className="animate-pulse space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-16 bg-secondary/50 rounded-lg" />
      ))}
    </div>;
  }

  if (error) {
    return (
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" /> Market Watch
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-destructive">{error}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" /> Market Watch
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {stocks.map((stock) => (
          <div
            key={stock.symbol}
            className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors border border-white/5"
          >
            <div>
              <h3 className="font-semibold text-lg">{stock.symbol}</h3>
              <p className="text-sm text-muted-foreground">NSE</p>
            </div>
            <div className="text-right">
              <p className="font-medium text-lg">₹{stock.lastPrice.toFixed(2)}</p>
              <p className={`text-sm flex items-center gap-1 ${
                stock.change >= 0 ? 'stock-up' : 'stock-down'
              }`}>
                {stock.change >= 0 ? (
                  <ArrowUpIcon className="h-4 w-4" />
                ) : (
                  <ArrowDownIcon className="h-4 w-4" />
                )}
                {Math.abs(stock.change).toFixed(2)} ({Math.abs(stock.changePercent).toFixed(2)}%)
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}