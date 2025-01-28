'use client';

import { useState, useEffect } from 'react';
import { StockData } from '@/lib/types';

const DUMMY_STOCKS: StockData[] = [
  { symbol: 'RELIANCE', lastPrice: 2456.75, change: 23.45, changePercent: 0.96 },
  { symbol: 'TCS', lastPrice: 3567.80, change: -15.20, changePercent: -0.42 },
  { symbol: 'HDFC', lastPrice: 1678.90, change: 45.30, changePercent: 2.77 },
  { symbol: 'INFY', lastPrice: 1456.35, change: -8.75, changePercent: -0.60 },
  { symbol: 'ICICI', lastPrice: 945.60, change: 12.85, changePercent: 1.38 }
];

export function useStocks() {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        // Simulate API call
        setStocks(DUMMY_STOCKS);
        setError(null);
      } catch (err) {
        setError('Unable to fetch stock data');
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
    const interval = setInterval(fetchStocks, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return { stocks, loading, error };
}