import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, HeartPulse, ShieldCheck, Sparkles } from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import { Eyebrow, SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sunpro — Trusted Pharmaceutical Care" },
      { name: "description", content: "Learn more about Sunpro, our mission, values and commitment to integrated healthcare." },
      { property: "og:title", content: "About Sunpro" },
      { property: "og:description", content: "A healthcare company built on trust, science and care." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-soft/60 to-background pb-16 pt-20">
        <div className="container-page max-w-3xl text-center">
          <Eyebrow>About Sunpro</Eyebrow>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
            Building healthier lives through <span className="text-primary">trusted medicine.</span>
          </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Sunpro Healthcare Private Limited is a pharmaceutical marketing company based in Hyderabad, focused on respiratory, ENT, allergy, anti-infective and gastro care. We build a compact, clinically relevant portfolio and take it to prescribers across Andhra Pradesh and Telangana through a dedicated field team.
            </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-card)]">
            <img src={aboutImg} alt="Sunpro laboratory" width={1400} height={1200} loading="lazy" className="aspect-[5/4] w-full object-cover" />
          </div>
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="A patient-first pharmaceutical company"
              description="Sunpro was founded in 2023 by a team with over 20 years of combined experience in pharmaceutical sales and distribution across South India. We saw that prescribers in the region were well served on volume but poorly served on consistency — products that arrive late, quality that varies batch to batch, and no one to call when something goes wrong. We set out to be the opposite. Our portfolio is deliberately narrow. Every product is sourced from a WHO-GMP certified manufacturing partner, released against agreed specifications, and supported by a field team that knows the therapy area it is talking about. We do not chase every molecule. We build depth in respiratory and allied care, and we stand behind what we supply."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Focused respiratory and allied-care portfolio",
                "WHO-GMP certified manufacturing partners",
                "Batch-level quality checks before release",
                "Dedicated field presence across AP and Telangana",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary">
        <div className="container-page">
          <SectionHeading align="center" eyebrow="What we stand for" title="Values that shape every product" />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Trust", desc: "We build long-term relationships with healthcare professionals and patients." },
              { icon: HeartPulse, title: "Care", desc: "Patient outcomes guide every decision we make, from R&D to packaging." },
              { icon: Sparkles, title: "Excellence", desc: "We pursue quality without compromise, at every stage of the value chain." },
            ].map((v) => (
              <div key={v.title} className="rounded-3xl border border-border bg-card p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
