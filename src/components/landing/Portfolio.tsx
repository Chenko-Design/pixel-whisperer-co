import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X, ZoomIn } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import projectRidely from "@/assets/project-ridely.jpg";
import projectTopbred from "@/assets/project-topbred.jpg";
import projectCaptain from "@/assets/project-captain.jpg";
import projectTerra from "@/assets/project-terra.jpg";
import projectMetaknenet from "@/assets/project-metaknenet.jpg";
import projectPhotography from "@/assets/project-photography.jpg";

// Get correct base path for public assets (videos, fonts, etc.)
const getPublicAssetPath = (path: string) => {
  const isUnderLanding = window.location.pathname === "/landing" || window.location.pathname.startsWith("/landing/");
  return isUnderLanding ? `/landing${path}` : path;
};

interface Project {
  title: string;
  category: string;
  image: string;
  video?: string;
  isLongScreen?: boolean;
}

const projects: Project[] = [
  {
    title: "Captain Invest",
    category: "אתר תדמית",
    image: projectCaptain,
    video: "/videos/captain-invest.mp4",
  },
  {
    title: "Ridely App",
    category: "אפליקציה",
    image: projectRidely,
  },
  {
    title: "TopBred Website",
    category: "אפליקציה + דף נחיתה",
    image: projectTopbred,
  },
  {
    title: "Terra",
    category: "אתר תדמית",
    image: projectTerra,
    isLongScreen: true,
  },
  {
    title: "מתכננת",
    category: "אתר תדמית",
    image: projectMetaknenet,
    isLongScreen: true,
  },
  {
    title: "Photography",
    category: "אתר תדמית",
    image: projectPhotography,
    isLongScreen: true,
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const getVideoSrc = (project: Project) => {
    return project.video ? getPublicAssetPath(project.video) : undefined;
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="section-padding bg-cream-dark/70" dir="rtl">
      <div className="container-tight">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wide mb-3">פורטפוליו</span>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold">
            עבודות נבחרות
          </h2>
        </div>

        {/* Regular Projects */}
        <div className="flex flex-col gap-12 md:gap-16">
          {projects.filter(p => !p.isLongScreen).map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`group relative transition-all duration-700 ${
                visibleItems.has(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Card */}
              <div 
                className="relative overflow-hidden rounded-3xl shadow-xl cursor-pointer transition-all duration-500 hover:shadow-2xl"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Container */}
                <div className="relative w-full overflow-hidden bg-secondary aspect-[16/9]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="md:translate-y-4 md:group-hover:translate-y-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block px-3 py-1 bg-[#D87341]/90 text-white text-sm font-medium rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="font-headline text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Long Screen Projects - All 3 side by side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
          {projects.filter(p => p.isLongScreen).map((project) => (
            <div
              key={project.title}
              className="group cursor-pointer transition-all duration-500 hover:scale-[1.01]"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-[3px] transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="mt-3 text-center">
                <span className="text-sm font-medium text-muted-foreground">
                  {project.category}
                </span>
                <h3 className="font-headline text-lg md:text-xl font-bold text-foreground">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="group rounded-full py-3 px-8 bg-[#D87341] hover:bg-[#C4652F] text-white shadow-lg hover:shadow-xl" asChild>
            <a href="https://chenko-design.com/" target="_blank" rel="noopener noreferrer">
              לצפייה בכל העבודות
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </a>
          </Button>
        </div>
      </div>

      {/* Fullscreen Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 border-none bg-black/95 flex items-center justify-center overflow-hidden">
          <DialogClose className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all backdrop-blur-sm">
            <X className="w-6 h-6 text-white" />
          </DialogClose>
          
          <div className="relative w-full h-full flex items-center justify-center p-4 overflow-auto">
            {selectedProject?.video ? (
              <video
                src={getVideoSrc(selectedProject)}
                autoPlay
                loop
                muted
                playsInline
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            ) : selectedProject?.isLongScreen ? (
              <div className="w-full h-full overflow-auto flex justify-center py-8">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-auto max-w-[90%] h-auto"
                />
              </div>
            ) : (
              <img
                src={selectedProject?.image}
                alt={selectedProject?.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            )}
          </div>
          
          {/* Title overlay */}
          <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
            <span className="text-sm font-medium text-white/70">
              {selectedProject?.category}
            </span>
            <h3 className="font-headline text-2xl md:text-3xl font-bold text-white">
              {selectedProject?.title}
            </h3>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
