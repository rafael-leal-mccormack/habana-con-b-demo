import { business } from "@/data/business";

export default function About() {
  return (
    <section className="py-24 px-6 bg-brand-mid">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-3">Our Story</p>
        <h2 className="font-serif text-4xl font-bold mb-6 leading-snug">{business.name}</h2>
        <p className="text-white/70 text-lg leading-relaxed">{business.description}</p>
      </div>
    </section>
  );
}
