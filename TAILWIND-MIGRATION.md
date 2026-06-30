# Tailwind Migration Guide

Tailwind v3 sudah diinstall dan berjalan secara **hybrid** — CSS lama tetap jalan, Tailwind bisa dipakai paralel. Semua page/component baru wajib pakai Tailwind. File lama dimigrate bertahap.

---

## Status Setup

| Item | Status |
|---|---|
| `tailwindcss@3` + `postcss` + `autoprefixer` | ✅ Installed |
| `tailwind.config.js` | ✅ Configured (tokens lengkap) |
| `postcss.config.js` | ✅ Auto-generated |
| `src/index.css` | ✅ `@tailwind base/components/utilities` injected |

---

## Token Reference (Tailwind → CSS lama)

Semua warna, shadow, dll. sudah didefinisikan di `tailwind.config.js`. Pakai ini buat page baru, jangan hardcode hex lagi.

### Warna

```jsx
// Background
bg-sand          → #f5ecd9  (page background)
bg-cream         → #fffdf8  (card, sidebar)

// Border
border-border-warm  → #d9d1c2
border-border-sand  → #ddd4c4
border-border-muted → #e3dccc

// Text
text-ink         → #111318  (default)
text-ink-dark    → #0d1d38  (headings)
text-ink-mid     → #29405f  (body)
text-ink-soft    → #55606d  (secondary)
text-ink-muted   → #7b8594  (tertiary)
text-ink-faint   → #b8b0a0  (disabled)

// Brand
text-amber / bg-amber       → #f6a61e  (CTA)
text-blue-brand / bg-blue-brand → #377cf6
```

### Shadow

```jsx
shadow-cta       → CTA button shadow
shadow-ghost     → ghost button shadow
shadow-frame     → site-frame inset shadow
shadow-modal     → auth modal shadow
shadow-card-hover → stat card hover
```

### Typography

```jsx
font-sans                    → Source Sans 3, Segoe UI
tracking-tight-md            → -0.02em  (paling sering)
tracking-tight-lg            → -0.03em  (headings)
tracking-tight-2xl           → -0.045em (hero h1)
```

### Animasi

```jsx
animate-auth-fade   → overlay fade in
animate-auth-pop    → modal pop in
```

---

## Aturan untuk Page/Component Baru

Untuk semua file baru yang lo bikin ke depan:

**✅ Wajib:**
- Pakai Tailwind utility classes
- Gunakan token warna dari config (`text-ink-dark`, `bg-sand`, dll.)
- Gunakan `arbitrary values` untuk hal yang belum ada tokennya: `w-[min(1500px,calc(100vw-88px))]`
- Jangan bikin file CSS baru

**❌ Hindari:**
- `import './NamaFile.css'` di file baru
- Hardcode warna hex di `className` atau `style={{}}`
- Bikin class CSS custom kecuali untuk animasi kompleks (taruh di `index.css` dengan `@layer`)

---

## Contoh Pattern Tailwind untuk Project Ini

### Page shell (pengganti `.page-shell`)
```jsx
<div className="min-h-screen px-5 bg-sand">
```

### Card standar (pengganti `.db-stat-card` dll.)
```jsx
<div className="bg-cream border border-border-warm rounded-xl p-5 transition-shadow hover:shadow-card-hover">
```

### CTA Button (pengganti `.cta-button`)
```jsx
<button className="h-10 px-5 rounded-[10px] text-base font-extrabold tracking-tight-md cursor-pointer bg-amber border border-amber-border text-[#111] shadow-cta transition-[transform,box-shadow,filter] duration-120 hover:brightness-99 active:translate-y-px active:scale-[0.995] active:shadow-cta-active">
  Klik
</button>
```
> Tip: Jadikan ini komponen `<CtaButton>` supaya ga perlu nulis ulang.

### Ghost Button (pengganti `.ghost-button`)
```jsx
<button className="h-10 px-5 rounded-[10px] text-base font-extrabold tracking-tight-md cursor-pointer text-[#374352] border border-amber-border2 bg-gradient-to-b from-[#fffefb] to-[#f7f5f0] shadow-ghost transition-[transform,box-shadow,filter] duration-120 hover:brightness-99 active:translate-y-px active:shadow-ghost-active">
  Klik
</button>
```

### Topbar
```jsx
<header className="h-[60px] flex items-center justify-between px-[18px] border-b border-topbar-border bg-gradient-to-b from-topbar-from to-topbar-to">
```

### Hal yang TETAP butuh CSS biasa (jangan dipaksain ke Tailwind)

Beberapa pattern di project ini memang lebih bersih di CSS. Tulis di `index.css` pakai `@layer utilities` atau `@layer components`:

