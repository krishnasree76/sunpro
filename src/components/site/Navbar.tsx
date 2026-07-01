// import { Link } from "@tanstack/react-router";
// import { useEffect, useState } from "react";
// import { Menu, X, ArrowRight } from "lucide-react";
// import { Logo } from "./Logo";
// import logoImg from "../assets/logo.png";
// const links = [
//   { to: "/", label: "Home" },
//   { to: "/about", label: "About" },
//   { to: "/products", label: "Products" },
//   { to: "/services", label: "Services" },
//   { to: "/contact", label: "Contact" },
// ] as const;

// export function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 8);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={`sticky top-0 z-50 w-full transition-all duration-300 ${
//         scrolled
//           ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
//           : "bg-background/60 backdrop-blur-md"
//       }`}
//     >
//       <div className="container-page flex h-[72px] items-center justify-between">
//         <Logo />

//         <nav className="hidden items-center gap-1 lg:flex">
//           {links.map((l) => (
//             <Link
//               key={l.to}
//               to={l.to}
//               activeOptions={{ exact: l.to === "/" }}
//               className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary-soft hover:text-foreground"
//               activeProps={{ className: "!text-primary !bg-primary-soft" }}
//             >
//               {l.label}
//             </Link>
//           ))}
//         </nav>

//         <div className="flex items-center gap-2">
//           <Link
//             to="/contact"
//             className="group hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-10px_oklch(0.668_0.198_38_/_0.6)] transition-all hover:bg-primary-dark hover:shadow-[0_12px_30px_-10px_oklch(0.668_0.198_38_/_0.7)] sm:inline-flex"
//           >
//             Contact Us
//             <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
//           </Link>
//           <button
//             onClick={() => setOpen((o) => !o)}
//             className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background lg:hidden"
//             aria-label="Toggle menu"
//           >
//             {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//           </button>
//         </div>
//       </div>

//       {open && (
//         <div className="border-t border-border bg-background lg:hidden">
//           <div className="container-page flex flex-col gap-1 py-4">
//             {links.map((l) => (
//               <Link
//                 key={l.to}
//                 to={l.to}
//                 onClick={() => setOpen(false)}
//                 className="rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-primary-soft"
//                 activeProps={{ className: "!text-primary !bg-primary-soft" }}
//               >
//                 {l.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logoImg from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
          : "bg-background/60 backdrop-blur-md"
      }`}
    >
      <div className="container-page flex h-[72px] items-center justify-between">
        {/* Clean, visual logo directly embedded here */}
        <Link to="/" className="flex items-center focus-visible:outline-none">
          <img 
            src={logoImg} 
            alt="Sunpro Healthcare Logo" 
            className="h-10 w-auto object-contain sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary-soft hover:text-foreground"
              activeProps={{ className: "!text-primary !bg-primary-soft" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="group hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-10px_oklch(0.668_0.198_38_/_0.6)] transition-all hover:bg-primary-dark hover:shadow-[0_12px_30px_-10px_oklch(0.668_0.198_38_/_0.7)] sm:inline-flex"
          >
            Contact Us
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-primary-soft"
                activeProps={{ className: "!text-primary !bg-primary-soft" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}