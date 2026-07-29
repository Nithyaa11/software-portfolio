import { contact } from "@/data/contact";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-16 md:py-20"
    >
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold">
          Contact
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          I'm always open to discussing opportunities, collaborations,
          or simply connecting with fellow developers.
        </p>
      </div>

      <div className="mx-auto max-w-3xl rounded-2xl border p-8">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Mail className="h-5 w-5 text-primary" />
            <a
              href={`mailto:${contact.email}`}
              className="hover:underline"
            >
              {contact.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="h-5 w-5 text-primary" />
            <span>{contact.phone}</span>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="h-5 w-5 text-primary" />
            <span>{contact.location}</span>
          </div>

          <div className="pt-4">
            <a
              href={`mailto:${contact.email}`}
            >
              <Button size="lg">
                Get In Touch
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;