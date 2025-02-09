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
import { SkillsAndExperience } from "./components/skills-and-experience";
import {
  HomeIcon,
  InfoIcon,
  StarIcon,
  ImageIcon,
  MenuIcon,
  XIcon,
  ArrowRightIcon,
  LayoutGridIcon,
  BookOpenIcon,
  MessageSquareIcon,
  LinkedinIcon,
  GithubIcon,
} from "lucide-react";

const projects: {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "Education" | "Health" | "Social";
}[] = [
  {
    id: 1,
    title: "EduMapper",
    description:
      "Chart your educational journey with EduMapper, an AI-powered learning pathway generator. Simply input your current skills and learning goals, and let our intelligent system create a personalized roadmap tailored to your needs. Features adaptive learning paths, skill gap analysis, milestone tracking, and smart resource recommendations to guide you through your educational journey effectively.",
    image: "/roadmap.webp",
    category: "Education",
  },
  {
    id: 2,
    title: "FitPilot AI",
    description:
      "Elevate your fitness journey with FitPilot AI, your intelligent workout companion. Our AI analyzes your fitness level, goals, and available equipment to craft personalized workout routines that evolve with you. Features include smart exercise selection, real-time workout adjustments, progress tracking, form guidance, and nutrition recommendations. Whether you're a beginner or advanced athlete, FitPilot AI adapts to your needs, ensuring optimal results and sustainable fitness progress.",
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
  const [menuOpen, setMenuOpen] = useState(false); // State for hamburger menu
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
            Kazi Ikram
          </Link>
          <button
            className="md:hidden text-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
          <nav className={`md:flex space-x-6 ${menuOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              <li>
                <Link
                  href="#"
                  className="hover:text-indigo-400 transition-colors flex items-center"
                >
                  <HomeIcon size={20} className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-indigo-400 transition-colors flex items-center"
                >
                  <InfoIcon size={20} className="mr-2" />
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#featured"
                  className="hover:text-indigo-400 transition-colors flex items-center"
                >
                  <StarIcon size={20} className="mr-2" />
                  Featured
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="hover:text-indigo-400 transition-colors flex items-center"
                >
                  <ImageIcon size={20} className="mr-2" />
                  Gallery
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <AboutMe />
        <SkillsAndExperience />
        <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                About my portfolio
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
                <ArrowRightIcon className="ml-2 h-5 w-5" />
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
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
              <StarIcon className="mr-2 h-8 w-8 text-indigo-400" />
              Featured Project
            </h2>
            <FeaturedProject project={projects[0]} />
          </div>
        </section>

        <section id="gallery" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
              <LayoutGridIcon className="mr-2 h-8 w-8 text-indigo-400" />
              Project Gallery
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
            <h3 className="text-xl font-semibold mb-4 text-indigo-400 flex items-center">
              <InfoIcon className="mr-2 h-5 w-5" />
              About KaxiLabs
            </h3>
            <p className="text-gray-400">
              Discover and explore the latest innovations in SaaS technology.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-400 flex items-center">
              <BookOpenIcon className="mr-2 h-5 w-5" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <HomeIcon className="mr-2 h-4 w-4" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <StarIcon className="mr-2 h-4 w-4" />
                  Featured
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ImageIcon className="mr-2 h-4 w-4" />
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <InfoIcon className="mr-2 h-4 w-4" />
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-400 flex items-center">
              <MessageSquareIcon className="mr-2 h-5 w-5" />
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <XIcon className="mr-2 h-4 w-4" />X (Twitter)
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <LinkedinIcon className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <GithubIcon className="mr-2 h-4 w-4" />
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
