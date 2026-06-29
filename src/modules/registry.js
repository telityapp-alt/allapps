import KeuanganPribadi from "./KeuanganPribadi.jsx";
import CompetitorAnalyzer from "./CompetitorAnalyzer.jsx";

// Maps a module slug → its mini-app component. Modules not yet built render a
// consistent "coming soon" placeholder (handled by the host).
export const MODULE_REGISTRY = {
  "keuangan-pribadi": KeuanganPribadi,
  "competitor-analyzer": CompetitorAnalyzer,
};

export function getModuleComponent(slug) {
  return MODULE_REGISTRY[slug] || null;
}
