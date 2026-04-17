import { business } from "@/data/business";

export default function About() {
  // Prefer heroImage for the About split — keeps it separate from Gallery images[]
  const firstImage = business.heroImage ?? business.images?.[0] ?? null;

  // With photo: split layout
  if (firstImage) {
    return (
      <section className="py-24 bg-brand-mid overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden h-[380px] md:h-[460px] group">
            <img
              src={firstImage}
              alt={business.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle warm vignette */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/40 to-transparent" />
            {/* Gold rule accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
          </div>

          {/* Copy */}
          <div>
            <p className="text-accent uppercase tracking-widest text-xs font-body font-semibold mb-4">Our Story</p>
            <h2 className="font-display text-4xl text-white leading-tight mb-6">{business.name}</h2>
            <p className="text-white/65 font-body text-lg leading-relaxed mb-8">{business.description}</p>

            {/* Location / hours pill */}
            <div className="flex flex-col gap-3">
              {business.hours && (
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center shrink-0">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <span className="text-white/50 font-body text-sm">{business.hours}</span>
                </div>
              )}
              {(business.address ?? business.city) && (
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center shrink-0">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <span className="text-white/50 font-body text-sm">{business.address ?? business.city}</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>
    );
  }

  // Fallback: centered text only
  return (
    <section className="py-24 px-6 bg-brand-mid">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-accent uppercase tracking-widest text-sm font-body font-semibold mb-3">Our Story</p>
        <h2 className="font-display text-4xl font-bold mb-6 leading-snug">{business.name}</h2>
        <p className="text-white/70 font-body text-lg leading-relaxed">{business.description}</p>
      </div>
    </section>
  );
}
