import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      dir="rtl"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      
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

        {/* Main Heading */}
        <h1 
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 animate-fade-up text-balance"
          style={{ animationDelay: "0.2s" }}
        >
          עיצוב ובניית אתרים שמעבירים את המסר שלך
          <br className="hidden md:block" />
          <span className="text-charcoal-light"> בצורה מדויקת, נקייה ואינטואיטיבית</span>
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
          <Button variant="hero" size="xl" className="group">
            דברו איתי
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          </Button>
          <Button variant="hero-outline" size="xl" className="group">
            <Eye className="h-5 w-5" />
            צפו בעבודות
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-charcoal/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-charcoal/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
