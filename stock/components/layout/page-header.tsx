'use client';

import { Logo } from '@/components/ui/logo';
import { UserNav } from '@/components/layout/user-nav';
import { MobileNav } from '@/components/layout/mobile-nav';

export function PageHeader() {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10">
      <div className="bg-gradient-to-r from-violet-600/10 via-indigo-600/10 to-purple-600/10 backdrop-blur-xl">
        <div className="flex h-16 items-center px-4 md:px-8 max-w-7xl mx-auto">
          <MobileNav />
          <div className="flex items-center gap-4 flex-1">
            <Logo />
            <div className="ml-auto">
              <UserNav user={user} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}