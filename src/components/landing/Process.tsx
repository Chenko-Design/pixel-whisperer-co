const steps = [
  {
    number: "01",
    title: "שיחת היכרות",
    description: "להבין את הצרכים והמטרות",
  },
  {
    number: "02",
    title: "אפיון UX",
    description: "תכנון מבנה העמודים",
  },
  {
    number: "03",
    title: "עיצוב UI",
    description: "שפה ויזואלית נקייה",
  },
  {
    number: "04",
    title: "פיתוח ובנייה",
    description: "הפיכת העיצוב לקוד",
  },
  {
    number: "05",
    title: "בדיקות",
    description: "התאמה מלאה למובייל",
  },
  {
    number: "06",
    title: "השקה וליווי",
    description: "תמיכה אחרי העלייה",
  },
];

const Process = () => {
  return (
    <section className="section-padding relative overflow-hidden" dir="rtl">
      {/* Background decoration */}
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#F4CBB5]/20 decorative-blob blur-3xl animate-morph" />
      
      <div className="container-tight relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wide mb-3">תהליך העבודה</span>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            איך זה עובד?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            תהליך עבודה ברור ושקוף מתחילה ועד סוף
          </p>
        </div>

        {/* Timeline - Desktop/Tablet */}
        <div className="hidden md:block relative">
          {/* Wavy SVG Line */}
          <svg 
            className="absolute top-1/2 right-0 w-full h-24 -translate-y-1/2 z-0" 
            viewBox="0 0 1200 100" 
            preserveAspectRatio="none"
            fill="none"
          >
            <path 
              d="M0,50 Q100,20 200,50 T400,50 T600,50 T800,50 T1000,50 T1200,50" 
              stroke="url(#gradient)" 
              strokeWidth="3" 
              strokeLinecap="round"
              fill="none"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D87341" />
                <stop offset="100%" stopColor="#F4CBB5" />
              </linearGradient>
            </defs>
          </svg>

          {/* Steps */}
          <div className="relative z-10 flex justify-between items-center">
            {steps.map((step, index) => {
              const isTop = index % 2 === 0;
              
              return (
                <div 
                  key={step.number} 
                  className="flex flex-col items-center group"
                  style={{ width: `${100 / steps.length}%` }}
                >
                  {/* Content above or below */}
                  <div className={`flex flex-col items-center ${isTop ? 'order-1' : 'order-3'}`}>
                    <div className={`text-center ${isTop ? 'mb-4' : 'mt-4'}`}>
                      <span className="font-display text-2xl font-bold text-accent/60 group-hover:text-accent transition-colors">
                        {step.number}
                      </span>
                      <h3 className="font-headline text-base font-bold mt-1">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Arrow connector */}
                  <div className={`order-2 flex flex-col items-center ${isTop ? 'flex-col' : 'flex-col-reverse'}`}>
                    {/* Vertical line */}
                    <div className={`w-0.5 bg-gradient-to-b from-[#D87341] to-[#F4CBB5] ${isTop ? 'h-8' : 'h-8'}`} />
                    
                    {/* Circle point */}
                    <div className="w-5 h-5 rounded-full bg-[#D87341] border-4 border-background shadow-lg group-hover:scale-125 transition-transform" />
                    
                    {/* Vertical line */}
                    <div className={`w-0.5 bg-gradient-to-b from-[#F4CBB5] to-[#D87341] ${isTop ? 'h-8' : 'h-8'}`} />
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className={`${isTop ? 'order-3 h-24' : 'order-1 h-24'}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline - Mobile (vertical) */}
        <div className="md:hidden relative">
          {/* Vertical line */}
          <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D87341] to-[#F4CBB5]" />
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex items-start gap-6 pr-12">
                {/* Circle point */}
                <div className="absolute right-4 w-5 h-5 rounded-full bg-[#D87341] border-4 border-background shadow-lg" />
                
                {/* Content */}
                <div className="bg-card p-6 rounded-2xl border border-border/50 flex-1 hover-lift">
                  <span className="font-display text-2xl font-bold text-accent/40">
                    {step.number}
                  </span>
                  <h3 className="font-headline text-lg font-bold mt-1">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
