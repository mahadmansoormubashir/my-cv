export default function Home() {
  return (
    <main style={{
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      backgroundColor: "#080812",
      color: "#e8e8e8",
      minHeight: "100vh",
      margin: "0",
      padding: "0",
    }}>

      {/* Hero Header */}
      <header style={{
        position: "relative",
        padding: "80px 24px 60px",
        textAlign: "center",
        overflow: "hidden",
        background: "radial-gradient(ellipse at 50% 0%, #1a0533 0%, #080812 70%)",
        borderBottom: "1px solid #ffffff0f",
      }}>
        <div style={{
          position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, #7b2fff15 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

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
          Available for Opportunities
        </div>

        <h1 style={{
          fontSize: "clamp(2.5rem, 8vw, 5rem)",
          fontWeight: "900",
          margin: "0 0 12px",
          background: "linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #7b2fff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-2px",
          lineHeight: "1.1",
        }}>
          Mahad Mubashir
        </h1>

        <p style={{
          fontSize: "1.2rem",
          color: "#888",
          margin: "0 0 32px",
          fontWeight: "400",
          letterSpacing: "1px",
        }}>
          Computer Science Student · Foundation University Islamabad
        </p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "12px",
          fontSize: "0.85rem",
        }}>
          {[
            { icon: "📍", text: "DHA 4, Islamabad" },
            { icon: "📞", text: "+92-300-5393037" },
            { icon: "✉️", text: "mahadmubashir123@gmail.com" },
          ].map((item) => (
            <div key={item.text} style={{
              background: "#ffffff08",
              border: "1px solid #ffffff15",
              borderRadius: "8px",
              padding: "8px 16px",
              color: "#aaa",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </header>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "60px 24px" }}>

        {/* Profile */}
        <Section title="About Me">
          <div style={{
            background: "linear-gradient(135deg, #7b2fff0d, #00d4ff0d)",
            border: "1px solid #7b2fff22",
            borderRadius: "16px",
            padding: "28px 32px",
          }}>
            <p style={{ lineHeight: "1.9", color: "#bbb", fontSize: "1rem", margin: 0 }}>
              Second-year Computer Science student at Foundation University (Semester 4) with hands-on experience
              in embedded systems, digital logic design, and software development. Built projects spanning hardware
              circuit design and software applications in Java and C++. Passionate about problem-solving, systems
              programming, and building practical tech solutions.
            </p>
          </div>
        </Section>

        {/* Education */}
        <Section title="Education">
          <div style={{
            background: "#0d0d1a",
            border: "1px solid #ffffff0f",
            borderRadius: "16px",
            padding: "24px 28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}>
            <div>
              <h3 style={{ margin: "0 0 4px", fontSize: "1.1rem", fontWeight: "700", color: "#fff" }}>
                Foundation University Islamabad
              </h3>
              <p style={{ margin: 0, color: "#7b2fff", fontSize: "0.9rem" }}>
                Bachelor of Science in Computer Science
              </p>
            </div>
            <div style={{
              background: "#7b2fff22",
              border: "1px solid #7b2fff44",
              borderRadius: "8px",
              padding: "6px 14px",
              color: "#7b2fff",
              fontSize: "0.8rem",
              fontWeight: "600",
              whiteSpace: "nowrap",
            }}>
              2024 — 2028 · Sem 4
            </div>
          </div>
        </Section>

        {/* Projects */}
        <Section title="Projects">
          <div style={{ display: "grid", gap: "16px" }}>
            <ProjectCard
              title="YouTube Notes & QR Code Generator"
              tech={["Python", "FastAPI", "Groq AI", "LLaMA 3.1"]}
              date="Sem 4 · 2025"
              description="A full-stack AI web app with two tools: a YouTube Notes Generator that fetches video transcripts and uses LLaMA 3.1 via Groq API to produce structured study notes, and a QR Code Generator that converts any URL into a downloadable QR image. Built with a FastAPI backend and vanilla JS frontend."
              color="#00d4ff"
            />
            <ProjectCard
              title="Smart Parking System"
              tech={["C++", "Data Structures", "Linked Lists"]}
              date="Sem 3 · 2025"
              description="A linked-list-based backend system to manage real-time parking slot availability. Features a ParkingSlot node class with slot ID and occupancy tracking, with full unit test coverage including edge cases."
              color="#7b2fff"
            />
            <ProjectCard
              title="4-Bit Binary Calculator"
              tech={["Digital Logic", "IC 7483", "IC 7486", "IC 7447"]}
              date="Sem 1 · 2024"
              description="Hardware binary calculator built on perfboard using TTL logic ICs, performing addition and XOR on 4-bit operands. Includes a 7-segment display decoder for real-time binary-to-decimal output."
              color="#00d4ff"
            />
            <ProjectCard
              title="Harvest Hub — Farm Management System"
              tech={["Java", "OOP", "File I/O"]}
              date="Sem 2 · 2024"
              description="A Java console application for managing farm inventory, crop records, and sales with full CRUD operations. Uses persistent file storage and a modular OOP class hierarchy."
              color="#7b2fff"
            />
            <ProjectCard
              title="Gear Guru — Inventory & Sales Tracker"
              tech={["C++", "File Handling", "Authentication"]}
              date="Sem 1 · 2024"
              description="C++ inventory management app with login authentication, product tracking, and automated profit calculation. Data persists across sessions using file streams."
              color="#00d4ff"
            />
          </div>
        </Section>

        {/* Skills */}
        <Section title="Technical Skills">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "14px" }}>
            <SkillBox label="Languages" emoji="💻" items={["C++", "Java", "Python", "HTML", "CSS"]} />
            <SkillBox label="Hardware" emoji="🔧" items={["IC 7483, 7486, 7447", "Perfboard Prototyping", "Voltage Regulators", "DIP Switches"]} />
            <SkillBox label="CS Concepts" emoji="🧠" items={["Data Structures", "OOP", "File I/O", "Unit Testing"]} />
            <SkillBox label="Tools" emoji="🛠️" items={["VS Code", "Git", "Linux CLI", "FastAPI"]} />
          </div>
        </Section>

        {/* Volunteer */}
        <Section title="Volunteer Work">
          <div style={{
            background: "#0d0d1a",
            border: "1px solid #ffffff0f",
            borderRadius: "16px",
            padding: "24px 28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "16px",
          }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: "0 0 8px", fontSize: "1rem", fontWeight: "700", color: "#fff" }}>
                Community Outreach — Blood Transfusion Awareness
              </h3>
              <p style={{ margin: 0, color: "#999", fontSize: "0.9rem", lineHeight: "1.7" }}>
                Researched safety protocols at AFIT blood bank and led social media campaigns debunking common myths.
                Organized educational workshops on hereditary blood disorders for university students.
              </p>
            </div>
            <div style={{
              background: "#00d4ff22",
              border: "1px solid #00d4ff44",
              borderRadius: "8px",
              padding: "6px 14px",
              color: "#00d4ff",
              fontSize: "0.8rem",
              fontWeight: "600",
              whiteSpace: "nowrap",
            }}>
              2025
            </div>
          </div>
        </Section>

        {/* Soft Skills */}
        <Section title="Soft Skills">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {["Problem Solving", "Teamwork & Collaboration", "Leadership", "Effective Communication"].map(skill => (
              <span key={skill} style={{
                background: "#ffffff08",
                border: "1px solid #ffffff15",
                color: "#ccc",
                padding: "10px 20px",
                borderRadius: "50px",
                fontSize: "0.88rem",
                fontWeight: "500",
              }}>{skill}</span>
            ))}
          </div>
        </Section>

      </div>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #ffffff08",
        background: "#080812",
        padding: "48px 24px",
      }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "32px" }}>
          <div>
            <h3 style={{ margin: "0 0 8px", fontSize: "1.1rem", fontWeight: "800", color: "#fff" }}>Mahad Mubashir</h3>
            <p style={{ margin: 0, color: "#555", fontSize: "0.85rem" }}>Computer Science Student</p>
          </div>
          <div>
            <p style={{ margin: "0 0 6px", color: "#555", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "2px" }}>Location</p>
            <p style={{ margin: 0, color: "#aaa", fontSize: "0.9rem" }}>DHA 4, Islamabad, Pakistan</p>
          </div>
          <div>
            <p style={{ margin: "0 0 6px", color: "#555", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "2px" }}>Contact</p>
            <p style={{ margin: "0 0 4px", color: "#aaa", fontSize: "0.9rem" }}>mahadmubashir123@gmail.com</p>
            <p style={{ margin: 0, color: "#aaa", fontSize: "0.9rem" }}>+92-300-5393037</p>
          </div>
        </div>
        <div style={{ maxWidth: "860px", margin: "32px auto 0", borderTop: "1px solid #ffffff08", paddingTop: "24px", textAlign: "center" }}>
          <p style={{ margin: 0, color: "#333", fontSize: "0.8rem" }}>© 2025 Mahad Mubashir · DHA 4, Islamabad, Pakistan</p>
        </div>
      </footer>

    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "56px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
        <h2 style={{
          fontSize: "0.7rem",
          fontWeight: "800",
          letterSpacing: "4px",
          textTransform: "uppercase",
          color: "#444",
          margin: 0,
          whiteSpace: "nowrap",
        }}>{title}</h2>
        <div style={{ flex: 1, height: "1px", background: "#ffffff0f" }} />
      </div>
      {children}
    </section>
  );
}

