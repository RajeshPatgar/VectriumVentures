import LoginForm from '@/components/auth/login-form';
import { Logo } from '@/components/ui/logo';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-900/20 via-background to-blue-900/20">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black/50" />
      
      <div className="relative space-y-8 text-center">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 blur-xl opacity-20" />
          <Logo className="relative h-12 w-auto" />
        </div>
        
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg blur opacity-20" />
          <LoginForm />
        </div>
      </div>
    </main>
  );
}