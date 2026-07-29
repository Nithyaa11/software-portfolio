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
      <div className="grid gap-5 md:grid-cols-2">
        {leadership.map((item) => (
          <div
            key={item.id}
            className="group rounded-3xl border border-border/80 bg-card/75 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-black/5 md:p-7"
          >
            <div className="mb-5 grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110"><Users className="h-5 w-5" /></div>

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
