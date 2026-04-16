import { business } from "@/data/business";

export default function Menu() {
  if (!business.menuHighlights?.length) return null;

  return (
    <section id="menu" className="py-24 px-6 bg-brand">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-3">What We Serve</p>
          <h2 className="font-serif text-4xl font-bold">Menu Highlights</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {business.menuHighlights.map((item) => (
            <div key={item.name} className="bg-brand p-8 hover:bg-brand-mid transition">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-serif text-lg font-bold text-white">{item.name}</h3>
                <span className="text-accent font-bold text-lg ml-4 shrink-0">{item.price}</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
