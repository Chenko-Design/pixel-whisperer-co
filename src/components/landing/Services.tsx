import { Globe, Rocket, Layout, RefreshCw, ArrowLeft } from "lucide-react";

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
  return (
    <section className="section-padding bg-cream-dark/70" dir="rtl">
      <div className="container-tight">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wide mb-3">מה אני מציעה</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            שירותים
          </h2>
        </div>

        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group flex items-center gap-6 p-6 md:p-8 rounded-2xl bg-card border border-border/30 hover:border-accent/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className={`w-16 h-16 ${service.accent} rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold mb-1">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
              <ArrowLeft className="w-6 h-6 text-muted-foreground/40 group-hover:text-accent group-hover:-translate-x-2 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;