```css
/* index.css */
@layer components {
  /* Custom scrollbar — tidak ada di Tailwind */
  .scrollbar-hide::-webkit-scrollbar { display: none; }

  /* Wordmark bar animation — terlalu spesifik */
  .wordmark-mark i { ... }

  /* nth-child selectors */
  .wordmark-mark i:nth-child(1) { ... }
}
```

---

## File yang Perlu Dimigrate (Prioritas)

Urutan berdasarkan impact terbesar ke depan (page yang paling sering jadi template buat multi-app).

### 🔴 Prioritas Tinggi

#### 1. `src/pages/LegalPage.jsx` + `LegalPage.css`
- **Kenapa duluan:** Paling sederhana, ~83 baris CSS, cocok buat latihan pertama
- **CSS file yang dihapus:** `src/pages/LegalPage.css`
- **Import yang dihapus:** `import './LegalPage.css'` di `LegalPage.jsx`
- **Classes yang dimigrate:**

| CSS Class | Tailwind Equivalent |
|---|---|
| `.legal-shell` | `min-h-screen bg-sand text-ink-mid` |
| `.legal-topbar` | `flex items-center justify-between px-[clamp(20px,5vw,56px)] py-[18px] max-w-[760px] mx-auto` |
| `.legal-brand` | `text-xl font-bold text-ink-dark no-underline tracking-tight-md` |
| `.legal-back` | `text-sm font-semibold text-ink-soft no-underline hover:text-ink-dark` |
| `.legal-main` | `max-w-[760px] mx-auto px-[clamp(20px,5vw,56px)] pt-3 pb-[72px]` |
| `.legal-title` | `text-[clamp(26px,4vw,34px)] font-bold tracking-tight-lg text-ink-dark mb-1.5` |
| `.legal-updated` | `text-[13px] font-medium text-ink-muted mb-7` |
| `.legal-section` | `mb-6` |
| `.legal-h2` | `text-lg font-bold text-ink-dark mb-2` |
| `.legal-p` | `text-[15px] font-medium leading-relaxed text-ink-mid m-0` |
| `.legal-links` | `mt-9 pt-5 border-t border-border-muted flex gap-2.5 items-center text-sm font-semibold` |
| `.legal-links a` | `text-amber no-underline hover:underline` |
| `.legal-links span` | `text-ink-faint` |

---

#### 2. `src/pages/NotFound.jsx`
- **Kenapa duluan:** Sudah pakai inline styles, tinggal ganti ke className
- **Tidak ada CSS file** — semua inline style
- **Yang dimigrate:** Ganti semua `style={{}}` ke Tailwind classes

```jsx
// SEKARANG (inline styles)
<div style={{ minHeight: "100vh", background: "#f5ecd9", display: "flex", ... }}>

// SETELAH MIGRATE
<div className="min-h-screen bg-sand flex items-center justify-center p-6 text-center text-ink-mid">
```

---

#### 3. `src/pages/ResetPassword.jsx`
- **Kenapa:** Sudah pakai inline styles di wrapper, tinggal bersihkan
- **CSS:** Masih pakai `AuthModal.css` untuk `.ak-auth-*` classes — **JANGAN hapus dulu**, karena `AuthModal.jsx` masih pakai
- **Yang dimigrate:** Hanya wrapper `<div style={{...}}>` di return statement

```jsx
// Ganti wrapper style ini:
<div style={{ minHeight: "100vh", background: "#f5ecd9", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>

// Jadi:
<div className="min-h-screen bg-sand flex items-center justify-center p-5">
```

---

### 🟡 Prioritas Menengah

#### 4. `src/components/AuthModal.jsx` + `AuthModal.css`
- **Ukuran CSS:** ~202 baris
- **Complexity:** Sedang — ada animasi keyframes, tapi sudah didefinisikan di `tailwind.config.js`
- **Catatan penting:** `ResetPassword.jsx` juga import `AuthModal.css`, jadi migrate keduanya **barengan**
- **Classes kunci yang dimigrate:**

| CSS Class | Tailwind Equivalent |
|---|---|
| `.ak-auth-overlay` | `fixed inset-0 z-[9000] flex items-center justify-center p-5 bg-[rgba(13,29,56,0.32)] backdrop-blur-sm animate-auth-fade` |
| `.ak-auth-card` | `relative w-[min(420px,100%)] bg-cream border border-border-warm rounded-[18px] shadow-modal px-7 pt-[30px] pb-6 animate-auth-pop` |
| `.ak-auth-x` | `absolute top-3.5 right-4 border-none bg-transparent text-ink-muted text-[22px] leading-none cursor-pointer hover:text-ink-mid` |
| `.ak-auth-eyebrow` | `inline-block text-[13px] font-bold tracking-[0.01em] text-amber mb-2` |
| `.ak-auth-title` | `m-0 mb-1.5 text-2xl font-bold tracking-tight-lg text-ink-dark leading-[1.15]` |
| `.ak-auth-sub` | `m-0 text-sm font-medium text-ink-soft leading-[1.45]` |
| `.ak-auth-form` | `flex flex-col gap-3.5` |

