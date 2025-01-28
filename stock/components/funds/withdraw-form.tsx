'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Wallet, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function WithdrawForm() {
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleWithdraw = () => {
    setIsLoading(true);
    setTimeout(() => {
      toast({
        title: 'Withdrawal Initiated',
        description: 'Your funds will be transferred to your account within 24 hours.',
      });
      setAmount('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card className="glass-card max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wallet className="h-5 w-5" /> Withdraw Amount
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="amount" className="text-sm text-muted-foreground">
            Enter Amount (₹)
          </label>
          <Input
            id="amount"
            type="number"
            placeholder="Enter amount to withdraw"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="text-lg"
          />
        </div>
        <Button
          onClick={handleWithdraw}
          disabled={!amount || isLoading}
          className="w-full gap-2"
        >
          {isLoading ? 'Processing...' : 'Withdraw Funds'}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}