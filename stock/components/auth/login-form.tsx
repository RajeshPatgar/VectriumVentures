'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Lock, User } from 'lucide-react';
import { authenticate } from '@/lib/auth';
import { useToast } from '@/hooks/use-toast';
import { ROUTES } from '@/lib/constants';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const user = authenticate(username, password);

    if (user) {
      toast({
        title: 'Welcome back!',
        description: 'Login successful. Redirecting to dashboard...',
        duration: 3000,
      });
      setTimeout(() => {
        router.push(ROUTES.DASHBOARD);
      }, 1000);
    } else {
      toast({
        title: 'Access Denied',
        description: 'Invalid username or password. Please try again.',
        variant: 'destructive',
        duration: 3000,
      });
    }

    setIsLoading(false);
  };

  return (
    <Card className="w-full max-w-md bg-black/40 backdrop-blur-xl border-white/10">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
          Welcome back
        </CardTitle>
        <CardDescription className="text-center text-gray-300">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <div className="text-left">
              <Label htmlFor="username" className="text-gray-200">Username</Label>
            </div>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-left">
              <Label htmlFor="password" className="text-gray-200">Password</Label>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                required
              />
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}