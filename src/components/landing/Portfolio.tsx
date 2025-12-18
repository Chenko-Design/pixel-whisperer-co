import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, ChevronRight, ChevronLeft } from "lucide-react";
import projectRidely from "@/assets/project-ridely.jpg";
import projectTopbred from "@/assets/project-topbred.jpg";
import projectWomen from "@/assets/project-women.jpg";
import projectCaptain from "@/assets/project-captain.jpg";
import projectFiresafety from "@/assets/project-firesafety.png";
import projectHamerhav from "@/assets/project-hamerhav.png";

const projects = [
  {
    title: "Captain Invest",
    category: "אתר תדמית",
    image: projectCaptain,
    video: "/videos/captain-invest.mp4",
    bgColor: "#F9F9FD",
    darkText: true,
  },
  {
    title: "Ridely App",
    category: "אפליקציה",
    image: projectRidely,
  },
  {
    title: "Firesafety Toolkit",
    category: "אתר תדמית",
    image: projectFiresafety,
    video: "/videos/firesafety.mp4",
    bgColor: "#ffffff",
  },
  {
    title: "TopBred Website",
    category: "אפליקציה + דף נחיתה",
    image: projectTopbred,
  },
  {
    title: "המרחב הפתוח",
    category: "אתר תדמית",
    image: projectHamerhav,
    video: "/videos/hamerhav-haptuach.mp4",
    bgColor: "#ffffff",
    darkText: true,
  },
  {
    title: "מפגשי העצמה נשית",
    category: "דף נחיתה",
    image: projectWomen,
  },
];

const AUTOPLAY_INTERVAL = 12000;

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section id="portfolio" className="section-padding bg-cream-dark/70" dir="rtl">
      <div className="container-tight">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wide mb-3">פורטפוליו</span>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold">
            עבודות נבחרות
          </h2>
        </div>

        {/* Carousel */}
        <div 
          className="flex flex-col gap-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main large image */}
          <div className="w-full max-w-4xl mx-auto relative">
            <div 
              className="group relative overflow-hidden rounded-3xl aspect-[16/10] cursor-pointer shadow-xl"
              style={{ backgroundColor: projects[activeIndex].bgColor || 'hsl(var(--secondary))' }}
            >
              {projects[activeIndex].video ? (
                <video
                  src={projects[activeIndex].video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                    projects[activeIndex].title === "Captain Invest"
                      ? "md:object-[-60px_center] object-center"
                      : projects[activeIndex].title === "Firesafety Toolkit" ||
                          projects[activeIndex].title === "המרחב הפתוח"
                        ? "md:object-center max-md:object-[center_85%]"
                        : ""
                  }`}
                />
              ) : (
                <img
                  src={projects[activeIndex].image}
                  alt={projects[activeIndex].title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                />
              )}
              
              {/* Icon */}
              <div className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <ExternalLink className={`w-5 h-5 ${projects[activeIndex].darkText ? "text-[#1a2a4a]" : "text-white"}`} />
              </div>
              
              {/* Content - hidden on mobile, shown on desktop */}
              <div className="hidden md:block absolute bottom-0 left-0 right-0 p-8">
                <span className={`text-sm font-medium ${
                  projects[activeIndex].darkText ? "text-[#1a2a4a]/70" : "text-white/70"
                }`}>
                  {projects[activeIndex].category}
                </span>
                <h3 className={`font-headline text-3xl lg:text-4xl font-bold ${
                  projects[activeIndex].darkText ? "text-[#1a2a4a]" : "text-white"
                }`}>
                  {projects[activeIndex].title}
                </h3>
              </div>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                <div 
                  className="h-full bg-[#D87341] transition-all"
                  style={{
                    animation: isPaused ? 'none' : `progress ${AUTOPLAY_INTERVAL}ms linear`,
                    width: isPaused ? '0%' : '100%'
                  }}
                />
              </div>
            </div>

            {/* Content - shown below image on mobile only */}
            <div className="md:hidden text-center mt-4">
              <span className="text-sm font-medium text-muted-foreground">
                {projects[activeIndex].category}
              </span>
              <h3 className="font-headline text-xl font-bold text-foreground">
                {projects[activeIndex].title}
              </h3>
            </div>

            {/* Navigation arrows - hidden on mobile */}
            <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-4 right-4 justify-between pointer-events-none">
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all pointer-events-auto hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all pointer-events-auto hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
            </div>
          </div>

          {/* Thumbnails - below main image */}
          <div className="flex justify-center gap-3">
            {projects.map((project, index) => (
              <button
                key={project.title}
                onClick={() => setActiveIndex(index)}
                className={`relative overflow-hidden rounded-xl w-20 h-14 md:w-24 md:h-16 transition-all duration-300 ${
                  index === activeIndex 
                    ? "ring-2 ring-[#D87341] shadow-lg scale-110" 
                    : "opacity-50 hover:opacity-100"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="group rounded-full py-3 px-8 bg-[#D87341] hover:bg-[#C4652F] text-white shadow-lg hover:shadow-xl" asChild>
            <a href="https://chenko-design.com/" target="_blank" rel="noopener noreferrer">
              לצפייה בכל העבודות
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </a>
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
