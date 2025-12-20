import { useState, useEffect, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight, ChevronLeft, Maximize2, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
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
    mobileVideo: "/videos/firesafety-mobile.mp4",
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
    mobileVideo: "/videos/hamerhav-haptuach-mobile.mp4",
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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const isMobile = useIsMobile();

  const minSwipeDistance = 50;

  const getVideoSrc = (project: typeof projects[0]) => {
    if (isMobile && project.mobileVideo) {
      return project.mobileVideo;
    }
    return project.video;
  };

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      prevSlide(); // RTL: swipe left = previous
    } else if (isRightSwipe) {
      nextSlide(); // RTL: swipe right = next
    }
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
          <div 
            className="w-full max-w-4xl mx-auto relative"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="group relative overflow-hidden rounded-3xl aspect-[16/10] cursor-pointer shadow-xl"
              style={{ backgroundColor: projects[activeIndex].bgColor || 'hsl(var(--secondary))' }}
            >
              {projects[activeIndex].video ? (
                <video
                  src={getVideoSrc(projects[activeIndex])}
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
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                    projects[activeIndex].title === "מפגשי העצמה נשית"
                      ? "max-md:scale-110"
                      : ""
                  }`}
                />
              )}
              
              {/* Fullscreen button */}
              <button
                onClick={() => setIsFullscreen(true)}
                className="absolute top-4 left-4 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-all z-10 backdrop-blur-sm"
                aria-label="מסך מלא"
              >
                <Maximize2 className="w-5 h-5 text-white" />
              </button>
              
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
                onClick={prevSlide}
                className="w-12 h-12 bg-transparent hover:bg-white/20 rounded-full flex items-center justify-center transition-all pointer-events-auto hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-[#1a2a4a]" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-transparent hover:bg-white/20 rounded-full flex items-center justify-center transition-all pointer-events-auto hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-[#1a2a4a]" />
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

      {/* Fullscreen Dialog */}
      <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 border-none bg-black/95 flex items-center justify-center">
          <DialogClose className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all backdrop-blur-sm">
            <X className="w-6 h-6 text-white" />
          </DialogClose>
          
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {projects[activeIndex].video ? (
              <video
                src={getVideoSrc(projects[activeIndex])}
                autoPlay
                loop
                muted
                playsInline
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            ) : (
              <img
                src={projects[activeIndex].image}
                alt={projects[activeIndex].title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            )}
          </div>
          
          {/* Navigation in fullscreen */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all pointer-events-auto backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all pointer-events-auto backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          </div>
          
          {/* Title overlay */}
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <span className="text-sm font-medium text-white/70">
              {projects[activeIndex].category}
            </span>
            <h3 className="font-headline text-2xl md:text-3xl font-bold text-white">
              {projects[activeIndex].title}
            </h3>
          </div>
        </DialogContent>
      </Dialog>

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
