import { business } from "@/data/business";

export default function Cta() {
  return (
    <section className="py-24 px-6 bg-accent">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-serif text-4xl font-bold text-brand mb-4">Join Us for a Meal</h2>
        <p className="text-brand/70 text-lg mb-10">
          We'd love to have you. Call us to reserve your table.
        </p>
        <a
          href={`tel:${business.phone.replace(/\D/g, "")}`}
          className="bg-brand text-white font-bold text-xl px-12 py-4 rounded-full hover:bg-brand-mid transition inline-block"
        >
          Call {business.phone}
        </a>
      </div>
    </section>
  );
}
