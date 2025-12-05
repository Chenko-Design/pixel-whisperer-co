import { Globe, Rocket, Layout, RefreshCw } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "עיצוב ובניית אתרי תדמית",
    description: "אתרים רספונסיביים, נקיים, מותאמים אישית ומבוססי UX.",
  },
  {
    icon: Rocket,
    title: "דפי נחיתה ממוקדי המרה",
    description: "מתאימים למכירה, לקמפיינים, להשקות ולנוכחות דיגיטלית ראשונית.",
  },
  {
    icon: Layout,
    title: "UX/UI לאפליקציות ומערכות Web",
    description: "ממשקים שעוזרים לאנשים להבין ולבצע משימות בקלות.",
  },
  {
    icon: RefreshCw,
    title: "שדרוג אתרים קיימים",
    description: "הפיכת אתר מיושן למודרני, נוח, מרשים ונעים לעין.",
  },
];

const Services = () => {
  return (
    <section className="section-padding" dir="rtl">
      <div className="container-tight">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-12">
          שירותים
        </h2>

        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group flex items-start gap-5 p-6 rounded-2xl border border-transparent hover:border-border hover:bg-card transition-all duration-300"
            >
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1 flex items-center gap-2">
                  <span className="text-primary/60">⭐</span>
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
