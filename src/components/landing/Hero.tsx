import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

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
        className="flex-1 relative flex flex-col items-center justify-start px-6 md:px-16 pt-12 md:pt-12 pb-6 md:pb-10"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Warm overlay for text readability */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, hsla(25, 45%, 35%, 0.45) 0%, hsla(25, 40%, 30%, 0.4) 40%, hsla(220, 50%, 12%, 0.5) 100%)'
          }}
        />
        {/* Main content - centered text, positioned slightly left */}
        <div className="text-center max-w-4xl w-full ml-auto mr-[10%] md:mr-[12%]" dir="rtl">
          {/* Main Heading with subtitle */}
          <div className="inline-block">
          <h1 
              className="font-matritsa text-[clamp(2.2rem,10vw,3rem)] md:text-6xl lg:text-7xl text-white mb-8 animate-fade-up"
              style={{ textShadow: "2px 4px 8px rgba(0,0,0,0.15)", lineHeight: "1.3" }}
            >
              <span className="md:hidden">חולמים על אתר<br />שגורם ללקוחות להבין<br />שהם במקום הנכון?</span>
              <span className="hidden md:inline">חולמים על אתר שגורם ללקוחות<br />להבין שהם במקום הנכון?</span>
            </h1>
          </div>
          
          {/* Tagline with typing animation */}
          <p 
            className="text-base md:text-lg lg:text-xl mt-2 md:mt-4 mb-6 md:mb-10 font-semibold md:text-right mx-auto md:ml-auto md:mr-0 md:max-w-[42ch]"
            style={{ color: "hsl(220, 50%, 12%)", letterSpacing: "-0.02em" }}
          >
            <TypewriterText 
              text="בנייה ועיצוב אתרים נקיים, חכמים ומדויקים שמניעים את העסק שלך קדימה" 
              delay={800}
            />
          </p>
          
          {/* 3 Feature Bullets with separators */}
          <div 
            className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 mb-14 md:mb-20 animate-fade-up md:pl-[15%]"
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
            className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-5 mb-10 animate-fade-up md:pl-[15%]"
            style={{ animationDelay: "0.4s" }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full py-3 w-[160px] bg-white border-none text-primary shadow-md transition-all duration-200 hover:bg-white/90 hover:text-primary hover:scale-105 hover:shadow-lg"
              asChild
            >
              <a href="https://wa.me/972528934634">
                צור קשר
              </a>
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
            className="flex justify-center md:justify-end items-center gap-6 animate-fade-up md:pl-[28%]"
            style={{ animationDelay: "0.6s" }}
          >
            <a href="tel:0528934634" className="text-foreground hover:text-foreground/70 transition-colors">
              <Phone className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a href="https://wa.me/972528934634" className="text-foreground hover:text-foreground/70 transition-colors">
              <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a href="mailto:chen.shraga@gmail.com" className="text-foreground hover:text-foreground/70 transition-colors">
              <Mail className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          </div>

          {/* Contact Info */}
          <div 
            className="flex justify-center md:justify-end items-center gap-4 mt-10 animate-fade-up text-foreground text-sm md:text-base md:pl-[15%]"
            style={{ animationDelay: "0.7s" }}
          >
            <a href="tel:0528934634" className="hover:text-foreground/70 transition-colors">
              052-8934634
            </a>
            <div className="flex gap-1.5">
              <div className="w-[2px] h-5 bg-foreground rounded-full" />
              <div className="w-[2px] h-5 bg-foreground rounded-full" />
            </div>
            <a href="mailto:chen.shraga@gmail.com" className="hover:text-foreground/70 transition-colors">
              chen.shraga@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
