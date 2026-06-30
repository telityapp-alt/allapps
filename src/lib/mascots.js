export const MASCOTS = {
  wave: "/mascots/hedgehog-wave.webp",
  peek: "/mascots/hedgehog-peek.webp",
  sitCard: "/mascots/hedgehog-sit-card.webp",
  footer: "/mascots/hedgehog-footer-wave.webp",
  point: "/mascots/hedgehog-point.webp",
  chat: "/mascots/hedgehog-chat.webp",
  celebrate: "/mascots/hedgehog-celebrate.webp",
  laptop: "/mascots/hedgehog-laptop.webp",
};

export function getLibraryMascot(index) {
  return index % 2 === 0 ? MASCOTS.peek : MASCOTS.sitCard;
}
