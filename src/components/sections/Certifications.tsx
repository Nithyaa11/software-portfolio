import { certifications } from "@/data/certifications";
import { Award } from "lucide-react";

function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-7xl px-6 py-16 md:py-20"
    >
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold">
          Certifications
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Certifications that reflect my continuous learning in cloud,
          software development, and emerging technologies.
        </p>
      </div>

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
    </section>
  );
}

export default Certifications;