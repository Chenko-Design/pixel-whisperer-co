import { Globe, Rocket, Layout, RefreshCw } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "עיצוב ובניית אתרי תדמית",
    description: "אתרים רספונסיביים, נקיים, מותאמים אישית ומבוססי UX.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Rocket,
    title: "דפי נחיתה ממוקדי המרה",
    description: "מתאימים למכירה, לקמפיינים, להשקות ולנוכחות דיגיטלית ראשונית.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Layout,
    title: "UX/UI לאפליקציות ומערכות Web",
    description: "ממשקים שעוזרים לאנשים להבין ולבצע משימות בקלות.",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    icon: RefreshCw,
    title: "שדרוג אתרים קיימים",
    description: "הפיכת אתר מיושן למודרני, נוח, מרשים ונעים לעין.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

const Services = () => {
  return (
    <section className="section-padding" dir="rtl">
      <div className="container-tight">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">שירותים</span>
          </h2>
        </div>

        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group flex items-start gap-5 p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-transparent hover:border-border/50 hover:bg-card/60 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${service.bg} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1 flex items-center gap-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
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