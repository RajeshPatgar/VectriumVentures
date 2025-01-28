'use client';

import { useEffect, useState } from 'react';
import { PositionsTable } from '@/components/positions/positions-table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';
import { netPositions } from '@/public/data/net-positions';

export default function PositionsPage() {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPositions = () => {
      try {
        // Simulate loading data from `netPositions`.
        setPositions(netPositions.positions);
      } catch (error) {
        console.error('Error loading positions:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPositions();
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-8 w-48 bg-secondary/50 rounded" />
        <div className="h-64 bg-secondary/50 rounded-lg" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Net Positions</h1>
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" /> Current Positions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <PositionsTable positions={positions} />
        </CardContent>
      </Card>
    </div>
  );
}
