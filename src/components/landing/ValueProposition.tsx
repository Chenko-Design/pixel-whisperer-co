import { LucideIcon } from "lucide-react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useState, useRef, useEffect } from "react";
import targetAnimation from "@/assets/target-animation.json";
import laptopAnimation from "@/assets/laptop-animation.json";
import digitalArtAnimation from "@/assets/digital-art-animation.json";
import careerAnimation from "@/assets/career-animation.json";
import { useIsMobile } from "@/hooks/use-mobile";
import { useStaggerAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

const iconColor = "from-[#D87341] to-[#E8956A]";

interface ValueItem {
  icon?: LucideIcon;
  lottie?: object;
  title: string;
  description: string;
}

const values: ValueItem[] = [
  {
    lottie: targetAnimation,
    title: "חוויית משתמש אינטואיטיבית",
    description: "אני בונה אתרים שכיף לגלול בהם, קלים להתמצאות, זורמים וגורמים ללקוחות להשאר, להתעניין ולפעול."
  },
  {
    lottie: digitalArtAnimation,
    title: "עיצוב נקי ומדויק",
    description: "ויזואליות מודרנית שמעלה את תחושת האמון במותג שלך, מחזקת נוכחות מקצועית ומשדרת בהירות והקפדה על פרטים."
  },
  {
    lottie: laptopAnimation,
    title: "רקע טכנולוגי ומוצרי",
    description: "כמהנדסת תעשייה וניהול עם שנים של ניסיון בהייטק אני משלבת חשיבה אנליטית עם עין עיצובית כדי לייצר פתרונות שעובדים מצוין וגם נראים מעולה."
  },
  {
    lottie: careerAnimation,
    title: "תהליך עבודה פשוט ונעים",
    description: "אני מובילה את התהליך בצורה מסודרת עם שלבי עבודה ברורים, שקיפות מלאה ובלי הפתעות כדי שתרגישו בטוחים ורגועים מהרגע הראשון ועד העלייה לאוויר."
  }
];

// Separate component to handle Lottie ref properly
const LottieIcon = ({
  animationData,
  isHovered,
  isMobile
}: {
  animationData: object;
  isHovered: boolean;
  isMobile: boolean;
}) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  
  useEffect(() => {
    if (!lottieRef.current) return;
    if (isMobile) {
      lottieRef.current.play();
    } else if (isHovered) {
      lottieRef.current.play();
    } else {
      lottieRef.current.stop();
    }
  }, [isHovered, isMobile]);
  
  return (
    <div className="w-14 h-14 mb-5 mx-auto">
      <Lottie lottieRef={lottieRef} animationData={animationData} loop={true} autoplay={isMobile} className="w-full h-full" />
    </div>
  );
};

const ValueProposition = () => {
  const isMobile = useIsMobile();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref, isVisible, getItemDelay } = useStaggerAnimation(values.length);
  const parallaxSlow = useParallax(0.15);
  const parallaxFast = useParallax(-0.1);

  return (
    <section className="section-padding relative overflow-hidden" dir="rtl">
      {/* Background decoration with parallax */}
      <div 
        className="absolute top-20 left-10 w-64 h-64 bg-[#F4CBB5]/30 decorative-blob blur-3xl animate-morph"
        style={parallaxSlow}
      />
      <div 
        className="absolute bottom-40 right-20 w-48 h-48 bg-[#D87341]/15 rounded-full blur-2xl"
        style={parallaxFast}
      />
      
      <div className="container-tight relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-accent font-semibold text-sm tracking-wide mb-3">למה לבחור בי</span>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            למה דווקא אני?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">הגישה שלי משלבת בין עיצוב מדוייק לבין חשיבה מעשית שמייצרת תוצאות</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title} 
              className={`group bg-card p-8 rounded-3xl border border-border/50 hover-lift relative overflow-hidden transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
              style={getItemDelay(index)}
              onMouseEnter={() => setHoveredIndex(index)} 
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hover gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${iconColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {value.lottie ? (
                <LottieIcon animationData={value.lottie} isHovered={hoveredIndex === index} isMobile={isMobile} />
              ) : value.icon ? (
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${iconColor} flex items-center justify-center mb-5 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
              ) : null}
              
              <h3 className="font-headline text-xl font-bold mb-3 relative z-10 text-center text-foreground">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed relative z-10 text-center">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;