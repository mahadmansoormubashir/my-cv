export default function Home() {
  return (
    <main style={{
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      backgroundColor: "#0f0f0f",
      color: "#e8e8e8",
      minHeight: "100vh",
      padding: "0",
      margin: "0",
    }}>

      {/* Hero / Header */}
      <header style={{
        background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)",
        borderBottom: "1px solid #00d4ff33",
        padding: "60px 40px 40px",
        textAlign: "center",
      }}>
        <h1 style={{
          fontSize: "clamp(2rem, 6vw, 3.5rem)",
          fontWeight: "800",
          margin: "0 0 8px",
          background: "linear-gradient(90deg, #00d4ff, #7b2fff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-1px",
        }}>
          Mahad Mubashir
        </h1>
        <p style={{ color: "#00d4ff", fontSize: "1.1rem", marginBottom: "20px", letterSpacing: "2px", textTransform: "uppercase" }}>
          Computer Science Student
        </p>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "16px", fontSize: "0.9rem", color: "#aaa" }}>
          <span>📍 DHA 4, Islamabad, Pakistan</span>
          <span>📞 +92-300-5393037</span>
          <a href="mailto:mahadmubashir123@gmail.com" style={{ color: "#00d4ff", textDecoration: "none" }}>
            ✉️ mahadmubashir123@gmail.com
          </a>
        </div>
      </header>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 24px" }}>

        {/* Profile */}
        <Section title="Profile">
          <p style={{ lineHeight: "1.8", color: "#ccc", fontSize: "1rem" }}>
            Second-year Computer Science student at Foundation University (Semester 4) with hands-on experience
            in embedded systems, digital logic design, and software development. Built projects spanning hardware
            circuit design and software applications in Java and C++, including a data-structures project
            implementing a linked-list-based parking system. Passionate about problem-solving, systems programming,
            and building practical tech solutions.
          </p>
        </Section>

        {/* Education */}
        <Section title="Education">
          <Card
            title="Foundation University Islamabad"
            subtitle="Bachelor of Science in Computer Science"
            tag="2024 — 2028 · 2nd Year, Sem 4"
          />
        </Section>

        {/* Projects */}
        <Section title="Projects">
          <Card
            title="Smart Parking System"
            subtitle="C++ · Data Structures · Linked Lists"
            tag="Sem 3 — 2025"
            bullets={[
              "Implemented a linked-list-based backend to manage and query real-time parking slot availability.",
              "Designed ParkingSlot node class with slot ID, occupancy status, and pointer chaining.",
              "Wrote unit tests validating all core operations with full edge case coverage.",
            ]}
          />
          <Card
            title="4-Bit Binary Calculator"
            subtitle="Digital Logic · ICs 7483 / 7486 / 7447 · Perfboard"
            tag="Sem 1 — 2024 (DLD)"
            bullets={[
              "Designed and built a hardware binary calculator for addition and XOR on 4-bit operands using TTL logic ICs.",
              "Wired 7-segment display decoder (IC 7447) for real-time binary-to-decimal output on perfboard.",
              "Debugged signal integrity issues and documented full circuit schematic.",
            ]}
          />
          <Card
            title="Harvest Hub — Farm Management System"
            subtitle="Java · File I/O · OOP"
            tag="Sem 2 — 2024 (OOP)"
            bullets={[
              "Developed a Java console application to manage farm inventory, crop records, and sales with full CRUD operations.",
              "Implemented file handling for persistent storage; designed modular class hierarchy following OOP principles.",
            ]}
          />
          <Card
            title="Gear Guru — Inventory & Sales Tracker"
            subtitle="C++ · File Handling · Authentication"
            tag="Sem 1 — 2024"
            bullets={[
              "Built a C++ inventory management app with login authentication, product tracking, and profit calculation.",
              "Used file streams for persistent data storage across sessions.",
            ]}
          />
        </Section>

        {/* Skills */}
        <Section title="Technical Skills">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            <SkillBox label="Languages" items={["C++", "Java", "HTML", "CSS"]} />
            <SkillBox label="Hardware" items={["Digital ICs (7483, 7486, 7447)", "Perfboard Prototyping", "Voltage Regulators", "DIP Switches"]} />
            <SkillBox label="CS Concepts" items={["Data Structures", "OOP", "File I/O", "Unit Testing"]} />
            <SkillBox label="Tools" items={["VS Code", "Git (basic)", "Linux CLI"]} />
          </div>
        </Section>

        {/* Extracurricular */}
        <Section title="Extracurricular & Volunteer Work">
          <Card
            title="Community Outreach Volunteer — Blood Transfusion Awareness"
            tag="2025"
            bullets={[
              "Researched safety protocols at AFIT blood bank and led social media campaigns debunking common myths.",
              "Organized educational workshops on hereditary blood disorders for university students.",
            ]}
          />
        </Section>

        {/* Soft Skills */}
        <Section title="Soft Skills">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {["Problem Solving", "Teamwork & Collaboration", "Leadership", "Effective Communication"].map(skill => (
              <span key={skill} style={{
                background: "#1a1a2e",
                border: "1px solid #00d4ff44",
                color: "#00d4ff",
                padding: "6px 16px",
                borderRadius: "20px",
                fontSize: "0.85rem",
              }}>{skill}</span>
            ))}
          </div>
        </Section>

      </div>

      <footer style={{ textAlign: "center", padding: "24px", color: "#444", fontSize: "0.8rem", borderTop: "1px solid #1a1a1a" }}>
        © 2025 Mahad Mubashir
      </footer>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: "48px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
        <h2 style={{
          fontSize: "0.75rem",
          fontWeight: "700",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "#00d4ff",
          margin: 0,
        }}>{title}</h2>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, #00d4ff33, transparent)" }} />
      </div>
      {children}
    </section>
  );
}

function Card({ title, subtitle, tag, bullets }) {
  return (
    <div style={{
      background: "#141414",
      border: "1px solid #222",
      borderRadius: "10px",
      padding: "20px 24px",
      marginBottom: "16px",
      borderLeft: "3px solid #7b2fff",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "4px" }}>
        <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: "700", color: "#fff" }}>{title}</h3>
        {tag && <span style={{ fontSize: "0.78rem", color: "#666", whiteSpace: "nowrap" }}>{tag}</span>}
      </div>
      {subtitle && <p style={{ margin: "0 0 12px", fontSize: "0.85rem", color: "#7b2fff" }}>{subtitle}</p>}
      {bullets && (
        <ul style={{ margin: 0, paddingLeft: "18px", color: "#aaa", fontSize: "0.9rem", lineHeight: "1.8" }}>
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
    </div>
  );
}

function SkillBox({ label, items }) {
  return (
    <div style={{
      background: "#141414",
      border: "1px solid #222",
      borderRadius: "10px",
      padding: "16px",
    }}>
      <p style={{ margin: "0 0 10px", fontSize: "0.75rem", color: "#00d4ff", textTransform: "uppercase", letterSpacing: "1px" }}>{label}</p>
      {items.map(item => (
        <p key={item} style={{ margin: "4px 0", fontSize: "0.88rem", color: "#ccc" }}>• {item}</p>
      ))}
    </div>
  );
}