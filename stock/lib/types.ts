export interface StockData {
  symbol: string;
  lastPrice: number;
  change: number;
  changePercent: number;
}

export interface WalletData {
  balance: number;
  currency: string;
}