import Section from "@/components/common/Section";
import { leadership } from "@/data/leadership";
import { Users } from "lucide-react";

function Leadership() {
  return (
    <Section
      id="leadership"
      title="Leadership & Activities"
      description="Leadership roles and volunteer experiences that strengthened my teamwork, communication, and organizational skills."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {leadership.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border p-6 transition-all hover:shadow-lg"
          >
            <Users className="mb-4 h-8 w-8 text-primary" />

            <h3 className="text-xl font-semibold">
              {item.role}
            </h3>

            <p className="mt-1 font-medium text-muted-foreground">
              {item.organization}
            </p>

            <p className="mt-4 text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Leadership;