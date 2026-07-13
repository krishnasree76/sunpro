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
  { icon: Beaker, title: "Contract Manufacturing Partnerships", desc: "Our products are manufactured at WHO-GMP certified partner facilities under agreed specifications, with defined release criteria for every batch." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Every batch is reviewed against its certificate of analysis before release. We audit our manufacturing partners and maintain full batch traceability from plant to prescriber." },
  { icon: Boxes, title: "In-Licensing and Portfolio Partnerships", desc: "We in-license and market brands for manufacturers seeking coverage in Andhra Pradesh and Telangana. If you have a product and need a route to market, talk to us." },
  { icon: Truck, title: "Regional Distribution", desc: "A stockist and distributor network across Andhra Pradesh and Telangana, supported by a field team calling on prescribers and pharmacies directly." },
  { icon: Users, title: "Scientific and Product Support", desc: "Prescribing information, product literature and clinical queries handled directly by our team. We do not leave a doctor waiting for an answer." },
  { icon: Headphones, title: "Customer Support", desc: "Order enquiries, supply issues and complaints go to a named person, not a ticket queue. Reachable on phone and WhatsApp during business hours." },
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
            Sunpro works with manufacturers who have good products and no route to market, and with prescribers who want a supplier they can rely on. We sit between the two — sourcing, marketing and distributing quality medicines across our therapy areas.
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
