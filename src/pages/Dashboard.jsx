import { useState } from "react";
import "./Dashboard.css";

/* ── Inline SVG icons ──────────────────────────────────────── */
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
function IconLayers() {
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
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
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
function IconPlay() {
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
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

/* ── Nav items ─────────────────────────────────────────────── */
const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: <IconGrid /> },
  { id: "ai-agent", label: "AI Agent", icon: <IconSparkle /> },
  { id: "automasi", label: "Automasi", icon: <IconZap /> },
  { id: "module", label: "Module", icon: <IconLayers /> },
  { id: "file", label: "File", icon: <IconFile /> },
  { id: "tagihan", label: "Tagihan", icon: <IconReceipt /> },
  { id: "pengaturan", label: "Pengaturan", icon: <IconGear /> },
  { id: "dukungan", label: "Dukungan", icon: <IconHeadset /> },
];

/* ── Data: Automasi (product per-run) ──────────────────────── */
const AUTOMASI_CARDS = [
  {
    id: "ats-cv",
    title: "ATS-Friendly CV Converter",
    desc: "Ubah CV lama berbasis teks menjadi format ATS-Friendly secara instan.",
    type: "Automation",
    pricing: "Free",
    users: 4,
  },
  {
    id: "invoice-gen",
    title: "Invoice Generator",
    desc: "Generate invoice profesional dari data sederhana dalam hitungan detik.",
    type: "Automation",
    pricing: "Free",
    users: 12,
  },
  {
    id: "email-blast",
    title: "Email Blast Personalizer",
    desc: "Personalisasi ratusan email marketing secara otomatis dengan AI.",
    type: "Automation",
    pricing: "Paid",
    users: 31,
  },
  {
    id: "social-caption",
    title: "Social Media Caption AI",
    desc: "Generate caption Instagram, Twitter, dan LinkedIn dari brief singkat.",
    type: "Automation",
    pricing: "Free",
    users: 58,
  },
  {
    id: "pdf-summarizer",
    title: "PDF Summarizer",
    desc: "Rangkum dokumen PDF panjang menjadi poin-poin penting dalam menit.",
    type: "Automation",
    pricing: "Paid",
    users: 19,
  },
  {
    id: "data-cleaner",
    title: "Data Cleaner & Formatter",
    desc: "Bersihkan dan format data spreadsheet kotor secara otomatis.",
    type: "Automation",
    pricing: "Paid",
    users: 7,
  },
];

/* ── Data: Module (fitur besar / produk penuh) ─────────────── */
const MODULE_CARDS = [
  {
    id: "keuangan-pribadi",
    title: "Manajer Keuangan Pribadi",
    desc: "Lacak pengeluaran, buat anggaran, dan analisis pola keuangan bulanan kamu secara otomatis.",
    category: "Keuangan",
    pricing: "Free",
    users: 143,
  },
  {
    id: "crm-lite",
    title: "CRM Lite",
    desc: "Kelola kontak, pipeline penjualan, dan follow-up klien dalam satu tempat yang sederhana.",
    category: "Bisnis",
    pricing: "Pro",
    users: 67,
  },
  {
    id: "hr-attendance",
    title: "HR Attendance Tracker",
    desc: "Catat kehadiran karyawan, kelola izin, dan generate laporan bulanan otomatis.",
    category: "HR",
    pricing: "Pro",
    users: 34,
  },
  {
    id: "content-planner",
    title: "Content Planner",
    desc: "Rencanakan kalender konten, schedule posting, dan pantau performa konten kamu.",
    category: "Marketing",
    pricing: "Free",
    users: 211,
  },
  {
    id: "inventory-manager",
    title: "Inventory Manager",
    desc: "Pantau stok barang, kelola supplier, dan dapatkan notifikasi restock otomatis.",
    category: "Operasional",
    pricing: "Pro",
    users: 88,
  },
  {
    id: "project-tracker",
    title: "Project Tracker",
    desc: "Kelola proyek tim dengan task board, deadline, dan laporan progres mingguan.",
    category: "Produktivitas",
    pricing: "Free",
    users: 176,
  },
];

/* ── Reusable card component ───────────────────────────────── */
function ProductCard({
  title,
  desc,
  typeBadge,
  pricingBadge,
  users,
  ctaLabel,
}) {
  return (
    <article className="db-product-card">
      <div className="db-product-card-header">
        <div className="db-product-card-chips">
          <span className={`db-chip db-chip-amber`}>{typeBadge}</span>
          <span
            className={`db-chip ${pricingBadge === "Free" ? "db-chip-green" : "db-chip-blue"}`}
          >
            {pricingBadge}
          </span>
        </div>
      </div>
      <h3 className="db-product-card-title">{title}</h3>
      <p className="db-product-card-desc">{desc}</p>
      <div className="db-product-card-footer">
        <span className="db-usage-count">
          <IconPeople />
          {users} pengguna
        </span>
        <button
          className="ghost-button"
          style={{ fontSize: "13px", height: "32px", padding: "0 14px" }}
        >
          <IconPlay /> {ctaLabel}
        </button>
      </div>
    </article>
  );
}

