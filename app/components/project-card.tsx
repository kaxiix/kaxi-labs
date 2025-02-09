"use client";

import Image from "next/image";
import { BookIcon, DumbbellIcon, MessagesSquareIcon } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "Education" | "Health" | "Social";
}

const getCategoryIcon = (category: Project["category"]) => {
  switch (category) {
    case "Education":
      return <BookIcon className="h-4 w-4 mr-1" />;
    case "Health":
      return <DumbbellIcon className="h-4 w-4 mr-1" />;
    case "Social":
      return <MessagesSquareIcon className="h-4 w-4 mr-1" />;
  }
};

export function ProjectCard({ project }: { project: Project }) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative h-48">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-flex items-center px-3 py-1 bg-indigo-600 text-white text-xs font-semibold rounded-full mb-2">
            {getCategoryIcon(project.category)}
            {project.category}
          </span>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-300">{project.description}</p>
        <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold hover:bg-indigo-700 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
}
