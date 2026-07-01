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
    github: "https://github.com/mahadmansoormubashir/harvest-hub",
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
  const [activeNav, setActiveNav] = useState("about");

  return (
    <main style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", backgroundColor: "#080812", color: "#e8e8e8", minHeight: "100vh", margin: 0, padding: 0, width: "100%", overflowX: "hidden" }}>

      {/* Navbar */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "#080812dd",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid #ffffff10",
        padding: "0 5vw",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "72px",
      }}>
        <span style={{ fontWeight: "900", fontSize: "1.4rem", background: "linear-gradient(90deg, #00d4ff, #7b2fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Mahad Mubashir
        </span>
        <div style={{ display: "flex", gap: "10px" }}>
          {["About", "Projects", "Skills", "Contact"].map(item => (
            <button key={item} onClick={() => {
              setActiveNav(item.toLowerCase());
              document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
            }} style={{
              background: activeNav === item.toLowerCase() ? "#ffffff15" : "transparent",
              border: "1px solid " + (activeNav === item.toLowerCase() ? "#ffffff22" : "transparent"),
              color: activeNav === item.toLowerCase() ? "#fff" : "#888",
              padding: "10px 22px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "500",
            }}>{item}</button>
          ))}
        </div>
      </nav>

      {/* Hero - FULL SCREEN */}
      <header id="about" style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "120px 5vw 80px",
        textAlign: "center",
        background: "radial-gradient(ellipse at 50% 30%, #1a0533 0%, #080812 70%)",
        borderBottom: "1px solid #ffffff0f",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}>
        <div style={{ position: "absolute", top: "20%", left: "10%", width: "500px", height: "500px", borderRadius: "50%", background: "#7b2fff12", filter: "blur(100px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "30%", right: "10%", width: "450px", height: "450px", borderRadius: "50%", background: "#00d4ff10", filter: "blur(100px)", pointerEvents: "none" }} />

        <div style={{
          display: "inline-block",
          background: "linear-gradient(135deg, #7b2fff22, #00d4ff22)",
          border: "1px solid #7b2fff44",
          borderRadius: "50px",
          padding: "10px 28px",
          fontSize: "0.95rem",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "#00d4ff",
          marginBottom: "40px",
          position: "relative",
          zIndex: 2,
        }}>
          🟢 Available for Opportunities
        </div>

        <h1 style={{
          fontSize: "clamp(4rem, 14vw, 12rem)",
          fontWeight: "900",
          margin: "0 0 24px",
          background: "linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #7b2fff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-5px",
          lineHeight: "0.95",
          position: "relative",
          zIndex: 2,
        }}>
          Mahad Mubashir
        </h1>

        <p style={{ fontSize: "clamp(1.2rem, 2.5vw, 2rem)", color: "#ddd", margin: "0 0 16px", fontWeight: "500", position: "relative", zIndex: 2 }}>
          Computer Science Student
        </p>
        <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.3rem)", color: "#888", margin: "0 0 56px", fontWeight: "500", position: "relative", zIndex: 2 }}>
          Foundation University Islamabad · Semester 4 · 2024 — 2028
        </p>

        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "16px", fontSize: "1.1rem", marginBottom: "56px", position: "relative", zIndex: 2 }}>
          {[
            { icon: "📍", text: "DHA 4, Islamabad" },
            { icon: "📞", text: "+92-300-5393037" },
            { icon: "✉️", text: "mahadmubashir123@gmail.com" },
          ].map((item) => (
            <div key={item.text} style={{
              background: "#ffffff08", border: "1px solid #ffffff20",
              borderRadius: "12px", padding: "14px 26px", color: "#ccc",
              display: "flex", alignItems: "center", gap: "12px",
              backdropFilter: "blur(10px)",
            }}>
              <span style={{ fontSize: "1.2rem" }}>{item.icon}</span><span>{item.text}</span>
            </div>
          ))}
        </div>

        <div style={{
          maxWidth: "1000px", width: "100%",
          background: "linear-gradient(135deg, #7b2fff0d, #00d4ff0d)",
          border: "1px solid #7b2fff33",
          borderRadius: "24px", padding: "40px 48px",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
          backdropFilter: "blur(10px)",
        }}>
          <p style={{ lineHeight: "2", color: "#f0f0f0", fontSize: "clamp(1rem, 1.3vw, 1.25rem)", margin: 0, fontWeight: "500" }}>
            Second-year CS student with hands-on experience in embedded systems, digital logic design, and software development.
            Built projects spanning hardware circuit design and software apps in Java, C++, and Python.
            Passionate about problem-solving and building practical tech solutions.
          </p>
        </div>

        <div style={{ marginTop: "56px", color: "#888", fontSize: "0.9rem", letterSpacing: "3px", fontWeight: "600", position: "relative", zIndex: 2 }}>
          ↓ SCROLL TO EXPLORE
        </div>
      </header>

      {/* Projects - FULL WIDTH */}
      <section id="projects" style={{ width: "100%", padding: "60px 5vw", boxSizing: "border-box" }}>
        <SectionTitle title="Projects" subtitle="Click any project to expand details" />
        <div style={{ display: "grid", gap: "20px", maxWidth: "1600px", margin: "0 auto" }}>
          {projects.map((project, i) => (
            <div key={i}
              onClick={() => setOpenProject(openProject === i ? null : i)}
              style={{
                background: "#0d0d1a",
                border: `1px solid ${openProject === i ? project.color + "55" : "#ffffff0f"}`,
                borderLeft: `6px solid ${project.color}`,
                borderRadius: "20px",
                padding: "32px 40px",
                cursor: "pointer",
              }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "24px", flex: 1, minWidth: 0 }}>
                  <span style={{ fontSize: "3rem" }}>{project.icon}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ margin: "0 0 12px", fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontWeight: "700", color: "#fff" }}>{project.title}</h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {project.tech.map(t => (
                        <span key={t} style={{
                          background: `${project.color}18`, border: `1px solid ${project.color}44`,
                          color: project.color, padding: "6px 14px", borderRadius: "50px", fontSize: "0.9rem", fontWeight: "600",
                        }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "20px", flexShrink: 0 }}>
                  <span style={{ fontSize: "0.95rem", color: "#aaa", fontWeight: "500" }}>{project.date}</span>
                  <span style={{ color: project.color, fontSize: "1.8rem", display: "inline-block", transform: openProject === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>▾</span>
                </div>
              </div>

              {openProject === i && (
                <div style={{ marginTop: "28px", paddingTop: "28px", borderTop: `1px solid ${project.color}33` }}>
                  <p style={{ margin: 0, color: "#e0e0e0", fontSize: "clamp(1rem, 1.3vw, 1.15rem)", lineHeight: "2" }}>{project.description}</p>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{
                        display: "inline-block",
                        marginTop: "24px",
                        background: "#ffffff10",
                        border: "1px solid #ffffff25",
                        color: "#fff",
                        padding: "14px 32px",
                        borderRadius: "12px",
                        fontSize: "1.05rem",
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

      {/* Skills - FULL WIDTH */}
      <section id="skills" style={{ background: "#0a0a15", borderTop: "1px solid #ffffff05", borderBottom: "1px solid #ffffff05", padding: "120px 5vw", width: "100%", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
          <SectionTitle title="Technical Skills" subtitle="Technologies and tools I work with" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {skills.map(skill => (
              <div key={skill.label} style={{
                background: "#0d0d1a", border: "1px solid #ffffff10",
                borderRadius: "20px", padding: "32px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px" }}>
                  <span style={{ fontSize: "2rem" }}>{skill.emoji}</span>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "#ccc", textTransform: "uppercase", letterSpacing: "3px", fontWeight: "700" }}>{skill.label}</p>
                </div>
                {skill.items.map(item => (
                  <p key={item} style={{ margin: "12px 0", fontSize: "1.1rem", color: "#eee", display: "flex", alignItems: "center", gap: "12px", fontWeight: "500" }}>
                    <span style={{ color: "#7b2fff", fontSize: "1.2rem" }}>▸</span> {item}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div style={{ marginTop: "56px" }}>
            <p style={{ fontSize: "0.9rem", color: "#ccc", textTransform: "uppercase", letterSpacing: "4px", marginBottom: "20px", fontWeight: "700" }}>Soft Skills</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              {["Problem Solving", "Teamwork & Collaboration", "Leadership", "Effective Communication"].map(skill => (
                <span key={skill} style={{
                  background: "#ffffff08", border: "1px solid #ffffff15",
                  color: "#fff", padding: "14px 28px", borderRadius: "50px",
                  fontSize: "1.05rem", fontWeight: "500",
                }}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer - FULL WIDTH */}
      <section style={{ width: "100%", padding: "60px 5vw", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
          <SectionTitle title="Volunteer Work" subtitle="Giving back to the community" />
          <div style={{
            background: "#0d0d1a", border: "1px solid #ffffff10",
            borderLeft: "6px solid #00d4ff",
            borderRadius: "20px", padding: "36px 40px",
            display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "24px",
          }}>
            <div style={{ flex: 1, minWidth: "300px" }}>
              <h3 style={{ margin: "0 0 16px", fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontWeight: "700", color: "#fff" }}>
                🩸 Community Outreach — Blood Transfusion Awareness
              </h3>
              <p style={{ margin: 0, color: "#e0e0e0", fontSize: "clamp(1rem, 1.3vw, 1.15rem)", lineHeight: "1.9" }}>
                Researched safety protocols at AFIT blood bank and led social media campaigns debunking common myths.
                Organized educational workshops on hereditary blood disorders for university students.
              </p>
            </div>
            <div style={{
              background: "#00d4ff22", border: "1px solid #00d4ff44",
              borderRadius: "10px", padding: "10px 22px",
              color: "#00d4ff", fontSize: "1rem", fontWeight: "600", whiteSpace: "nowrap",
            }}>2025</div>
          </div>
        </div>
      </section>

      {/* Footer - FULL WIDTH */}
      <footer id="contact" style={{ borderTop: "1px solid #ffffff08", background: "#050510", padding: "60px 5vw 40px", width: "100%", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "900", margin: "0 0 20px", background: "linear-gradient(135deg, #ffffff, #00d4ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Get In Touch</h2>
          <p style={{ textAlign: "center", color: "#bbb", marginBottom: "64px", fontSize: "1.2rem", fontWeight: "500" }}>Feel free to reach out for opportunities or collaborations</p>

          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "24px", marginBottom: "80px" }}>
            {[
              { icon: "✉️", label: "Email", value: "mahadmubashir123@gmail.com", color: "#00d4ff" },
              { icon: "📞", label: "Phone", value: "+92-300-5393037", color: "#7b2fff" },
              { icon: "📍", label: "Location", value: "DHA 4, Islamabad, Pakistan", color: "#00d4ff" },
            ].map(c => (
              <div key={c.label} style={{
                background: "#0d0d1a", border: `1px solid ${c.color}33`,
                borderRadius: "20px", padding: "32px 40px", minWidth: "280px", textAlign: "center",
              }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>{c.icon}</div>
                <p style={{ margin: "0 0 8px", fontSize: "0.9rem", color: "#aaa", textTransform: "uppercase", letterSpacing: "3px", fontWeight: "700" }}>{c.label}</p>
                <p style={{ margin: 0, color: "#fff", fontSize: "1.1rem", fontWeight: "500" }}>{c.value}</p>
              </div>
            ))}
          </div>

          <div style={{ borderTop: "1px solid #ffffff08", paddingTop: "36px", textAlign: "center" }}>
            <p style={{ margin: 0, color: "#888", fontSize: "1rem", fontWeight: "500" }}>© 2025 Mahad Mubashir · DHA 4, Islamabad, Pakistan</p>
          </div>
        </div>
      </footer>

    </main>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div style={{ marginBottom: "32px", maxWidth: "1600px", margin: "0 auto 32px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "16px" }}>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: "900", color: "#fff", margin: 0, whiteSpace: "nowrap", background: "linear-gradient(135deg, #ffffff, #7b2fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{title}</h2>
        <div style={{ flex: 1, height: "2px", background: "linear-gradient(90deg, #7b2fff44, transparent)" }} />
      </div>
      {subtitle && <p style={{ margin: 0, color: "#999", fontSize: "1.1rem", fontWeight: "500" }}>{subtitle}</p>}
    </div>
  );
}