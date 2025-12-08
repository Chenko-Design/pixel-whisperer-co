import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Mail, Facebook, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg-geometric.png";
import iconSparkles from "@/assets/icon-sparkles.svg";
import iconHandshake from "@/assets/icon-handshake.svg";
import iconLeaf from "@/assets/icon-leaf.svg";
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col">
      {/* White Header */}
      <header className="bg-gradient-to-b from-white via-[#F4CBB5]/20 to-[#F4CBB5]/50 py-6 px-8 md:px-16 flex justify-center">
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
              className="font-horev text-6xl md:text-7xl lg:text-9xl text-gray-900 leading-tight mb-2 animate-fade-up"
              style={{ textShadow: "2px 4px 8px rgba(0,0,0,0.15)" }}
            >
              אתר שמעביר את הערך שלך
            </h1>
            
            <h2 
              className="font-body text-xl md:text-2xl lg:text-3xl text-[#F4CBB5] mb-16 w-full overflow-hidden whitespace-nowrap animate-typing tracking-wide font-semibold"
              style={{ textAlign: "justify", textAlignLast: "justify", wordSpacing: "-0.2em" }}
            >
              וגורם ללקוחות להבין שהם במקום הנכון
            </h2>
          </div>
          
          {/* 3 Feature Icons */}
          <div 
            className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-3 group cursor-pointer">
              <img src={iconSparkles} alt="" className="h-10 w-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <span className="text-gray-900 font-medium text-sm md:text-base">עיצוב שמדבר אתכם</span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <img src={iconHandshake} alt="" className="h-10 w-10 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
              <span className="text-gray-900 font-medium text-sm md:text-base">ליווי אישי אמיתי</span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <img src={iconLeaf} alt="" className="h-10 w-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <span className="text-gray-900 font-medium text-sm md:text-base">תהליך ברור ונעים</span>
            </div>
          </div>
          
          {/* Tagline */}
          <p 
            className="text-gray-900 text-base md:text-lg mb-14 animate-fade-up font-semibold"
            style={{ animationDelay: "0.3s" }}
          >
            בנייה ועיצוב אתרים נקיים, חכמים ומדויקים שמניעים את העסק שלך קדימה
          </p>
          
          {/* CTA Buttons */}
          <div 
            className="flex flex-wrap justify-center gap-5 mb-16 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full py-3 w-[160px] bg-[#F4CBB5] border-[#F4CBB5] text-primary hover:bg-[#F4CBB5]/80"
            >
              צור קשר
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full py-3 w-[160px] border-[#F4CBB5] text-[#F4CBB5] hover:bg-[#F4CBB5]/20"
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