/* ── View: Dashboard (home) ────────────────────────────────── */
function ViewDashboard() {
  return (
    <>
      <div className="db-welcome">
        <h1 className="db-welcome-heading">Selamat Datang, Grou App! 👋</h1>
        <p className="db-welcome-sub">
          Siap mengotomasi proses bisnis Anda hari ini?
        </p>
      </div>

      <div className="db-stats-row">
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
              height: "34px",
              padding: "0 16px",
            }}
          >
            Isi Saldo
          </button>
        </div>
        <div className="db-stat-card">
          <div className="db-stat-top">
            <span className="db-stat-value">0</span>
            <span className="db-stat-label">Automasi Aktif</span>
          </div>
        </div>
        <div className="db-stat-card">
          <div className="db-stat-top">
            <span className="db-stat-value">0</span>
            <span className="db-stat-label">Total Penggunaan bulan ini</span>
          </div>
        </div>
      </div>

      <section aria-labelledby="mulai-cepat-heading">
        <div className="db-section-header">
          <h2 className="db-section-title" id="mulai-cepat-heading">
            Mulai Cepat
          </h2>
          <button className="db-section-link">Lihat Semua</button>
        </div>
        <div className="db-product-grid db-product-grid-1">
          <ProductCard
            title="ATS-Friendly CV Converter"
            desc="Automasi berbasis AI untuk mengubah CV lama berbasis teks (bukan JPG) menjadi format yang ramah ATS secara instan dan gratis."
            typeBadge="Automation"
            pricingBadge="Free"
            users={4}
            ctaLabel="Jalankan"
          />
        </div>
      </section>

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
    </>
  );
}

/* ── View: Automasi ────────────────────────────────────────── */
function ViewAutomasi() {
  return (
    <>
      <div className="db-view-header">
        <div>
          <h1 className="db-view-title">Automasi</h1>
          <p className="db-view-sub">
            Jalankan automasi sekali klik — setiap kartu adalah satu pekerjaan
            spesifik.
          </p>
        </div>
      </div>
      <div className="db-product-grid">
        {AUTOMASI_CARDS.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            desc={item.desc}
            typeBadge={item.type}
            pricingBadge={item.pricing}
            users={item.users}
            ctaLabel="Jalankan"
          />
        ))}
      </div>
    </>
  );
}

/* ── View: Module ──────────────────────────────────────────── */
function ViewModule() {
  return (
    <>
      <div className="db-view-header">
        <div>
          <h1 className="db-view-title">Module</h1>
          <p className="db-view-sub">
            Sistem lengkap yang bisa kamu aktifkan — bukan satu tugas, tapi satu
            solusi penuh.
          </p>
        </div>
      </div>
      <div className="db-product-grid">
        {MODULE_CARDS.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            desc={item.desc}
            typeBadge={item.category}
            pricingBadge={item.pricing}
            users={item.users}
            ctaLabel="Buka"
          />
        ))}
      </div>
    </>
  );
}

/* ── View: placeholder for other nav items ─────────────────── */
function ViewPlaceholder({ label }) {
  return (
    <div className="db-placeholder">
      <span className="db-placeholder-label">{label}</span>
      <p className="db-placeholder-sub">
        Halaman ini sedang dalam pengembangan.
      </p>
    </div>
  );
}

/* ── Main Dashboard component ──────────────────────────────── */
export default function Dashboard() {
  const [activeNav, setActiveNav] = useState("dashboard");

  function handleNavClick(id) {
    setActiveNav(id);
    window.history.pushState({}, "", "/dashboard");
  }

  function renderView() {
    switch (activeNav) {
      case "dashboard":
        return <ViewDashboard />;
      case "automasi":
        return <ViewAutomasi />;
      case "module":
        return <ViewModule />;
      default:
        return (
          <ViewPlaceholder
            label={
              NAV_ITEMS.find((n) => n.id === activeNav)?.label ?? activeNav
            }
          />
        );
    }
  }

  return (
    <div className="db-shell">
      <aside className="db-sidebar">
        <div className="db-sidebar-logo">
          <span className="db-wordmark">SiapPakai</span>
        </div>

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

      <main className="db-main">
        <div className="db-main-inner">{renderView()}</div>
      </main>
    </div>
  );
}
