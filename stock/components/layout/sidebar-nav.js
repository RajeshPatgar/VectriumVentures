'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Wallet,
  TrendingUp,
  User,
  History,
  ChevronDown,
  Plus,
  MinusCircle
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from 'react';

const mainNav = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard
  },
  {
    title: 'Net Positions',
    href: '/dashboard/positions',
    icon: TrendingUp
  },
  {
    title: 'Profile',
    href: '/dashboard/profile',
    icon: User
  },
  {
    title: 'History',
    href: '/dashboard/history',
    icon: History
  }
];

const fundOptions = [
  { title: 'Add Funds', href: '/dashboard/funds/add', icon: Plus },
  { title: 'Withdraw', href: '/dashboard/funds/withdraw', icon: MinusCircle },
];

export function SidebarNav() {
  const pathname = usePathname();
  const [isFundsOpen, setIsFundsOpen] = useState(false);

  return (
    <nav className="space-y-2">
      {mainNav.map((item) => (
        <Link key={item.href} href={item.href}>
          <Button
            variant={pathname === item.href ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start gap-2",
              pathname === item.href && "bg-muted"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.title}
          </Button>
        </Link>
      ))}
      
      <Collapsible open={isFundsOpen} onOpenChange={setIsFundsOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Wallet className="h-4 w-4" />
            Funds
            <ChevronDown className={cn(
              "h-4 w-4 ml-auto transition-transform",
              isFundsOpen && "transform rotate-180"
            )} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-4 space-y-2 " style={{marginTop:"0 !important"}}>
          {fundOptions.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={pathname === item.href ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-2",
                  pathname === item.href && "bg-muted"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Button>
            </Link>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </nav>
  );
}