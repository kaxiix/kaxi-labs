"use client";

import Image from "next/image";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export function FeaturedProject({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-500 ease-in-out hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-1/2 h-64 md:h-auto">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-xs font-semibold rounded-full mb-2">
              {project.category}
            </span>
          </div>
        </div>
        <div className="p-8 md:w-1/2">
          <h3 className="text-3xl font-bold mb-4 text-white">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-6">{project.description}</p>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors">
            Explore Featured Project
          </button>
        </div>
      </div>
    </div>
  );
}
