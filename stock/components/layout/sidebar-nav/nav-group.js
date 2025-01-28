'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, LucideIcon } from 'lucide-react';
import { useState } from 'react';
import { NavItem } from './nav-item';

interface NavGroupProps {
  icon: LucideIcon;
  title: string;
  items: {
    title: string;
    href: string;
    icon: LucideIcon;
  }[];
  currentPath: string;
}

export function NavGroup({ icon: Icon, title, items, currentPath }: NavGroupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = items.some(item => item.href === currentPath);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start gap-2 mb-1 hover:bg-secondary/20",
            isActive && "text-primary"
          )}
        >
          <Icon className={cn("h-4 w-4", isActive && "text-primary")} />
          <span className="font-medium">{title}</span>
          <ChevronDown className={cn(
            "h-4 w-4 ml-auto transition-transform",
            isOpen && "rotate-180"
          )} />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-4 space-y-1">
        {items.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            icon={item.icon}
            title={item.title}
            isActive={currentPath === item.href}
          />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}