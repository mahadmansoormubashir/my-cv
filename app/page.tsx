"use client";
import { useState } from "react";

const projects = [
  {
    title: "YouTube Notes & QR Code Generator",
    tech: ["Python", "FastAPI", "Groq AI", "LLaMA 3.1"],
    date: "Sem 4 · 2025",
    description: "A full-stack AI web app with two tools: a YouTube Notes Generator that fetches video transcripts and uses LLaMA 3.1 via Groq API to produce structured study notes, and a QR Code Generator that converts any URL into a downloadable QR image. Built with a FastAPI backend and vanilla JS frontend.",
    color: "#00d4ff",
    icon: "🤖",
    github: "",
  },
  {
    title: "Smart Parking System",
    tech: ["C++", "Data Structures", "Linked Lists"],
    date: "Sem 3 · 2025",
    description: "A linked-list-based backend system to manage real-time parking slot availability. Features a ParkingSlot node class with slot ID and occupancy tracking, with full unit test coverage including edge cases.",
    color: "#7b2fff",
    icon: "🚗",
    github: "",
  },
  {
    title: "4-Bit Binary Calculator",
    tech: ["Digital Logic", "IC 7483", "IC 7486", "IC 7447"],
    date: "Sem 1 · 2024",
    description: "Hardware binary calculator built on perfboard using TTL logic ICs, performing addition and XOR on 4-bit operands. Includes a 7-segment display decoder for real-time binary-to-decimal output.",
    color: "#00d4ff",
    icon: "🔢",
    github: "",
  },
  {
    title: "Harvest Hub — Farm Management System",
    tech: ["Java", "OOP", "File I/O"],
    date: "Sem 2 · 2024",
    description: "A Java console application for managing farm inventory, crop records, and sales with full CRUD operations. Uses persistent file storage and a modular OOP class hierarchy.",
    color: "#7b2fff",
    icon: "🌾",
    github: "",
  },
  {
    title: "Gear Guru — Inventory & Sales Tracker",
    tech: ["C++", "File Handling", "Authentication"],
    date: "Sem 1 · 2024",
    description: "C++ inventory management app with login authentication, product tracking, and automated profit calculation. Data persists across sessions using file streams.",
    color: "#00d4ff",
    icon: "⚙️",
    github: "https://github.com/mahadmansoormubashir/gear-guru",
  },
];

const skills = [
  { label: "Languages", emoji: "💻", items: ["C++", "Java", "Python", "HTML", "CSS"] },
  { label: "Hardware", emoji: "🔧", items: ["IC 7483, 7486, 7447", "Perfboard Prototyping", "Voltage Regulators", "DIP Switches"] },
  { label: "CS Concepts", emoji: "🧠", items: ["Data Structures", "OOP", "File I/O", "Unit Testing"] },
  { label: "Tools", emoji: "🛠️", items: ["VS Code", "Git", "Linux CLI", "FastAPI"] },
];

