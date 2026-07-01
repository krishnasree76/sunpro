// import { createFileRoute } from "@tanstack/react-router";
// import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
// import { Eyebrow } from "@/components/site/SectionHeading";

// export const Route = createFileRoute("/contact")({
//   head: () => ({
//     meta: [
//       { title: "Contact Sunpro Healthcare" },
//       { name: "description", content: "Get in touch with Sunpro. Reach our team for product enquiries, partnerships and support." },
//       { property: "og:title", content: "Contact Sunpro" },
//       { property: "og:description", content: "Get in touch with our team." },
//     ],
//   }),
//   component: ContactPage,
// });

// function ContactPage() {
//   return (
//     <>
//       <section className="bg-gradient-to-b from-primary-soft/60 to-background pb-16 pt-20">
//         <div className="container-page max-w-3xl text-center">
//           <Eyebrow>Contact Us</Eyebrow>
//           <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
//             We'd love to hear from you.
//           </h1>
//           <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
//             Reach out for product enquiries, partnerships or general questions. Our team will respond promptly.
//           </p>
//         </div>
//       </section>

//       <section className="section-pad">
//         <div className="container-page grid gap-10 lg:grid-cols-5">
//           <div className="lg:col-span-2">
//             <div className="space-y-5">
//               {[
//                 { Icon: Phone, label: "Phone", value: "+91 00000 00000" },
//                 { Icon: Mail, label: "Email", value: "info@sunpro.example" },
//                 { Icon: MapPin, label: "Address", value: "Corporate Office Address, City, India" },
//               ].map(({ Icon, label, value }) => (
//                 <div key={label} className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6">
//                   <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary">
//                     <Icon className="h-5 w-5" />
//                   </span>
//                   <div>
//                     <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
//                     <p className="mt-1 text-base font-medium text-foreground">{value}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6 rounded-3xl border border-border bg-card p-6">
//               <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Follow us</p>
//               <div className="mt-3 flex gap-2">
//                 {[Facebook, Instagram, Linkedin].map((Icon, i) => (
//                   <a
//                     key={i}
//                     href="#"
//                     className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
//                   >
//                     <Icon className="h-4 w-4" />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <form
//             onSubmit={(e) => e.preventDefault()}
//             className="rounded-[2rem] border border-border bg-card p-8 shadow-[var(--shadow-soft)] lg:col-span-3"
//           >
//             <h2 className="text-2xl font-bold text-foreground">Send us a message</h2>
//             <p className="mt-1.5 text-sm text-muted-foreground">We typically respond within one business day.</p>

//             <div className="mt-8 grid gap-5 sm:grid-cols-2">
//               <Field label="Full Name" placeholder="Your name" />
//               <Field label="Email" type="email" placeholder="you@email.com" />
//               <Field label="Phone" placeholder="+91 00000 00000" />
//               <Field label="Subject" placeholder="How can we help?" />
//             </div>
//             <div className="mt-5">
//               <label className="block text-sm font-medium text-foreground">Message</label>
//               <textarea
//                 rows={5}
//                 placeholder="Write your message…"
//                 className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
//               />
//             </div>
//             <button
//               type="submit"
//               className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
//             >
//               Send Message <Send className="h-4 w-4" />
//             </button>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// }

// function Field({
//   label,
//   type = "text",
//   placeholder,
// }: {
//   label: string;
//   type?: string;
//   placeholder?: string;
// }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium text-foreground">{label}</label>
//       <input
//         type={type}
//         placeholder={placeholder}
//         className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
//       />
//     </div>
//   );
// }
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Eyebrow } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sunpro Healthcare" },
      { name: "description", content: "Get in touch with Sunpro. Reach our team for product enquiries, partnerships and support." },
      { property: "og:title", content: "Contact Sunpro" },
      { property: "og:description", content: "Get in touch with our team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Constructing a beautifully structured WhatsApp message string
    const text = `Hello Sunpro Healthcare,\n\n` +
                 `I have a new enquiry from your website:\n\n` +
                 `*Name:* ${name || "N/A"}\n` +
                 `*Email:* ${email || "N/A"}\n` +
                 `*Phone:* ${phone || "N/A"}\n` +
                 `*Subject:* ${subject || "N/A"}\n\n` +
                 `*Message:* ${message || "N/A"}`;

    const whatsappNumber = "917416705147";
    const encodedText = encodeURIComponent(text);
    
    // Redirects seamlessly to WhatsApp web or native application
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");
  };

  return (
    <>
      <section className="bg-gradient-to-b from-primary-soft/60 to-background pb-16 pt-20">
        <div className="container-page max-w-3xl text-center">
          <Eyebrow>Contact Us</Eyebrow>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
            We'd love to hear from you.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Reach out for product enquiries, partnerships or general questions. Our team will respond promptly.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-5">
          {/* Left Block: Authentic Contact Cards */}
          <div className="lg:col-span-2">
            <div className="space-y-5">
              {[
                { 
                  Icon: Phone, 
                  label: "Phone", 
                  value: "+91 7416705147", 
                  href: "tel:+917416705147" 
                },
                { 
                  Icon: Mail, 
                  label: "Email", 
                  value: "info@sunprohealthcare.in", 
                  href: "mailto:info@sunprohealthcare.in" 
                },
                { 
                  Icon: MapPin, 
                  label: "Address", 
                  value: "India", 
                  href: undefined 
                },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
                    {href ? (
                      <a href={href} className="mt-1 block text-base font-medium text-foreground hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-base font-medium text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Active WhatsApp Messaging Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-border bg-card p-8 shadow-[var(--shadow-soft)] lg:col-span-3"
          >
            <h2 className="text-2xl font-bold text-foreground">Send us a message</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">We will instantly receive your query via WhatsApp.</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" name="name" placeholder="Your name" required />
              <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
              <Field label="Phone" name="phone" placeholder="Your contact number" required />
              <Field label="Subject" name="subject" placeholder="How can we help?" required />
            </div>
            <div className="mt-5">
              <label className="block text-sm font-medium text-foreground">Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Write your message…"
                required
                className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              Send via WhatsApp <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
      />
    </div>
  );
}