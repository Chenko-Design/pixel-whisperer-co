import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding" dir="rtl">
      <div className="container-tight" ref={ref}>
        <div className={`bg-gradient-to-br from-[hsl(220,50%,12%)] to-[hsl(220,50%,18%)] text-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
          {/* Decorative elements with blur */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/25 blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/20 blur-2xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <h2 className={`font-headline text-2xl md:text-3xl lg:text-4xl font-bold mb-4 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              רוצה אתר או דף נחיתה שמרגיש נכון לעסק שלך?
            </h2>
            <p className={`text-white/85 text-lg mb-8 max-w-xl mx-auto transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              אני כאן כדי לבנות לך חוויה מקצועית, נקייה ומדויקת באווירה רגועה ונעימה.
            </p>
            <Button 
              variant="secondary" 
              size="xl" 
              className={`group rounded-full py-3 px-8 bg-white text-foreground hover:bg-white/90 transition-all duration-500 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} 
              asChild
            >
              <a href="https://wa.me/972528934634">
                <MessageCircle className="w-5 h-5" />
                דברו איתי בוואטסאפ
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;