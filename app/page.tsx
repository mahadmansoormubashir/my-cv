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
    <main style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", backgroundColor: "#080812", color: "#e8e8e8", minHeight: "100vh", margin: 0, padding: 0, boxSizing: "border-box" }}>

      {/* Navbar */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "#080812cc",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #ffffff0f",
        padding: "0 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "70px",
      }}>
        <span style={{ fontWeight: "900", fontSize: "1.2rem", background: "linear-gradient(90deg, #00d4ff, #7b2fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.5px" }}>
          Mahad Mubashir
        </span>
        <div style={{ display: "flex", gap: "12px" }}>
          ={["About", "Projects", "Skills", "Contact"].map(item => (
            <button key={item} onClick={() => {
              setActiveNav(item.toLowerCase());
              document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
            }} style={{
              background: activeNav === item.toLowerCase() ? "#ffffff15" : "transparent",
              border: "1px solid " + (activeNav === item.toLowerCase() ? "#ffffff22" : "transparent"),
              color: activeNav === item.toLowerCase() ? "#fff" : "#888",
              padding: "8px 18px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "0.9rem",
              fontWeight: "600",
              transition: "all 0.2s ease",
            }}>{item}</button>
          ))}
        </div>
      </nav>

      {/* Hero — Expanded to fully fill the initial viewport natively */}
      <header id="about" style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "120px 40px 60px 40px",
        textAlign: "center",
        background: "radial-gradient(circle at 50% 50%, #1e063b 0%, #080812 80%)",
        borderBottom: "1px solid #ffffff0f",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}>
        {/* Ambient Backdrops */}
        <div style={{ position: "absolute", top: "25%", left: "10%", width: "450px", height: "450px", borderRadius: "50%", background: "#7b2fff12", filter: "blur(90px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "25%", right: "10%", width: "400px", height: "400px", borderRadius: "50%", background: "#00d4ff12", filter: "blur(90px)", pointerEvents: "none" }} />

        <div style={{
          display: "inline-block",
          background: "linear-gradient(135deg, #7b2fff22, #00d4ff22)",
          border: "1px solid #7b2fff55",
          borderRadius: "50px",
          padding: "8px 24px",
          fontSize: "0.85rem",
          letterSpacing: "4px",
          textTransform: "uppercase",
          color: "#00d4ff",
          fontWeight: "700",
          marginBottom: "32px",
        }}>
          🟢 Available for Opportunities
        </div>

        {/* Maximized Typography Scale */}
        <h1 style={{
          fontSize: "clamp(3.5rem, 11vw, 8.5rem)",
          fontWeight: "900",
          margin: "0 0 24px",
          background: "linear-gradient(135deg, #ffffff 10%, #00d4ff 55%, #7b2fff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-4px",
          lineHeight: "0.95",
        }}>
          Mahad Mubashir
        </h1>

        <p style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", color: "#aaa", margin: "0 0 16px", fontWeight: "500", letterSpacing: "-0.5px" }}>
          Computer Science Student · Foundation University Islamabad
        </p>
        <p style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)", color: "#666", margin: "0 0 48px", fontWeight: "500", letterSpacing: "1px", textTransform: "uppercase" }}>
          Semester 4 · 2nd Year · 2024 — 2028
        </p>

        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "16px", fontSize: "1rem", marginBottom: "56px" }}>
          ={[
            { icon: "📍", text: "DHA 4, Islamabad" },
            { icon: "📞", text: "+92-300-5393037" },
            { icon: "✉️", text: "mahadmubashir123@gmail.com" },
          ].map((item) => (
            <div key={item.text} style={{
              background: "#ffffff05", border: "1px solid #ffffff12",
              borderRadius: "12px", padding: "12px 24px", color: "#ccc",
              display: "flex", alignItems: "center", gap: "10px",
              fontWeight: "500"
            }}>
              <span style={{ fontSize: "1.2rem" }}>{item.icon}</span><span>{item.text}</span>
            </div>
          ))}
        </div>

        <div style={{
          maxWidth: "1000px", width: "100%", margin: "0 auto",
          background: "linear-gradient(135deg, #7b2fff0f, #00d4ff0f)",
          border: "1px solid #7b2fff2d",
          borderRadius: "24px", padding: "40px",
          textAlign: "left",
          backdropFilter: "blur(8px)"
        }}>
          <p style={{ lineHeight: "1.8", color: "#ddd", fontSize: "clamp(1.1rem, 2vw, 1.35rem)", margin: 0, fontWeight: "400" }}>
            Second-year CS student with hands-on experience in embedded systems, digital logic design, and software development.
            Built projects spanning hardware circuit design and software apps in Java, C++, and Python.
            Passionate about problem-solving and building practical tech solutions.
          </p>
        </div>
      </header>

      {/* Projects */}
      <section id="projects" style={{ maxWidth: "1200px", margin: "0 auto", padding: "120px 40px" }}>
        <SectionTitle title="Projects" subtitle="Click any project to expand details" />
        <div style={{ display: "grid", gap: "16px" }}>
          {projects.map((project, i) => (
            <div key={i}
              onClick={() => setOpenProject(openProject === i ? null : i)}
              style={{
                background: "#0d0d1a",
                border: `1px solid ${openProject === i ? project.color + "55" : "#ffffff0f"}`,
                borderLeft: `4px solid ${project.color}`,
                borderRadius: "20px",
                padding: "28px 32px",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <span style={{ fontSize: "2rem" }}>{project.icon}</span>
                  <div>
                    <h3 style={{ margin: "0 0 10px", fontSize: "1.35rem", fontWeight: "800", color: "#fff", letterSpacing: "-0.3px" }}>{project.title}</h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {project.tech.map(t => (
                        <span key={t} style={{
                          background: `${project.color}18`, border: `1px solid ${project.color}40`,
                          color: project.color, padding: "4px 12px", borderRadius: "50px", fontSize: "0.8rem", fontWeight: "700",
                        }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", flexShrink: 0 }}>
                  <span style={{ fontSize: "0.9rem", color: "#666", fontWeight: "600" }}>{project.date}</span>
                  <span style={{ color: project.color, fontSize: "1.5rem", display: "inline-block", transform: openProject === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>▾</span>
                </div>
              </div>

              {openProject === i && (
                <div style={{ marginTop: "24px", paddingTop: "24px", borderTop: `1px solid ${project.color}22` }}>
                  <p style={{ margin: 0, color: "#b5b5c3", fontSize: "1.05rem", lineHeight: "1.8" }}>{project.description}</p>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{
                        display: "inline-block",
                        marginTop: "20px",
                        background: "#ffffff0c",
                        border: "1px solid #ffffff18",
                        color: "#fff",
                        padding: "10px 24px",
                        borderRadius: "10px",
                        fontSize: "0.95rem",
                        textDecoration: "none",
                        fontWeight: "700",
                        transition: "all 0.2s"
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
      <section id="skills" style={{ background: "#0a0a15", borderTop: "1px solid #ffffff05", borderBottom: "1px solid #ffffff05", padding: "120px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionTitle title="Technical Skills" subtitle="Technologies and tools I work with" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            ={skills.map(skill => (
              <div key={skill.label} style={{
                background: "#0d0d1a", border: "1px solid #ffffff0f",
                borderRadius: "20px", padding: "28px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <span style={{ fontSize: "1.6rem" }}>{skill.emoji}</span>
                  <p style={{ margin: 0, fontSize: "0.8rem", color: "#666", textTransform: "uppercase", letterSpacing: "3px", fontWeight: "800" }}>{skill.label}</p>
                </div>
                {skill.items.map(item => (
                  <p key={item} style={{ margin: "10px 0", fontSize: "1.05rem", color: "#ccc", display: "flex", alignItems: "center", gap: "10px", fontWeight: "500" }}>
                    <span style={{ color: "#7b2fff" }}>•</span> {item}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div style={{ marginTop: "48px" }}>
            <p style={{ fontSize: "0.8rem", color: "#555", textTransform: "uppercase", letterSpacing: "4px", marginBottom: "20px", fontWeight: "700" }}>Soft Skills</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              {["Problem Solving", "Teamwork & Collaboration", "Leadership", "Effective Communication"].map(skill => (
                <span key={skill} style={{
                  background: "#ffffff05", border: "1px solid #ffffff10",
                  color: "#ccc", padding: "14px 28px", borderRadius: "50px",
                  fontSize: "1.05rem", fontWeight: "600",
                }}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "120px 40px" }}>
        <SectionTitle title="Volunteer Work" subtitle="Giving back to the community" />
        <div style={{
          background: "#0d0d1a", border: "1px solid #ffffff0f",
          borderLeft: "4px solid #00d4ff",
          borderRadius: "20px", padding: "32px 36px",
          display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "24px",
        }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: "0 0 12px", fontSize: "1.35rem", fontWeight: "800", color: "#fff", letterSpacing: "-0.3px" }}>
              🩸 Community Outreach — Blood Transfusion Awareness
            </h3>
            <p style={{ margin: 0, color: "#b5b5c3", fontSize: "1.05rem", lineHeight: "1.8" }}>
              Researched safety protocols at AFIT blood bank and led social media campaigns debunking common myths.
              Organized educational workshops on hereditary blood disorders for university students.
            </p>
          </div>
          <div style={{
            background: "#00d4ff22", border: "1px solid #00d4ff44",
            borderRadius: "10px", padding: "8px 20px",
            color: "#00d4ff", fontSize: "0.9rem", fontWeight: "700", whiteSpace: "nowrap",
          }}>2025</div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={{ borderTop: "1px solid #ffffff08", background: "#050510", padding: "100px 40px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "900", margin: "0 0 12px", color: "#fff", letterSpacing: "-1px" }}>Get In Touch</h2>
          <p style={{ textAlign: "center", color: "#666", fontSize: "1.1rem", marginBottom: "60px", fontWeight: "500" }}>Feel free to reach out for opportunities or collaborations</p>

          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "24px", marginBottom: "64px" }}>
            {[
              { icon: "✉️", label: "Email", value: "mahadmubashir123@gmail.com", color: "#00d4ff" },
              { icon: "📞", label: "Phone", value: "+92-300-5393037", color: "#7b2fff" },
              { icon: "📍", label: "Location", value: "DHA 4, Islamabad, Pakistan", color: "#00d4ff" },
            ].map(c => (
              <div key={c.label} style={{
                background: "#0d0d1a", border: `1px solid ${c.color}22`,
                borderRadius: "20px", padding: "28px 32px", minWidth: "260px", textAlign: "center",
              }}>
                <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{c.icon}</div>
                <p style={{ margin: "0 0 6px", fontSize: "0.75rem", color: "#555", textTransform: "uppercase", letterSpacing: "2px", fontWeight: "700" }}>{c.label}</p>
                <p style={{ margin: 0, color: "#ccc", fontSize: "1.05rem", fontWeight: "600" }}>{c.value}</p>
              </div>
            ))}
          </div>

          <div style={{ borderTop: "1px solid #ffffff08", paddingTop: "32px", textAlign: "center" }}>
            <p style={{ margin: 0, color: "#444", fontSize: "0.9rem", fontWeight: "500" }}>© 2025 Mahad Mubashir · DHA 4, Islamabad, Pakistan</p>
          </div>
        </div>
      </footer>

    </main>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div style={{ marginBottom: "48px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "12px" }}>
        <h2 style={{ fontSize: "0.8rem", fontWeight: "900", letterSpacing: "5px", textTransform: "uppercase", color: "#555", margin: 0, whiteSpace: "nowrap" }}>{title}</h2>
        <div style={{ flex: 1, height: "1px", background: "#ffffff0f" }} />
      </div>
      {subtitle && <p style={{ margin: 0, color: "#555", fontSize: "1rem", fontWeight: "500" }}>{subtitle}</p>}
    </div>
  );
}