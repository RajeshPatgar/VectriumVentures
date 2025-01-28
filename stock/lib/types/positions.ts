export interface Position {
  id: string;
  stock: string;
  qty: number;
  openPrice: number;
  closePrice: number;
  type: 'BUY' | 'SELL';
  pnl: number;
  date: string;
}

export interface PositionsResponse {
  positions: Position[];
}