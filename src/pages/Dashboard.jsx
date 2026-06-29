import { useState } from "react";
import "./Dashboard.css";

/* ── Inline SVG icons (24×24, stroke-based, currentColor) ── */
function IconGrid() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function IconSparkle() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6L12 3z" />
      <path d="M19 17l.9 2.7L22 21l-2.1.3L19 24l-.9-2.7L16 21l2.1-.3L19 17z" />
      <path d="M5 3l.6 1.8L7 6l-1.4.2L5 8l-.6-1.8L3 6l1.4-.2L5 3z" />
    </svg>
  );
}

function IconZap() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconFile() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="13" y2="17" />
    </svg>
  );
}

function IconReceipt() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 2v20l3-2 2 2 3-2 3 2 2-2 3 2V2l-3 2-2-2-3 2-3-2-2 2-3-2z" />
      <line x1="9" y1="9" x2="15" y2="9" />
      <line x1="9" y1="13" x2="15" y2="13" />
    </svg>
  );
}

function IconGear() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function IconHeadset() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

function IconPeople() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconActivity() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

/* ── Nav item data ─────────────────────────────────────────── */
const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: <IconGrid /> },
  { id: "ai-agent", label: "AI Agent", icon: <IconSparkle /> },
  { id: "automasi", label: "Automasi", icon: <IconZap /> },
  { id: "file", label: "File", icon: <IconFile /> },
  { id: "tagihan", label: "Tagihan", icon: <IconReceipt /> },
  { id: "pengaturan", label: "Pengaturan", icon: <IconGear /> },
  { id: "dukungan", label: "Dukungan", icon: <IconHeadset /> },
];

/* ── Dashboard component ───────────────────────────────────── */
export default function Dashboard() {
  const [activeNav, setActiveNav] = useState("dashboard");

  function handleNavClick(id) {
    setActiveNav(id);
    window.history.pushState({}, "", "/dashboard");
  }

  return (
    <div className="db-shell">
      {/* ── Sidebar ─────────────────────────────────────────── */}
      <aside className="db-sidebar">
        {/* Logo */}
        <div className="db-sidebar-logo">
          <span className="db-wordmark">SiapPakai</span>
        </div>

        {/* Nav */}
        <nav aria-label="Main navigation">
          <ul className="db-nav" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="db-nav-item">
                <button
                  className={`db-nav-link${activeNav === item.id ? " db-nav-active" : ""}`}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={activeNav === item.id ? "page" : undefined}
                >
                  <span className="db-nav-icon">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* User footer */}
        <div className="db-sidebar-footer">
          <div className="db-avatar" aria-hidden="true">
            GA
          </div>
          <div>
            <div className="db-sidebar-user-name">Grou App</div>
            <div className="db-sidebar-user-role">Workspace</div>
          </div>
        </div>
      </aside>

      {/* ── Main content ────────────────────────────────────── */}
      <main className="db-main">
        <div className="db-main-inner">
          {/* Welcome bar */}
          <div className="db-welcome">
            <h1 className="db-welcome-heading">Selamat Datang, Grou App! 👋</h1>
            <p className="db-welcome-sub">
              Siap mengotomasi proses bisnis Anda hari ini?
            </p>
          </div>

          {/* Stats row */}
          <div className="db-stats-row">
            {/* Saldo */}
            <div className="db-stat-card">
              <div className="db-stat-top">
                <span className="db-stat-value">0</span>
                <span className="db-stat-label">Saldo</span>
              </div>
              <button
                className="cta-button"
                style={{
                  alignSelf: "flex-start",
                  fontSize: "13px",
                  padding: "7px 16px",
                }}
              >
                Isi Saldo
              </button>
            </div>

            {/* Automasi Aktif */}
            <div className="db-stat-card">
              <div className="db-stat-top">
                <span className="db-stat-value">0</span>
                <span className="db-stat-label">Automasi Aktif</span>
              </div>
            </div>

            {/* Total Penggunaan */}
            <div className="db-stat-card">
              <div className="db-stat-top">
                <span className="db-stat-value">0</span>
                <span className="db-stat-label">
                  Total Penggunaan bulan ini
                </span>
              </div>
            </div>
          </div>

          {/* Mulai Cepat */}
          <section aria-labelledby="mulai-cepat-heading">
            <div className="db-section-header">
              <h2 className="db-section-title" id="mulai-cepat-heading">
                Mulai Cepat
              </h2>
              <button className="db-section-link">Lihat Semua</button>
            </div>

            <div className="db-auto-card" role="button" tabIndex={0}>
              <div className="db-auto-card-header">
                <span className="db-chip db-chip-amber">Automation</span>
                <span className="db-chip db-chip-green">Free</span>
              </div>

              <h3 className="db-auto-card-title">ATS-Friendly CV Converter</h3>

              <p className="db-auto-card-desc">
                Automasi berbasis AI untuk mengubah CV lama berbasis teks (bukan
                JPG) menjadi format yang ramah ATS (ATS-Friendly) secara instan
                dan gratis.
              </p>

              <div className="db-auto-card-footer">
                <span className="db-usage-count">
                  <IconPeople />4 pengguna
                </span>
              </div>
            </div>
          </section>

          {/* Aktivitas Terbaru */}
          <section aria-labelledby="aktivitas-heading">
            <div className="db-section-header">
              <h2 className="db-section-title" id="aktivitas-heading">
                Aktivitas Terbaru
              </h2>
              <button className="db-section-link">Lihat Semua</button>
            </div>

            <div className="db-activity-list">
              <div className="db-activity-item">
                <div className="db-activity-icon" aria-hidden="true">
                  <IconActivity />
                </div>
                <div className="db-activity-body">
                  <div className="db-activity-row">
                    <span className="db-activity-title">
                      ATS-Friendly CV Converter
                    </span>
                    <div className="db-activity-meta">
                      <span className="db-chip db-chip-green">Completed</span>
                      <span className="db-activity-time">2 hours ago</span>
                    </div>
                  </div>
                  <p className="db-activity-snippet">CV telah siap...</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
