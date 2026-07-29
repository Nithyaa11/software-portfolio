import Section from "@/components/common/Section";
import { certifications } from "@/data/certifications";
import { Award } from "lucide-react";

function Certifications() {
  return (
    <Section
      id="certifications"
      title="Certifications"
      description="Certifications that reflect my continuous learning in cloud, software development, and emerging technologies."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="rounded-2xl border p-6 transition-all hover:shadow-lg"
          >
            <Award className="mb-4 h-8 w-8 text-primary" />

            <h3 className="font-semibold">
              {cert.title}
            </h3>

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