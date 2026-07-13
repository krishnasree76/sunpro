import { useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Wind,
  Stethoscope,
  Sparkles,
  Pill,
  FlaskConical,
  HeartPulse,
  Award,
  Users,
  Globe2,
  CheckCircle2,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import respiratoryImg from "@/assets/RespiratoryCare.png";
import entImg from "@/assets/ENT&NasalCare.png";
import antiAllergicImg from "@/assets/Anti-AllergicCare.png";
import antiInfectiveImg from "@/assets/Anti-Infective.png";
import gastroImg from "@/assets/GastroCare.png";
import specialtyImg from "@/assets/dcotpro-6.png";
import { Eyebrow, SectionHeading } from "@/components/site/SectionHeading";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sunpro — Integrated Healthcare Solutions" },
      {
        name: "description",
        content:
          "Sunpro delivers trusted pharmaceutical solutions across Respiratory Care, Allergy Care, ENT, Anti-Infective, Gastro Care and Specialty Medicines.",
      },
    ],
  }),
  component: HomePage,
});

const segments = [
  {
    icon: Wind,
    title: "Respiratory Care",
    desc: "Bronchodilators, inhaled steroids and combination respules for asthma and COPD management.",
    img: respiratoryImg,
  },
  {
    icon: Stethoscope,
    title: "ENT & Nasal Care",
    desc: "Dual-action nasal sprays and saline hygiene solutions for everyday and clinical care.",
    img: entImg,
  },
  {
    icon: Sparkles,
    title: "Anti-Allergic",
    desc: "Modern antihistamine and leukotriene therapies for long-term allergy control.",
    img: antiAllergicImg,
  },
  {
    icon: Pill,
    title: "Anti-Infective",
    desc: "Broad-spectrum antibiotic combinations designed for reliable infection control.",
    img: antiInfectiveImg,
  },
  {
    icon: FlaskConical,
    title: "Gastro Care",
    desc: "Acid-suppression and motility therapies for GERD, reflux and dyspepsia.",
    img: gastroImg,
  },
  {
    icon: ShieldCheck,
    title: "Specialty Medicines",
    desc: "Targeted corticosteroid therapy for inflammatory and immune-mediated conditions.",
    img: specialtyImg,
  },
];

const features = [
  { icon: Award, title: "Quality Products", desc: "Manufactured at WHO-GMP certified facilities, released batch by batch against specification." },
  { icon: ShieldCheck, title: "Audited Manufacturing Partners", desc: "We audit the plants that make our products and hold them to agreed specifications." },
  { icon: Users, title: "Experienced Team", desc: "A field and management team with deep experience in respiratory and allied care." },
  { icon: CheckCircle2, title: "Regulatory Compliance", desc: "Licensed under the Drugs and Cosmetics Act, 1940 and its Rules." },
  { icon: Globe2, title: "Regional Distribution", desc: "A dependable supply chain across Andhra Pradesh and Telangana." },
  { icon: HeartPulse, title: "Customer Satisfaction", desc: "A patient-first approach in every product." },
];

