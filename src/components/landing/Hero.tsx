import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Mail, Facebook, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg-waves.jpg";

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text, started]);

  return (
    <span>
      {displayedText}
      {displayedText.length < text.length && started && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col">
      {/* White Header */}
      <header className="bg-white py-6 px-8 md:px-16 flex justify-center shadow-lg shadow-black/10 relative z-10">
        <img 
          src={logo} 
          alt="Chenko Design Logo" 
          className="h-10 md:h-14"
        />
      </header>

      {/* Hero Content with geometric background */}
      <div 
        className="flex-1 relative flex flex-col items-center justify-center px-6 md:px-16 py-12 md:py-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Main content - centered */}
        <div className="text-center max-w-4xl mx-auto" dir="rtl">
          {/* Main Heading with subtitle */}
          <div className="inline-block">
          <h1 
              className="font-matritsa text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-8 animate-fade-up"
              style={{ textShadow: "2px 4px 8px rgba(0,0,0,0.15)" }}
            >
              חולמים על אתר שגורם ללקוחות להבין שהם במקום הנכון?
            </h1>
          </div>
          
          {/* Tagline with typing animation */}
          <p 
            className="text-lg md:text-xl lg:text-[1.7rem] mb-16 font-semibold"
            style={{ color: "hsl(220, 50%, 12%)" }}
          >
            <TypewriterText 
              text="בנייה ועיצוב אתרים נקיים, חכמים ומדויקים שמניעים את העסק שלך קדימה" 
              delay={800}
            />
          </p>
          
          {/* 3 Feature Bullets with separators */}
          <div 
            className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-20 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="text-white font-medium text-sm md:text-base cursor-pointer transition-transform duration-200 hover:-translate-y-1">עיצוב שמדבר אתכם</span>
            <div className="flex gap-1.5">
              <div className="w-[3px] h-6 bg-[hsl(220,50%,12%)] rounded-full" />
              <div className="w-[3px] h-6 bg-[hsl(220,50%,12%)] rounded-full" />
            </div>
            <span className="text-white font-medium text-sm md:text-base cursor-pointer transition-transform duration-200 hover:-translate-y-1">ליווי אישי אמיתי</span>
            <div className="hidden md:flex gap-1.5">
              <div className="w-[3px] h-6 bg-[hsl(220,50%,12%)] rounded-full" />
              <div className="w-[3px] h-6 bg-[hsl(220,50%,12%)] rounded-full" />
            </div>
            <div className="flex md:hidden items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-[3px] h-6 bg-[hsl(220,50%,12%)] rounded-full" />
                <div className="w-[3px] h-6 bg-[hsl(220,50%,12%)] rounded-full" />
              </div>
              <span className="text-white font-medium text-sm cursor-pointer transition-transform duration-200 hover:-translate-y-1">תהליך ברור ונעים</span>
              <div className="flex gap-1.5">
                <div className="w-[3px] h-6 bg-[hsl(220,50%,12%)] rounded-full" />
                <div className="w-[3px] h-6 bg-[hsl(220,50%,12%)] rounded-full" />
              </div>
            </div>
            <span className="hidden md:inline text-white font-medium md:text-base cursor-pointer transition-transform duration-200 hover:-translate-y-1">תהליך ברור ונעים</span>
          </div>
          
          {/* CTA Buttons */}
          <div 
            className="flex flex-wrap justify-center gap-5 mb-10 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full py-3 w-[160px] bg-white border-none text-primary shadow-md transition-all duration-200 hover:bg-white/90 hover:text-primary hover:scale-105 hover:shadow-lg"
            >
              צור קשר
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full py-3 w-[160px] border-white text-white hover:bg-white/20"
              asChild
            >
              <a href="#portfolio">
                צפיה בעבודות
              </a>
            </Button>
          </div>
          
          {/* Social Icons */}
          <div 
            className="flex justify-center items-center gap-6 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a href="#" className="text-foreground hover:text-foreground/70 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-foreground hover:text-foreground/70 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-foreground hover:text-foreground/70 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://wa.me/972528934634" className="text-foreground hover:text-foreground/70 transition-colors">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href="mailto:chen.shraga@gmail.com" className="text-foreground hover:text-foreground/70 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
