import { leadership } from "@/data/leadership";
import { Users } from "lucide-react";

function Leadership() {
  return (
    <section
      id="leadership"
      className="mx-auto max-w-7xl px-6 py-16 md:py-20"
    >
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold">
          Leadership & Activities
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Leadership roles and volunteer experiences that strengthened my
          teamwork, communication, and organizational skills.
        </p>
      </div>

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
    </section>
  );
}

export default Leadership;