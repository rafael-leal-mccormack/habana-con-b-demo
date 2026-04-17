import { business } from "@/data/business";

export default function Gallery() {
  const images = business.images ?? [];
  if (images.length === 0) return null;

  return (
    <section className="py-20 px-6 bg-brand-mid overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-3">In Person &amp; On The Plate</p>
          <h2 className="font-display text-4xl text-white">Our Space &amp; Food</h2>
        </div>

        {/* Grid — adapts to image count */}
        {images.length === 1 && (
          <div className="relative rounded-2xl overflow-hidden h-[400px] group">
            <img
              src={images[0]}
              alt={business.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}

        {images.length === 2 && (
          <div className="grid grid-cols-5 gap-3 h-[420px]">
            <div className="col-span-3 relative rounded-2xl overflow-hidden group">
              <img
                src={images[0]}
                alt={`${business.name} — interior`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="col-span-2 relative rounded-2xl overflow-hidden group">
              <img
                src={images[1]}
                alt={`${business.name} — food`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        )}

        {images.length >= 3 && (
          <div className="grid grid-cols-5 gap-3">
            {/* Large left */}
            <div className="col-span-3 relative rounded-2xl overflow-hidden h-[460px] group">
              <img
                src={images[0]}
                alt={`${business.name} — interior`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            {/* Right stack */}
            <div className="col-span-2 flex flex-col gap-3">
              <div className="relative rounded-2xl overflow-hidden flex-1 group">
                <img
                  src={images[1]}
                  alt={`${business.name} — dish`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="relative rounded-2xl overflow-hidden flex-1 group">
                <img
                  src={images[2]}
                  alt={`${business.name} — atmosphere`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>
        )}

        {/* More-than-3 overflow strip */}
        {images.length > 3 && (
          <div className="flex gap-3 mt-3">
            {images.slice(3).map((src, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden flex-1 h-[180px] group">
                <img
                  src={src}
                  alt={`${business.name} — photo ${i + 4}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
