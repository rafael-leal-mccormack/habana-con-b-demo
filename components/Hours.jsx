import { business } from "@/data/business";

export default function Hours() {
  return (
    <section className="py-20 px-6 bg-brand-mid">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-3">Find Us</p>
        <h2 className="font-serif text-3xl font-bold mb-10">Hours &amp; Location</h2>
        <div className="grid sm:grid-cols-2 gap-8 text-left">
          {business.hours && (
            <div className="bg-brand rounded-2xl p-8 border border-white/10">
              <p className="text-accent text-sm font-semibold uppercase tracking-wide mb-2">Hours</p>
              <p className="text-white text-lg">{business.hours}</p>
            </div>
          )}
          <div className="bg-brand rounded-2xl p-8 border border-white/10">
            <p className="text-accent text-sm font-semibold uppercase tracking-wide mb-2">Location</p>
            <p className="text-white text-lg mb-1">{business.address}</p>
            <a
              href={`tel:${business.phone.replace(/\D/g, "")}`}
              className="text-accent hover:underline"
            >
              {business.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
