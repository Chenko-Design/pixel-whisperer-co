import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      dir="rtl"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Content */}
      <div className="container-tight relative z-10 text-center py-20">
        {/* Logo */}
        <div className="mb-12 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <img 
            src={logo} 
            alt="Chenko Design Logo" 
            className="h-16 md:h-20 mx-auto"
          />
        </div>

        {/* Badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">עיצוב שמייצר תוצאות</span>
        </div>

        {/* Main Heading */}
        <h1 
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up text-balance"
          style={{ animationDelay: "0.2s" }}
        >
          עיצוב ובניית אתרים
          <br />
          <span className="gradient-text">שמעבירים את המסר שלך</span>
        </h1>

        {/* Subheading */}
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up leading-relaxed"
          style={{ animationDelay: "0.3s" }}
        >
          מאתרים תדמיתיים ועד דפי נחיתה — אני בונה חוויות דיגיטליות שמתאימות בדיוק לעסק שלך ומייצרות אמון והמרה.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Button variant="gradient" size="xl" className="group glow">
            דברו איתי
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          </Button>
          <Button variant="glass" size="xl" className="group">
            <Eye className="h-5 w-5" />
            צפו בעבודות
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;