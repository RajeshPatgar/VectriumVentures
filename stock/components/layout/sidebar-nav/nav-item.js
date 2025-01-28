'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function NavItem({ href, icon: Icon, title, isActive }) {
  return (
    <Link href={href}>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-2 mb-1 hover:bg-secondary/20",
          isActive && "bg-primary/10 text-primary hover:bg-primary/20"
        )}
      >
        <Icon className={cn("h-4 w-4", isActive && "text-primary")} />
        <span className="font-medium">{title}</span>
      </Button>
    </Link>
  );
}
