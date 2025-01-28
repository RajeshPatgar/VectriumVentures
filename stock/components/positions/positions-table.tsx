'use client';

import { Position } from '@/lib/types/positions';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatCurrency } from '@/lib/utils/format';
import { Badge } from '@/components/ui/badge';

interface PositionsTableProps {
  positions: Position[];
}

export function PositionsTable({ positions }: PositionsTableProps) {
  return (
    <>
      {/* Mobile View */}
      <div className="space-y-4 md:hidden">
        {positions.map((position) => (
          <div
            key={position.id}
            className="p-4 rounded-lg bg-secondary/50 border border-white/10 space-y-3"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">ID</p>
                <p className="font-medium">{position.id}</p>
              </div>
              <Badge variant={position.type === 'BUY' ? 'default' : 'secondary'}>
                {position.type}
              </Badge>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Stock</p>
                <p className="font-medium">{position.stock}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Quantity</p>
                <p>{position.qty}</p>
              </div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Open Price</p>
                <p>₹{formatCurrency(position.openPrice)}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Close Price</p>
                <p>₹{formatCurrency(position.closePrice)}</p>
              </div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Date</p>
                <p>{new Date(position.date).toLocaleDateString()}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">P&L</p>
                <p className={`font-medium ${position.pnl >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                  ₹{formatCurrency(position.pnl)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block rounded-md border border-white/10">
        <Table>
          <TableHeader>
            <TableRow className="border-white/10">
              <TableHead>ID</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead className="text-right">Qty</TableHead>
              <TableHead className="text-right">Open Price</TableHead>
              <TableHead className="text-right">Close Price</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">P&L</TableHead>
              <TableHead className="text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {positions.map((position) => (
              <TableRow key={position.id} className="border-white/10">
                <TableCell className="font-medium">{position.id}</TableCell>
                <TableCell>{position.stock}</TableCell>
                <TableCell className="text-right">{position.qty}</TableCell>
                <TableCell className="text-right">₹{formatCurrency(position.openPrice)}</TableCell>
                <TableCell className="text-right">₹{formatCurrency(position.closePrice)}</TableCell>
                <TableCell>
                  <Badge variant={position.type === 'BUY' ? 'default' : 'secondary'}>
                    {position.type}
                  </Badge>
                </TableCell>
                <TableCell className={`text-right font-medium ${position.pnl >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                  ₹{formatCurrency(position.pnl)}
                </TableCell>
                <TableCell className="text-right">{new Date(position.date).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}