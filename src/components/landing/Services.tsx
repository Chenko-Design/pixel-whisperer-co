import { Globe, Rocket, Layout, RefreshCw } from "lucide-react";
import { useStaggerAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

const services = [
  {
    icon: Globe,
    title: "עיצוב ובניית אתרי תדמית",
    description: "אתרים רספונסיביים, נקיים, מותאמים אישית ומבוססי UX.",
    accent: "bg-[#D87341]",
  },
  {
    icon: Rocket,
    title: "דפי נחיתה ממוקדי המרה",
    description: "מתאימים למכירה, לקמפיינים, להשקות ולנוכחות דיגיטלית ראשונית.",
    accent: "bg-[#E8956A]",
  },
  {
    icon: Layout,
    title: "UX/UI לאפליקציות ומערכות Web",
    description: "ממשקים שעוזרים לאנשים להבין ולבצע משימות בקלות.",
    accent: "bg-[#C4A77D]",
  },
  {
    icon: RefreshCw,
    title: "שדרוג אתרים קיימים",
    description: "הפיכת אתר מיושן למודרני, נוח, מרשים ונעים לעין.",
    accent: "bg-[#8B6F4E]",
  },
];

const Services = () => {
  const { ref, isVisible, getItemDelay } = useStaggerAnimation(services.length);
  const parallaxSlow = useParallax(0.12);
  const parallaxFast = useParallax(-0.08);

  return (
    <section className="section-padding bg-cream-dark/70 relative overflow-hidden" dir="rtl">
      {/* Decorative blob with parallax - subtle like Value Proposition */}
      <div 
        className="absolute top-0 left-0 w-72 h-72 bg-[#D87341]/15 decorative-blob blur-3xl"
        style={parallaxSlow}
      />
      <div 
        className="absolute bottom-0 right-0 w-56 h-56 bg-[#F4CBB5]/20 blur-2xl"
        style={parallaxFast}
      />
      <div className="container-tight relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-accent font-semibold text-sm tracking-wide mb-3">מה אני מציעה</span>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold">
            שירותים
          </h2>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group flex items-center gap-4 md:gap-6 p-5 md:p-8 rounded-2xl bg-card border-r-4 border-r-[#D87341] border border-border/30 hover:shadow-lg transition-all duration-500 h-[120px] md:h-auto md:min-h-[100px] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              style={getItemDelay(index)}
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 ${service.accent} rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-headline text-base md:text-xl font-bold mb-0.5 text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground line-clamp-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;