export default function Home() {
  const [openProject, setOpenProject] = useState<number | null>(null);
  const [activeNav, setActiveNav] = useState("home");

  return (
    <main style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", backgroundColor: "#080812", color: "#e8e8e8", minHeight: "100vh", margin: 0, padding: 0 }}>

      {/* Navbar */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "#080812cc",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #ffffff0f",
        padding: "0 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "60px",
      }}>
        <span style={{ fontWeight: "800", fontSize: "1rem", background: "linear-gradient(90deg, #00d4ff, #7b2fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Mahad Mubashir
        </span>
        <div style={{ display: "flex", gap: "8px" }}>
          {["About", "Projects", "Skills", "Contact"].map(item => (
            <button key={item} onClick={() => {
              setActiveNav(item.toLowerCase());
              document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
            }} style={{
              background: activeNav === item.toLowerCase() ? "#ffffff15" : "transparent",
              border: "1px solid " + (activeNav === item.toLowerCase() ? "#ffffff22" : "transparent"),
              color: activeNav === item.toLowerCase() ? "#fff" : "#666",
              padding: "6px 14px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "0.85rem",
              fontWeight: "500",
            }}>{item}</button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <header id="about" style={{
        paddingTop: "140px", paddingBottom: "80px", paddingLeft: "40px", paddingRight: "40px",
        textAlign: "center",
        background: "radial-gradient(ellipse at 50% 0%, #1a0533 0%, #080812 70%)",
        borderBottom: "1px solid #ffffff0f",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "10%", left: "15%", width: "300px", height: "300px", borderRadius: "50%", background: "#7b2fff0a", filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "20%", right: "15%", width: "250px", height: "250px", borderRadius: "50%", background: "#00d4ff0a", filter: "blur(60px)", pointerEvents: "none" }} />

        <div style={{
          display: "inline-block",
          background: "linear-gradient(135deg, #7b2fff22, #00d4ff22)",
          border: "1px solid #7b2fff44",
          borderRadius: "50px",
          padding: "6px 20px",
          fontSize: "0.75rem",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "#00d4ff",
          marginBottom: "24px",
        }}>
          🟢 Available for Opportunities
        </div>

        <h1 style={{
          fontSize: "clamp(2.5rem, 8vw, 6rem)",
          fontWeight: "900",
          margin: "0 0 16px",
          background: "linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #7b2fff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-2px",
          lineHeight: "1.1",
        }}>
          Mahad Mubashir
        </h1>

        <p style={{ fontSize: "1.3rem", color: "#666", margin: "0 0 12px", fontWeight: "400" }}>
          Computer Science Student · Foundation University Islamabad
        </p>
        <p style={{ fontSize: "0.95rem", color: "#555", margin: "0 0 40px" }}>
          Semester 4 · 2nd Year · 2024 — 2028
        </p>

        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "12px", fontSize: "0.85rem", marginBottom: "40px" }}>
          {[
            { icon: "📍", text: "DHA 4, Islamabad" },
            { icon: "📞", text: "+92-300-5393037" },
            { icon: "✉️", text: "mahadmubashir123@gmail.com" },
          ].map((item) => (
            <div key={item.text} style={{
              background: "#ffffff08", border: "1px solid #ffffff15",
              borderRadius: "8px", padding: "8px 16px", color: "#aaa",
              display: "flex", alignItems: "center", gap: "8px",
            }}>
              <span>{item.icon}</span><span>{item.text}</span>
            </div>
          ))}
        </div>

        <div style={{
          maxWidth: "860px", margin: "0 auto",
          background: "linear-gradient(135deg, #7b2fff0d, #00d4ff0d)",
          border: "1px solid #7b2fff22",
          borderRadius: "16px", padding: "28px 32px",
          textAlign: "left",
        }}>
          <p style={{ lineHeight: "1.9", color: "#bbb", fontSize: "1rem", margin: 0 }}>
            Second-year CS student with hands-on experience in embedded systems, digital logic design, and software development.
            Built projects spanning hardware circuit design and software apps in Java, C++, and Python.
            Passionate about problem-solving and building practical tech solutions.
          </p>
        </div>
      </header>

      {/* Projects */}
      <section id="projects" style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 40px" }}>
        <SectionTitle title="Projects" subtitle="Click any project to expand details" />
        <div style={{ display: "grid", gap: "12px" }}>
          {projects.map((project, i) => (
            <div key={i}
              onClick={() => setOpenProject(openProject === i ? null : i)}
              style={{
                background: "#0d0d1a",
                border: `1px solid ${openProject === i ? project.color + "44" : "#ffffff0f"}`,
                borderLeft: `3px solid ${project.color}`,
                borderRadius: "16px",
                padding: "20px 24px",
                cursor: "pointer",
              }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span style={{ fontSize: "1.5rem" }}>{project.icon}</span>
                  <div>
                    <h3 style={{ margin: "0 0 6px", fontSize: "1rem", fontWeight: "700", color: "#fff" }}>{project.title}</h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {project.tech.map(t => (
                        <span key={t} style={{
                          background: `${project.color}15`, border: `1px solid ${project.color}33`,
                          color: project.color, padding: "2px 8px", borderRadius: "50px", fontSize: "0.7rem", fontWeight: "600",
                        }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
                  <span style={{ fontSize: "0.75rem", color: "#555" }}>{project.date}</span>
                  <span style={{ color: project.color, fontSize: "1.2rem", display: "inline-block", transform: openProject === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>▾</span>
                </div>
              </div>

              {openProject === i && (
                <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: `1px solid ${project.color}22` }}>
                  <p style={{ margin: 0, color: "#999", fontSize: "0.9rem", lineHeight: "1.8" }}>{project.description}</p>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{
                        display: "inline-block",
                        marginTop: "14px",
                        background: "#ffffff08",
                        border: "1px solid #ffffff15",
                        color: "#fff",
                        padding: "8px 18px",
                        borderRadius: "8px",
                        fontSize: "0.85rem",
                        textDecoration: "none",
                        fontWeight: "600",
                      }}>
                      🐙 View on GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{ background: "#0a0a15", borderTop: "1px solid #ffffff05", borderBottom: "1px solid #ffffff05", padding: "80px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionTitle title="Technical Skills" subtitle="Technologies and tools I work with" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "14px" }}>
            {skills.map(skill => (
              <div key={skill.label} style={{
                background: "#0d0d1a", border: "1px solid #ffffff0f",
                borderRadius: "16px", padding: "20px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                  <span style={{ fontSize: "1.3rem" }}>{skill.emoji}</span>
                  <p style={{ margin: 0, fontSize: "0.7rem", color: "#555", textTransform: "uppercase", letterSpacing: "2px", fontWeight: "700" }}>{skill.label}</p>
                </div>
                {skill.items.map(item => (
                  <p key={item} style={{ margin: "6px 0", fontSize: "0.88rem", color: "#aaa", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "#7b2fff" }}>▸</span> {item}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div style={{ marginTop: "32px" }}>
            <p style={{ fontSize: "0.7rem", color: "#444", textTransform: "uppercase", letterSpacing: "3px", marginBottom: "14px" }}>Soft Skills</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {["Problem Solving", "Teamwork & Collaboration", "Leadership", "Effective Communication"].map(skill => (
                <span key={skill} style={{
                  background: "#ffffff05", border: "1px solid #ffffff10",
                  color: "#aaa", padding: "10px 20px", borderRadius: "50px",
                  fontSize: "0.88rem", fontWeight: "500",
                }}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 40px" }}>
        <SectionTitle title="Volunteer Work" subtitle="Giving back to the community" />
        <div style={{
          background: "#0d0d1a", border: "1px solid #ffffff0f",
          borderLeft: "3px solid #00d4ff",
          borderRadius: "16px", padding: "24px 28px",
          display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px",
        }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: "0 0 8px", fontSize: "1rem", fontWeight: "700", color: "#fff" }}>
              🩸 Community Outreach — Blood Transfusion Awareness
            </h3>
            <p style={{ margin: 0, color: "#999", fontSize: "0.9rem", lineHeight: "1.7" }}>
              Researched safety protocols at AFIT blood bank and led social media campaigns debunking common myths.
              Organized educational workshops on hereditary blood disorders for university students.
            </p>
          </div>
          <div style={{
            background: "#00d4ff22", border: "1px solid #00d4ff44",
            borderRadius: "8px", padding: "6px 14px",
            color: "#00d4ff", fontSize: "0.8rem", fontWeight: "600", whiteSpace: "nowrap",
          }}>2025</div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={{ borderTop: "1px solid #ffffff08", background: "#050510", padding: "60px 40px 32px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "800", margin: "0 0 8px", color: "#fff" }}>Get In Touch</h2>
          <p style={{ textAlign: "center", color: "#555", marginBottom: "40px" }}>Feel free to reach out for opportunities or collaborations</p>

          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "16px", marginBottom: "48px" }}>
            {[
              { icon: "✉️", label: "Email", value: "mahadmubashir123@gmail.com", color: "#00d4ff" },
              { icon: "📞", label: "Phone", value: "+92-300-5393037", color: "#7b2fff" },
              { icon: "📍", label: "Location", value: "DHA 4, Islamabad, Pakistan", color: "#00d4ff" },
            ].map(c => (
              <div key={c.label} style={{
                background: "#0d0d1a", border: `1px solid ${c.color}22`,
                borderRadius: "16px", padding: "20px 24px", minWidth: "200px", textAlign: "center",
              }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>{c.icon}</div>
                <p style={{ margin: "0 0 4px", fontSize: "0.7rem", color: "#444", textTransform: "uppercase", letterSpacing: "2px" }}>{c.label}</p>
                <p style={{ margin: 0, color: "#aaa", fontSize: "0.9rem" }}>{c.value}</p>
              </div>
            ))}
          </div>

          <div style={{ borderTop: "1px solid #ffffff08", paddingTop: "24px", textAlign: "center" }}>
            <p style={{ margin: 0, color: "#333", fontSize: "0.8rem" }}>© 2025 Mahad Mubashir · DHA 4, Islamabad, Pakistan</p>
          </div>
        </div>
      </footer>

    </main>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div style={{ marginBottom: "32px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "8px" }}>
        <h2 style={{ fontSize: "0.7rem", fontWeight: "800", letterSpacing: "4px", textTransform: "uppercase", color: "#444", margin: 0, whiteSpace: "nowrap" }}>{title}</h2>
        <div style={{ flex: 1, height: "1px", background: "#ffffff0f" }} />
      </div>
      {subtitle && <p style={{ margin: 0, color: "#444", fontSize: "0.85rem" }}>{subtitle}</p>}
    </div>
  );
}