function HomePage() {
  const featured = products;
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    
    let intervalId: ReturnType<typeof setInterval>;
    let isHovering = false;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (!isHovering && el) {
          const maxScrollLeft = el.scrollWidth - el.clientWidth;
          // If we are at the end, scroll back to beginning
          if (el.scrollLeft >= maxScrollLeft - 20) {
            el.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            // Scroll right by approximately one item width
            el.scrollBy({ left: 320, behavior: "smooth" });
          }
        }
      }, 3500); // Auto-scroll every 3.5 seconds
    };

    startAutoScroll();

    const handleMouseEnter = () => (isHovering = true);
    const handleMouseLeave = () => (isHovering = false);

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("touchstart", handleMouseEnter, { passive: true });
    el.addEventListener("touchend", handleMouseLeave);

    return () => {
      clearInterval(intervalId);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("touchstart", handleMouseEnter);
      el.removeEventListener("touchend", handleMouseLeave);
    };
  }, []);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-soft/60 via-background to-background">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-1/3 h-[26rem] w-[26rem] rounded-full bg-primary/5 blur-3xl"
        />

        <div className="container-page relative grid items-center gap-14 pb-20 pt-16 md:pb-28 md:pt-20 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <Eyebrow>Your Health, Our Promise</Eyebrow>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Integrated Healthcare Solutions
              <span className="block text-primary">Across Key Therapeutic Segments</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Sunpro delivers trusted pharmaceutical solutions across Respiratory Care,
              Allergy Care, ENT, Anti-Infective, Gastro Care and Specialty Medicines.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:bg-primary-dark"
              >
                Explore Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Contact Us
              </Link>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { k: "15", v: "Therapeutic Products" },
                { k: "6", v: "Segments Covered" },
                { k: "100%", v: "Quality-Certified Manufacturing Partners" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-2xl font-bold text-foreground md:text-3xl">{s.k}</dt>
                  <dd className="mt-1 text-xs leading-snug text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-6"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-card)]">
              <img
                src={heroImg}
                alt="Healthcare professional in a modern pharmaceutical laboratory"
                width={1600}
                height={1100}
                className="aspect-[5/4] w-full object-cover"
              />
            </div>

            <div className="glass-card absolute -bottom-6 -left-4 hidden w-64 rounded-2xl p-4 shadow-[var(--shadow-card)] sm:block">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">GMP Certified</p>
                  <p className="text-xs text-muted-foreground">Quality you can trust</p>
                </div>
              </div>
            </div>
            <div className="glass-card absolute -right-3 top-8 hidden rounded-2xl p-4 shadow-[var(--shadow-card)] md:block">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <HeartPulse className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Patient-First</p>
                  <p className="text-xs text-muted-foreground">Care at every step</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-pad">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-card)]">
              <img
                src={aboutImg}
                alt="Sunpro research team in the laboratory"
                width={1400}
                height={1200}
                loading="lazy"
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-3xl bg-primary text-primary-foreground sm:flex sm:flex-col sm:items-center sm:justify-center">
              <span className="font-display text-3xl font-bold">15+</span>
              <span className="px-3 text-center text-[0.65rem] font-medium uppercase tracking-widest opacity-90">
                Products & Growing
              </span>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="About Sunpro"
              title="A healthcare company built on trust, science and care."
              description="Sunpro is committed to delivering high-quality pharmaceutical solutions across critical therapeutic areas. From respiratory care to specialty medicines, our portfolio is shaped by rigorous research, regulatory discipline and a patient-first philosophy."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Focused respiratory and allied-care portfolio",
                "WHO-GMP certified manufacturing partners",
                "Distribution across Andhra Pradesh and Telangana",
                "Experienced leadership team",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-foreground/90"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEGMENTS */}
      <section className="section-pad bg-secondary overflow-hidden">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              align="left"
              eyebrow="Therapeutic Segments"
              title="Comprehensive care across critical specialties"
              description="A focused portfolio covering the conditions that matter most — from everyday allergies to chronic respiratory and gastrointestinal care."
            />
            <div className="hidden items-center gap-2 text-sm font-medium text-muted-foreground md:flex">
              <span className="animate-pulse">Scroll to explore</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="container-page relative mt-12">
          <div 
            ref={scrollRef}
            className="hide-scrollbar -mx-6 flex w-[calc(100%+3rem)] snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-12 pt-4 md:mx-0 md:w-full md:px-0"
          >
            {segments.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex w-[18rem] shrink-0 snap-center flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-2 hover:border-primary/40 hover:shadow-[var(--shadow-card)] sm:w-[22rem]"
              >
                <div className="relative h-48 w-full overflow-hidden sm:h-56">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                  <div className="absolute bottom-4 left-6 flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white shadow-[var(--shadow-soft)] backdrop-blur-md transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <s.icon className="h-6 w-6" />
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 pt-5">
                  <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <Link
                    to="/products"
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Explore <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section-pad">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Our Product Portfolio"
              title="Trusted formulations, thoughtfully developed"
              description="Browse a selection of our most prescribed therapies. Every product is built around clinical evidence and patient compliance."
            />
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              View all products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section-pad bg-secondary">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Why Choose Sunpro"
            title="A trusted partner for healthcare professionals"
            description="Our approach combines scientific rigour, regulatory discipline and a relentless focus on quality."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex gap-4 rounded-3xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-[var(--shadow-soft)]"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground px-8 py-14 text-background sm:px-14 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/30 blur-3xl"
            />
            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <Eyebrow>Get in touch</Eyebrow>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                  Partner with Sunpro for trusted, integrated healthcare solutions.
                </h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-background/20 bg-transparent px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-background/10"
                >
                  Browse Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
