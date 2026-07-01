import { createFileRoute } from "@tanstack/react-router";
import { Beaker, Boxes, Headphones, ShieldCheck, Truck, Users } from "lucide-react";
import { Eyebrow, SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Sunpro Healthcare" },
      { name: "description", content: "Sunpro offers manufacturing, distribution and partnership services for the healthcare industry." },
      { property: "og:title", content: "Sunpro Services" },
      { property: "og:description", content: "Manufacturing, distribution and partnership services." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Beaker, title: "Pharmaceutical Manufacturing", desc: "Placeholder — describe your contract and in-house manufacturing capabilities." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Placeholder — share your QA workflow, certifications and testing capabilities." },
  { icon: Boxes, title: "Product Portfolio Expansion", desc: "Placeholder — explain how partners can expand portfolios with Sunpro." },
  { icon: Truck, title: "Nationwide Distribution", desc: "Placeholder — describe your supply chain and reach." },
  { icon: Users, title: "Medical Affairs", desc: "Placeholder — describe scientific support for HCPs and partners." },
  { icon: Headphones, title: "Customer Support", desc: "Placeholder — describe responsive enquiry and after-sales support." },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-soft/60 to-background pb-16 pt-20">
        <div className="container-page max-w-3xl text-center">
          <Eyebrow>Our Services</Eyebrow>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
            End-to-end healthcare services
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            From manufacturing to distribution and medical affairs — Sunpro supports
            partners across the value chain. (Placeholder content — replace later.)
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="What we offer"
            title="A full suite of pharmaceutical services"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
