export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <div className="h-12 w-12 text-primary mx-auto">⚠️</div>
          <h1 className="text-4xl font-bold">Page Not Found</h1>
          <p className="text-muted-foreground">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
        </div>
        
        <a href="/dashboard" className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
          <span className="h-4 w-4">🏠</span>
          Back to Dashboard
        </a>
      </div>
    </div>
  );
}