function ProjectCard({ title, tech, date, description, color }: {
  title: string;
  tech: string[];
  date: string;
  description: string;
  color: string;
}) {
  return (
    <div style={{
      background: "#0d0d1a",
      border: "1px solid #ffffff0f",
      borderRadius: "16px",
      padding: "24px 28px",
      borderLeft: `3px solid ${color}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px", marginBottom: "12px" }}>
        <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: "700", color: "#fff" }}>{title}</h3>
        <span style={{ fontSize: "0.75rem", color: "#555", whiteSpace: "nowrap" }}>{date}</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "14px" }}>
        {tech.map(t => (
          <span key={t} style={{
            background: `${color}15`,
            border: `1px solid ${color}33`,
            color: color,
            padding: "3px 10px",
            borderRadius: "50px",
            fontSize: "0.75rem",
            fontWeight: "600",
          }}>{t}</span>
        ))}
      </div>
      <p style={{ margin: 0, color: "#888", fontSize: "0.9rem", lineHeight: "1.75" }}>{description}</p>
    </div>
  );
}

function SkillBox({ label, emoji, items }: { label: string; emoji: string; items: string[] }) {
  return (
    <div style={{
      background: "#0d0d1a",
      border: "1px solid #ffffff0f",
      borderRadius: "16px",
      padding: "20px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
        <span style={{ fontSize: "1.1rem" }}>{emoji}</span>
        <p style={{ margin: 0, fontSize: "0.7rem", color: "#555", textTransform: "uppercase", letterSpacing: "2px", fontWeight: "700" }}>{label}</p>
      </div>
      {items.map(item => (
        <p key={item} style={{ margin: "6px 0", fontSize: "0.88rem", color: "#aaa", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ color: "#333" }}>—</span> {item}
        </p>
      ))}
    </div>
  );
}