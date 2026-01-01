import { useState } from "react";
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

  const getVideoSrc = (project: Project) => {
    return project.video ? getPublicAssetPath(project.video) : undefined;
  };

  return (
    <section id="portfolio" className="section-padding bg-cream-dark/70" dir="rtl">
      <div className="container-tight">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wide mb-3">פורטפוליו</span>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold">
            עבודות נבחרות
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
                project.isLongScreen 
                  ? "aspect-[3/4]" 
                  : "aspect-[4/3]"
              }`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image/Video Container */}
              <div className="absolute inset-0 bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                    project.isLongScreen 
                      ? "object-cover object-top" 
                      : "object-cover"
                  }`}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Zoom Icon */}
              <div className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <ZoomIn className="w-5 h-5 text-white" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-sm font-medium text-white/80 mb-1 block">
                  {project.category}
                </span>
                <h3 className="font-headline text-xl font-bold text-white">
                  {project.title}
                </h3>
              </div>

              {/* Always visible label on mobile */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-xs font-medium text-white/80 block">
                  {project.category}
                </span>
                <h3 className="font-headline text-lg font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
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
              <div className="w-full h-full overflow-auto flex justify-center">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-auto max-w-full h-auto object-contain"
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
