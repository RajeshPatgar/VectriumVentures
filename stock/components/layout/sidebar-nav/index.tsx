'use client';

import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  TrendingUp,
  History,
  User,
  LineChart,
  BookOpen,
  Settings,
  Plus,
  MinusCircle,
} from 'lucide-react';
import { NavItem } from './nav-item';
import { ScrollArea } from '@/components/ui/scroll-area';

const mainNav = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard
  },
  {
    title: 'Market',
    href: '/dashboard/market',
    icon: LineChart
  },
  {
    title: 'Net Positions',
    href: '/dashboard/positions',
    icon: TrendingUp
  },
  {
    title: 'Deposit',
    href: '/dashboard/deposit',
    icon: Plus
  },
  {
    title: 'Withdraw',
    href: '/dashboard/withdraw',
    icon: MinusCircle
  },
];

const accountItems = [
  { title: 'Profile', href: '/dashboard/profile', icon: User },
  { title: 'History', href: '/dashboard/history', icon: History },
  { title: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <ScrollArea className="h-full px-2">
      <div className="space-y-4 py-2">
        <div className="px-3 pb-2">
          <h2 className="mb-2 px-2 text-lg font-semibold">Trading</h2>
          <div className="space-y-1">
            {mainNav.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                icon={item.icon}
                title={item.title}
                isActive={pathname === item.href}
              />
            ))}
          </div>
        </div>

        <div className="px-3 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold">Account</h2>
          <div className="space-y-1">
            {accountItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                icon={item.icon}
                title={item.title}
                isActive={pathname === item.href}
              />
            ))}
          </div>
        </div>

        <div className="px-3 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold">Resources</h2>
          <NavItem
            href="/dashboard/learn"
            icon={BookOpen}
            title="Learning Center"
            isActive={pathname === '/dashboard/learn'}
          />
        </div>
      </div>
    </ScrollArea>
  );
}