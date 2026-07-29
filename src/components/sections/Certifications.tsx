import Section from "@/components/common/Section";
import { certifications } from "@/data/certifications";
import { Award, ExternalLink } from "lucide-react";

function Certifications() {
  return (
    <Section
      id="certifications"
      title="Certifications"
      description="Certifications that reflect my continuous learning in cloud, software development, and emerging technologies."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="group min-h-40 rounded-3xl border border-border/80 bg-card/75 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-black/5"
          >
            <div className="mb-5 grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110"><Award className="h-5 w-5" /></div>

            {cert.credentialUrl ? (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 font-semibold transition-colors hover:text-primary"
              >
                <span className="underline-offset-4 group-hover/link:underline">
                  {cert.title}
                </span>
                <ExternalLink className="size-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            ) : (
              <h3 className="font-semibold">{cert.title}</h3>
            )}

            <p className="mt-2 text-sm text-muted-foreground">
              {cert.issuer}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Certifications;
