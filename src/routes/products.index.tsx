import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Eyebrow, SectionHeading } from "@/components/site/SectionHeading";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, products } from "@/lib/products";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — Sunpro Healthcare" },
      { name: "description", content: "Explore Sunpro's pharmaceutical portfolio across Respiratory, ENT, Allergy, Anti-Infective, Gastro and Specialty care." },
      { property: "og:title", content: "Sunpro Products" },
      { property: "og:description", content: "Integrated healthcare solutions across key therapeutic segments." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);
  const filters = ["All", ...categories];

  return (
    <>
      <section className="bg-gradient-to-b from-primary-soft/60 to-background pb-12 pt-20">
        <div className="container-page max-w-3xl text-center">
          <Eyebrow>Our Product Portfolio</Eyebrow>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
            Comprehensive Therapeutic Solutions
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Across Respiratory, Allergy, Infection, ENT &amp; Gastro Care.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <div className="sticky top-[72px] z-30 -mx-5 mb-10 border-y border-border bg-background/90 px-5 py-4 backdrop-blur-xl">
            <div className="flex gap-2 overflow-x-auto">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    active === f
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {categories
            .filter((c) => active === "All" || c === active)
            .map((cat) => {
              const items = filtered.filter((p) => p.category === cat);
              if (items.length === 0) return null;
              return (
                <div key={cat} className="mb-16">
                  <div className="mb-8 flex items-end justify-between">
                    <SectionHeading title={cat} />
                    <span className="text-sm text-muted-foreground">{items.length} products</span>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map((p) => (
                      <ProductCard key={p.slug} product={p} />
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
}
