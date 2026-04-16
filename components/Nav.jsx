import { business } from "@/data/business";

export default function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-5">
        <p className="font-serif text-white text-xl font-bold tracking-wide">{business.name}</p>
        <div className="flex items-center gap-4">
          {business.hours && (
            <span className="hidden md:block text-white/60 text-sm">{business.hours}</span>
          )}
          <a
            href={`tel:${business.phone.replace(/\D/g, "")}`}
            className="border border-accent text-accent font-semibold text-sm px-5 py-2 rounded-full hover:bg-accent hover:text-brand transition"
          >
            Reserve
          </a>
        </div>
      </div>
    </header>
  );
}
