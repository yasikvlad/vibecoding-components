"use client";
import DisplayCards from "@/components/ui/display-cards";
import { ShaderAnimation } from "@/components/ui/shader-lines";
import { Sparkles, Zap, Star } from "lucide-react";

const customCards = [
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "Featured",
    description: "Discover amazing content",
    date: "Just now",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Zap className="size-4 text-yellow-300" />,
    title: "Popular",
    description: "Trending this week",
    date: "2 days ago",
    iconClassName: "text-yellow-500",
    titleClassName: "text-yellow-500",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Star className="size-4 text-purple-300" />,
    title: "New",
    description: "Latest updates and features",
    date: "Today",
    iconClassName: "text-purple-500",
    titleClassName: "text-purple-500",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">
            Vibe Coding <span className="text-muted-foreground font-normal">Components</span>
          </h1>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Shader Lines Section */}
      <section className="relative">
        <div className="relative flex h-[650px] w-full flex-col items-center justify-center overflow-hidden">
          <ShaderAnimation />
          <div className="pointer-events-none z-10 text-center px-6">
            <span className="text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tighter text-white leading-none">
              Shader Lines
            </span>
            <p className="mt-4 text-lg text-white/60 max-w-md mx-auto">
              WebGL shader animation with Three.js — mesmerizing generative lines
            </p>
          </div>
        </div>
      </section>

      {/* Display Cards Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Component
            </span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight">
              Display Cards
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-lg mx-auto">
              Stacked card layout with skew transforms, hover effects, and grayscale-to-color transitions
            </p>
          </div>

          <div className="flex min-h-[400px] w-full items-center justify-center py-10">
            <div className="w-full max-w-3xl">
              <DisplayCards cards={customCards} />
            </div>
          </div>
        </div>
      </section>

      {/* Default Cards Demo */}
      <section className="py-24 px-6 border-t border-border/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Default Props
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Works out of the box
            </h2>
            <p className="mt-4 text-muted-foreground">
              Zero configuration needed — just drop in the component
            </p>
          </div>

          <div className="flex min-h-[400px] w-full items-center justify-center py-10">
            <div className="w-full max-w-3xl">
              <DisplayCards />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          Built with Next.js, shadcn/ui, Tailwind CSS & Three.js
        </div>
      </footer>
    </div>
  );
}
