import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Mail, Facebook, MessageCircle, Sparkles, Handshake, Leaf } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg-geometric.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col">
      {/* White Header */}
      <header className="bg-white py-6 px-8 md:px-16 flex justify-center">
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
          {/* Main Heading */}
          <h1 className="font-headline font-black text-4xl md:text-5xl lg:text-7xl text-gray-900 leading-tight mb-4 animate-fade-up">
            אתר שמעביר את הערך שלך
          </h1>
          
          {/* Subtitle */}
          <h2 
            className="font-body text-xl md:text-2xl lg:text-3xl text-gray-900 mb-12 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            וגורם ללקוחות להבין שהם במקום הנכון
          </h2>
          
          {/* 3 Feature Icons */}
          <div 
            className="flex flex-wrap justify-center gap-8 md:gap-16 mb-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-2">
              <span className="text-gray-900 font-medium text-sm md:text-base">עיצוב שמדבר אתכם</span>
              <Sparkles className="h-6 w-6 text-gray-900" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-900 font-medium text-sm md:text-base">ליווי אישי אמיתי</span>
              <Handshake className="h-6 w-6 text-gray-900" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-900 font-medium text-sm md:text-base">תהליך ברור ונעים</span>
              <Leaf className="h-6 w-6 text-gray-900" />
            </div>
          </div>
          
          {/* Tagline */}
          <p 
            className="text-gray-900 text-base md:text-lg mb-10 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            בנייה ועיצוב אתרים נקיים, חכמים ומדויקים שמניעים את העסק שלך קדימה
          </p>
          
          {/* CTA Buttons */}
          <div 
            className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 bg-white/90 border-white text-primary hover:bg-white"
            >
              צור קשר
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 border-white/50 text-gray-900 hover:bg-white/20"
            >
              צפיה בעבודות
            </Button>
          </div>
          
          {/* Social Icons */}
          <div 
            className="flex justify-center items-center gap-6 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <a href="#" className="text-gray-900 hover:text-gray-700 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-700 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-700 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-700 transition-colors">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-700 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
