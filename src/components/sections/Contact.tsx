import Section from "@/components/common/Section";
import { contact } from "@/data/contact";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}`;

  return (
    <Section
      id="contact"
      title="Contact"
      description="I'm always open to discussing opportunities, collaborations, or simply connecting with fellow developers."
    >
      <div className="mx-auto max-w-3xl rounded-3xl border border-border/80 bg-card/75 p-6 shadow-xl shadow-black/5 md:p-9">
        <div className="space-y-5">
          <a
            href={emailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl bg-muted/50 p-4 transition-colors hover:bg-primary/10"
            aria-label={`Email ${contact.email}`}
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><Mail className="h-5 w-5" /></span>
            <span className="break-all font-medium transition-colors hover:text-primary">
              {contact.email}
            </span>
          </a>

          <div className="flex items-center gap-4 rounded-2xl bg-muted/50 p-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><Phone className="h-5 w-5" /></span>
            <span>{contact.phone}</span>
          </div>

          <div className="flex items-center gap-4 rounded-2xl bg-muted/50 p-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><MapPin className="h-5 w-5" /></span>
            <span>{contact.location}</span>
          </div>

          <div className="pt-3">
            <a
              href={emailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 sm:w-auto"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
