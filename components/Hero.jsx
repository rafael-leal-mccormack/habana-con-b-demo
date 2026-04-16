import { business } from "@/data/business";

export default function Hero() {
  const hasPhoto = !!business.heroImage;

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={
        hasPhoto
          ? { backgroundImage: `url(${business.heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }
          : {}
      }
    >
      {/* Background — solid brand color when no photo */}
      {!hasPhoto && <div className="absolute inset-0 bg-brand" />}

      {/* Dark cinematic overlay — works for both photo + solid */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 pointer-events-none" />
      {/* Warm color tint at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-brand/60 to-transparent pointer-events-none" />

      {/* Warm glow accent */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 pt-48 text-center w-full">

        {/* Cuisine pill */}
        {business.cuisine && (
          <div className="animate-fade-up inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 mb-10">
            <span className="w-1 h-1 rounded-full bg-gold" />
            <span className="text-gold/90 text-xs font-body font-semibold tracking-[0.25em] uppercase">
              {business.cuisine} · {business.city}
            </span>
            <span className="w-1 h-1 rounded-full bg-gold" />
          </div>
        )}

        {/* Restaurant name */}
        <h1
          className="animate-fade-up delay-100 font-display text-white leading-[0.95] mb-6"
          style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
        >
          {business.name}
        </h1>

        {/* Tagline */}
        <p className="animate-fade-up delay-200 text-white/60 font-body text-lg max-w-[38ch] mx-auto leading-relaxed mb-12">
          {business.tagline}
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#menu"
            className="bg-accent hover:bg-accent-light text-white font-body font-bold px-10 py-4 rounded-2xl text-base transition-colors"
          >
            View Our Menu
          </a>
          <a
            href={`tel:${business.phone.replace(/\D/g, "")}`}
            className="border border-white/25 hover:border-white/50 text-white/80 hover:text-white font-body font-semibold px-10 py-4 rounded-2xl text-base transition-colors backdrop-blur-sm"
          >
            Reserve a Table
          </a>
        </div>

        {/* Info bar */}
        <div className="animate-fade-up delay-400 flex flex-wrap justify-center gap-x-10 gap-y-3">
          {business.hours && (
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold/50">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <span className="text-white/40 font-body text-sm">{business.hours}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold/50">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <span className="text-white/40 font-body text-sm">{business.address ?? business.city}</span>
          </div>
          {business.phone && (
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold/50">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 4.99a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="text-white/40 font-body text-sm">{business.phone}</span>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-in delay-400 absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/20 text-xs font-body tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </div>

    </section>
  );
}
