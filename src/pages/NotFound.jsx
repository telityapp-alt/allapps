import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-sand p-6 text-center text-ink-mid flex items-center justify-center">
      <div>
        <p className="m-0 text-5xl font-bold text-ink-dark">404</p>
        <h1 className="text-[22px] font-bold text-ink-dark">
          Halaman tidak ditemukan
        </h1>
        <p className="text-[15px] font-medium text-ink-soft">
          Tautan mungkin salah atau halaman sudah dipindahkan.
        </p>
        <Link to="/" className="cta-button mt-4 inline-flex no-underline">
          Kembali ke beranda
        </Link>
      </div>
    </div>
  );
}
