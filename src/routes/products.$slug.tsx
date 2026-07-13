import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, MessageCircle, Package, ShieldAlert, Sparkles, Stethoscope } from "lucide-react";
import productImg from "@/assets/product-placeholder.jpg";
import { getProduct, products, whatsappLink } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Sunpro` },
          { name: "description", content: loaderData.product.overview },
          { property: "og:title", content: `${loaderData.product.name} — Sunpro` },
          { property: "og:description", content: loaderData.product.overview },
        ]
      : [{ title: "Product — Sunpro" }],
  }),
  notFoundComponent: () => (
    <div className="container-page py-32 text-center">
      <h1 className="text-3xl font-bold">Product not found</h1>
      <Link to="/products" className="mt-6 inline-block text-primary">← Back to products</Link>
    </div>
  ),
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  return (
    <>
      <section className="bg-gradient-to-b from-primary-soft/40 to-background pb-20 pt-12">
        <div className="container-page">
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> All Products
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-card)]">
                <img
                  src={product.img || productImg}
                  alt={product.name}
                  width={1024}
                  height={1024}
                  className="aspect-square w-full object-contain p-12"
                />
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  {product.category}
                </span>
                {product.prescription && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground">
                    <ShieldAlert className="h-3.5 w-3.5 text-primary" />
                    Prescription Only
                  </span>
                )}
              </div>

              {product.prescription && (
                <div className="mt-6 rounded-xl border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive">
                  <strong className="block font-semibold">Important Notice:</strong>
                  This information is intended for registered medical practitioners and healthcare professionals only. The products listed are prescription medicines and must not be used except under medical supervision.
                </div>
              )}

              <h1 className="mt-5 text-4xl font-bold leading-tight text-foreground md:text-5xl">
                {product.name}
              </h1>
              <p className="mt-3 text-base text-muted-foreground md:text-lg">{product.composition}</p>

              <p className="mt-8 text-base leading-relaxed text-foreground">{product.overview}</p>

              <a
                href={whatsappLink(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-colors hover:bg-primary-dark"
              >
                <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
              </a>
              <p className="mt-3 text-xs text-muted-foreground">
                Enquiries are routed directly to our team via WhatsApp. Sunpro does not sell medicines online.
              </p>

              {product.pack && (
                <div className="mt-10 rounded-2xl border border-border bg-secondary p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Package className="h-4 w-4 text-primary" /> Pack Information
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground">{product.pack}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <InfoCard icon={Stethoscope} title="Indications" items={product.indications} />
          <InfoCard icon={Sparkles} title="Key Benefits" items={product.benefits} />
        </div>

        {product.details && (
          <div className="container-page mt-6">
            <div className="rounded-3xl border border-border bg-card p-7">
              <h3 className="text-lg font-semibold text-foreground">Product Details</h3>
              <dl className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {product.details.map((d: { label: string; value: string }) => (
                  <div key={d.label} className="flex justify-between border-b border-border pb-3">
                    <dt className="text-sm text-muted-foreground">{d.label}</dt>
                    <dd className="text-sm font-semibold text-foreground">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        )}
      </section>

      {related.length > 0 && (
        <section className="section-pad">
          <div className="container-page">
            <div className="mb-10 flex items-end justify-between">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">Related Products</h2>
              <Link to="/products" className="text-sm font-semibold text-primary">View all</Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function InfoCard({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof Stethoscope;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-border bg-card p-7">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-soft text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <ul className="mt-5 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2.5 text-sm text-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
