"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "./components/project-card";
import { FeaturedProject } from "./components/featured-project";
import { CategoryFilter } from "./components/category-filter";
import { Newsletter } from "./components/newsletter";
import { Pagination } from "./components/pagination";
import { AboutMe } from "./components/about-me";

const projects = [
  {
    id: 1,
    title: "Roadmap Generator.",
    description:
      "Generate a roadmap for your educational journey based on what you already know and what you want to learn Using AI",
    image: "/roadmap.webp",
    category: "Education",
  },
  {
    id: 2,
    title: "Workout routine generator ",
    description:
      "Generate customized workout routines based on your fitness goals and your level of fitness Using AI",
    image: "/workout.webp",
    category: "Health",
  },
  {
    id: 3,
    title: "DialogueDeck",
    description:
      "DialogueDeck AI is an intelligent conversation assistant that helps users navigate professional and social interactions with confidence. By analyzing specific scenarios and user goals, it generates personalized conversation strategies, including relevant questions, talking points, and social cues.",
    image: "/convo.webp",
    category: "Social",
  },
  {
    id: 4,
    title: "PaperPilot",
    description:
      "Transform your writing process with PaperPilot, an AI-powered peer review simulator that provides multi-perspective feedback. Get insights from simulated teacher, peer, and professional editor viewpoints, with customizable rubrics and seamless LMS integration. Perfect for educational institutions looking to enhance their writing programs with intelligent, scalable feedback solutions.",
    image: "/feedback.webp",
    category: "Education",
  },
  {
    id: 5,
    title: "LingoPal",
    description:
      "Experience language learning reimagined with LingoPal, your AI-powered conversation companion. Practice any language through immersive daily scenarios - from casual cafe chats to business meetings. Combine language learning with productivity by planning your day, setting reminders, and managing tasks, all while practicing your target language. Features customizable AI personalities, cultural insights, and progress tracking.",
    image: "/text.webp",
    category: "Education",
  },
  {
    id: 6,
    title: "EduSync AI",
    description:
      "Transform your learning management system with EduSync AI, a powerful educational companion that seamlessly integrates with popular platforms like Canvas and Moodle. Leverage AI-powered analytics to track student progress across courses, provide instant assignment feedback, and deliver personalized learning recommendations. Features include smart resource suggestions, comprehensive progress tracking, automated grading assistance, and deep LMS integration for enhanced educational outcomes.",
    image: "/lms.webp",
    category: "Education",
  },
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");
  const projectsPerPage = 6;

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="sticky top-0 z-10 bg-gray-800 bg-opacity-90 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-400">
            Kaxi Labs
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="#"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-indigo-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#featured"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Featured
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <AboutMe />

        <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Discover the Future of SaaS
              </h1>
              <p className="text-xl mb-8 max-w-lg text-gray-300">
                Explore our curated collection of cutting-edge SaaS solutions
                designed to revolutionize your business processes and boost
                productivity.
              </p>
              <Link
                href="#gallery"
                className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center"
              >
                View Gallery
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/robot.webp"
                alt="SaaS Illustration"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section id="featured" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Project
            </h2>
            <FeaturedProject project={projects[0]} />
          </div>
        </section>

        <section id="gallery" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              SaaS Project Gallery
            </h2>
            <CategoryFilter
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {currentProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </section>

        <Newsletter />
      </main>

      <footer className="bg-gray-800 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">
              About KaxiLabs
            </h3>
            <p className="text-gray-400">
              Discover and explore the latest innovations in SaaS technology.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Featured
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2025 KaxiLabs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
