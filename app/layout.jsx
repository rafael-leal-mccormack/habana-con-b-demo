import "./globals.css";
import { Playfair_Display_SC, Karla } from "next/font/google";
import { business } from "@/data/business";

const playfairSC = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--nf-display",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--nf-body",
});

export const metadata = {
  title: `${business.name} | ${business.cuisine ?? "Restaurant"} — ${business.city}`,
  description: business.tagline,
};

function brandVars(b) {
  const p = b.primaryColor ?? "#1c0800";
  const a = b.accentColor ?? "#c2410c";
  return `:root {
    --biz-brand:       ${p};
    --biz-brand-mid:   color-mix(in srgb, ${p} 65%, white);
    --biz-accent:      ${a};
    --biz-accent-light:color-mix(in srgb, ${a} 65%, white);
    --biz-accent-pale: color-mix(in srgb, ${a} 8%, white);
    --biz-gold:        #c2960a;
  }`;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: brandVars(business) }} />
      </head>
      <body
        className={`${playfairSC.variable} ${karla.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
