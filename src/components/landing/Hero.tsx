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
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
      
      {/* Decorative floating shapes */}
      <div className="absolute top-32 right-[15%] w-72 h-72 bg-accent/25 decorative-blob animate-morph animate-float blur-2xl" />
      <div className="absolute bottom-32 left-[10%] w-56 h-56 bg-rose-400/20 decorative-blob animate-morph animate-float-reverse blur-2xl" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-[60%] w-40 h-40 bg-amber-400/15 decorative-blob animate-morph blur-xl" style={{ animationDelay: "4s" }} />
      
      {/* Content */}
      <div className="container-tight relative z-10 text-center py-20">
        {/* Logo */}
        <div className="mb-10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <img 
            src={logo} 
            alt="Chenko Design Logo" 
            className="h-14 md:h-18 mx-auto"
          />
        </div>

        {/* Main Heading */}
        <h1 
          className="font-headline text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          עיצוב ובניית אתרים
          <br />
          <span className="text-accent">שמעבירים את המסר שלך</span>
        </h1>

        {/* Subheading */}
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up leading-relaxed"
          style={{ animationDelay: "0.3s" }}
        >
          מאתרים תדמיתיים ועד דפי נחיתה — אני בונה חוויות דיגיטליות שמתאימות בדיוק לעסק שלך ומייצרות אמון והמרה.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Button variant="gradient" size="xl" className="group glow-lg">
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
        <div className="w-7 h-11 border-2 border-accent/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2.5 bg-accent/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;