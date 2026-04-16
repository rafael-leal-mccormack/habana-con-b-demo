import { business } from "@/data/business";

export default function Footer() {
  return (
    <footer className="bg-brand border-t border-white/5 text-white/40 text-sm py-8 px-6 text-center">
      <p className="font-serif text-white/60 text-base mb-1">{business.name}</p>
      <p className="mb-1">{business.address} · {business.phone}</p>
      <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
    </footer>
  );
}
