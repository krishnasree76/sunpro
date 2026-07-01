// import { Link } from "@tanstack/react-router";
// import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
// import { Logo } from "./Logo";

// export function Footer() {
//   return (
//     <footer className="border-t border-border bg-secondary">
//       <div className="container-page grid gap-12 py-16 md:grid-cols-12">
//         <div className="md:col-span-4">
//           <Logo />
//           <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
//             Sunpro delivers trusted pharmaceutical solutions across Respiratory Care,
//             Allergy Care, ENT, Anti-Infective, Gastro Care and Specialty Medicines.
//           </p>
//           <div className="mt-6 flex gap-2">
//             {[
//               { Icon: Facebook, href: "#", label: "Facebook" },
//               { Icon: Instagram, href: "#", label: "Instagram" },
//               { Icon: Linkedin, href: "#", label: "LinkedIn" },
//             ].map(({ Icon, href, label }) => (
//               <a
//                 key={label}
//                 href={href}
//                 aria-label={label}
//                 className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
//               >
//                 <Icon className="h-4 w-4" />
//               </a>
//             ))}
//           </div>
//         </div>

//         <div className="md:col-span-2">
//           <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
//           <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
//             <li><Link to="/" className="hover:text-primary">Home</Link></li>
//             <li><Link to="/about" className="hover:text-primary">About</Link></li>
//             <li><Link to="/products" className="hover:text-primary">Products</Link></li>
//             <li><Link to="/services" className="hover:text-primary">Services</Link></li>
//             <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
//           </ul>
//         </div>

//         <div className="md:col-span-3">
//           <h4 className="text-sm font-semibold text-foreground">Contact</h4>
//           <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
//             <li className="flex items-start gap-2.5">
//               <Phone className="mt-0.5 h-4 w-4 text-primary" /> +91 00000 00000
//             </li>
//             <li className="flex items-start gap-2.5">
//               <Mail className="mt-0.5 h-4 w-4 text-primary" /> info@sunpro.example
//             </li>
//             <li className="flex items-start gap-2.5">
//               <MapPin className="mt-0.5 h-4 w-4 text-primary" /> Corporate Office Address, City, India
//             </li>
//           </ul>
//         </div>

//         <div className="md:col-span-3">
//           <h4 className="text-sm font-semibold text-foreground">Business Hours</h4>
//           <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
//             <li className="flex justify-between"><span>Monday – Friday</span><span>9:00 – 18:00</span></li>
//             <li className="flex justify-between"><span>Saturday</span><span>10:00 – 14:00</span></li>
//             <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
//           </ul>
//         </div>
//       </div>

//       <div className="border-t border-border">
//         <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
//           <p>© {new Date().getFullYear()} Sunpro Healthcare. All rights reserved.</p>
//           <p>Your Health, Our Promise.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }
import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logoImg from "../../assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12">
        {/* Left Column: Logo & Description */}
        <div className="md:col-span-5">
          <Link to="/" className="inline-block focus-visible:outline-none">
            <img 
              src={logoImg} 
              alt="Sunpro Healthcare Logo" 
              className="h-10 w-auto object-contain sm:h-12"
            />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Sunpro delivers trusted pharmaceutical solutions across Respiratory Care,
            Allergy Care, ENT, Anti-Infective, Gastro Care and Specialty Medicines.
          </p>
        </div>

        {/* Middle Column: Quick Links */}
        <div className="md:col-span-3 md:col-start-7">
          <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/products" className="hover:text-primary">Products</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        {/* Right Column: Contact Details */}
        <div className="md:col-span-3">
          <h4 className="text-sm font-semibold text-foreground">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 text-primary" /> 
              <a href="tel:+917416705147" className="hover:text-primary transition-colors">+91 7416705147</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 text-primary" /> 
              <a href="mailto:info@sunprohealthcare.in" className="hover:text-primary transition-colors">info@sunprohealthcare.in</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" /> India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Sunpro Healthcare. All rights reserved.</p>
          <p>Your Health, Our Promise.</p>
        </div>
      </div>
    </footer>
  );
}