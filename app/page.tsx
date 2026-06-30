"use client";

import React, { useState } from "react";

// 1. Projects Data Array (unchanged)
const projects = [
  {
    title: "YouTube Notes & QR Code Generator",
    tech: ["Python", "FastAPI", "API Integration"],
    date: "Sem 3 · 2024",
    description: "An automated web utility that extracts structured timestamped notes from YouTube video transcripts and generates dynamic sharing QR codes.",
    color: "#ff0055",
    icon: "📺",
    github: "https://github.com/mahadmansoormubashir/youtube-notes",
  },
  {
    title: "Smart Parking System",
    tech: ["C++", "Embedded Systems", "Sensors"],
    date: "Sem 3 · 2024",
    description: "An automated parking slot tracking system utilizing infrared sensors to detect vehicle presence and real-time display updates.",
    color: "#00d2ff",
    icon: "🚗",
    github: "https://github.com/mahadmansoormubashir/smart-parking",
  },
  {
    title: "4-Bit Binary Calculator",
    tech: ["Digital Logic Design", "Proteus", "Hardware"],
    date: "Sem 2 · 2023",
    description: "A hardware-level arithmetic logic circuit simulation performing addition and subtraction operations using standard logic gates.",
    color: "#00ff87",
    icon: "🔢",
    github: "https://github.com/mahadmansoormubashir/binary-calculator",
  },
  {
    title: "Harvest Hub — Farm Management System",
    tech: ["Java", "OOP", "File I/O"],
    date: "Sem 2 · 2024",
    description: "A Java console application for managing farm inventory, crop records, and sales with full CRUD operations. Uses persistent file storage and a modular OOP class hierarchy.",
    color: "#7b2fff",
    icon: "🌾",
    github: "https://github.com/mahadmansoormubashir/harvest-hub",
  },
  {
    title: "Gear Guru Inventory & Sales Tracker",
    tech: ["Python", "Data Structures", "File Handling"],
    date: "Sem 2 · 2024",
    description: "A management interface for tracking automotive spare parts stock quantities, transaction logs, and low inventory warning triggers.",
    color: "#ffb700",
    icon: "⚙️",
    github: "https://github.com/mahadmansoormubashir/gear-guru",
  },
];

// 2. Skills Categories (unchanged)
const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C++", "Assembly (x86)", "SQL"],
  },
  {
    title: "Computer Science Core",
    skills: ["Data Structures", "OOP", "Artificial Intelligence", "Digital Logic"],
  },
  {
    title: "Tools & Frameworks",
    skills: ["FastAPI", "emu8086", "Git & GitHub", "Vercel", "Proteus"],
  },
];

export default function Home() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500 selection:text-white">
      {/* Hero Section – FULL WIDTH, larger text */}
      <header className="max-w-7xl mx-auto pt-28 pb-16 px-8 md:px-12 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-3">
          Mahad Mubashir
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 font-medium mb-1">
          Computer Science Student · Foundation University Islamabad
        </p>

        <p className="text-base md:text-lg text-slate-400 font-mono tracking-wide mb-4">
          SEMESTER 4 · 2ND YEAR · 2024 — 2028
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-base md:text-lg text-slate-400 font-mono mb-5">
          <span>DHA 4, Islamabad</span>
          <span className="hidden sm:inline text-slate-600">·</span>
          <span>+92-300-5393037</span>
          <span className="hidden sm:inline text-slate-600">·</span>
          <span className="text-slate-300">mahadmubashir123@gmail.com</span>
        </div>

        <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto md:mx-0 border-l-4 border-purple-500/40 pl-5">
          Second-year CS student with hands-on experience in embedded systems, digital logic design, and software development. Built projects spanning hardware circuit design and software apps in Java, C++, and Python. Passionate about problem-solving and building practical tech solutions.
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-8 md:px-12 space-y-24 pb-28">
        {/* Projects Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-4">
            <span className="h-3 w-3 rounded-full bg-purple-500 animate-pulse" />
            Featured Projects
          </h2>

          <div className="grid gap-6">
            {projects.map((project, index) => {
              const isExpanded = expandedProject === index;
              return (
                <div
                  key={index}
                  onClick={() => setExpandedProject(isExpanded ? null : index)}
                  className="group bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 cursor-pointer transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-lg"
                  style={{ borderLeft: `6px solid ${project.color}` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{project.icon}</span>
                      <div>
                        <h3 className="font-semibold text-xl md:text-2xl text-slate-200 group-hover:text-white transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-sm text-slate-500 font-mono">
                          {project.date}
                        </span>
                      </div>
                    </div>
                    <span className="text-slate-500 text-sm font-mono uppercase bg-slate-950 px-3 py-1.5 rounded border border-slate-800">
                      {project.tech[0]}
                    </span>
                  </div>

                  <p className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                    {project.description}
                  </p>

                  {isExpanded && (
                    <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap gap-3 items-center justify-between animate-fadeIn">
                      <div className="flex gap-2 flex-wrap">
                        {project.tech.map((t, i) => (
                          <span
                            key={i}
                            className="text-sm bg-slate-950 text-slate-400 px-3 py-1.5 rounded-full border border-slate-800 font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 text-sm bg-slate-800 hover:bg-slate-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors border border-slate-700"
                        >
                          🐙 View on GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-4">
            <span className="h-3 w-3 rounded-full bg-blue-500" />
            Technical Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6"
              >
                <h3 className="font-bold text-base uppercase tracking-wider text-slate-400 mb-5">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-sm bg-slate-900 text-slate-300 px-3 py-1.5 rounded-md border border-slate-800/60 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900 text-center py-10 text-sm text-slate-600 font-mono">
        © {new Date().getFullYear()} · Built with Next.js & Tailwind CSS
      </footer>
    </div>
  );
}