---

#### 5. `src/pages/ProductDetail.jsx` + `ProductDetail.css`
- **Ukuran CSS:** ~264 baris
- **Complexity:** Sedang — ada `clamp()`, `grid-template-columns`, CSS variable `--pd-accent`
- **Catatan penting:** `--pd-accent` dipakai dinamis dari props → pakai `style={{ '--pd-accent': accent }}` + `text-[var(--pd-accent)]` di Tailwind

---

### 🔵 Prioritas Rendah (Migrate Terakhir)

#### 6. `src/App.jsx` + `App.css`
- **Ukuran CSS:** 1153 baris — terbesar
- **Complexity:** Sangat tinggi
  - CSS variables dinamis (`--panel-accent`, `--tab-accent`) di-set via `style={}`
  - Complex `MiniAppWindow` dengan banyak nested pseudo-elements
  - Media queries extensive (860px, 1100px, 1280px)
  - `tab-button::after` pseudo-element untuk active indicator
- **Strategi:** Migrate section by section, mulai dari yang paling atomic (topbar, hero, trust strip) lalu ke yang kompleks (tabs, panel, library)
- **Estimasi:** Pekerjaan paling besar — sisihkan waktu khusus

#### 7. `src/pages/Dashboard.jsx` + `Dashboard.css`
- **Ukuran CSS:** 1604 baris — terbesar kedua
- **Complexity:** Sangat tinggi
  - Sidebar + main layout dengan overflow scroll
  - Chat UI lengkap
  - Product grid, activity feed, settings form
  - Custom scrollbar styles
- **Strategi:** Migrate per-view (overview → automasi → library → chat → settings), jangan sekaligus
- **Estimasi:** Pekerjaan terbesar di project — potensial dipecah jadi beberapa PR/session

---

## Checklist per File Saat Migrate

Setiap kali migrate satu file, pastikan:

- [ ] Semua `className="..."` sudah pakai Tailwind
- [ ] Tidak ada `style={{}}` inline yang bisa diganti className (kecuali dynamic values)
- [ ] `import './NamaFile.css'` sudah dihapus dari JSX
- [ ] File `.css`-nya sudah dihapus
- [ ] Tidak ada warna hex hardcoded — pakai token config
- [ ] Build `npm run dev` tidak error setelah migrate
- [ ] Visual tidak berubah dari sebelum migrate

---

## Cara Handle CSS yang Tidak Ada Tokennya di Tailwind

### 1. Arbitrary values (paling sering)
```jsx
// clamp
text-[clamp(26px,4vw,34px)]

// min()
w-[min(1500px,calc(100vw-88px))]

// inset border
border-[border-inline:1px_solid_#ddd4c4]  // ← ini ga bisa, pakai style={{}}

// grid
grid-cols-[minmax(0,1fr)_320px]
```

### 2. CSS variable dinamis — tetap pakai `style={}`
```jsx
// Ini OK, karena nilainya dynamic
<div
  style={{ '--panel-accent': currentTab.accent }}
  className="..." // Tailwind untuk layout/spacing
>
```

### 3. Pseudo-elements kompleks (`::after`, `nth-child`) — taruh di `index.css`
```css
/* index.css */
@layer components {
  .tab-active-indicator::after {
    content: '';
    position: absolute;
    bottom: -1px;
    /* ... */
  }
}
```

### 4. Custom scrollbar — selalu di `index.css`
```css
@layer utilities {
  .scrollbar-custom::-webkit-scrollbar { width: 6px; }
  .scrollbar-custom::-webkit-scrollbar-thumb { background: #d9d1c2; border-radius: 3px; }
}
```

---

## Hal yang Jangan Dilakukan

| ❌ Jangan | ✅ Lakukan |
|---|---|
| Migrate semua file sekaligus | Migrate satu file per session |
| Hapus CSS file sebelum JSX selesai dimigrate | Hapus CSS file dan import-nya barengan di akhir |
| Hardcode `#f5ecd9` di className | Pakai `bg-sand` |
| Bikin file CSS baru untuk page baru | Tulis semua di className |
| Pakai `@apply` berlebihan | `@apply` hanya untuk pattern yang muncul 10x+ |
