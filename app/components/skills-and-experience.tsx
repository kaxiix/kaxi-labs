"use client";

import type React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaAws, FaDocker } from "react-icons/fa";
import {
  SiTypescript,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ElementType;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

const skills: Skill[] = [
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "GraphQL", icon: SiGraphql },
  { name: "AWS", icon: FaAws },
  { name: "Docker", icon: FaDocker },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
];

const experiences: Experience[] = [
  {
    company: "TechCorp",
    role: "Senior Full Stack Developer",
    period: "2021 - Present",
    description:
      "Leading development of scalable SaaS solutions using React, Node.js, and AWS.",
  },
  {
    company: "InnovateSoft",
    role: "Full Stack Developer",
    period: "2019 - 2021",
    description:
      "Developed and maintained multiple client projects using MERN stack and TypeScript.",
  },
  {
    company: "StartupX",
    role: "Junior Developer",
    period: "2017 - 2019",
    description:
      "Contributed to the development of a real-time analytics dashboard using React and D3.js.",
  },
];

export function SkillsAndExperience() {
  return (
    <div className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
          Skills & Experience
        </h2>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-gray-100">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <skill.icon className="text-5xl mb-2 text-indigo-400" />
                <span className="text-gray-300">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-100">
            Work Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="relative pl-8 pb-8 border-l-2 border-indigo-500"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px] top-1.5" />
                <h4 className="text-xl font-semibold text-indigo-400">
                  {exp.company}
                </h4>
                <p className="text-gray-300">{exp.role}</p>
                <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
