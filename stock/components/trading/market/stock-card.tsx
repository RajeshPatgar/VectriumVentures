'use client';

import { StockData } from '@/lib/types';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
import { formatCurrency } from '@/lib/utils/format';

interface StockCardProps {
  stock: StockData;
}

export function StockCard({ stock }: StockCardProps) {
  return (
    <div className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors border border-white/5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-lg">{stock.symbol}</h3>
          <p className="text-sm text-muted-foreground">NSE</p>
        </div>
        <div className="text-right">
          <p className="font-medium text-lg">₹{formatCurrency(stock.lastPrice)}</p>
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
    </div>
  );
}