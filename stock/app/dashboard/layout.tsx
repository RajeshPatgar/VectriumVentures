import { SidebarNav } from '@/components/layout/sidebar-nav';
import { PageHeader } from '@/components/layout/page-header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader />
      <div className="flex">
        <aside className="hidden md:block h-[calc(100vh-4rem)] w-72 sticky top-16 bg-gradient-to-b from-violet-600/10 via-indigo-600/10 to-purple-600/10 backdrop-blur-xl border-r border-white/10">
          <SidebarNav />
        </aside>
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}