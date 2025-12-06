import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Header */}
      <header className="relative z-20 flex items-center justify-between py-6 px-8 md:px-16">
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Chenko Design Logo" 
            className="h-10 md:h-12"
          />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-foreground hover:text-accent transition-colors font-medium border-b-2 border-foreground pb-1">Home</a>
          <a href="#portfolio" className="text-foreground/70 hover:text-foreground transition-colors">Portfolio</a>
          <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">About</a>
          <a href="#process" className="text-foreground/70 hover:text-foreground transition-colors">Process</a>
        </nav>
        <div className="w-24" /> {/* Spacer for balance */}
      </header>

      {/* Hero Content */}
      <div className="flex-1 relative flex items-center">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/30 to-background/60" />
        
        {/* Content Grid */}
        <div className="relative z-10 w-full px-8 md:px-16" dir="rtl">
          <div className="flex justify-start">
            {/* Text content - aligned right (start in RTL) */}
            <div className="text-right">
              <h1 className="font-headline font-black text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-4 animate-fade-up">
                אתר שמעביר את הערך שלכם
              </h1>
              <h2 
                className="font-headline font-bold text-2xl md:text-3xl lg:text-4xl text-foreground/80 mb-12 animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                וגורם ללקוחות להבין שהם במקום הנכון
              </h2>
            </div>
          </div>
          
          {/* Bottom section */}
          <div 
            className="absolute bottom-20 left-8 md:left-16 max-w-md animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-foreground/80 text-lg mb-6">
              Crafting seamless experiences every step of the way.
            </p>
            <div className="flex items-center gap-6">
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 border-foreground/30 hover:bg-foreground hover:text-background"
              >
                See More
              </Button>
              <div className="flex items-center gap-4">
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;