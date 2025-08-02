export function GeometricBackground() {
  return (
    <div className="geometric-bg fixed inset-0 -z-10">
      <div className="absolute inset-0 opacity-30">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl animate-float" 
             style={{ animationDelay: '0s' }} />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-xl animate-float" 
             style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-3/4 w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl animate-float" 
             style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/6 right-1/3 w-20 h-20 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-full blur-xl animate-float" 
             style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/6 w-28 h-28 bg-gradient-to-br from-secondary/15 to-accent/15 rounded-full blur-xl animate-float" 
             style={{ animationDelay: '3s' }} />
      </div>
    </div>
  );
}